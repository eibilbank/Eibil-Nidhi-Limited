
/**
 * EIBIL NIDHI LIMITED - Vanilla JS SPA Engine
 * Implements Routing, State, and Rendering without external frameworks.
 */

// --- Constants & Initial Data ---
const INITIAL_PRODUCTS = [
  { id: 'gold-loan', name: 'Gold Loan', category: 'loan', overview: 'Unlock your gold value instantly with industry-leading rates and maximum safety.', features: ['Instant Sanction', 'Safe Storage', 'Zero Processing Fees'], eligibility: ['Age 18-70', 'Indian Citizen', 'Owns Gold Ornaments'], documents: ['Aadhar Card', 'PAN Card', 'Passport Photos'], interestRate: '9.9% p.a.' },
  { id: 'property-loan', name: 'Property Loan', category: 'loan', overview: 'Transform your residential or commercial property into growth capital.', features: ['High LTV', 'Flexible Tenure', 'Balance Transfer'], eligibility: ['Property Owners', 'Age 21-65', 'Stable Income'], documents: ['Title Deeds', 'Income Tax Returns', 'Bank Statements'], interestRate: '11.5% p.a.' },
  { id: 'savings-deposit', name: 'Savings Deposit', category: 'deposit', overview: 'Liquid savings with attractive daily interest rates and member benefits.', features: ['Daily Interest', 'Rupay Debit Card', 'No Minimum Balance'], eligibility: ['All EIBIL Members', 'Minors with Guardians'], documents: ['KYC Documents', 'Member Photo'], interestRate: '6.5% p.a.' },
  { id: 'term-deposit', name: 'Term Deposit (FD)', category: 'deposit', overview: 'High-yield fixed investments for a secure and prosperous future.', features: ['Compounded Interest', 'Flexible Tenure', 'Loan Facility'], eligibility: ['Members Only'], documents: ['FD Form', 'KYC Updates'], interestRate: 'Up to 12.5% p.a.' }
];

const INITIAL_SETTINGS = {
  companyName: 'EIBIL NIDHI',
  companySuffix: 'LIMITED',
  tagline: 'Modern Financial Trust',
  heroTitle: 'Invest in your. Financial Freedom',
  heroSub: 'Join EIBIL Nidhi Limited – where your savings grow faster and your dreams get funded instantly.',
  phone: '1800-123-4567'
};

const INVESTOR_CATEGORIES = [
  'Financial Results', 'Board Governance', 'Fair Practice Code', 'Policies', 'Annual Returns', 'CSR'
];

// --- Global State ---
let state = {
  isAdmin: localStorage.getItem('eibil_isAdmin') === 'true',
  products: JSON.parse(localStorage.getItem('eibil_products') || 'null') || INITIAL_PRODUCTS,
  settings: JSON.parse(localStorage.getItem('eibil_settings') || 'null') || INITIAL_SETTINGS,
  activeInvestorCat: INVESTOR_CATEGORIES[0]
};

// --- Utilities ---
const saveToLocal = () => {
  localStorage.setItem('eibil_products', JSON.stringify(state.products));
  localStorage.setItem('eibil_settings', JSON.stringify(state.settings));
  localStorage.setItem('eibil_isAdmin', state.isAdmin.toString());
};

