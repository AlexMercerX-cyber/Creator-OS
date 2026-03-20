import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { brandRoutes } from './routes/brands'
import { contentRoutes } from './routes/content'
import { leadsRoutes } from './routes/leads'
import { aiRoutes } from './routes/ai'
import { pageRoutes } from './routes/pages'

export type Bindings = {
  DB: D1Database
  OPENAI_API_KEY: string
  OPENAI_BASE_URL: string
}

const app = new Hono<{ Bindings: Bindings }>()

// CORS
app.use('/api/*', cors())

// API Routes
app.route('/api/brands', brandRoutes)
app.route('/api/content', contentRoutes)
app.route('/api/leads', leadsRoutes)
app.route('/api/ai', aiRoutes)

// Page Routes (serve HTML)
app.route('/', pageRoutes)

export default app
