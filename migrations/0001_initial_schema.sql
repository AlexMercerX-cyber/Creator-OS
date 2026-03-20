-- AIONOVA CREATOR OS - Initial Schema
-- Brands table
CREATE TABLE IF NOT EXISTS brands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  handle TEXT,
  website TEXT,
  niche TEXT,
  score INTEGER DEFAULT 0,
  analysis TEXT,
  content_quality TEXT,
  posting_frequency TEXT,
  engagement TEXT,
  visual_consistency TEXT,
  weaknesses TEXT,
  pitch_reason TEXT,
  content_gaps TEXT,
  logo_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Leads table (saved brands)
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand_id INTEGER NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'new',
  saved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE
);

-- Content table (generated UGC content)
CREATE TABLE IF NOT EXISTS content (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand_id INTEGER,
  style_mode TEXT DEFAULT 'cinematic',
  product_description TEXT,
  hook TEXT,
  script TEXT,
  shot_list TEXT,
  caption TEXT,
  hashtags TEXT,
  reel_concept TEXT,
  images TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_leads_brand_id ON leads(brand_id);
CREATE INDEX IF NOT EXISTS idx_content_brand_id ON content(brand_id);
CREATE INDEX IF NOT EXISTS idx_brands_score ON brands(score DESC);
CREATE INDEX IF NOT EXISTS idx_brands_niche ON brands(niche);
