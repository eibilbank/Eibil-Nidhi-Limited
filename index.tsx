
/**
 * EIBIL NIDHI LIMITED - Complete Vanilla JS SPA Engine
 * Professional Financial Portal with Admin & Member Systems
 */

// --- Initial Data ---
const PRODUCTS = [
  { id: 'gold-loan', name: 'Gold Loan', category: 'loan', overview: 'Instant liquidity against your gold ornaments with maximum LTV.', features: ['Instant Payout', 'Safety Vaults', 'Low Interest'], eligibility: ['18-70 Years', 'Owner of Gold'], documents: ['Aadhar', 'PAN'], interestRate: '9.9% p.a.' },
  { id: 'online-gold-loan', name: 'Online Gold Loan', category: 'loan', overview: 'Manage your gold loan digitally from anywhere.', features: ['24/7 Access', 'Online Renewals'], eligibility: ['Existing Members'], documents: ['Member ID', 'KYC'], interestRate: '10.5% p.a.' },
  { id: 'doorstep-gold-loan', name: 'Door Step Gold Loan', category: 'loan', overview: 'Service at your home for gold valuation.', features: ['Convenience', 'Instant Transfer'], eligibility: ['Residents'], documents: ['Address Proof'], interestRate: '11% p.a.' },
  { id: 'property-loan', name: 'Loan Against Property', category: 'loan', overview: 'Big funds against residential/commercial property.', features: ['High Value', '15yr Tenure'], eligibility: ['Property Owners'], documents: ['Property Deeds', 'ITR'], interestRate: '11.5% p.a.' },
  { id: 'instant-property-loan', name: 'Instant Property Loan', category: 'loan', overview: 'Fast-track property loans for urgent needs.', features: ['48hr Approval', 'No Prepayment Fees'], eligibility: ['Income Proof'], documents: ['Title Deeds'], interestRate: '12% p.a.' },
  { id: 'term-deposit', name: 'Term Deposit', category: 'deposit', overview: 'High-yield fixed investment plans.', features: ['Monthly Interest', 'Flexible Tenure'], eligibility: ['Members'], documents: ['KYC', 'Deposit Form'], interestRate: 'Up to 12.5%' },
  { id: 'recurring-deposit', name: 'Recurring Deposit', category: 'deposit', overview: 'Save monthly and earn high returns.', features: ['Compounded Interest'], eligibility: ['All Residents'], documents: ['ID Proof'], interestRate: '8% - 11%' },
  { id: 'savings-deposit', name: 'Savings Deposit', category: 'deposit', overview: 'Liquid savings with attractive daily interest.', features: ['Rupay Card', 'Mobile App'], eligibility: ['Members'], documents: ['PAN', 'Aadhar'], interestRate: '6.5% p.a.' },
  { id: 'loan-against-deposit', name: 'Loan Against Deposit', category: 'loan', overview: 'Borrow against your own FD/RD without breaking it.', features: ['90% LTV', 'Instant Approval'], eligibility: ['FD/RD Holders'], documents: ['Original Receipt'], interestRate: 'Deposit + 2%' }
];

const INVESTOR_CATS = ['Notice to Shareholders', 'Financial Results', 'Board Governance', 'Committees of the Board', 'Fair Practice Code', 'Policies', 'Members / Investors', 'Annual General Meeting', 'Annual Returns', 'Disclosure on RPT', 'Auction', 'CSR', 'Extract of Form 5A'];

const BRANCHES = [
  { id: 1, name: 'Mumbai Head Office', address: 'BKC, Mumbai, Maharashtra 400051', phone: '022-12345678' },
  { id: 2, name: 'Delhi Regional Branch', address: 'Connaught Place, New Delhi 110001', phone: '011-87654321' },
  { id: 3, name: 'Bangalore Hub', address: 'Indiranagar, Bangalore 560038', phone: '080-11223344' }
];

