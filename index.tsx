
/**
 * EIBIL NIDHI LIMITED - Master Vanilla JS Engine
 * Rebuilt for perfect navigation and 100% performance.
 */

// --- Central Data Registry ---
const PRODUCTS = [
    { id: 'gold-loan', name: 'Gold Loan', category: 'loan', overview: 'Unlock immediate cash against your gold jewelry with maximum valuation and lowest interest rates.', features: ['Instant Disbursal', 'Safety Vaults', 'Part-release Facility', 'Minimal Paperwork'], eligibility: ['Age 18-70', 'Own Gold Ornaments'], documents: ['Aadhar Card', 'PAN Card', 'Photograph'], interestRate: 'Starts from 9.9% p.a.' },
    { id: 'online-gold-loan', name: 'Online Gold Loan', category: 'loan', overview: 'A digital-first gold loan experience. Top up or pay interest from the comfort of your home.', features: ['24/7 Digital Access', 'Instant Top-up', 'Secure Repayments'], eligibility: ['Existing Members'], documents: ['Membership ID', 'KYC Updates'], interestRate: '10.5% p.a.' },
    { id: 'doorstep-gold-loan', name: 'Doorstep Gold Loan', category: 'loan', overview: 'We bring the bank to your home. Valuation and disbursal right at your doorstep.', features: ['Personalized Service', 'At-home Valuation', 'Privacy Guaranteed'], eligibility: ['Resident of Service Areas'], documents: ['Identity Proof', 'Address Proof'], interestRate: '11.0% p.a.' },
    { id: 'property-loan', name: 'Loan Against Property', category: 'loan', overview: 'Leverage your real estate assets to fund business expansions or major life events.', features: ['High Loan Amount', 'Tenure up to 15 Years', 'Low Processing Fee'], eligibility: ['Property Owners', 'Steady Income'], documents: ['Property Deeds', 'Income Tax Returns', 'Bank Statements'], interestRate: '11.5% p.a.' },
    { id: 'instant-property-loan', name: 'Instant Property Loan', category: 'loan', overview: 'Fast-tracked approvals for property owners in urgent need of significant capital.', features: ['48-hour Approvals', 'Simplified Documentation'], eligibility: ['Valid Clear Title Property'], documents: ['Sale Deed', 'Tax Receipts'], interestRate: '12.0% p.a.' },
    { id: 'term-deposit', name: 'Term Deposit (FD)', category: 'deposit', overview: 'Secure your future with high-yield fixed investment plans that beat traditional banking returns.', features: ['Higher Interest Rates', 'Flexible Tenures', 'Monthly/Quarterly Payouts'], eligibility: ['EIBIL Members'], documents: ['Membership Form', 'KYC', 'PAN'], interestRate: 'Up to 12.5% p.a.' },
    { id: 'recurring-deposit', name: 'Recurring Deposit', category: 'deposit', overview: 'Build a disciplined savings habit by investing a fixed amount every month.', features: ['Compounded Growth', 'Flexible Installments', 'High Returns'], eligibility: ['Individuals/Joint Holders'], documents: ['Identity Proof', 'Bank Mandate'], interestRate: 'Up to 11.0% p.a.' },
    { id: 'savings-deposit', name: 'Savings Deposit', category: 'deposit', overview: 'Liquid savings account with attractive interest rates and modern digital banking features.', features: ['Daily Interest Calculation', 'Mobile App Access', 'No Min Balance Penalties'], eligibility: ['All Residents'], documents: ['KYC Documents'], interestRate: '6.5% p.a.' },
    { id: 'loan-against-deposit', name: 'Loan Against Deposit', category: 'loan', overview: 'Meet urgent needs without breaking your deposits. Borrow up to 90% of your deposit value.', features: ['Instant Approval', 'Low Interest (Deposit + 2%)', 'No Credit Check'], eligibility: ['Active FD/RD Holders'], documents: ['Original Deposit Receipt'], interestRate: 'Deposit Rate + 2%' }
];

