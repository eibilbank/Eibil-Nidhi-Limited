
/**
 * EIBIL NIDHI LIMITED - Pure Vanilla JS Engine
 * Rebuilt for perfect navigation and 100% performance.
 */

const PRODUCTS = [
    { id: 'gold-loan', name: 'Gold Loan', category: 'loan', overview: 'Instant cash against your gold jewelry with maximum valuation.', features: ['Instant Disbursal', 'Minimal Paperwork', 'Safety Vaults'], eligibility: ['Age 18-70', 'Owner of Gold'], documents: ['Aadhar', 'PAN'], interestRate: 'Starts from 9.9% p.a.' },
    { id: 'online-gold-loan', name: 'Online Gold Loan', category: 'loan', overview: 'Digital-first gold loan experience from home.', features: ['24/7 Access', 'Instant Top-up'], eligibility: ['Existing Members'], documents: ['Membership ID'], interestRate: '10.5% p.a.' },
    { id: 'doorstep-gold-loan', name: 'Door Step Gold Loan', category: 'loan', overview: 'We bring the bank to your home for gold valuation.', features: ['Valuation at Home', 'Safe & Secure'], eligibility: ['Local Residents'], documents: ['KYC Docs'], interestRate: '11.0% p.a.' },
    { id: 'property-loan', name: 'Loan Against Property', category: 'loan', overview: 'Leverage your real estate assets for major funding.', features: ['High Loan Amount', 'Tenure up to 15 Years'], eligibility: ['Property Owners'], documents: ['Title Deeds', 'ITR'], interestRate: '11.5% p.a.' },
    { id: 'instant-property-loan', name: 'Instant Property Loan', category: 'loan', overview: 'Fast-track approvals for property owners.', features: ['48-hour Approvals', 'Low Fee'], eligibility: ['Clear Title Holders'], documents: ['Tax Receipts'], interestRate: '12.0% p.a.' },
    { id: 'term-deposit', name: 'Term Deposit (FD)', category: 'deposit', overview: 'High-yield investment plans.', features: ['High Rates', 'Monthly Payouts'], eligibility: ['EIBIL Members'], documents: ['Form + KYC'], interestRate: 'Up to 12.5% p.a.' },
    { id: 'recurring-deposit', name: 'Recurring Deposit', category: 'deposit', overview: 'Build savings habit with fixed monthly amounts.', features: ['Compounded Growth', 'High Returns'], eligibility: ['Residents'], documents: ['ID Proof'], interestRate: 'Up to 11.0% p.a.' },
    { id: 'savings-deposit', name: 'Savings Deposit', category: 'deposit', overview: 'Liquid savings with modern features.', features: ['Daily Interest', 'Mobile Access'], eligibility: ['All Members'], documents: ['KYC'], interestRate: '6.5% p.a.' },
    { id: 'loan-against-deposit', name: 'Loan Against Deposit', category: 'loan', overview: 'Borrow against your own FD/RD without breaking it.', features: ['90% LTV', 'Instant Approval'], eligibility: ['Active FD Holders'], documents: ['Receipt'], interestRate: 'Deposit + 2%' }
];

const INVESTOR_CATS = ['Notice to Shareholders', 'Financial Results', 'Board Governance', 'CSR', 'Policies'];
const BRANCHES = [
    { name: 'Mumbai Head Office', address: 'BKC, Mumbai, Maharashtra 400051', phone: '022-1234-5678' },
    { name: 'Bangalore Hub', address: 'Indiranagar, Bangalore 560038', phone: '080-8765-4321' }
];

let state = {
    isAdmin: localStorage.getItem('eibil_admin') === 'true',
    activeInvestor: INVESTOR_CATS[0]
};