const updateGlobalUI = () => {
  // Update Navbar
  const navCompanyName = document.getElementById('nav-company-name');
  if (navCompanyName) {
    navCompanyName.innerHTML = `${state.settings.companyName} <span class="text-brand-pink">${state.settings.companySuffix}</span>`;
  }
  
  const navTagline = document.getElementById('nav-tagline');
  if (navTagline) {
    navTagline.textContent = state.settings.tagline;
  }
  
  const adminBadge = document.getElementById('admin-badge');
  if (adminBadge) {
    adminBadge.classList.toggle('hidden', !state.isAdmin);
  }

  // Update Footer
  const footerCompanyName = document.getElementById('footer-company-name');
  if (footerCompanyName) {
    footerCompanyName.textContent = state.settings.companyName;
  }
  
  const footerTagline = document.getElementById('footer-tagline');
  if (footerTagline) {
    footerTagline.textContent = state.settings.companySuffix;
  }
  
  const footerPhone = document.getElementById('footer-phone');
  if (footerPhone) {
    footerPhone.textContent = state.settings.phone;
  }

  // Dropdown Products
  const loansList = document.getElementById('nav-loans-list');
  const depositsList = document.getElementById('nav-deposits-list');
  const footerList = document.getElementById('footer-products-list');

  const loans = state.products.filter((p: any) => p.category === 'loan');
  const deposits = state.products.filter((p: any) => p.category === 'deposit');

  if (loansList) {
    loansList.innerHTML = loans.map((p: any) => `
      <a href="#product/${p.id}" class="block p-2 rounded-xl hover:bg-brand-lightBlue text-sm font-medium text-slate-700 transition">${p.name}</a>
    `).join('');
  }

  if (depositsList) {
    depositsList.innerHTML = deposits.map((p: any) => `
      <a href="#product/${p.id}" class="block p-2 rounded-xl hover:bg-brand-lightPink text-sm font-medium text-slate-700 transition">${p.name}</a>
    `).join('');
  }

  if (footerList) {
    footerList.innerHTML = state.products.slice(0, 5).map((p: any) => `
      <a href="#product/${p.id}" class="hover:text-white transition block">${p.name}</a>
    `).join('');
  }
};

