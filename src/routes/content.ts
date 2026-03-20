import { Hono } from 'hono'
import type { Bindings } from '../index'

const app = new Hono<{ Bindings: Bindings }>()

// Get all content
app.get('/', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      `SELECT content.*, brands.name as brand_name, brands.niche as brand_niche 
       FROM content 
       LEFT JOIN brands ON content.brand_id = brands.id 
       ORDER BY content.created_at DESC`
    ).all()
    return c.json({ success: true, data: results })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Get content by ID
app.get('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const result = await c.env.DB.prepare(
      `SELECT content.*, brands.name as brand_name, brands.niche as brand_niche 
       FROM content 
       LEFT JOIN brands ON content.brand_id = brands.id 
       WHERE content.id = ?`
    ).bind(id).first()
    if (!result) return c.json({ success: false, error: 'Content not found' }, 404)
    return c.json({ success: true, data: result })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Get content by brand
app.get('/brand/:brandId', async (c) => {
  try {
    const brandId = c.req.param('brandId')
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM content WHERE brand_id = ? ORDER BY created_at DESC'
    ).bind(brandId).all()
    return c.json({ success: true, data: results })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Save generated content
app.post('/', async (c) => {
  try {
    const body = await c.req.json()
    const { brand_id, style_mode, product_description, hook, script, shot_list, caption, hashtags, reel_concept, images } = body
    
    const result = await c.env.DB.prepare(
      `INSERT INTO content (brand_id, style_mode, product_description, hook, script, shot_list, caption, hashtags, reel_concept, images) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      brand_id || null, style_mode || 'cinematic', product_description || null,
      hook || null, script || null, shot_list || null,
      caption || null, hashtags || null, reel_concept || null,
      images || null
    ).run()
    
    return c.json({ success: true, data: { id: result.meta.last_row_id, ...body } })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Delete content
app.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    await c.env.DB.prepare('DELETE FROM content WHERE id = ?').bind(id).run()
    return c.json({ success: true })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

export { app as contentRoutes }
