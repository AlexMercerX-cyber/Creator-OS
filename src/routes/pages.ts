import { Hono } from 'hono'
import type { Bindings } from '../index'
import { getAppShell } from '../ui/shell'

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => c.html(getAppShell()))
app.get('/brand-hunter', (c) => c.html(getAppShell()))
app.get('/content-generator', (c) => c.html(getAppShell()))
app.get('/saved-leads', (c) => c.html(getAppShell()))
app.get('/history', (c) => c.html(getAppShell()))

export { app as pageRoutes }