// --- Templates ---
const templates: any = {
  home: () => {
    const titleParts = state.settings.heroTitle.split('.');
    return `
      <section class="relative min-h-[80vh] flex items-center overflow-hidden">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="max-w-7xl mx-auto px-4 w-full flex flex-col lg:flex-row items-center gap-16 py-20 relative z-10">
          <div class="lg:w-3/5 text-center lg:text-left">
            <h1 class="text-5xl md:text-8xl font-[900] text-slate-900 leading-[1.1] mb-8 tracking-tight">
              ${titleParts[0]}.<br/>
              <span class="text-gradient">${titleParts[1] || ''}</span>
            </h1>
            <p class="text-lg text-slate-500 max-w-2xl mb-12 font-medium">${state.settings.heroSub}</p>
            <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="#apply" class="btn-brand px-10 py-5 rounded-2xl font-black text-lg shadow-2xl">Start Your Journey</a>
              <a href="#investors" class="px-10 py-5 bg-white border-2 border-slate-100 rounded-2xl font-black text-lg hover:border-brand-blue transition">Investor Center</a>
            </div>
          </div>
          <div class="lg:w-2/5 w-full">
            <div class="bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-2xl">
                <h3 class="text-2xl font-extrabold text-slate-800 mb-6 flex items-center">📊 EMI Estimator</h3>
                <div class="space-y-6">
                    <div>
                        <div class="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2"><span>Principal</span> <span class="text-brand-pink">₹ 5,00,000</span></div>
                        <input type="range" class="w-full accent-brand-blue h-2 bg-slate-100 rounded-lg" min="10000" max="1000000" value="500000">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-4 bg-brand-lightBlue rounded-2xl"><p class="text-[10px] uppercase font-bold text-brand-blue">Interest</p><p class="text-xl font-black">10.5%</p></div>
                        <div class="p-4 bg-brand-lightPink rounded-2xl"><p class="text-[10px] uppercase font-bold text-brand-pink">Monthly</p><p class="text-xl font-black">₹ 8,450</p></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          ${state.products.slice(0, 3).map((p: any) => `
            <div class="p-10 rounded-[2.5rem] border border-slate-50 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition duration-500">
              <h3 class="text-2xl font-bold mb-4">${p.name}</h3>
              <p class="text-slate-500 mb-8 leading-relaxed">${p.overview}</p>
              <a href="#product/${p.id}" class="text-brand-pink font-black text-xs uppercase tracking-widest">Learn More &rarr;</a>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  },
  
  about: () => `
    <section class="bg-brand-lightBlue py-24 text-center">
      <h1 class="text-5xl font-black mb-6">Our Legacy of <span class="text-gradient">Trust</span></h1>
      <p class="text-xl max-w-3xl mx-auto text-slate-600">Empowering millions through secure financial instruments since inception.</p>
    </section>
    <section class="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
            <h2 class="text-3xl font-bold mb-6">Built on Mutual Benefit</h2>
            <p class="text-slate-600 mb-6 leading-relaxed">EIBIL Nidhi Limited operates under strict guidelines of the Ministry of Corporate Affairs. Our primary objective is to promote thrift and savings habit among our members, providing financial assistance at competitive rates.</p>
            <div class="flex gap-4">
                <div class="flex-1 p-6 bg-brand-lightBlue rounded-2xl text-center"><p class="text-2xl font-black text-brand-blue">100%</p><p class="text-xs uppercase font-bold">Compliant</p></div>
                <div class="flex-1 p-6 bg-brand-lightPink rounded-2xl text-center"><p class="text-2xl font-black text-brand-pink">Member</p><p class="text-xs uppercase font-bold">First</p></div>
            </div>
        </div>
        <div class="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" alt="About EIBIL" class="w-full h-[400px] object-cover">
        </div>
    </section>
  `,

  product: (id: string) => {
    const p = state.products.find((item: any) => item.id === id);
    if (!p) return `<div class="py-40 text-center"><h2 class="text-2xl font-bold">Product not found.</h2><a href="#home" class="text-brand-blue underline">Back Home</a></div>`;
    const isLoan = p.category === 'loan';
    return `
      <section class="${isLoan ? 'bg-brand-lightBlue' : 'bg-brand-lightPink'} py-32 px-4">
          <div class="max-w-7xl mx-auto">
              <span class="text-xs font-black uppercase text-slate-400 tracking-widest mb-4 block">${p.category}</span>
              <h1 class="text-5xl md:text-7xl font-black text-slate-900 mb-8">${p.name}</h1>
              <p class="text-2xl text-slate-600 max-w-3xl leading-relaxed">${p.overview}</p>
              <div class="mt-12 p-8 bg-white inline-flex flex-col rounded-3xl shadow-xl">
                  <span class="text-[10px] font-black uppercase text-slate-400">Exclusive Interest</span>
                  <span class="text-4xl font-black text-gradient">${p.interestRate}</span>
              </div>
          </div>
      </section>
      <section class="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div class="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-50">
              <h3 class="text-2xl font-bold mb-8 flex items-center"><span class="mr-3">⭐</span> Key Benefits</h3>
              <ul class="space-y-4">
                  ${p.features.map((f: string) => `<li class="flex items-center gap-3"><span class="text-brand-blue font-bold">✓</span> ${f}</li>`).join('')}
              </ul>
          </div>
          <div class="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl">
              <h3 class="text-2xl font-bold mb-8 text-brand-pink">Required Documents</h3>
              <ul class="space-y-4 text-slate-300">
                  ${p.documents.map((d: string) => `<li class="flex items-center gap-3">📂 ${d}</li>`).join('')}
              </ul>
              <a href="#apply" class="mt-12 block w-full py-5 btn-brand text-center rounded-2xl font-black shadow-lg shadow-brand-pink/20">Apply Online Now</a>
          </div>
      </section>
    `;
  },

  investors: () => `
    <section class="bg-slate-900 py-32 text-center text-white">
      <h1 class="text-5xl font-black mb-6">Investor <span class="text-brand-pink">Center</span></h1>
      <p class="text-slate-400 max-w-2xl mx-auto">Access financial disclosures, governance reports, and statutory filings.</p>
    </section>
    <section class="py-20 max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-12">
        <div class="lg:col-span-1">
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl sticky top-24">
                <h4 class="text-xs font-black uppercase text-slate-400 mb-6 px-2">Compliance Map</h4>
                <div class="space-y-2">
                    ${INVESTOR_CATEGORIES.map(cat => `
                        <button onclick="handleInvestorTab('${cat}')" class="w-full text-left p-4 rounded-xl font-bold text-sm transition ${state.activeInvestorCat === cat ? 'bg-brand-blue text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}">
                            ${cat}
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="lg:col-span-3">
            <div class="bg-white p-12 rounded-[3rem] border border-slate-50 shadow-sm">
                <h2 class="text-3xl font-black mb-10">${state.activeInvestorCat}</h2>
                <div class="space-y-6">
                    ${[1,2,3].map(i => `
                        <div class="p-8 bg-slate-50 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white hover:shadow-xl transition duration-500">
                            <div class="flex items-center gap-6">
                                <div class="text-3xl">📄</div>
                                <div>
                                    <h4 class="text-lg font-bold">${state.activeInvestorCat} Report 202${i}</h4>
                                    <p class="text-xs text-slate-400 uppercase font-bold">PDF Format • 1.2 MB</p>
                                </div>
                            </div>
                            <button class="px-8 py-3 bg-white border-2 border-slate-100 text-slate-800 rounded-xl font-black text-sm hover:border-brand-pink transition">Download</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>
  `,

  apply: () => `
    <section class="py-24 bg-brand-lightBlue text-center">
      <h1 class="text-5xl font-black">Online <span class="text-gradient">Application</span></h1>
    </section>
    <section class="max-w-4xl mx-auto px-4 -mt-16 relative z-10 mb-32">
        <form id="apply-form" class="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl space-y-8 border border-white">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <label class="text-[10px] font-black uppercase text-slate-400 mb-2 block">Full Name</label>
                    <input required name="name" class="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 ring-brand-blue/5 outline-none transition font-bold">
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase text-slate-400 mb-2 block">Mobile Number</label>
                    <input required name="mobile" type="tel" class="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 ring-brand-blue/5 outline-none transition font-bold">
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase text-slate-400 mb-2 block">Desired Product</label>
                    <select name="product" class="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 ring-brand-blue/5 outline-none transition font-bold appearance-none">
                        ${state.products.map((p: any) => `<option value="${p.id}">${p.name}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase text-slate-400 mb-2 block">Approx Amount (₹)</label>
                    <input required name="amount" type="number" class="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 ring-brand-blue/5 outline-none transition font-bold">
                </div>
            </div>
            <button type="submit" class="w-full py-6 btn-brand rounded-3xl font-black text-xl shadow-xl shadow-brand-pink/20">Submit Application</button>
        </form>
    </section>
  `,

  contact: () => `
    <section class="py-24 bg-brand-lightPink text-center">
        <h1 class="text-5xl font-black text-slate-900">Let's <span class="text-gradient">Connect</span></h1>
    </section>
    <section class="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-3 gap-10">
        <div class="bg-white p-12 rounded-[2.5rem] shadow-xl text-center border border-slate-50">
            <div class="w-20 h-20 bg-brand-lightBlue text-brand-blue rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">📞</div>
            <h3 class="text-xl font-bold mb-4">Voice Support</h3>
            <p class="text-slate-500 font-medium">${state.settings.phone}</p>
        </div>
        <div class="bg-white p-12 rounded-[2.5rem] shadow-xl text-center border border-slate-50">
            <div class="w-20 h-20 bg-brand-lightPink text-brand-pink rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">✉️</div>
            <h3 class="text-xl font-bold mb-4">Email</h3>
            <p class="text-slate-500 font-medium">support@eibilnidhi.com</p>
        </div>
        <div class="bg-white p-12 rounded-[2.5rem] shadow-xl text-center border border-slate-50">
            <div class="w-20 h-20 bg-brand-lightBlue text-brand-blue rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">🏢</div>
            <h3 class="text-xl font-bold mb-4">Visit Us</h3>
            <p class="text-slate-500 font-medium">Level 4, Finance Tower, BKC, Mumbai</p>
        </div>
    </section>
  `,

  admin: () => {
    if (!state.isAdmin) {
      return `
        <div class="min-h-[70vh] flex items-center justify-center px-4">
            <div class="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 max-w-md w-full">
                <div class="text-4xl mb-8 text-center">🔐</div>
                <h2 class="text-3xl font-black text-center mb-8">Admin Access</h2>
                <form id="admin-login-form" class="space-y-6">
                    <input type="password" name="pass" class="w-full p-5 bg-slate-50 border rounded-2xl outline-none focus:ring-4 ring-brand-blue/5 transition font-bold" placeholder="Access Key">
                    <button type="submit" class="w-full btn-brand py-5 rounded-2xl font-black">Authorize</button>
                </form>
                <p class="mt-8 text-center text-xs font-bold text-slate-300 uppercase tracking-widest">Employee Login Only</p>
            </div>
        </div>
      `;
    }
    return `
      <section class="max-w-7xl mx-auto px-4 py-20">
          <div class="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
              <h1 class="text-5xl font-black">Control <span class="text-brand-pink">Panel</span></h1>
              <button onclick="handleLogout()" class="px-8 py-3 bg-white text-red-500 font-bold border rounded-xl hover:bg-red-50 transition">Sign Out</button>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12">
              <div class="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-50">
                  <h3 class="text-2xl font-bold mb-8">Global Branding</h3>
                  <form id="settings-form" class="space-y-6">
                      <div><label class="text-[10px] font-black uppercase text-slate-400">Company Name</label>
                      <input name="companyName" class="w-full p-4 bg-slate-50 border rounded-xl font-bold" value="${state.settings.companyName}"></div>
                      <div><label class="text-[10px] font-black uppercase text-slate-400">Tagline</label>
                      <input name="tagline" class="w-full p-4 bg-slate-50 border rounded-xl font-bold" value="${state.settings.tagline}"></div>
                      <button type="submit" class="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold shadow-xl">Apply Settings</button>
                  </form>
              </div>
              <div class="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-50">
                  <h3 class="text-2xl font-bold mb-8">Live Statistics</h3>
                  <div class="grid grid-cols-2 gap-6">
                      <div class="p-6 bg-brand-lightBlue rounded-3xl"><p class="text-xs font-bold text-brand-blue uppercase">Products</p><p class="text-3xl font-black">${state.products.length}</p></div>
                      <div class="p-6 bg-brand-lightPink rounded-3xl"><p class="text-xs font-bold text-brand-pink uppercase">Pending Apps</p><p class="text-3xl font-black">12</p></div>
                  </div>
              </div>
          </div>
      </section>
    `;
  }
};

// --- Engine Logic ---
const render = () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  const content = document.getElementById('app-content');
  
  window.scrollTo(0, 0);

  if (!content) return;

  // Router
  if (hash.startsWith('product/')) {
    const id = hash.split('/')[1];
    content.innerHTML = templates.product(id);
  } else if (templates[hash]) {
    content.innerHTML = templates[hash]();
  } else {
    content.innerHTML = templates.home();
  }

  // Bind Dynamic Events
  bindEvents();
};

const bindEvents = () => {
  // Application Form
  // Fix: Cast element to HTMLFormElement to resolve type mismatch with FormData
  const applyForm = document.getElementById('apply-form') as HTMLFormElement;
  if (applyForm) {
    applyForm.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(applyForm);
      alert(`Success! Application ID: EIBIL-${Math.floor(10000 + Math.random() * 90000)}\nOur executive will reach out to ${formData.get('name')} shortly.`);
      window.location.hash = '#home';
    };
  }

  // Admin Login
  // Fix: Cast element to HTMLFormElement to access form elements correctly
  const adminForm = document.getElementById('admin-login-form') as HTMLFormElement;
  if (adminForm) {
    adminForm.onsubmit = (e) => {
      e.preventDefault();
      // Fix: Access named form element with proper type casting
      const pass = (adminForm.elements.namedItem('pass') as HTMLInputElement).value;
      if (pass === 'admin123') {
        state.isAdmin = true;
        saveToLocal();
        updateGlobalUI();
        render();
      } else {
        alert('Invalid Access Key');
      }
    };
  }

  // Admin Settings
  // Fix: Cast element to HTMLFormElement to access named inputs
  const settingsForm = document.getElementById('settings-form') as HTMLFormElement;
  if (settingsForm) {
    settingsForm.onsubmit = (e) => {
      e.preventDefault();
      // Fix: Use namedItem and type casting to safely retrieve input values
      state.settings.companyName = (settingsForm.elements.namedItem('companyName') as HTMLInputElement).value;
      state.settings.tagline = (settingsForm.elements.namedItem('tagline') as HTMLInputElement).value;
      saveToLocal();
      updateGlobalUI();
      alert('Global settings committed successfully.');
    };
  }
};

// --- Global Handlers (Exposed to window) ---
// Fix: Cast window to any to allow defining custom global handlers in a TypeScript environment
(window as any).handleInvestorTab = (cat: string) => {
  state.activeInvestorCat = cat;
  render();
};

// Fix: Cast window to any to allow defining custom global handlers in a TypeScript environment
(window as any).handleLogout = () => {
  state.isAdmin = false;
  saveToLocal();
  updateGlobalUI();
  window.location.hash = '#home';
};

// --- Init ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.onclick = () => {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) mobileMenu.classList.toggle('hidden');
  };
}

window.onhashchange = render;
window.onload = () => {
  updateGlobalUI();
  render();
};