const views = {
    home: () => `
        <section class="py-24 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div class="lg:w-3/5">
                <h1 class="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
                    Invest in your <br/><span class="text-gradient">Financial Future.</span>
                </h1>
                <p class="text-xl text-slate-500 mb-12 max-w-xl font-medium">Trusted by thousands for gold loans and high-yield deposits.</p>
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="#apply" class="btn-brand px-10 py-5 rounded-2xl font-black text-lg text-center">Apply Online</a>
                    <a href="#investors" class="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-black text-lg text-center">Investor Portal</a>
                </div>
            </div>
            <div class="lg:w-2/5 w-full bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-50">
                <h3 class="text-2xl font-black mb-8">EMI Calculator</h3>
                <div class="space-y-8">
                    <input type="range" class="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue" min="10000" max="1000000" step="10000">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-6 bg-slate-50 rounded-2xl"><p class="text-xs font-bold text-slate-400 mb-1 uppercase">Interest</p><p class="text-xl font-black">9.9%*</p></div>
                        <div class="p-6 bg-slate-50 rounded-2xl"><p class="text-xs font-bold text-slate-400 mb-1 uppercase">EMI</p><p class="text-xl font-black">₹ 2,450</p></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                ${PRODUCTS.slice(0, 6).map(p => `
                    <a href="#product/${p.id}" class="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 block hover:shadow-xl transition">
                        <h3 class="text-2xl font-bold mb-4">${p.name}</h3>
                        <p class="text-slate-500 text-sm mb-8 line-clamp-2">${p.overview}</p>
                        <span class="text-[10px] font-black uppercase text-brand-pink tracking-widest">Learn More &rarr;</span>
                    </a>
                `).join('')}
            </div>
        </section>
    `,
    about: () => `<section class="py-32 bg-slate-50 text-center px-4"><h1 class="text-6xl font-black mb-8">About <span class="text-gradient">EIBIL.</span></h1><p class="max-w-3xl mx-auto text-xl text-slate-600">Established to foster financial independence through thrift and savings.</p></section>`,
    product: (id) => {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return `<div class="py-40 text-center">Product Not Found</div>`;
        return `
            <section class="py-32 px-4 bg-slate-50">
                <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    <div>
                        <h1 class="text-6xl font-black mb-8">${p.name}</h1>
                        <p class="text-2xl text-slate-500 mb-10 leading-relaxed">${p.overview}</p>
                        <div class="p-10 bg-white inline-block rounded-3xl shadow-xl font-black text-4xl text-gradient">${p.interestRate}</div>
                    </div>
                    <div class="bg-white p-12 rounded-[3rem] shadow-2xl space-y-8">
                        <div><h3 class="text-xl font-black mb-4">Features</h3><ul class="space-y-2 font-bold text-slate-600">${p.features.map(f => `<li>✅ ${f}</li>`).join('')}</ul></div>
                        <a href="#apply" class="btn-brand block w-full py-5 text-center rounded-2xl font-black text-xl shadow-lg">Apply Now</a>
                    </div>
                </div>
            </section>
        `;
    },
    investors: () => `
        <section class="py-20 bg-slate-900 text-white text-center"><h1 class="text-4xl font-black">Investor Relations</h1></section>
        <div class="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12">
            <div class="lg:w-1/4 space-y-2">
                ${INVESTOR_CATS.map(c => `<button onclick="setInvestorCat('${c}')" class="w-full text-left p-4 rounded-xl font-bold ${state.activeInvestor === c ? 'bg-brand-blue text-white' : 'hover:bg-slate-100'}">${c}</button>`).join('')}
            </div>
            <div class="lg:w-3/4 bg-white p-12 rounded-3xl shadow-sm border">
                <h2 class="text-3xl font-black mb-8">${state.activeInvestor}</h2>
                <div class="space-y-4">
                    ${[2024, 2023].map(y => `<div class="p-6 bg-slate-50 rounded-xl flex justify-between items-center"><span>${state.activeInvestor} - FY ${y}</span><button class="bg-white px-4 py-2 border rounded font-bold text-xs">Download PDF</button></div>`).join('')}
                </div>
            </div>
        </div>
    `,
    apply: () => `
        <section class="py-24 px-4 max-w-4xl mx-auto">
            <form onsubmit="handleApply(event)" class="bg-white p-12 rounded-[3rem] shadow-2xl border space-y-8">
                <h2 class="text-4xl font-black text-center mb-8">Apply <span class="text-gradient">Online</span></h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <input required name="name" type="text" class="w-full p-5 bg-slate-50 border rounded-2xl font-bold" placeholder="Full Name">
                    <input required name="mobile" type="tel" class="w-full p-5 bg-slate-50 border rounded-2xl font-bold" placeholder="Mobile">
                    <select name="type" class="w-full p-5 bg-slate-50 border rounded-2xl font-bold">
                        ${PRODUCTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                    </select>
                    <input required name="amount" type="number" class="w-full p-5 bg-slate-50 border rounded-2xl font-bold" placeholder="Amount (₹)">
                </div>
                <button class="w-full btn-brand py-6 rounded-3xl font-black text-2xl shadow-xl">Submit Application</button>
            </form>
        </section>
    `,
    branches: () => `<section class="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">${BRANCHES.map(b => `<div class="bg-white p-10 rounded-[2.5rem] border shadow-sm text-center"> <h3 class="text-2xl font-bold mb-4">${b.name}</h3><p class="text-slate-500 mb-6">${b.address}</p><p class="text-brand-blue font-black">${b.phone}</p></div>`).join('')}</section>`,
    contact: () => `<section class="py-32 text-center"><h1 class="text-6xl font-black mb-8">Contact Us</h1><p class="text-xl">support@eibilnidhi.com | 1800-123-4567</p></section>`,
    admin: () => {
        if (!state.isAdmin) return `
            <div class="py-40 flex items-center justify-center">
                <form onsubmit="handleAdmin(event)" class="bg-white p-12 rounded-3xl shadow-xl max-w-sm w-full border">
                    <h2 class="text-2xl font-black mb-6 text-center">Admin Login</h2>
                    <input type="password" name="pass" class="w-full p-4 bg-slate-50 border rounded-xl font-bold text-center mb-6" placeholder="Access Code">
                    <button class="w-full btn-brand py-4 rounded-xl font-black">Login</button>
                </form>
            </div>
        `;
        return `<section class="py-24 max-w-7xl mx-auto px-4"><div class="flex justify-between items-center mb-12"><h1 class="text-5xl font-black">Dashboard</h1><button onclick="logout()" class="text-red-500 font-bold">Logout</button></div><div class="bg-white p-12 rounded-3xl border shadow-xl"><p class="text-slate-400">Applications stored in MySQL will appear here via PHP API.</p></div></section>`;
    }
};