// --- Global State ---
let state = {
  isAdmin: localStorage.getItem('eibil_admin') === 'true',
  activeInvestorCat: INVESTOR_CATS[0],
  settings: JSON.parse(localStorage.getItem('eibil_settings') || '{"name":"EIBIL NIDHI","suffix":"LIMITED","tagline":"Modern Financial Trust","phone":"1800-123-4567"}'),
  applications: JSON.parse(localStorage.getItem('eibil_apps') || '[]'),
  documents: JSON.parse(localStorage.getItem('eibil_docs') || '[]')
};

// --- Core Engine ---
const updateUI = () => {
  const navName = document.getElementById('nav-company-name');
  if (navName) navName.innerHTML = `${state.settings.name} <span class="text-brand-pink">${state.settings.suffix}</span>`;
  const footerName = document.getElementById('footer-company-name');
  if (footerName) footerName.textContent = `${state.settings.name} ${state.settings.suffix}`;
  const adminBadge = document.getElementById('admin-badge');
  if (adminBadge) adminBadge.classList.toggle('hidden', !state.isAdmin);

  // Dropdown Lists
  const loansNav = document.getElementById('nav-loans-list');
  const depositsNav = document.getElementById('nav-deposits-list');
  if (loansNav) loansNav.innerHTML = PRODUCTS.filter(p => p.category === 'loan').map(p => `<a href="#product/${p.id}" class="block p-2 text-sm hover:bg-slate-50 rounded-lg">${p.name}</a>`).join('');
  if (depositsNav) depositsNav.innerHTML = PRODUCTS.filter(p => p.category === 'deposit').map(p => `<a href="#product/${p.id}" class="block p-2 text-sm hover:bg-slate-50 rounded-lg">${p.name}</a>`).join('');
};

