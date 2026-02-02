
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="pb-32 bg-slate-50">
      <section className="bg-brand-lightBlue py-24 px-4 text-center">
         <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Let's <span className="text-gradient">Connect.</span></h1>
         <p className="text-xl text-slate-500 font-medium">Our expert advisors are ready to help you navigate your finances.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20">
        <div className="space-y-8">
           <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex items-start gap-8 group">
              <div className="w-16 h-16 bg-brand-lightBlue text-brand-blue rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition duration-500">✉️</div>
              <div>
                <h4 className="text-xl font-black text-slate-800 mb-2">Email Inquiries</h4>
                <p className="text-slate-500 font-medium mb-1">General: support@eibilnidhi.com</p>
                <p className="text-slate-500 font-medium">Partnerships: admin@eibilnidhi.com</p>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex items-start gap-8 group">
              <div className="w-16 h-16 bg-brand-lightPink text-brand-pink rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition duration-500">📞</div>
              <div>
                <h4 className="text-xl font-black text-slate-800 mb-2">Voice Support</h4>
                <p className="text-slate-500 font-medium mb-1">Toll Free: 1800-456-7890</p>
                <p className="text-slate-500 font-medium">Global: +91 22 5555 4444</p>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex items-start gap-8 group">
              <div className="w-16 h-16 bg-brand-lightBlue text-brand-blue rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition duration-500">🏢</div>
              <div>
                <h4 className="text-xl font-black text-slate-800 mb-2">Headquarters</h4>
                <p className="text-slate-500 font-medium">EIBIL Financial Center, BKC <br/>Mumbai, Maharashtra - 400051</p>
              </div>
           </div>
        </div>

        <div className="bg-slate-900 p-12 md:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px]"></div>
          
          {sent ? (
            <div className="text-center py-20 animate-in zoom-in duration-500">
               <div className="w-24 h-24 bg-brand-pink rounded-full flex items-center justify-center mx-auto mb-10 text-4xl shadow-2xl shadow-brand-pink/30">✨</div>
               <h2 className="text-3xl font-black mb-4">Message Transmitted!</h2>
               <p className="text-slate-400 font-medium">We usually respond within 2 hours during business hours.</p>
               <button onClick={() => setSent(false)} className="mt-12 text-brand-blue font-bold border-b border-brand-blue pb-1">Send another message</button>
            </div>
          ) : (
            <form onSubmit={(e) => {e.preventDefault(); setSent(true);}} className="relative z-10 space-y-8">
               <h3 className="text-3xl font-black mb-8">Send a Message</h3>
               <div className="grid grid-cols-2 gap-6">
                 <div>
                   <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 block">First Name</label>
                   <input required type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-brand-blue transition font-bold" />
                 </div>
                 <div>
                   <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 block">Last Name</label>
                   <input required type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-brand-pink transition font-bold" />
                 </div>
               </div>
               <div>
                 <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 block">Your Inquiry</label>
                 <select className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-brand-blue transition font-bold appearance-none">
                    <option className="bg-slate-900">Member Onboarding</option>
                    <option className="bg-slate-900">Loan Status Inquiry</option>
                    <option className="bg-slate-900">Investment Planning</option>
                    <option className="bg-slate-900">Compliance / Regulatory</option>
                 </select>
               </div>
               <div>
                 <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-3 block">Details</label>
                 <textarea required rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-brand-pink transition font-bold" placeholder="How can we help?"></textarea>
               </div>
               <button className="w-full py-6 btn-brand text-white text-xl font-black rounded-3xl shadow-2xl shadow-brand-pink/30">Dispatch Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
