
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductInfo } from '../types';

interface HomeProps {
  products: ProductInfo[];
  settings: any;
}

export const Home: React.FC<HomeProps> = ({ products, settings }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 w-full flex flex-col lg:flex-row items-center gap-16 py-20">
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lightBlue border border-brand-blue/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-ping"></span>
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Authorized by MCA, Govt of India</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-[900] text-slate-900 leading-[1.1] mb-8 tracking-tight">
              {settings.heroTitle.split('. ')[0]}.<br/>
              <span className="text-gradient">{settings.heroTitle.split('. ')[1] || 'Financial Freedom'}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
              {settings.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link to="/apply" className="btn-brand text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-brand-pink/30 w-full sm:w-auto text-center">
                Get Instant Loan
              </Link>
              <Link to="/investors" className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-800 rounded-2xl font-black text-lg hover:border-brand-blue hover:text-brand-blue transition w-full sm:w-auto text-center">
                Investor Portal
              </Link>
            </div>
          </div>

          <div className="lg:w-2/5 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand blur-3xl opacity-20 rounded-full"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white p-8 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <h3 className="text-2xl font-extrabold text-slate-800 mb-8 flex items-center">
                  <span className="mr-3">📊</span> E-Calculator
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-3">
                      <span>Principal Amount</span>
                      <span className="text-brand-pink font-black text-sm">₹ 5,00,000</span>
                    </div>
                    <input type="range" className="w-full accent-brand-blue h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-brand-lightBlue rounded-2xl border border-brand-blue/5">
                      <p className="text-[10px] font-bold text-brand-blue uppercase mb-1">Interest Rate</p>
                      <p className="text-xl font-black text-slate-800">10.5% p.a.</p>
                    </div>
                    <div className="p-4 bg-brand-lightPink rounded-2xl border border-brand-pink/5">
                      <p className="text-[10px] font-bold text-brand-pink uppercase mb-1">Monthly EMI</p>
                      <p className="text-xl font-black text-slate-800">₹ 8,450</p>
                    </div>
                  </div>
                  <button className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:scale-[1.02] transition shadow-xl">Apply with this Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 border-y border-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-12">
          {[
            { label: 'Happy Members', val: '12,500+', color: 'text-brand-blue' },
            { label: 'Loan Disbursed', val: '₹450Cr+', color: 'text-brand-pink' },
            { label: 'Interest Rate', val: 'Up to 12.5%', color: 'text-brand-blue' },
            { label: 'Safe & Secure', val: 'ISO Certified', color: 'text-brand-pink' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className={`text-4xl font-black ${stat.color} mb-1`}>{stat.val}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Designed for <span className="text-gradient">Success.</span></h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Explore our range of financial instruments crafted to support your life's milestones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((p, idx) => (
              <Link 
                key={p.id} 
                to={`/product/${p.id}`} 
                className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-blue/30 transition duration-500 hover:shadow-[0_40px_80px_-20px_rgba(14,165,233,0.12)]"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition duration-500 ${idx % 2 === 0 ? 'bg-brand-lightBlue text-brand-blue' : 'bg-brand-lightPink text-brand-pink'}`}>
                  {idx % 2 === 0 ? '💎' : '💰'}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-brand-blue transition">{p.name}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3 font-medium">{p.overview}</p>
                <div className="flex items-center text-sm font-black uppercase tracking-widest text-brand-pink group-hover:text-brand-blue transition">
                  Explore <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