const INVESTOR_CATEGORIES = [
    'Notice to Shareholders', 'Financial Results', 'Board Governance', 'Committees of the Board',
    'Fair Practice Code', 'Policies', 'Members / Investors', 'Annual General Meeting',
    'Annual Returns', 'Disclosure on RPT', 'Auction', 'CSR', 'Extract of Form 5A'
];

const BRANCHES = [
    { name: 'Mumbai Headquarters', address: 'Bandra Kurla Complex, Mumbai, MH 400051', phone: '022-1234-5678' },
    { name: 'Bangalore Hub', address: 'Indiranagar, Bangalore, KA 560038', phone: '080-8765-4321' },
    { name: 'Delhi Regional', address: 'Connaught Place, New Delhi, DL 110001', phone: '011-2233-4455' }
];

// --- Application State ---
let state = {
    isAdmin: localStorage.getItem('eibil_admin_active') === 'true',
    activeInvestorCat: INVESTOR_CATEGORIES[0],
    settings: JSON.parse(localStorage.getItem('eibil_settings') || '{"companyName":"EIBIL NIDHI","suffix":"LIMITED","tagline":"Modern Financial Trust","phone":"1800-123-4567"}'),
    applications: JSON.parse(localStorage.getItem('eibil_applications') || '[]')
};

