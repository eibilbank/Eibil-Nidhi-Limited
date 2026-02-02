
import React, { useState } from 'react';
import { ProductInfo } from '../types';

interface ApplyOnlineProps {
  products: ProductInfo[];
  branches: any[];
}

export const ApplyOnline: React.FC<ApplyOnlineProps> = ({ products, branches }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    loanType: products[0]?.id || '',
    amount: '',
    branch: branches[0]?.name || '',
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-40 px-4 max-w-xl mx-auto text-center">
        <div className="w-32 h-32 bg-brand-lightBlue text-brand-blue rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-blue/20 animate-bounce">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Application Success!</h1>
        <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
          Your request has been received. Our executive will reach out shortly. <br/>
          Ref ID: <span className="text-brand-pink font-black">EIBIL-{Math.floor(Math.random() * 90000) + 10000}</span>
        </p>
        <button onClick={() => setIsSubmitted(false)} className="btn-brand text-white px-12 py-5 rounded-2xl font-black shadow-xl">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="pb-32 bg-slate-50 min-h-screen">
      <div className="bg-brand-lightBlue py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-pink/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Apply for <span className="text-gradient">Growth.</span></h1>
          <p className="text-xl text-slate-500 font-medium">Fast approval, low paperwork, member-friendly terms.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-24 relative z-20">
        <form onSubmit={handleSubmit} className="bg-white p-10 md:p-20 rounded-[3rem] shadow-[0_48px_96px_-24px_rgba(0,0,0,0.12)] border border-white">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <h3 className="text-xs font-black uppercase text-brand-blue tracking-widest px-2">Personal Information</h3>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Full Legal Name</label>
                <input required type="text" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 ring-brand-blue/10 focus:border-brand-blue transition font-bold text-slate-700" placeholder="e.g. Rahul Sharma" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Mobile (Verified)</label>
                <input required type="tel" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 ring-brand-blue/10 focus:border-brand-blue transition font-bold text-slate-700" placeholder="+91" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Email Address</label>
                <input required type="email" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 ring-brand-blue/10 focus:border-brand-blue transition font-bold text-slate-700" placeholder="name@domain.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-black uppercase text-brand-pink tracking-widest px-2">Loan Specifics</h3>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Desired Service</label>
                <select className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 ring-brand-pink/10 focus:border-brand-pink transition font-bold text-slate-700 appearance-none" value={formData.loanType} onChange={e => setFormData({...formData, loanType: e.target.value})}>
                  {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Approximate Amount (₹)</label>
                <input required type="number" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 ring-brand-pink/10 focus:border-brand-pink transition font-bold text-slate-700" placeholder="0.00" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Service Branch</label>
                <select className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 ring-brand-pink/10 focus:border-brand-pink transition font-bold text-slate-700 appearance-none" value={formData.branch} onChange={e => setFormData({...formData, branch: e.target.value})}>
                  {branches.map(b => <option key={b.id} value={b.name}>{b.name}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-brand-lightBlue/30 p-8 rounded-3xl mb-12 flex items-start group">
            <input required type="checkbox" className="mt-1.5 mr-6 w-6 h-6 rounded-lg accent-brand-blue cursor-pointer" checked={formData.terms} onChange={e => setFormData({...formData, terms: e.target.checked})} />
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              I certify that I am a member of EIBIL Nidhi Limited or intend to become one. I authorize the company to perform credit checks and contact me regarding this application. I agree to the <span className="text-brand-blue font-bold underline cursor-pointer">Terms of Service</span>.
            </p>
          </div>

          <button type="submit" className="w-full py-6 btn-brand text-white text-2xl font-black rounded-3xl shadow-[0_24px_48px_-12px_rgba(236,72,153,0.3)] hover:scale-[1.01] active:scale-95 transition-all">
            Submit My Application
          </button>
        </form>
      </div>
    </div>
  );
};
