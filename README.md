# AIONOVA CREATOR OS

A premium AI-powered platform that helps content creators discover brands for collaboration and generate cinematic UGC (User-Generated Content) using artificial intelligence.

## Project Overview
- **Name**: AIONOVA Creator OS
- **Goal**: Help creators find brands that need content and generate complete UGC content packages
- **Tech Stack**: Hono + TypeScript + Cloudflare Pages + D1 Database + OpenAI API

## Core Modules

### Module 1: Brand Hunter
Discover brands that need content and are likely to collaborate.

**Features:**
- **Brand Input System**: Paste Instagram handle or website URL
- **AI Discover Mode**: Let AI suggest brands for collaboration
- **AI Brand Analysis**: Analyzes content quality, posting frequency, engagement, visual consistency
- **Opportunity Score (0-100)**: AI-generated score indicating collaboration potential
- **Content Gap Detection**: Identifies lack of reels, poor storytelling, weak hooks
- **Brand Card UI**: Premium card-based layout with score rings, niche tags, and action buttons
- **Save Leads**: Save promising brands to your leads pipeline

### Module 2: UGC Content Generator
Generate cinematic UGC content scripts, hooks, and shot lists.

**Features:**
- **Product Description Input**: Describe the product/brand for content generation
- **Image Description Support**: Describe product images for visual context
- **5 Style Modes**: Cinematic, Dark/Crime, Luxury, Minimal, Viral/Reels
- **AI Content Package Generation**:
  - Reel Concept (theme, mood, duration, target audience)
  - Hook (first 3 seconds - text, visual, why it works)
  - Full Script with scene-by-scene breakdown
  - Shot List (camera angles, lighting, transitions, props)
  - Instagram Caption with CTA
  - 10 Optimized Hashtags
- **Copy-to-clipboard** for each section
- **Regenerate** option

### Integration Flow
- Select a brand from Brand Hunter
- Click "Generate Content" 
- Brand context is passed into UGC Generator
- AI tailors scripts specifically for that brand

## Pages
1. **Dashboard** - Overview with stats, quick actions, recent brands
2. **Brand Hunter** - Brand discovery and AI analysis
3. **Content Generator** - UGC content package generation
4. **Saved Leads** - Brand collaboration pipeline with status tracking
5. **Content History** - All previously generated content

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/brands` | Get all analyzed brands |
| GET | `/api/brands/:id` | Get brand by ID |
| POST | `/api/brands` | Create a brand |
| DELETE | `/api/brands/:id` | Delete a brand |
| GET | `/api/brands/search/:query` | Search brands |
| POST | `/api/ai/analyze-brand` | AI brand analysis (body: {input, type}) |
| POST | `/api/ai/generate-content` | AI content generation (body: {product_description, style_mode, ...}) |
| GET | `/api/leads` | Get all saved leads |
| POST | `/api/leads` | Save brand as lead |
| PUT | `/api/leads/:id` | Update lead status |
| DELETE | `/api/leads/:id` | Remove lead |
| GET | `/api/content` | Get all generated content |
| GET | `/api/content/:id` | Get content by ID |
| POST | `/api/content` | Save generated content |
| DELETE | `/api/content/:id` | Delete content |

## Data Architecture

### Database: Cloudflare D1 (SQLite)

**Brands Table**: id, name, handle, website, niche, score, analysis, content_quality, posting_frequency, engagement, visual_consistency, weaknesses, pitch_reason, content_gaps

**Leads Table**: id, brand_id (FK), notes, status (new/contacted/negotiating/closed), saved_at

**Content Table**: id, brand_id (FK), style_mode, product_description, hook, script, shot_list, caption, hashtags, reel_concept, images

## Design System
- **Theme**: Dark (black/charcoal) with glassmorphism
- **Colors**: Purple accent (#8b5cf6), Neon blue (#38bdf8), Neon green (#34d399)
- **Typography**: Inter (body), Space Grotesk (headings)
- **Animations**: Fade-in, slide-up, scale-in, floating, pulsing borders
- **Components**: Glass cards, score rings, gradient text, shimmer effects

## Setup & Development

```bash
# Install dependencies
npm install

# Set up database
npm run db:migrate:local
npm run db:seed

# Build
npm run build

# Start development server
npm run dev:sandbox

# Or with PM2
pm2 start ecosystem.config.cjs
```

## Environment Variables
- `OPENAI_API_KEY` - OpenAI API key
- `OPENAI_BASE_URL` - OpenAI API base URL

## Deployment
- **Platform**: Cloudflare Pages
- **Database**: Cloudflare D1
- **Status**: Active
- **Last Updated**: 2026-03-20
