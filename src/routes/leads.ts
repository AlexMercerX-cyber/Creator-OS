import { Hono } from 'hono'
import type { Bindings } from '../index'

const app = new Hono<{ Bindings: Bindings }>()

// Get all leads with brand info
app.get('/', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(
      `SELECT leads.*, brands.name, brands.handle, brands.website, brands.niche, brands.score, brands.analysis, brands.pitch_reason, brands.weaknesses, brands.content_gaps
       FROM leads 
       JOIN brands ON leads.brand_id = brands.id 
       ORDER BY leads.saved_at DESC`
    ).all()
    return c.json({ success: true, data: results })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Save brand as lead
app.post('/', async (c) => {
  try {
    const body = await c.req.json()
    const { brand_id, notes, status } = body
    
    // Check if already saved
    const existing = await c.env.DB.prepare(
      'SELECT id FROM leads WHERE brand_id = ?'
    ).bind(brand_id).first()
    
    if (existing) {
      return c.json({ success: false, error: 'Brand already saved as lead' }, 409)
    }
    
    const result = await c.env.DB.prepare(
      'INSERT INTO leads (brand_id, notes, status) VALUES (?, ?, ?)'
    ).bind(brand_id, notes || null, status || 'new').run()
    
    return c.json({ success: true, data: { id: result.meta.last_row_id, brand_id } })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Update lead status
app.put('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    const body = await c.req.json()
    const { notes, status } = body
    
    await c.env.DB.prepare(
      'UPDATE leads SET notes = COALESCE(?, notes), status = COALESCE(?, status) WHERE id = ?'
    ).bind(notes || null, status || null, id).run()
    
    return c.json({ success: true })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Delete lead
app.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id')
    await c.env.DB.prepare('DELETE FROM leads WHERE id = ?').bind(id).run()
    return c.json({ success: true })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

// Get lead count
app.get('/count', async (c) => {
  try {
    const result = await c.env.DB.prepare('SELECT COUNT(*) as count FROM leads').first()
    return c.json({ success: true, data: { count: result?.count || 0 } })
  } catch (e: any) {
    return c.json({ success: false, error: e.message }, 500)
  }
})

export { app as leadsRoutes }
