export function getAppShell(): string {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AIONOVA CREATOR OS</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Space Grotesk', 'sans-serif'] },
          colors: {
            dark: { 50: '#f8fafc', 100: '#e2e8f0', 200: '#94a3b8', 300: '#64748b', 400: '#475569', 500: '#334155', 600: '#1e293b', 700: '#0f172a', 800: '#0b1120', 900: '#060a14' },
            accent: { DEFAULT: '#8b5cf6', light: '#a78bfa', dark: '#7c3aed', glow: 'rgba(139,92,246,0.3)' },
            neon: { blue: '#38bdf8', green: '#34d399', pink: '#f472b6', orange: '#fb923c', red: '#f87171' }
          },
          animation: {
            'glow': 'glow 2s ease-in-out infinite alternate',
            'slide-up': 'slideUp 0.5s ease-out',
            'slide-in': 'slideIn 0.4s ease-out',
            'fade-in': 'fadeIn 0.5s ease-out',
            'pulse-slow': 'pulse 3s ease-in-out infinite',
            'shimmer': 'shimmer 2s infinite',
            'float': 'float 6s ease-in-out infinite',
            'scale-in': 'scaleIn 0.3s ease-out',
          },
          keyframes: {
            glow: { '0%': { boxShadow: '0 0 20px rgba(139,92,246,0.3)' }, '100%': { boxShadow: '0 0 40px rgba(139,92,246,0.6)' } },
            slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
            slideIn: { '0%': { opacity: '0', transform: 'translateX(-20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
            fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
            shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
            float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
            scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
          }
        }
      }
    }
  </script>
  <style>
    * { scrollbar-width: thin; scrollbar-color: #334155 transparent; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
    .glass { background: rgba(15,23,42,0.6); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(148,163,184,0.1); }
    .glass-light { background: rgba(30,41,59,0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(148,163,184,0.08); }
    .glass-card { background: rgba(15,23,42,0.7); backdrop-filter: blur(16px); border: 1px solid rgba(148,163,184,0.1); transition: all 0.3s ease; }
    .glass-card:hover { border-color: rgba(139,92,246,0.3); box-shadow: 0 0 30px rgba(139,92,246,0.1); transform: translateY(-2px); }
    .gradient-text { background: linear-gradient(135deg, #8b5cf6, #38bdf8, #34d399); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .gradient-border { background: linear-gradient(135deg, rgba(139,92,246,0.5), rgba(56,189,248,0.5)); padding: 1px; border-radius: 16px; }
    .gradient-border > * { background: #0f172a; border-radius: 15px; }
    .shimmer-bg { background: linear-gradient(90deg, transparent, rgba(139,92,246,0.1), transparent); background-size: 200% 100%; animation: shimmer 2s infinite; }
    .score-ring { background: conic-gradient(var(--score-color) calc(var(--score) * 3.6deg), rgba(51,65,85,0.5) 0deg); border-radius: 50%; }
    .nav-item { transition: all 0.2s ease; position: relative; }
    .nav-item::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 3px; height: 0; background: #8b5cf6; border-radius: 0 4px 4px 0; transition: height 0.2s ease; }
    .nav-item.active::before, .nav-item:hover::before { height: 60%; }
    .nav-item.active { background: rgba(139,92,246,0.1); color: #a78bfa; }
    .modal-overlay { background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); }
    .typing-dots span { animation: typingDot 1.4s infinite; }
    .typing-dots span:nth-child(2) { animation-delay: 0.2s; }
    .typing-dots span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typingDot { 0%,60%,100% { opacity: 0.3; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-4px); } }
    .pulse-border { animation: pulseBorder 2s ease-in-out infinite; }
    @keyframes pulseBorder { 0%,100% { border-color: rgba(139,92,246,0.2); } 50% { border-color: rgba(139,92,246,0.6); } }
    body { background: #060a14; }
    .bg-mesh { background-image: radial-gradient(at 0% 0%, rgba(139,92,246,0.08) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(56,189,248,0.06) 0, transparent 50%), radial-gradient(at 50% 100%, rgba(52,211,153,0.05) 0, transparent 50%); }
  </style>
</head>
<body class="bg-dark-900 text-white font-sans min-h-screen bg-mesh">
  <div id="app" class="flex min-h-screen">
    <!-- Sidebar -->
    <aside id="sidebar" class="fixed left-0 top-0 bottom-0 w-[260px] glass z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 -translate-x-full">
      <div class="p-6 border-b border-white/5">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-neon-blue flex items-center justify-center">
            <i class="fas fa-bolt text-white text-lg"></i>
          </div>
          <div>
            <h1 class="font-display font-bold text-lg tracking-tight">AIONOVA</h1>
            <p class="text-[10px] uppercase tracking-[3px] text-dark-200">Creator OS</p>
          </div>
        </div>
      </div>
      <nav class="flex-1 py-4 px-3 space-y-1">
        <a href="/" onclick="navigate(event,'dashboard')" class="nav-item active flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-dark-200 hover:text-white" data-page="dashboard">
          <i class="fas fa-th-large w-5 text-center"></i>
          <span>Dashboard</span>
        </a>
        <a href="/brand-hunter" onclick="navigate(event,'brand-hunter')" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-dark-200 hover:text-white" data-page="brand-hunter">
          <i class="fas fa-crosshairs w-5 text-center"></i>
          <span>Brand Hunter</span>
        </a>
        <a href="/content-generator" onclick="navigate(event,'content-generator')" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-dark-200 hover:text-white" data-page="content-generator">
          <i class="fas fa-film w-5 text-center"></i>
          <span>Content Generator</span>
        </a>
        <a href="/saved-leads" onclick="navigate(event,'saved-leads')" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-dark-200 hover:text-white" data-page="saved-leads">
          <i class="fas fa-bookmark w-5 text-center"></i>
          <span>Saved Leads</span>
        </a>
        <a href="/history" onclick="navigate(event,'history')" class="nav-item flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-dark-200 hover:text-white" data-page="history">
          <i class="fas fa-clock-rotate-left w-5 text-center"></i>
          <span>History</span>
        </a>
      </nav>
      <div class="p-4 mx-3 mb-4 rounded-xl bg-gradient-to-br from-accent/10 to-neon-blue/10 border border-accent/20">
        <div class="flex items-center gap-2 mb-2">
          <i class="fas fa-sparkles text-accent text-sm"></i>
          <span class="text-xs font-semibold text-accent-light">AI POWERED</span>
        </div>
        <p class="text-[11px] text-dark-200 leading-relaxed">Find brands, generate scripts, and close deals with AI.</p>
      </div>
    </aside>

    <!-- Mobile Header -->
    <div class="lg:hidden fixed top-0 left-0 right-0 z-40 glass px-4 py-3 flex items-center justify-between">
      <button onclick="toggleSidebar()" class="text-white p-2"><i class="fas fa-bars"></i></button>
      <div class="flex items-center gap-2">
        <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-neon-blue flex items-center justify-center">
          <i class="fas fa-bolt text-white text-xs"></i>
        </div>
        <span class="font-display font-bold text-sm">AIONOVA</span>
      </div>
      <div class="w-8"></div>
    </div>

    <!-- Main Content -->
    <main class="flex-1 lg:ml-[260px] min-h-screen">
      <div class="p-4 lg:p-8 pt-16 lg:pt-8 max-w-[1400px] mx-auto">
        <div id="page-content"></div>
      </div>
    </main>
  </div>

  <!-- Mobile sidebar overlay -->
  <div id="sidebar-overlay" class="fixed inset-0 bg-black/50 z-40 hidden lg:hidden" onclick="toggleSidebar()"></div>

  <!-- Toast notification -->
  <div id="toast" class="fixed bottom-6 right-6 z-[100] hidden">
    <div class="glass rounded-xl px-5 py-3 flex items-center gap-3 animate-slide-up shadow-xl">
      <i id="toast-icon" class="fas fa-check-circle text-neon-green"></i>
      <span id="toast-text" class="text-sm font-medium"></span>
    </div>
  </div>

  <script>
  ${getAppScript()}
  </script>
</body>
</html>`
}

function getAppScript(): string {
  return `
// ============================================
// AIONOVA CREATOR OS - Frontend Application
// ============================================

let currentPage = 'dashboard';
let brands = [];
let leads = [];
let contentHistory = [];
let selectedBrand = null;

// ---- Navigation ----
function navigate(e, page) {
  if (e) e.preventDefault();
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const activeNav = document.querySelector('[data-page="' + page + '"]');
  if (activeNav) activeNav.classList.add('active');
  history.pushState({page}, '', page === 'dashboard' ? '/' : '/' + page);
  renderPage();
  // Close mobile sidebar
  document.getElementById('sidebar').classList.add('-translate-x-full');
  document.getElementById('sidebar-overlay').classList.add('hidden');
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  sb.classList.toggle('-translate-x-full');
  ov.classList.toggle('hidden');
}

window.addEventListener('popstate', (e) => {
  const page = e.state?.page || getPageFromPath();
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const activeNav = document.querySelector('[data-page="' + page + '"]');
  if (activeNav) activeNav.classList.add('active');
  renderPage();
});

function getPageFromPath() {
  const path = window.location.pathname.slice(1);
  return path || 'dashboard';
}

// ---- Toast ----
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const icon = document.getElementById('toast-icon');
  const text = document.getElementById('toast-text');
  text.textContent = message;
  icon.className = type === 'success' ? 'fas fa-check-circle text-neon-green' : 
                   type === 'error' ? 'fas fa-exclamation-circle text-neon-red' : 
                   'fas fa-info-circle text-neon-blue';
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

// ---- Copy to Clipboard ----
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => showToast(label + ' copied!'));
}

// ---- API Helpers ----
async function api(path, opts = {}) {
  try {
    const res = await fetch('/api' + path, {
      headers: { 'Content-Type': 'application/json', ...opts.headers },
      ...opts,
      body: opts.body ? JSON.stringify(opts.body) : undefined
    });
    return await res.json();
  } catch (e) {
    console.error('API Error:', e);
    return { success: false, error: e.message };
  }
}

// ---- Score Color ----
function getScoreColor(score) {
  if (score >= 80) return '#34d399';
  if (score >= 60) return '#fb923c';
  return '#f87171';
}

function getScoreLabel(score) {
  if (score >= 80) return 'Hot Opportunity';
  if (score >= 60) return 'Good Potential';
  return 'Needs Evaluation';
}

// ---- Page Renderers ----
function renderPage() {
  const content = document.getElementById('page-content');
  switch(currentPage) {
    case 'dashboard': content.innerHTML = renderDashboard(); loadDashboardData(); break;
    case 'brand-hunter': content.innerHTML = renderBrandHunter(); break;
    case 'content-generator': content.innerHTML = renderContentGenerator(); break;
    case 'saved-leads': content.innerHTML = renderSavedLeads(); loadLeads(); break;
    case 'history': content.innerHTML = renderHistory(); loadHistory(); break;
    default: content.innerHTML = renderDashboard(); loadDashboardData();
  }
}

// ============ DASHBOARD ============
function renderDashboard() {
  return \`
  <div class="animate-fade-in">
    <div class="mb-8">
      <h1 class="text-3xl lg:text-4xl font-display font-bold mb-2">
        Welcome to <span class="gradient-text">AIONOVA</span>
      </h1>
      <p class="text-dark-200 text-sm lg:text-base">Your AI-powered creator command center</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="glass-card rounded-2xl p-5">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
            <i class="fas fa-crosshairs text-accent"></i>
          </div>
          <span class="text-xs text-neon-green font-medium"><i class="fas fa-arrow-up mr-1"></i>Active</span>
        </div>
        <div id="stat-brands" class="text-2xl font-bold">--</div>
        <div class="text-xs text-dark-300 mt-1">Brands Analyzed</div>
      </div>
      <div class="glass-card rounded-2xl p-5">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-xl bg-neon-blue/20 flex items-center justify-center">
            <i class="fas fa-bookmark text-neon-blue"></i>
          </div>
          <span class="text-xs text-neon-blue font-medium"><i class="fas fa-fire mr-1"></i>Pipeline</span>
        </div>
        <div id="stat-leads" class="text-2xl font-bold">--</div>
        <div class="text-xs text-dark-300 mt-1">Saved Leads</div>
      </div>
      <div class="glass-card rounded-2xl p-5">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-xl bg-neon-green/20 flex items-center justify-center">
            <i class="fas fa-film text-neon-green"></i>
          </div>
          <span class="text-xs text-neon-green font-medium"><i class="fas fa-sparkles mr-1"></i>AI</span>
        </div>
        <div id="stat-content" class="text-2xl font-bold">--</div>
        <div class="text-xs text-dark-300 mt-1">Content Generated</div>
      </div>
      <div class="glass-card rounded-2xl p-5">
        <div class="flex items-center justify-between mb-3">
          <div class="w-10 h-10 rounded-xl bg-neon-pink/20 flex items-center justify-center">
            <i class="fas fa-bolt text-neon-pink"></i>
          </div>
          <span class="text-xs text-neon-orange font-medium"><i class="fas fa-chart-line mr-1"></i>Score</span>
        </div>
        <div id="stat-avg-score" class="text-2xl font-bold">--</div>
        <div class="text-xs text-dark-300 mt-1">Avg Opportunity Score</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="mb-8">
      <h2 class="text-lg font-semibold mb-4">Quick Actions</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <button onclick="navigate(null,'brand-hunter')" class="glass-card rounded-2xl p-6 text-left group cursor-pointer">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-search text-white text-lg"></i>
          </div>
          <h3 class="font-semibold mb-1">Hunt Brands</h3>
          <p class="text-xs text-dark-300">Discover brands that need your content</p>
        </button>
        <button onclick="navigate(null,'content-generator')" class="glass-card rounded-2xl p-6 text-left group cursor-pointer">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-wand-magic-sparkles text-white text-lg"></i>
          </div>
          <h3 class="font-semibold mb-1">Generate Content</h3>
          <p class="text-xs text-dark-300">Create cinematic UGC scripts with AI</p>
        </button>
        <button onclick="navigate(null,'saved-leads')" class="glass-card rounded-2xl p-6 text-left group cursor-pointer">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-green to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <i class="fas fa-address-book text-white text-lg"></i>
          </div>
          <h3 class="font-semibold mb-1">View Leads</h3>
          <p class="text-xs text-dark-300">Manage your saved brand pipeline</p>
        </button>
      </div>
    </div>

    <!-- Recent Brands -->
    <div>
      <h2 class="text-lg font-semibold mb-4">Recent Brand Analysis</h2>
      <div id="dashboard-brands" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="glass-card rounded-2xl p-8 col-span-full text-center">
          <i class="fas fa-crosshairs text-dark-400 text-3xl mb-3"></i>
          <p class="text-dark-300 text-sm">No brands analyzed yet. Start hunting!</p>
        </div>
      </div>
    </div>
  </div>\`;
}

async function loadDashboardData() {
  const [brandsRes, leadsRes, contentRes] = await Promise.all([
    api('/brands'), api('/leads'), api('/content')
  ]);
  const brandsData = brandsRes.success ? brandsRes.data : [];
  const leadsData = leadsRes.success ? leadsRes.data : [];
  const contentData = contentRes.success ? contentRes.data : [];
  
  document.getElementById('stat-brands').textContent = brandsData.length;
  document.getElementById('stat-leads').textContent = leadsData.length;
  document.getElementById('stat-content').textContent = contentData.length;
  
  const avgScore = brandsData.length > 0 ? Math.round(brandsData.reduce((a,b) => a + (b.score||0), 0) / brandsData.length) : 0;
  document.getElementById('stat-avg-score').textContent = avgScore || '--';

  if (brandsData.length > 0) {
    document.getElementById('dashboard-brands').innerHTML = brandsData.slice(0,6).map(b => renderBrandCard(b)).join('');
  }
}

// ============ BRAND HUNTER ============
function renderBrandHunter() {
  return \`
  <div class="animate-fade-in">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
      <div>
        <h1 class="text-2xl lg:text-3xl font-display font-bold flex items-center gap-3">
          <span class="gradient-text">Brand Hunter</span>
          <span class="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
        </h1>
        <p class="text-dark-200 text-sm mt-1">Discover brands that need your content</p>
      </div>
    </div>

    <!-- Input Section -->
    <div class="glass-card rounded-2xl p-6 mb-8">
      <div class="flex flex-col lg:flex-row gap-4 mb-4">
        <div class="flex-1">
          <label class="text-xs font-medium text-dark-200 mb-2 block">Instagram Handle or Website URL</label>
          <div class="relative">
            <i class="fas fa-at absolute left-4 top-1/2 -translate-y-1/2 text-dark-300"></i>
            <input id="brand-input" type="text" placeholder="@brandname or https://brand.com" 
              class="w-full bg-dark-700/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-dark-300 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all">
          </div>
        </div>
        <div class="flex gap-3 items-end">
          <button onclick="analyzeBrand()" id="analyze-btn" class="px-6 py-3 bg-gradient-to-r from-accent to-accent-dark rounded-xl text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap">
            <i class="fas fa-search"></i>
            <span>Analyze</span>
          </button>
          <button onclick="discoverBrands()" id="discover-btn" class="px-6 py-3 bg-gradient-to-r from-neon-blue to-blue-600 rounded-xl text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap">
            <i class="fas fa-sparkles"></i>
            <span>Discover Mode</span>
          </button>
        </div>
      </div>
      <p class="text-[11px] text-dark-300"><i class="fas fa-info-circle mr-1"></i> Paste a brand's Instagram handle or website, or use Discover Mode to let AI suggest brands.</p>
    </div>

    <!-- AI Loading State -->
    <div id="brand-loading" class="hidden">
      <div class="glass-card rounded-2xl p-12 text-center mb-8 pulse-border border-2">
        <div class="inline-flex items-center gap-4">
          <div class="w-12 h-12 rounded-full border-2 border-accent border-t-transparent animate-spin"></div>
          <div class="text-left">
            <div class="font-semibold text-sm">AI is analyzing<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></div>
            <div class="text-xs text-dark-300 mt-1">Scanning content, engagement, and opportunities</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Results Grid -->
    <div id="brand-results" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <!-- Existing Brands -->
    <div class="mt-8">
      <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
        <i class="fas fa-database text-dark-300"></i>
        <span>All Analyzed Brands</span>
      </h2>
      <div id="all-brands" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    </div>
  </div>\`;
  
  setTimeout(loadAllBrands, 100);
}

async function loadAllBrands() {
  const res = await api('/brands');
  if (res.success && res.data.length > 0) {
    brands = res.data;
    const container = document.getElementById('all-brands');
    if (container) container.innerHTML = res.data.map(b => renderBrandCard(b)).join('');
  }
}

function renderBrandCard(brand) {
  const scoreColor = getScoreColor(brand.score);
  const scoreLabel = getScoreLabel(brand.score);
  const nicheColors = {
    'Beauty & Skincare': 'from-pink-500/20 to-rose-500/20 text-pink-400',
    'Food & Beverage': 'from-orange-500/20 to-amber-500/20 text-orange-400',
    'Fitness & Sportswear': 'from-green-500/20 to-emerald-500/20 text-green-400',
    'Home & Lifestyle': 'from-blue-500/20 to-cyan-500/20 text-blue-400',
    'Technology & Gadgets': 'from-violet-500/20 to-purple-500/20 text-violet-400',
  };
  const nicheClass = nicheColors[brand.niche] || 'from-gray-500/20 to-slate-500/20 text-gray-400';
  
  return \`
  <div class="glass-card rounded-2xl p-5 animate-scale-in">
    <div class="flex items-start justify-between mb-4">
      <div class="flex-1 min-w-0">
        <h3 class="font-semibold text-sm truncate">\${brand.name}</h3>
        <p class="text-xs text-dark-300 mt-0.5">\${brand.handle || ''}</p>
      </div>
      <div class="flex-shrink-0 ml-3 relative" style="--score: \${brand.score}; --score-color: \${scoreColor}">
        <div class="score-ring w-12 h-12 flex items-center justify-center">
          <div class="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center">
            <span class="text-xs font-bold" style="color: \${scoreColor}">\${brand.score}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flex items-center gap-2 mb-3">
      <span class="px-2.5 py-0.5 rounded-full bg-gradient-to-r \${nicheClass} text-[10px] font-medium">\${brand.niche || 'General'}</span>
      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-medium" style="background: \${scoreColor}15; color: \${scoreColor}">\${scoreLabel}</span>
    </div>

    <p class="text-xs text-dark-200 mb-4 line-clamp-2">\${brand.analysis || 'No analysis available'}</p>

    \${brand.weaknesses ? \`
    <div class="mb-4 p-3 rounded-lg bg-neon-red/5 border border-neon-red/10">
      <div class="text-[10px] font-semibold text-neon-red mb-1"><i class="fas fa-triangle-exclamation mr-1"></i>CONTENT GAPS</div>
      <p class="text-[11px] text-dark-200 line-clamp-2">\${brand.content_gaps || brand.weaknesses}</p>
    </div>\` : ''}

    <div class="flex gap-2">
      <button onclick='saveLead(\${brand.id})' class="flex-1 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent text-xs font-medium transition-all flex items-center justify-center gap-1.5">
        <i class="fas fa-bookmark"></i> Save Lead
      </button>
      <button onclick='generateForBrand(\${JSON.stringify(brand).replace(/'/g, "\\\\'")})' class="flex-1 py-2 rounded-lg bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue text-xs font-medium transition-all flex items-center justify-center gap-1.5">
        <i class="fas fa-wand-magic-sparkles"></i> Generate
      </button>
    </div>
  </div>\`;
}

async function analyzeBrand() {
  const input = document.getElementById('brand-input').value.trim();
  if (!input) { showToast('Please enter a brand handle or website', 'error'); return; }
  
  const type = input.startsWith('@') ? 'handle' : input.startsWith('http') ? 'website' : 'handle';
  
  document.getElementById('brand-loading').classList.remove('hidden');
  document.getElementById('analyze-btn').disabled = true;
  document.getElementById('analyze-btn').innerHTML = '<i class="fas fa-spinner animate-spin"></i> Analyzing...';
  
  const res = await api('/ai/analyze-brand', { method: 'POST', body: { input, type } });
  
  document.getElementById('brand-loading').classList.add('hidden');
  document.getElementById('analyze-btn').disabled = false;
  document.getElementById('analyze-btn').innerHTML = '<i class="fas fa-search"></i> Analyze';
  
  if (res.success) {
    const container = document.getElementById('brand-results');
    container.innerHTML = res.data.map(b => renderBrandCard(b)).join('');
    showToast('Brand analyzed successfully!');
    loadAllBrands();
  } else {
    showToast(res.error || 'Analysis failed', 'error');
  }
}

async function discoverBrands() {
  document.getElementById('brand-loading').classList.remove('hidden');
  document.getElementById('discover-btn').disabled = true;
  document.getElementById('discover-btn').innerHTML = '<i class="fas fa-spinner animate-spin"></i> Discovering...';
  
  const res = await api('/ai/analyze-brand', { method: 'POST', body: { type: 'discover' } });
  
  document.getElementById('brand-loading').classList.add('hidden');
  document.getElementById('discover-btn').disabled = false;
  document.getElementById('discover-btn').innerHTML = '<i class="fas fa-sparkles"></i> Discover Mode';
  
  if (res.success) {
    const container = document.getElementById('brand-results');
    container.innerHTML = res.data.map(b => renderBrandCard(b)).join('');
    showToast(res.data.length + ' brands discovered!');
    loadAllBrands();
  } else {
    showToast(res.error || 'Discovery failed', 'error');
  }
}

async function saveLead(brandId) {
  const res = await api('/leads', { method: 'POST', body: { brand_id: brandId } });
  if (res.success) {
    showToast('Brand saved to leads!');
  } else {
    showToast(res.error || 'Failed to save lead', res.error?.includes('already') ? 'info' : 'error');
  }
}

function generateForBrand(brand) {
  selectedBrand = typeof brand === 'string' ? JSON.parse(brand) : brand;
  navigate(null, 'content-generator');
  setTimeout(() => {
    const desc = document.getElementById('product-desc');
    if (desc && selectedBrand) {
      desc.value = selectedBrand.name + ' - ' + (selectedBrand.niche || '') + '. ' + (selectedBrand.analysis || '');
    }
  }, 100);
}

// ============ CONTENT GENERATOR ============
function renderContentGenerator() {
  const brandInfo = selectedBrand ? \`
    <div class="glass-card rounded-xl p-4 mb-6 border-accent/20">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
          <i class="fas fa-link text-accent text-xs"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-xs text-dark-300">Generating for</div>
          <div class="font-semibold text-sm truncate">\${selectedBrand.name}</div>
        </div>
        <button onclick="selectedBrand=null;renderPage()" class="text-dark-300 hover:text-white text-xs"><i class="fas fa-times"></i></button>
      </div>
    </div>\` : '';

  return \`
  <div class="animate-fade-in">
    <div class="mb-8">
      <h1 class="text-2xl lg:text-3xl font-display font-bold flex items-center gap-3">
        <span class="gradient-text">UGC Content Generator</span>
        <span class="px-2 py-0.5 rounded-full bg-neon-green/10 text-neon-green text-[10px] font-bold">AI</span>
      </h1>
      <p class="text-dark-200 text-sm mt-1">Generate cinematic UGC content with AI</p>
    </div>

    \${brandInfo}

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Input Panel -->
      <div class="lg:col-span-1">
        <div class="glass-card rounded-2xl p-6 sticky top-8">
          <h3 class="font-semibold text-sm mb-4 flex items-center gap-2">
            <i class="fas fa-sliders text-accent"></i> Configuration
          </h3>

          <div class="space-y-4">
            <!-- Product Description -->
            <div>
              <label class="text-xs font-medium text-dark-200 mb-1.5 block">Product / Brand Description</label>
              <textarea id="product-desc" rows="4" placeholder="Describe the product, brand, or what you're creating content for..."
                class="w-full bg-dark-700/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-dark-300 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"></textarea>
            </div>

            <!-- Image Upload -->
            <div>
              <label class="text-xs font-medium text-dark-200 mb-1.5 block">Product Images (describe them)</label>
              <textarea id="image-desc" rows="2" placeholder="Describe your product images: e.g., 'white minimalist coffee mug on marble surface, overhead shot'"
                class="w-full bg-dark-700/50 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-dark-300 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"></textarea>
            </div>

            <!-- Style Mode -->
            <div>
              <label class="text-xs font-medium text-dark-200 mb-2 block">Style Mode</label>
              <div class="grid grid-cols-2 gap-2" id="style-selector">
                <button onclick="selectStyle(this,'cinematic')" class="style-btn active px-3 py-2.5 rounded-lg border border-accent/30 bg-accent/10 text-accent text-xs font-medium transition-all flex items-center gap-1.5" data-style="cinematic">
                  <i class="fas fa-video"></i> Cinematic
                </button>
                <button onclick="selectStyle(this,'dark')" class="style-btn px-3 py-2.5 rounded-lg border border-white/10 bg-dark-700/30 text-dark-200 text-xs font-medium transition-all hover:border-white/20 flex items-center gap-1.5" data-style="dark">
                  <i class="fas fa-skull"></i> Dark/Crime
                </button>
                <button onclick="selectStyle(this,'luxury')" class="style-btn px-3 py-2.5 rounded-lg border border-white/10 bg-dark-700/30 text-dark-200 text-xs font-medium transition-all hover:border-white/20 flex items-center gap-1.5" data-style="luxury">
                  <i class="fas fa-gem"></i> Luxury
                </button>
                <button onclick="selectStyle(this,'minimal')" class="style-btn px-3 py-2.5 rounded-lg border border-white/10 bg-dark-700/30 text-dark-200 text-xs font-medium transition-all hover:border-white/20 flex items-center gap-1.5" data-style="minimal">
                  <i class="fas fa-leaf"></i> Minimal
                </button>
                <button onclick="selectStyle(this,'viral')" class="style-btn col-span-2 px-3 py-2.5 rounded-lg border border-white/10 bg-dark-700/30 text-dark-200 text-xs font-medium transition-all hover:border-white/20 flex items-center gap-1.5 justify-center" data-style="viral">
                  <i class="fas fa-fire"></i> Viral/Reels
                </button>
              </div>
            </div>

            <!-- Generate Button -->
            <button onclick="generateContent()" id="generate-btn" class="w-full py-3.5 bg-gradient-to-r from-accent via-purple-500 to-neon-blue rounded-xl text-sm font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <i class="fas fa-wand-magic-sparkles"></i>
              Generate Content Package
            </button>
          </div>
        </div>
      </div>

      <!-- Output Panel -->
      <div class="lg:col-span-2">
        <div id="content-output">
          <div class="glass-card rounded-2xl p-12 text-center">
            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-neon-blue/20 flex items-center justify-center mx-auto mb-4 animate-float">
              <i class="fas fa-film text-accent text-2xl"></i>
            </div>
            <h3 class="font-semibold text-lg mb-2">Ready to Create</h3>
            <p class="text-dark-300 text-sm max-w-md mx-auto">Configure your content settings and click Generate to create a complete UGC content package with hooks, scripts, shot lists, and captions.</p>
          </div>
        </div>

        <!-- Loading State -->
        <div id="content-loading" class="hidden">
          <div class="glass-card rounded-2xl p-12 text-center pulse-border border-2">
            <div class="w-16 h-16 rounded-full border-2 border-accent border-t-transparent animate-spin mx-auto mb-4"></div>
            <h3 class="font-semibold text-sm mb-1">AI is crafting your content<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></h3>
            <p class="text-xs text-dark-300">Generating hooks, scripts, shots & captions</p>
          </div>
        </div>
      </div>
    </div>
  </div>\`;
}

let currentStyle = 'cinematic';
function selectStyle(el, style) {
  currentStyle = style;
  document.querySelectorAll('.style-btn').forEach(b => {
    b.classList.remove('active', 'border-accent/30', 'bg-accent/10', 'text-accent');
    b.classList.add('border-white/10', 'bg-dark-700/30', 'text-dark-200');
  });
  el.classList.add('active', 'border-accent/30', 'bg-accent/10', 'text-accent');
  el.classList.remove('border-white/10', 'bg-dark-700/30', 'text-dark-200');
}

async function generateContent() {
  const desc = document.getElementById('product-desc').value.trim();
  if (!desc) { showToast('Please describe the product or brand', 'error'); return; }
  
  const imageDesc = document.getElementById('image-desc').value.trim();
  
  document.getElementById('content-output').classList.add('hidden');
  document.getElementById('content-loading').classList.remove('hidden');
  document.getElementById('generate-btn').disabled = true;
  document.getElementById('generate-btn').innerHTML = '<i class="fas fa-spinner animate-spin"></i> Generating...';
  
  const body = {
    product_description: desc,
    style_mode: currentStyle,
    image_descriptions: imageDesc || null,
    brand_context: selectedBrand ? (selectedBrand.name + ': ' + (selectedBrand.analysis || '') + ' Weaknesses: ' + (selectedBrand.weaknesses || '')) : null,
    brand_id: selectedBrand?.id || null
  };
  
  const res = await api('/ai/generate-content', { method: 'POST', body });
  
  document.getElementById('content-loading').classList.add('hidden');
  document.getElementById('content-output').classList.remove('hidden');
  document.getElementById('generate-btn').disabled = false;
  document.getElementById('generate-btn').innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Generate Content Package';
  
  if (res.success) {
    renderContentOutput(res.data);
    showToast('Content generated successfully!');
  } else {
    document.getElementById('content-output').innerHTML = \`
      <div class="glass-card rounded-2xl p-8 text-center">
        <i class="fas fa-exclamation-triangle text-neon-red text-2xl mb-3"></i>
        <p class="text-sm text-dark-200">\${res.error || 'Generation failed. Please try again.'}</p>
      </div>\`;
    showToast('Generation failed', 'error');
  }
}

function renderContentOutput(data) {
  const rc = data.reel_concept || {};
  const hook = data.hook || {};
  const script = data.script || {};
  const shots = data.shot_list || [];
  const caption = data.caption || {};
  const hashtags = data.hashtags || [];
  
  document.getElementById('content-output').innerHTML = \`
  <div class="space-y-4 animate-fade-in">
    <!-- Reel Concept -->
    <div class="glass-card rounded-2xl p-5">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-semibold text-sm flex items-center gap-2"><i class="fas fa-clapperboard text-accent"></i> Reel Concept</h3>
        <button onclick="copyText(document.getElementById('concept-text').innerText, 'Concept')" class="text-xs text-dark-300 hover:text-white"><i class="fas fa-copy"></i></button>
      </div>
      <div id="concept-text" class="grid grid-cols-2 gap-3">
        <div class="p-3 rounded-lg bg-dark-700/30"><div class="text-[10px] text-dark-300 mb-1">Theme</div><div class="text-xs font-medium">\${rc.theme || 'N/A'}</div></div>
        <div class="p-3 rounded-lg bg-dark-700/30"><div class="text-[10px] text-dark-300 mb-1">Mood</div><div class="text-xs font-medium">\${rc.mood || 'N/A'}</div></div>
        <div class="p-3 rounded-lg bg-dark-700/30"><div class="text-[10px] text-dark-300 mb-1">Duration</div><div class="text-xs font-medium">\${rc.duration || 'N/A'}</div></div>
        <div class="p-3 rounded-lg bg-dark-700/30"><div class="text-[10px] text-dark-300 mb-1">Target</div><div class="text-xs font-medium">\${rc.target_audience || 'N/A'}</div></div>
      </div>
    </div>

    <!-- Hook -->
    <div class="glass-card rounded-2xl p-5 border-neon-orange/20">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-semibold text-sm flex items-center gap-2"><i class="fas fa-bolt text-neon-orange"></i> Hook (First 3 Seconds)</h3>
        <button onclick="copyText(document.getElementById('hook-text').innerText, 'Hook')" class="text-xs text-dark-300 hover:text-white"><i class="fas fa-copy"></i></button>
      </div>
      <div id="hook-text">
        <div class="p-4 rounded-xl bg-gradient-to-r from-neon-orange/5 to-transparent border border-neon-orange/10 mb-3">
          <div class="text-[10px] font-semibold text-neon-orange mb-1.5">HOOK TEXT</div>
          <p class="text-sm font-medium leading-relaxed">\${hook.text || 'N/A'}</p>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="p-3 rounded-lg bg-dark-700/30"><div class="text-[10px] text-dark-300 mb-1">Visual</div><div class="text-xs">\${hook.visual || 'N/A'}</div></div>
          <div class="p-3 rounded-lg bg-dark-700/30"><div class="text-[10px] text-dark-300 mb-1">Why It Works</div><div class="text-xs">\${hook.why_it_works || 'N/A'}</div></div>
        </div>
      </div>
    </div>

    <!-- Script -->
    <div class="glass-card rounded-2xl p-5">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-semibold text-sm flex items-center gap-2"><i class="fas fa-scroll text-neon-blue"></i> Script</h3>
        <button onclick="copyText(document.getElementById('script-text').innerText, 'Script')" class="text-xs text-dark-300 hover:text-white"><i class="fas fa-copy"></i></button>
      </div>
      <div id="script-text">
        <div class="p-4 rounded-xl bg-neon-blue/5 border border-neon-blue/10 mb-4">
          <div class="text-[10px] font-semibold text-neon-blue mb-1.5">FULL SCRIPT</div>
          <p class="text-sm leading-relaxed whitespace-pre-line">\${script.full_script || 'N/A'}</p>
        </div>
        <div class="text-[10px] font-semibold text-dark-300 mb-2">SCENE BREAKDOWN</div>
        <div class="space-y-2">
          \${(script.scenes || []).map((s, i) => \`
            <div class="p-3 rounded-lg bg-dark-700/30 border-l-2 border-accent/50">
              <div class="flex items-center gap-2 mb-1">
                <span class="w-5 h-5 rounded-md bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">\${s.scene_number || i+1}</span>
                <span class="text-[10px] text-dark-300">\${s.duration || ''}</span>
              </div>
              <p class="text-xs mb-1"><span class="text-dark-300">Action:</span> \${s.action || ''}</p>
              \${s.voiceover ? \`<p class="text-xs"><span class="text-dark-300">VO:</span> <em>"\${s.voiceover}"</em></p>\` : ''}
              \${s.visual_notes ? \`<p class="text-xs mt-1"><span class="text-dark-300">Visual:</span> \${s.visual_notes}</p>\` : ''}
            </div>
          \`).join('')}
        </div>
      </div>
    </div>

    <!-- Shot List -->
    <div class="glass-card rounded-2xl p-5">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-semibold text-sm flex items-center gap-2"><i class="fas fa-camera text-neon-green"></i> Shot List</h3>
        <button onclick="copyText(document.getElementById('shots-text').innerText, 'Shot list')" class="text-xs text-dark-300 hover:text-white"><i class="fas fa-copy"></i></button>
      </div>
      <div id="shots-text" class="space-y-2">
        \${shots.map((s, i) => \`
          <div class="p-3 rounded-lg bg-dark-700/30 flex flex-col sm:flex-row gap-3">
            <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-neon-green/10 flex items-center justify-center text-xs font-bold text-neon-green">\${s.shot_number || i+1}</div>
            <div class="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div><div class="text-[9px] text-dark-300">Angle</div><div class="text-xs">\${s.camera_angle || 'N/A'}</div></div>
              <div><div class="text-[9px] text-dark-300">Movement</div><div class="text-xs">\${s.movement || 'N/A'}</div></div>
              <div><div class="text-[9px] text-dark-300">Lighting</div><div class="text-xs">\${s.lighting || 'N/A'}</div></div>
              <div><div class="text-[9px] text-dark-300">Transition</div><div class="text-xs">\${s.transition || 'N/A'}</div></div>
              \${s.props_needed ? \`<div class="col-span-2"><div class="text-[9px] text-dark-300">Props</div><div class="text-xs">\${s.props_needed}</div></div>\` : ''}
            </div>
          </div>
        \`).join('')}
      </div>
    </div>

    <!-- Caption & Hashtags -->
    <div class="glass-card rounded-2xl p-5">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-semibold text-sm flex items-center gap-2"><i class="fas fa-pen-fancy text-neon-pink"></i> Caption</h3>
        <button onclick="copyText(document.getElementById('caption-text').innerText, 'Caption')" class="text-xs text-dark-300 hover:text-white"><i class="fas fa-copy"></i></button>
      </div>
      <div id="caption-text">
        <div class="p-4 rounded-xl bg-neon-pink/5 border border-neon-pink/10 mb-3">
          <p class="text-sm leading-relaxed whitespace-pre-line">\${caption.text || 'N/A'}</p>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex items-center justify-between mb-2">
          <div class="text-[10px] font-semibold text-dark-300">HASHTAGS</div>
          <button onclick="copyText(hashtags.join(' '), 'Hashtags')" class="text-xs text-dark-300 hover:text-white"><i class="fas fa-copy"></i></button>
        </div>
        <div class="flex flex-wrap gap-1.5" id="hashtags-container">
          \${hashtags.map(h => \`<span class="px-2 py-1 rounded-md bg-accent/10 text-accent text-[11px]">#\${h.replace('#','')}</span>\`).join('')}
        </div>
      </div>
    </div>

    <!-- Regenerate -->
    <div class="flex gap-3">
      <button onclick="generateContent()" class="flex-1 py-3 rounded-xl bg-accent/10 hover:bg-accent/20 text-accent text-sm font-medium transition-all flex items-center justify-center gap-2">
        <i class="fas fa-rotate"></i> Regenerate
      </button>
    </div>
  </div>\`;
  
  // Store hashtags for copy
  window.hashtags = hashtags;
}

// ============ SAVED LEADS ============
function renderSavedLeads() {
  return \`
  <div class="animate-fade-in">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
      <div>
        <h1 class="text-2xl lg:text-3xl font-display font-bold">
          <span class="gradient-text">Saved Leads</span>
        </h1>
        <p class="text-dark-200 text-sm mt-1">Your brand collaboration pipeline</p>
      </div>
      <div class="flex gap-2">
        <select id="lead-filter" onchange="filterLeads()" class="bg-dark-700/50 border border-white/10 rounded-xl py-2 px-4 text-xs text-white focus:outline-none">
          <option value="all">All Leads</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="negotiating">Negotiating</option>
          <option value="closed">Closed</option>
        </select>
      </div>
    </div>

    <div id="leads-container" class="space-y-3">
      <div class="glass-card rounded-2xl p-8 text-center">
        <i class="fas fa-bookmark text-dark-400 text-2xl mb-3"></i>
        <p class="text-dark-300 text-sm">Loading leads...</p>
      </div>
    </div>
  </div>\`;
}

async function loadLeads() {
  const res = await api('/leads');
  leads = res.success ? res.data : [];
  renderLeadsList(leads);
}

function renderLeadsList(leadsData) {
  const container = document.getElementById('leads-container');
  if (!container) return;
  
  if (leadsData.length === 0) {
    container.innerHTML = \`
      <div class="glass-card rounded-2xl p-12 text-center">
        <div class="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-bookmark text-accent text-xl"></i>
        </div>
        <h3 class="font-semibold mb-2">No Leads Yet</h3>
        <p class="text-dark-300 text-sm mb-4">Go to Brand Hunter to discover and save brands</p>
        <button onclick="navigate(null,'brand-hunter')" class="px-6 py-2.5 bg-accent/10 hover:bg-accent/20 text-accent rounded-xl text-sm font-medium transition-all">
          <i class="fas fa-crosshairs mr-2"></i>Start Hunting
        </button>
      </div>\`;
    return;
  }

  const statusColors = { new: 'text-neon-blue bg-neon-blue/10', contacted: 'text-neon-orange bg-neon-orange/10', negotiating: 'text-accent bg-accent/10', closed: 'text-neon-green bg-neon-green/10' };
  
  container.innerHTML = leadsData.map(lead => {
    const sc = statusColors[lead.status] || statusColors.new;
    return \`
    <div class="glass-card rounded-2xl p-5 animate-slide-up">
      <div class="flex flex-col sm:flex-row sm:items-center gap-4">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="font-semibold text-sm">\${lead.name}</h3>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-medium \${sc}">\${lead.status}</span>
            <span class="text-xs text-dark-300">\${lead.handle || ''}</span>
          </div>
          <div class="flex items-center gap-4 text-xs text-dark-300">
            <span><i class="fas fa-tag mr-1"></i>\${lead.niche || 'N/A'}</span>
            <span><i class="fas fa-chart-line mr-1"></i>Score: \${lead.score || 0}</span>
            <span><i class="fas fa-calendar mr-1"></i>\${new Date(lead.saved_at).toLocaleDateString()}</span>
          </div>
          \${lead.pitch_reason ? \`<p class="text-xs text-dark-200 mt-2 line-clamp-1">\${lead.pitch_reason}</p>\` : ''}
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <select onchange="updateLeadStatus(\${lead.id}, this.value)" class="bg-dark-700/50 border border-white/10 rounded-lg py-1.5 px-3 text-[11px] text-white focus:outline-none">
            <option value="new" \${lead.status==='new'?'selected':''}>New</option>
            <option value="contacted" \${lead.status==='contacted'?'selected':''}>Contacted</option>
            <option value="negotiating" \${lead.status==='negotiating'?'selected':''}>Negotiating</option>
            <option value="closed" \${lead.status==='closed'?'selected':''}>Closed</option>
          </select>
          <button onclick='generateForBrand(\${JSON.stringify({id:lead.brand_id,name:lead.name,niche:lead.niche,analysis:lead.analysis,weaknesses:lead.weaknesses}).replace(/'/g, "\\\\'")})' class="p-2 rounded-lg bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue transition-all" title="Generate Content">
            <i class="fas fa-wand-magic-sparkles text-xs"></i>
          </button>
          <button onclick="deleteLead(\${lead.id})" class="p-2 rounded-lg bg-neon-red/10 hover:bg-neon-red/20 text-neon-red transition-all" title="Remove">
            <i class="fas fa-trash text-xs"></i>
          </button>
        </div>
      </div>
    </div>\`;
  }).join('');
}

function filterLeads() {
  const filter = document.getElementById('lead-filter').value;
  renderLeadsList(filter === 'all' ? leads : leads.filter(l => l.status === filter));
}

async function updateLeadStatus(id, status) {
  await api('/leads/' + id, { method: 'PUT', body: { status } });
  showToast('Status updated');
}

async function deleteLead(id) {
  await api('/leads/' + id, { method: 'DELETE' });
  showToast('Lead removed');
  loadLeads();
}

// ============ HISTORY ============
function renderHistory() {
  return \`
  <div class="animate-fade-in">
    <div class="mb-8">
      <h1 class="text-2xl lg:text-3xl font-display font-bold">
        <span class="gradient-text">Content History</span>
      </h1>
      <p class="text-dark-200 text-sm mt-1">All your previously generated content</p>
    </div>
    <div id="history-container" class="space-y-4">
      <div class="glass-card rounded-2xl p-8 text-center">
        <i class="fas fa-clock-rotate-left text-dark-400 text-2xl mb-3"></i>
        <p class="text-dark-300 text-sm">Loading history...</p>
      </div>
    </div>
  </div>\`;
}

async function loadHistory() {
  const res = await api('/content');
  contentHistory = res.success ? res.data : [];
  const container = document.getElementById('history-container');
  if (!container) return;

  if (contentHistory.length === 0) {
    container.innerHTML = \`
      <div class="glass-card rounded-2xl p-12 text-center">
        <div class="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-film text-neon-blue text-xl"></i>
        </div>
        <h3 class="font-semibold mb-2">No Content Yet</h3>
        <p class="text-dark-300 text-sm mb-4">Generate your first UGC content package</p>
        <button onclick="navigate(null,'content-generator')" class="px-6 py-2.5 bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue rounded-xl text-sm font-medium transition-all">
          <i class="fas fa-wand-magic-sparkles mr-2"></i>Create Content
        </button>
      </div>\`;
    return;
  }

  const styleIcons = { cinematic: 'fa-video', dark: 'fa-skull', luxury: 'fa-gem', minimal: 'fa-leaf', viral: 'fa-fire' };

  container.innerHTML = contentHistory.map(item => {
    let hookText = '';
    try { const h = JSON.parse(item.hook); hookText = h.text || ''; } catch { hookText = item.hook || ''; }
    let captionText = '';
    try { const c = JSON.parse(item.caption); captionText = c.text || ''; } catch { captionText = item.caption || ''; }
    
    return \`
    <div class="glass-card rounded-2xl p-5 animate-slide-up">
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <i class="fas \${styleIcons[item.style_mode] || 'fa-film'} text-accent"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <h3 class="font-semibold text-sm truncate">\${item.brand_name || item.product_description?.slice(0,40) || 'Untitled'}</h3>
            <span class="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-medium">\${item.style_mode}</span>
          </div>
          <p class="text-xs text-dark-300 mb-2">\${new Date(item.created_at).toLocaleDateString()} \${new Date(item.created_at).toLocaleTimeString()}</p>
          \${hookText ? \`<p class="text-xs text-dark-200 line-clamp-1"><span class="text-neon-orange font-medium">Hook:</span> \${hookText}</p>\` : ''}
          \${captionText ? \`<p class="text-xs text-dark-200 line-clamp-1 mt-1"><span class="text-neon-pink font-medium">Caption:</span> \${captionText}</p>\` : ''}
        </div>
        <div class="flex gap-2 flex-shrink-0">
          <button onclick="viewContent(\${item.id})" class="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-all" title="View">
            <i class="fas fa-eye text-xs"></i>
          </button>
          <button onclick="deleteContent(\${item.id})" class="p-2 rounded-lg bg-neon-red/10 hover:bg-neon-red/20 text-neon-red transition-all" title="Delete">
            <i class="fas fa-trash text-xs"></i>
          </button>
        </div>
      </div>
    </div>\`;
  }).join('');
}

async function viewContent(id) {
  const res = await api('/content/' + id);
  if (!res.success) { showToast('Failed to load content', 'error'); return; }
  
  const item = res.data;
  let data = {};
  try { data.hook = JSON.parse(item.hook); } catch { data.hook = { text: item.hook }; }
  try { data.script = JSON.parse(item.script); } catch { data.script = { full_script: item.script }; }
  try { data.shot_list = JSON.parse(item.shot_list); } catch { data.shot_list = []; }
  try { data.caption = JSON.parse(item.caption); } catch { data.caption = { text: item.caption }; }
  try { data.hashtags = JSON.parse(item.hashtags); } catch { data.hashtags = []; }
  try { data.reel_concept = JSON.parse(item.reel_concept); } catch { data.reel_concept = {}; }
  
  navigate(null, 'content-generator');
  setTimeout(() => {
    const desc = document.getElementById('product-desc');
    if (desc) desc.value = item.product_description || '';
    renderContentOutput(data);
  }, 150);
}

async function deleteContent(id) {
  await api('/content/' + id, { method: 'DELETE' });
  showToast('Content deleted');
  loadHistory();
}

// ---- Init ----
currentPage = getPageFromPath();
document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
const initNav = document.querySelector('[data-page="' + currentPage + '"]');
if (initNav) initNav.classList.add('active');
renderPage();
`;
}
