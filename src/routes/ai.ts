import { Hono } from 'hono'
import type { Bindings } from '../index'

const app = new Hono<{ Bindings: Bindings }>()

// Helper to call OpenAI
async function callAI(apiKey: string, baseUrl: string, systemPrompt: string, userPrompt: string): Promise<string> {
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-5',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.8,
      max_tokens: 3000,
    }),
  })

  if (!response.ok) {
    const errText = await response.text()
    throw new Error(`AI API error: ${response.status} - ${errText}`)
  }

  const data = await response.json() as any
  return data.choices[0]?.message?.content || ''
}

// Brand Analysis Endpoint
app.post('/analyze-brand', async (c) => {
  try {
    const body = await c.req.json()
    const { input, type } = body // type: 'handle' | 'website' | 'discover'

    const systemPrompt = `You are an expert social media analyst and brand strategist for UGC creators. 
You analyze brands to find collaboration opportunities. Always respond in valid JSON format only, no markdown.`

    let userPrompt = ''
    
    if (type === 'discover') {
      userPrompt = `Suggest 3 brands that would be great for UGC creator collaborations right now. For each brand, provide a realistic analysis.

Return ONLY valid JSON in this exact format:
{
  "brands": [
    {
      "name": "Brand Name",
      "handle": "@handle",
      "website": "website.com",
      "niche": "Industry/Niche",
      "score": 85,
      "analysis": "Overall analysis summary",
      "content_quality": "Assessment of their current content",
      "posting_frequency": "How often they post",
      "engagement": "Engagement rate assessment",
      "visual_consistency": "Visual brand consistency",
      "weaknesses": "Key weaknesses in their content strategy",
      "pitch_reason": "Why a creator should pitch this brand",
      "content_gaps": "Specific content gaps a creator could fill"
    }
  ]
}`
    } else {
      userPrompt = `Analyze this brand for UGC collaboration potential:
${type === 'handle' ? 'Instagram Handle' : 'Website'}: ${input}

Based on what you know or can infer about this brand, provide a detailed analysis.

Return ONLY valid JSON in this exact format:
{
  "brands": [
    {
      "name": "Brand Name",
      "handle": "${type === 'handle' ? input : '@estimated_handle'}",
      "website": "${type === 'website' ? input : 'estimated-website.com'}",
      "niche": "Industry/Niche",
      "score": 75,
      "analysis": "Overall analysis of the brand's social media presence and content strategy",
      "content_quality": "Detailed assessment of their current content quality",
      "posting_frequency": "Estimated posting frequency with specifics",
      "engagement": "Estimated engagement metrics and rate",
      "visual_consistency": "Assessment of their visual brand consistency across posts",
      "weaknesses": "Specific weaknesses: list each one clearly",
      "pitch_reason": "Compelling reason why a UGC creator should pitch this brand now",
      "content_gaps": "Specific types of content they're missing that a creator could provide"
    }
  ]
}`
    }

    const aiResponse = await callAI(
      c.env.OPENAI_API_KEY,
      c.env.OPENAI_BASE_URL,
      systemPrompt,
      userPrompt
    )

    // Parse JSON from response
    let parsed
    try {
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/)
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : aiResponse)
    } catch {
      return c.json({ success: false, error: 'Failed to parse AI response' }, 500)
    }

    // Save brands to DB
    const savedBrands = []
    for (const brand of parsed.brands) {
      try {
        const result = await c.env.DB.prepare(
          `INSERT INTO brands (name, handle, website, niche, score, analysis, content_quality, posting_frequency, engagement, visual_consistency, weaknesses, pitch_reason, content_gaps) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          brand.name, brand.handle, brand.website, brand.niche,
          brand.score, brand.analysis, brand.content_quality,
          brand.posting_frequency, brand.engagement, brand.visual_consistency,
          brand.weaknesses, brand.pitch_reason, brand.content_gaps
        ).run()
        savedBrands.push({ id: result.meta.last_row_id, ...brand })
      } catch (dbErr: any) {
        savedBrands.push({ ...brand, id: null, dbError: dbErr.message })
      }
    }

    return c.json({ success: true, data: savedBrands })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// UGC Content Generation Endpoint
app.post('/generate-content', async (c) => {
  try {
    const body = await c.req.json()
    const { product_description, style_mode, brand_context, image_descriptions } = body

    const styleGuides: Record<string, string> = {
      cinematic: 'Cinematic style: dramatic lighting, slow-motion feel, deep color grading, widescreen framing, emotional storytelling like a movie trailer',
      dark: 'Dark/Crime style: noir aesthetic, shadowy lighting, suspenseful pacing, mysterious angles, moody color palette with deep blacks and muted tones',
      luxury: 'Luxury style: golden hour lighting, sleek movements, premium feel, slow reveals, rich warm tones, aspirational lifestyle, whispered narration feel',
      minimal: 'Minimal style: clean white space, soft natural lighting, gentle movements, muted earth tones, ASMR-like quality, simple elegant compositions',
      viral: 'Viral/Reels style: fast cuts, trending audio energy, POV shots, relatable humor, pattern interrupts, text overlays, high energy transitions'
    }

    const selectedStyle = styleGuides[style_mode] || styleGuides.cinematic

    const systemPrompt = `You are an elite UGC content director and scriptwriter who creates viral, cinematic content for brands. 
You think in scenes, shots, and hooks. Your scripts stop the scroll.
Always respond in valid JSON format only, no markdown.`

    const userPrompt = `Create a complete UGC content package for this product/brand:

PRODUCT: ${product_description}
${brand_context ? `BRAND CONTEXT: ${brand_context}` : ''}
${image_descriptions ? `PRODUCT IMAGES DESCRIBED: ${image_descriptions}` : ''}
STYLE: ${selectedStyle}

Generate a complete UGC reel content package. Return ONLY valid JSON:
{
  "reel_concept": {
    "theme": "The overall theme (e.g., luxury unboxing, morning routine, dark aesthetic reveal)",
    "mood": "The emotional tone",
    "duration": "Estimated reel duration (15s/30s/60s)",
    "target_audience": "Who this reel is for"
  },
  "hook": {
    "text": "The first 3-second hook text/voiceover (must stop the scroll)",
    "visual": "What the viewer sees in the first 3 seconds",
    "why_it_works": "Why this hook is effective"
  },
  "script": {
    "full_script": "Complete voiceover/narration script",
    "scenes": [
      {
        "scene_number": 1,
        "duration": "3s",
        "action": "What happens in this scene",
        "voiceover": "What is said",
        "visual_notes": "Key visual elements"
      }
    ]
  },
  "shot_list": [
    {
      "shot_number": 1,
      "camera_angle": "Close-up / Wide / POV / etc.",
      "movement": "Static / Pan / Tilt / Track / etc.",
      "lighting": "Lighting setup description",
      "transition": "Cut / Fade / Swipe / etc.",
      "props_needed": "Any props for this shot"
    }
  ],
  "caption": {
    "text": "High-converting Instagram caption (include CTA)",
    "tone": "Caption tone description"
  },
  "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5", "hashtag6", "hashtag7", "hashtag8", "hashtag9", "hashtag10"]
}`

    const aiResponse = await callAI(
      c.env.OPENAI_API_KEY,
      c.env.OPENAI_BASE_URL,
      systemPrompt,
      userPrompt
    )

    let parsed
    try {
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/)
      parsed = JSON.parse(jsonMatch ? jsonMatch[0] : aiResponse)
    } catch {
      return c.json({ success: false, error: 'Failed to parse AI response', raw: aiResponse }, 500)
    }

    // Save content to DB
    try {
      const result = await c.env.DB.prepare(
        `INSERT INTO content (brand_id, style_mode, product_description, hook, script, shot_list, caption, hashtags, reel_concept, images) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(
        body.brand_id || null,
        style_mode,
        product_description,
        JSON.stringify(parsed.hook),
        JSON.stringify(parsed.script),
        JSON.stringify(parsed.shot_list),
        JSON.stringify(parsed.caption),
        JSON.stringify(parsed.hashtags),
        JSON.stringify(parsed.reel_concept),
        image_descriptions || null
      ).run()
      parsed.content_id = result.meta.last_row_id
    } catch (dbErr: any) {
      parsed.db_error = dbErr.message
    }

    return c.json({ success: true, data: parsed })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

export { app as aiRoutes }