// --- View Templates ---
const views = {
    home: () => `
        <section class="py-24 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div class="lg:w-3/5 text-center lg:text-left">
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full mb-8">
                    <span class="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
                    <span class="text-[10px] font-black text-brand-blue uppercase tracking-widest">MCA Registered & Compliant</span>
                </div>
                <h1 class="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
                    Invest in your <br/><span class="text-gradient">Financial Future.</span>
                </h1>
                <p class="text-xl text-slate-500 mb-12 max-w-xl font-medium leading-relaxed">
                    Empowering millions with high-yield savings and instant gold loans. Experience the new era of mutual banking.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#apply" class="btn-brand px-10 py-5 rounded-2xl font-black text-lg">Apply Online</a>
                    <a href="#investors" class="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-black text-lg hover:border-brand-blue hover:text-brand-blue transition">Investor Relations</a>
                </div>
            </div>
            <div class="lg:w-2/5 w-full bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-50 relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition duration-1000"></div>
                <h3 class="text-2xl font-black mb-8 flex items-center gap-3">EMI Calculator <span class="text-xs bg-slate-100 px-2 py-1 rounded">MEMBER RATES</span></h3>
                <div class="space-y-8">
                    <div>
                        <div class="flex justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">
                            <span>Principal</span>
                            <span class="text-brand-blue">₹ 5,00,000</span>
                        </div>
                        <input type="range" class="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue" min="10000" max="2500000" step="10000">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">Interest</p>
                            <p class="text-xl font-black text-slate-800">9.9%*</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">EMI / Month</p>
                            <p class="text-xl font-black text-slate-800">₹ 8,450</p>
                        </div>
                    </div>
                    <a href="#apply" class="block w-full text-center py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-brand-blue transition shadow-lg">Get This Loan Now</a>
                </div>
            </div>
        </section>

        <section class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-black mb-4">Our Premium <span class="text-gradient">Portfolio</span></h2>
                    <p class="text-slate-500 font-medium">Explore financial products designed specifically for your success.</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    ${PRODUCTS.slice(0, 6).map(p => `
                        <a href="#product/${p.id}" class="card-hover bg-[#fafafa] p-10 rounded-[2.5rem] border border-slate-100 block">
                            <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-2xl">${p.category === 'loan' ? '💎' : '💰'}</div>
                            <h3 class="text-2xl font-bold mb-4">${p.name}</h3>
                            <p class="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">${p.overview}</p>
                            <span class="text-[10px] font-black uppercase text-brand-pink tracking-widest flex items-center gap-2">View Scheme <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `,
    about: () => `
        <section class="py-32 bg-brand-blue/5 text-center px-4">
            <h1 class="text-6xl font-black mb-8">Built on <span class="text-gradient">Trust.</span></h1>
            <p class="max-w-3xl mx-auto text-xl text-slate-600 font-medium leading-relaxed">
                EIBIL Nidhi Limited is not just a financial institution; it's a mutual community dedicated to financial literacy and shared prosperity.
            </p>
        </section>
        <section class="py-24 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
            <div class="space-y-8">
                <h2 class="text-4xl font-black">Our Heritage</h2>
                <p class="text-slate-600 leading-relaxed text-lg">Founded with the core objective of promoting the habit of thrift and savings among our members, we have grown into a digital-first Nidhi company that values transparency above all else.</p>
                <div class="grid grid-cols-2 gap-4">
                    <div class="p-8 bg-white border rounded-3xl text-center"><p class="text-4xl font-black text-brand-blue mb-2">12k+</p><p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Members</p></div>
                    <div class="p-8 bg-white border rounded-3xl text-center"><p class="text-4xl font-black text-brand-pink mb-2">100%</p><p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Compliance</p></div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800" class="rounded-[3rem] shadow-2xl" />
        </section>
    `,
    product: (id) => {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return `<div class="py-40 text-center"><h1 class="text-4xl font-black">Product Not Found</h1><a href="#home" class="text-brand-blue font-bold">Back to Home</a></div>`;
        return `
            <section class="py-32 px-4 bg-brand-light">
                <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <a href="#home" class="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-8 inline-flex items-center gap-2 hover:text-brand-blue transition">← Home / Products</a>
                        <h1 class="text-6xl font-black mb-8">${p.name}</h1>
                        <p class="text-2xl text-slate-500 font-medium leading-relaxed mb-12">${p.overview}</p>
                        <div class="p-10 bg-white inline-flex flex-col rounded-[2.5rem] shadow-xl border border-slate-50">
                            <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Exclusive Member Rate</span>
                            <span class="text-5xl font-black text-gradient">${p.interestRate.split(' ')[0]}</span>
                            <span class="text-sm font-bold text-slate-500 mt-2">${p.interestRate.split(' ').slice(1).join(' ')}</span>
                        </div>
                    </div>
                    <div class="bg-white p-12 rounded-[3rem] shadow-2xl space-y-12">
                        <div><h3 class="text-xl font-black mb-6 flex items-center gap-3">💎 Key Benefits</h3><ul class="space-y-3">${p.features.map(f => `<li class="font-bold text-slate-600 flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-brand-blue"></span> ${f}</li>`).join('')}</ul></div>
                        <div><h3 class="text-xl font-black mb-6 flex items-center gap-3">👤 Eligibility</h3><ul class="space-y-3">${p.eligibility.map(e => `<li class="font-bold text-slate-600 flex items-center gap-3"><span class="w-2 h-2 rounded-full bg-brand-pink"></span> ${e}</li>`).join('')}</ul></div>
                        <a href="#apply" class="btn-brand block w-full py-5 text-center rounded-2xl font-black text-xl">Apply for ${p.name}</a>
                    </div>
                </div>
            </section>
        `;
    },
    investors: () => `
        <section class="py-24 px-4 bg-slate-900 text-white text-center">
            <h1 class="text-5xl font-black mb-6">Investor <span class="text-brand-pink">Relations</span></h1>
            <p class="text-slate-400 max-w-2xl mx-auto font-medium">Full transparency and regulatory compliance disclosures for our stakeholders.</p>
        </section>
        <section class="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12">
            <div class="lg:w-1/4 space-y-2 bg-white p-6 rounded-3xl shadow-xl h-fit sticky top-24">
                <h4 class="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6 px-4">Disclosure Categories</h4>
                ${INVESTOR_CATEGORIES.map(c => `
                    <button onclick="setInvestorCat('${c}')" class="w-full text-left p-4 rounded-2xl font-bold text-sm transition ${state.activeInvestorCat === c ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'hover:bg-slate-50 text-slate-600'}">
                        ${c}
                    </button>
                `).join('')}
            </div>
            <div class="lg:w-3/4 bg-white p-12 rounded-[3rem] shadow-sm border border-slate-50 min-h-[600px]">
                <div class="flex justify-between items-center mb-12">
                    <h2 class="text-3xl font-black">${state.activeInvestorCat}</h2>
                    <span class="bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-black uppercase">Live Updates</span>
                </div>
                <div class="space-y-4">
                    ${[2024, 2023, 2022, 2021].map(year => `
                        <div class="p-8 bg-slate-50 rounded-2xl border border-transparent hover:border-brand-blue/20 transition group flex justify-between items-center">
                            <div>
                                <h4 class="text-lg font-bold group-hover:text-brand-blue transition">${state.activeInvestorCat} - Financial Year ${year}</h4>
                                <p class="text-[10px] font-black text-slate-400 uppercase mt-1">Regulatory Filing • PDF Format • 2.4 MB</p>
                            </div>
                            <button class="px-6 py-2 bg-white border-2 border-slate-100 rounded-xl font-bold text-xs hover:border-brand-pink hover:text-brand-pink transition">Download PDF</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `,
    apply: () => `
        <section class="py-24 px-4 max-w-4xl mx-auto">
            <form onsubmit="handleApply(event)" class="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-white space-y-12">
                <div class="text-center">
                    <h2 class="text-4xl font-black mb-4">Apply <span class="text-gradient">Online</span></h2>
                    <p class="text-slate-500 font-medium">Member-exclusive fast-track application process.</p>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="space-y-8">
                        <div>
                            <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 block">Member Name</label>
                            <input required name="name" type="text" class="w-full p-5 bg-slate-50 border rounded-2xl font-bold" placeholder="Full Legal Name">
                        </div>
                        <div>
                            <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 block">Verified Mobile</label>
                            <input required name="mobile" type="tel" class="w-full p-5 bg-slate-50 border rounded-2xl font-bold" placeholder="+91">
                        </div>
                    </div>
                    <div class="space-y-8">
                        <div>
                            <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 block">Product Category</label>
                            <select name="type" class="w-full p-5 bg-slate-50 border rounded-2xl font-bold appearance-none">
                                ${PRODUCTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label class="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3 block">Estimated Amount (₹)</label>
                            <input required name="amount" type="number" class="w-full p-5 bg-slate-50 border rounded-2xl font-bold" placeholder="0.00">
                        </div>
                    </div>
                </div>
                <div class="bg-brand-blue/5 p-6 rounded-2xl flex items-start gap-4">
                    <input required type="checkbox" class="w-6 h-6 rounded-lg accent-brand-blue mt-1">
                    <p class="text-xs text-slate-500 font-medium leading-relaxed">I confirm that I am an EIBIL Nidhi member and authorize the company to perform credit verification for this application.</p>
                </div>
                <button type="submit" class="w-full btn-brand py-6 rounded-3xl font-black text-2xl shadow-xl">Submit Application</button>
            </form>
        </section>
    `,
    branches: () => `
        <section class="py-24 max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <h1 class="text-5xl font-black mb-4">Branch <span class="text-gradient">Locator</span></h1>
                <p class="text-slate-500 font-medium">Find our state-of-the-art physical centers.</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                ${BRANCHES.map(b => `
                    <div class="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm text-center card-hover">
                        <div class="w-20 h-20 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-8 text-3xl">📍</div>
                        <h3 class="text-2xl font-bold mb-4">${b.name}</h3>
                        <p class="text-slate-500 mb-8 font-medium">${b.address}</p>
                        <p class="text-brand-pink font-black text-xl tracking-tight">${b.phone}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `,
    contact: () => `
        <section class="py-32 text-center px-4">
            <h1 class="text-6xl font-black mb-8">Let's <span class="text-gradient">Talk.</span></h1>
            <p class="text-xl text-slate-500 font-medium mb-12">Support, inquiries, or feedback — we're here for you.</p>
            <div class="max-w-xl mx-auto bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50">
                <p class="text-slate-500 mb-8 font-medium italic">Email us at</p>
                <p class="text-3xl font-black text-slate-900 mb-12">support@eibilnidhi.com</p>
                <a href="mailto:support@eibilnidhi.com" class="btn-brand px-12 py-4 rounded-2xl font-black">Compose Email</a>
            </div>
        </section>
    `,
    admin: () => {
        if (!state.isAdmin) return `
            <div class="min-h-[70vh] flex items-center justify-center px-4">
                <form onsubmit="handleAdminLogin(event)" class="bg-white p-12 rounded-[3rem] shadow-2xl max-w-md w-full border border-slate-50">
                    <h2 class="text-3xl font-black mb-8 text-center">Admin <span class="text-brand-pink">Login</span></h2>
                    <input type="password" name="pass" class="w-full p-5 bg-slate-50 border rounded-2xl font-black text-center mb-6" placeholder="Authorization Code">
                    <button class="w-full btn-brand py-5 rounded-2xl font-black shadow-lg">Authenticate</button>
                    <p class="text-[10px] text-center text-slate-400 mt-6 font-bold uppercase tracking-widest">Internal Use Only</p>
                </form>
            </div>
        `;
        return `
            <section class="max-w-7xl mx-auto px-4 py-20">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <span class="text-[10px] font-black text-brand-pink uppercase tracking-widest mb-2 block">System Command Center</span>
                        <h1 class="text-6xl font-black tracking-tight">Admin <span class="text-brand-blue">Hub</span></h1>
                    </div>
                    <button onclick="handleAdminLogout()" class="px-8 py-3 bg-red-50 text-red-500 font-black rounded-xl hover:bg-red-100 transition">Terminate Session</button>
                </div>

                <div class="grid lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2 space-y-12">
                        <div class="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-50">
                            <h3 class="text-2xl font-black mb-10 flex items-center justify-between">
                                Loan Queue
                                <span class="text-[10px] font-black bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full uppercase tracking-widest">Real-time</span>
                            </h3>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left">
                                    <tr class="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b">
                                        <th class="pb-6 px-4">Member</th>
                                        <th class="pb-6 px-4">Type</th>
                                        <th class="pb-6 px-4">Amount</th>
                                        <th class="pb-6 px-4">Status</th>
                                    </tr>
                                    ${state.applications.length ? state.applications.map(a => `
                                        <tr class="border-b hover:bg-slate-50 transition">
                                            <td class="py-6 px-4 font-bold text-slate-800">${a.name}</td>
                                            <td class="py-6 px-4 font-medium text-slate-500 uppercase text-xs">${a.type}</td>
                                            <td class="py-6 px-4 font-black text-slate-900">₹${a.amount}</td>
                                            <td class="py-6 px-4">
                                                <span class="px-4 py-1.5 bg-yellow-50 text-yellow-600 rounded-full text-[10px] font-black tracking-widest">PENDING</span>
                                            </td>
                                        </tr>
                                    `).join('') : `
                                        <tr><td colspan="4" class="py-16 text-center text-slate-300 font-black uppercase text-xs tracking-widest">Zero Active Applications</td></tr>
                                    `}
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-1 space-y-12">
                        <div class="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                            <div class="absolute top-0 right-0 w-32 h-32 bg-brand-pink/10 rounded-full -mr-16 -mt-16"></div>
                            <h3 class="text-2xl font-black mb-10">Site Configuration</h3>
                            <form onsubmit="handleSaveSettings(event)" class="space-y-6">
                                <div>
                                    <label class="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-3 block">Corporate Name</label>
                                    <input name="name" value="${state.settings.companyName}" class="w-full bg-white/5 border border-white/10 p-4 rounded-2xl font-bold focus:bg-white/10 transition">
                                </div>
                                <div>
                                    <label class="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-3 block">Market Tagline</label>
                                    <input name="tagline" value="${state.settings.tagline}" class="w-full bg-white/5 border border-white/10 p-4 rounded-2xl font-bold focus:bg-white/10 transition">
                                </div>
                                <button class="w-full py-5 bg-brand-pink text-white rounded-2xl font-black shadow-xl shadow-brand-pink/20 hover:scale-[1.02] transition">Update Global UI</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
};

// --- Core Routing Engine ---
const render = () => {
    const rawHash = window.location.hash || '#home';
    const hash = rawHash.replace('#', '');
    const root = document.getElementById('app-root');
    if (!root) return;

    // Route Handler
    if (hash.startsWith('product/')) {
        const productId = hash.split('/')[1];
        root.innerHTML = views.product(productId);
    } else {
        root.innerHTML = (views[hash] || views.home)();
    }

    // Refresh UI Components
    updateBranding();
    
    // Smooth scroll to top on every navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const updateBranding = () => {
    // Nav & Footer Persistence
    const navName = document.getElementById('nav-company-name');
    if (navName) navName.innerHTML = `${state.settings.companyName} <span class="text-brand-pink">${state.settings.suffix}</span>`;
    
    const navTag = document.getElementById('nav-tagline');
    if (navTag) navTag.textContent = state.settings.tagline;

    const footerName = document.getElementById('footer-company-name');
    if (footerName) footerName.textContent = `${state.settings.companyName} ${state.settings.suffix}`;

    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone) footerPhone.textContent = state.settings.phone;

    const adminBadge = document.getElementById('admin-badge');
    if (adminBadge) adminBadge.classList.toggle('hidden', !state.isAdmin);

    // Dropdown Refresh
    const loansNav = document.getElementById('nav-loans-list');
    const depositsNav = document.getElementById('nav-deposits-list');
    
    if (loansNav) {
        loansNav.innerHTML = PRODUCTS.filter(p => p.category === 'loan')
            .map(p => `<a href="#product/${p.id}" class="block p-3 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-blue rounded-xl transition">${p.name}</a>`)
            .join('');
    }
    if (depositsNav) {
        depositsNav.innerHTML = PRODUCTS.filter(p => p.category === 'deposit')
            .map(p => `<a href="#product/${p.id}" class="block p-3 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-pink rounded-xl transition">${p.name}</a>`)
            .join('');
    }
};

// --- Handlers & API Simulators ---
window['setInvestorCat'] = (c) => { 
    state.activeInvestorCat = c; 
    render(); 
};

window['handleApply'] = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const app = Object.fromEntries(formData);
    state.applications.push(app);
    localStorage.setItem('eibil_applications', JSON.stringify(state.applications));
    
    // UI Success Feedback
    const root = document.getElementById('app-root');
    root.innerHTML = `
        <div class="py-40 text-center px-4 animate-in zoom-in duration-500">
            <div class="w-32 h-32 bg-brand-blue/10 text-brand-blue rounded-[3rem] flex items-center justify-center mx-auto mb-10 text-6xl shadow-inner">✨</div>
            <h1 class="text-5xl font-black mb-6">Success!</h1>
            <p class="text-xl text-slate-500 font-medium mb-12">Reference ID: <span class="text-brand-pink font-black uppercase tracking-widest">EIBIL-${Math.floor(10000 + Math.random() * 90000)}</span></p>
            <a href="#home" class="btn-brand px-12 py-5 rounded-3xl font-black text-xl shadow-2xl">Return to Dashboard</a>
        </div>
    `;
};

window['handleAdminLogin'] = (e) => {
    e.preventDefault();
    if (e.target.pass.value === 'admin123') {
        state.isAdmin = true;
        localStorage.setItem('eibil_admin_active', 'true');
        render();
    } else {
        alert('Access Key Invalid');
    }
};

window['handleAdminLogout'] = () => {
    state.isAdmin = false;
    localStorage.setItem('eibil_admin_active', 'false');
    window.location.hash = '#home';
    render();
};

window['handleSaveSettings'] = (e) => {
    e.preventDefault();
    state.settings.companyName = e.target.name.value;
    state.settings.tagline = e.target.tagline.value;
    localStorage.setItem('eibil_settings', JSON.stringify(state.settings));
    alert('Global configuration updated.');
    render();
};

// --- Initialize ---
window.onhashchange = render;
window.onload = render;
