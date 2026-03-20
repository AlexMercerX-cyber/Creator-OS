import { Hono } from 'hono'
import type { Bindings } from '../index'

const app = new Hono<{ Bindings: Bindings }>()

// Get all brands
app.get('/', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM brands ORDER BY score DESC'
    ).all()
    return c.json({ success: true, data: results })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Get brand by ID
app.get('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const result = await c.env.DB.prepare(
      'SELECT * FROM brands WHERE id = ?'
    ).bind(id).first()
    if (!result) return c.json({ success: false, error: 'Brand not found' }, 404)
    return c.json({ success: true, data: result })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Create brand
app.post('/', async (c) => {
  try {
    const body = await c.req.json()
    const { name, handle, website, niche, score, analysis, content_quality, posting_frequency, engagement, visual_consistency, weaknesses, pitch_reason, content_gaps } = body
    
    const result = await c.env.DB.prepare(
      `INSERT INTO brands (name, handle, website, niche, score, analysis, content_quality, posting_frequency, engagement, visual_consistency, weaknesses, pitch_reason, content_gaps) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(name, handle || null, website || null, niche || null, score || 0, analysis || null, content_quality || null, posting_frequency || null, engagement || null, visual_consistency || null, weaknesses || null, pitch_reason || null, content_gaps || null).run()
    
    return c.json({ success: true, data: { id: result.meta.last_row_id, ...body } })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Delete brand
app.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    await c.env.DB.prepare('DELETE FROM brands WHERE id = ?').bind(id).run()
    return c.json({ success: true })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Search brands
app.get('/search/:query', async (c) => {
  try {
    const query = `%${c.req.param('query')}%`
    const { results } = await c.env.DB.prepare(
      'SELECT * FROM brands WHERE name LIKE ? OR niche LIKE ? OR handle LIKE ? ORDER BY score DESC'
    ).bind(query, query, query).all()
    return c.json({ success: true, data: results })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

export { app as brandRoutes }