const templates = {
  home: () => `
    <section class="py-24 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[80vh]">
      <div class="lg:w-3/5">
        <h1 class="text-6xl lg:text-8xl font-black text-slate-900 leading-tight tracking-tighter mb-8">Invest in your <span class="text-gradient">Financial Freedom.</span></h1>
        <p class="text-xl text-slate-500 mb-12 font-medium">Empowering millions with trusted Nidhi schemes and instant loan solutions. Government of India compliant.</p>
        <div class="flex gap-4"><a href="#apply" class="btn-brand px-10 py-5 rounded-2xl font-black text-lg">Apply Online</a><a href="#about" class="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-black text-lg">Our Legacy</a></div>
      </div>
      <div class="lg:w-2/5 w-full bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50">
        <h3 class="text-2xl font-black mb-8">EMI Calculator</h3>
        <div class="space-y-6">
          <input type="range" class="w-full accent-brand-blue" min="10000" max="2500000" value="500000">
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 bg-slate-50 rounded-2xl"><p class="text-xs font-bold text-slate-400 mb-1">Interest</p><p class="text-xl font-black">9.9%*</p></div>
            <div class="p-4 bg-slate-50 rounded-2xl"><p class="text-xs font-bold text-slate-400 mb-1">Monthly</p><p class="text-xl font-black">₹ 8,450</p></div>
          </div>
          <a href="#apply" class="w-full block text-center py-5 bg-slate-900 text-white rounded-2xl font-black">Get This Loan</a>
        </div>
      </div>
    </section>
    <section class="py-24 bg-slate-50"><div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
      ${PRODUCTS.slice(0, 6).map(p => `<a href="#product/${p.id}" class="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition border border-slate-100"><h3 class="text-2xl font-bold mb-4">${p.name}</h3><p class="text-slate-500 mb-6 line-clamp-2">${p.overview}</p><span class="text-brand-pink font-black text-xs uppercase">Learn More &rarr;</span></a>`).join('')}
    </div></section>
  `,
  about: () => `<section class="py-32 text-center bg-brand-lightBlue"><h1 class="text-6xl font-black mb-6">Our Legacy</h1><p class="max-w-2xl mx-auto text-xl text-slate-600">Established to promote thrift and financial habbit among members.</p></section>`,
  product: (id) => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return `Page not found`;
    return `
      <section class="py-32 px-4 bg-brand-lightBlue">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-6xl font-black mb-8">${p.name}</h1>
          <p class="text-2xl text-slate-600 mb-10 max-w-3xl">${p.overview}</p>
          <div class="p-8 bg-white inline-block rounded-3xl shadow-xl font-black text-4xl text-gradient">${p.interestRate}</div>
        </div>
      </section>
      <section class="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
        <div><h2 class="text-3xl font-black mb-8">Features</h2><ul class="space-y-4">${p.features.map(f => `<li class="flex items-center gap-3 font-bold">✅ ${f}</li>`).join('')}</ul></div>
        <div><h2 class="text-3xl font-black mb-8">Eligibility</h2><ul class="space-y-4">${p.eligibility.map(e => `<li class="flex items-center gap-3 font-bold">👤 ${e}</li>`).join('')}</ul></div>
        <a href="#apply" class="btn-brand py-6 px-12 rounded-2xl font-black text-xl text-center md:inline-block">Apply for ${p.name}</a>
      </section>
    `;
  },
  investors: () => `
    <section class="py-24 px-4 bg-slate-900 text-white text-center"><h1 class="text-5xl font-black">Investor Center</h1></section>
    <section class="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12">
      <div class="lg:w-1/4 bg-white p-6 rounded-3xl shadow-xl space-y-2 h-fit sticky top-24">
        ${INVESTOR_CATS.map(c => `<button onclick="setInvestorCat('${c}')" class="w-full text-left p-4 rounded-xl font-bold transition ${state.activeInvestorCat === c ? 'bg-brand-blue text-white' : 'hover:bg-slate-50'}">${c}</button>`).join('')}
      </div>
      <div class="lg:w-3/4 bg-white p-12 rounded-[3rem] shadow-sm">
        <h2 class="text-4xl font-black mb-10">${state.activeInvestorCat}</h2>
        <div class="space-y-4">${[2024, 2023, 2022].map(y => `<div class="p-8 bg-slate-50 rounded-2xl flex justify-between items-center"><span class="font-bold text-xl">${state.activeInvestorCat} - FY ${y}</span><button class="bg-white px-6 py-2 rounded-xl border border-slate-200 font-bold hover:border-brand-pink transition">Download PDF</button></div>`).join('')}</div>
      </div>
    </section>
  `,
  apply: () => `
    <section class="py-32 px-4 max-w-4xl mx-auto">
      <form onsubmit="handleApply(event)" class="bg-white p-16 rounded-[3rem] shadow-2xl space-y-8">
        <h2 class="text-4xl font-black mb-8">Apply Online</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <input required name="name" placeholder="Full Name" class="w-full p-5 bg-slate-50 rounded-2xl border font-bold">
          <input required name="mobile" placeholder="Mobile Number" class="w-full p-5 bg-slate-50 rounded-2xl border font-bold">
          <select name="type" class="w-full p-5 bg-slate-50 rounded-2xl border font-bold">${PRODUCTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select>
          <input required name="amount" type="number" placeholder="Loan Amount" class="w-full p-5 bg-slate-50 rounded-2xl border font-bold">
        </div>
        <button type="submit" class="w-full btn-brand py-6 rounded-2xl font-black text-xl">Submit Application</button>
      </form>
    </section>
  `,
  branches: () => `<section class="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">${BRANCHES.map(b => `<div class="bg-white p-10 rounded-[3rem] shadow-sm text-center border"> <h3 class="text-2xl font-bold mb-2">${b.name}</h3><p class="text-slate-500 mb-6">${b.address}</p><p class="text-brand-blue font-black">${b.phone}</p></div>`).join('')}</section>`,
  contact: () => `<section class="py-32 text-center px-4"><h1 class="text-6xl font-black mb-8">Contact Us</h1><p class="text-xl">Email: support@eibilnidhi.com | Toll Free: ${state.settings.phone}</p></section>`,
  admin: () => {
    if (!state.isAdmin) return `<div class="min-h-[70vh] flex items-center justify-center"><form onsubmit="handleAdminLogin(event)" class="bg-white p-12 rounded-[2.5rem] shadow-2xl max-w-md w-full"> <h2 class="text-3xl font-black mb-8 text-center">Admin Login</h2><input type="password" name="pass" class="w-full p-5 bg-slate-50 border rounded-2xl font-black text-center mb-6" placeholder="Password"><button class="w-full btn-brand py-5 rounded-2xl font-black">Authorize</button></form></div>`;
    return `
      <section class="max-w-7xl mx-auto px-4 py-20">
        <div class="flex justify-between items-center mb-16">
          <h1 class="text-6xl font-black">Admin Panel</h1>
          <button onclick="handleAdminLogout()" class="px-8 py-3 bg-red-50 text-red-500 font-bold rounded-xl">Logout</button>
        </div>
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-12">
            <div class="bg-white p-12 rounded-[3rem] shadow-xl">
              <h3 class="text-2xl font-black mb-8">Loan Applications</h3>
              <table class="w-full text-left">
                <tr class="text-xs font-black text-slate-400 uppercase border-b"><th class="pb-4">Member</th><th class="pb-4">Type</th><th class="pb-4">Amount</th><th class="pb-4">Status</th></tr>
                ${state.applications.length ? state.applications.map(a => `<tr class="border-b"><td class="py-4 font-bold">${a.name}</td><td class="py-4">${a.type}</td><td class="py-4">₹${a.amount}</td><td class="py-4"><span class="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-xs font-black">PENDING</span></td></tr>`).join('') : '<tr><td colspan="4" class="py-10 text-center text-slate-400">No applications yet</td></tr>'}
              </table>
            </div>
          </div>
          <div class="lg:col-span-1 space-y-12">
            <div class="bg-slate-900 p-12 rounded-[3rem] text-white">
              <h3 class="text-2xl font-black mb-8">Site Settings</h3>
              <form onsubmit="handleSaveSettings(event)" class="space-y-6">
                <input name="name" value="${state.settings.name}" class="w-full bg-white/5 border border-white/10 p-4 rounded-xl">
                <input name="tagline" value="${state.settings.tagline}" class="w-full bg-white/5 border border-white/10 p-4 rounded-xl">
                <button class="w-full py-4 bg-brand-pink text-white rounded-xl font-black">Update Info</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};

const render = () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  const content = document.getElementById('app-content');
  if (!content) return;
  if (hash.startsWith('product/')) content.innerHTML = templates.product(hash.split('/')[1]);
  else content.innerHTML = templates[hash] ? templates[hash]() : templates.home();
  updateUI();
  window.scrollTo(0, 0);
};

// --- Handlers ---
// Fix: Using type assertions to attach custom handlers to the global window object in TypeScript
(window as any).setInvestorCat = (c: string) => { state.activeInvestorCat = c; render(); };
(window as any).handleApply = (e: any) => {
  e.preventDefault();
  const f = new FormData(e.target);
  state.applications.push(Object.fromEntries(f));
  localStorage.setItem('eibil_apps', JSON.stringify(state.applications));
  alert('Application Submitted Successfully!');
  window.location.hash = '#home';
};
(window as any).handleAdminLogin = (e: any) => {
  e.preventDefault();
  if (e.target.pass.value === 'admin123') { state.isAdmin = true; localStorage.setItem('eibil_admin', 'true'); render(); }
  else alert('Access Denied');
};
(window as any).handleAdminLogout = () => { state.isAdmin = false; localStorage.setItem('eibil_admin', 'false'); render(); };
(window as any).handleSaveSettings = (e: any) => {
  e.preventDefault();
  state.settings.name = e.target.name.value;
  state.settings.tagline = e.target.tagline.value;
  localStorage.setItem('eibil_settings', JSON.stringify(state.settings));
  alert('Settings Saved');
  render();
};

window.onhashchange = render;
window.onload = render;