const render = () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    const root = document.getElementById('app-root');
    if (!root) return;

    if (hash.startsWith('product/')) root.innerHTML = views.product(hash.split('/')[1]);
    else root.innerHTML = views[hash] ? views[hash]() : views.home();

    // SEO Helper
    document.title = `EIBIL NIDHI | ${hash.charAt(0).toUpperCase() + hash.slice(1).replace('/', ' ')}`;
    updateUI();
};

const updateUI = () => {
    document.getElementById('nav-loans-list').innerHTML = PRODUCTS.filter(p => p.category === 'loan').map(p => `<a href="#product/${p.id}" class="block p-3 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-blue rounded-xl">${p.name}</a>`).join('');
    document.getElementById('nav-deposits-list').innerHTML = PRODUCTS.filter(p => p.category === 'deposit').map(p => `<a href="#product/${p.id}" class="block p-3 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-pink rounded-xl">${p.name}</a>`).join('');
    document.getElementById('admin-badge').classList.toggle('hidden', !state.isAdmin);
};

window.setInvestorCat = (c) => { state.activeInvestor = c; render(); };
window.handleApply = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    // In production, use: fetch('api.php?action=apply', {method: 'POST', body: data})
    alert('Application Received! Reference: EIBIL-' + Math.floor(10000 + Math.random() * 90000));
    window.location.hash = '#home';
};
window.handleAdmin = (e) => {
    e.preventDefault();
    if (e.target.pass.value === 'admin123') { state.isAdmin = true; localStorage.setItem('eibil_admin', 'true'); render(); }
    else alert('Invalid Key');
};
window.logout = () => { state.isAdmin = false; localStorage.setItem('eibil_admin', 'false'); render(); };

window.onhashchange = render;
window.onload = render;
