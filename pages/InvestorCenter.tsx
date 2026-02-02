
import React, { useState } from 'react';
import { INVESTOR_CATEGORIES } from '../constants';

export const InvestorCenter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(INVESTOR_CATEGORIES[0]);
  
  const mockDocs = [
    { id: '1', title: 'Audited Financial Statement 2023-24', year: '2023', category: 'Financial Results' },
    { id: '2', title: 'Board Meeting Minutes - Aug 2024', year: '2024', category: 'Board Governance' },
    { id: '3', title: 'CSR Expenditure Report - Q2', year: '2024', category: 'CSR' },
    { id: '4', title: 'Fair Practice Code (Version 2.1)', year: '2024', category: 'Fair Practice Code' },
    { id: '5', title: 'Annual Return MGT-7', year: '2023', category: 'Annual Returns' },
    { id: '6', title: 'Share Transfer Policy', year: '2024', category: 'Policies' },
  ];

  const filteredDocs = mockDocs.filter(d => d.category === selectedCategory);

  return (
    <div className="pb-32">
      <section className="bg-slate-900 py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid.png')] opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Investor <span className="text-brand-pink">Portal</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">Everything you need to stay informed about our corporate governance and financial performance.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20 flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/4">
          <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-2xl sticky top-24">
            <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6 px-2">Compliance Directory</h3>
            <div className="space-y-2">
              {INVESTOR_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-sm font-bold transition flex items-center justify-between group ${
                    selectedCategory === cat 
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20 scale-[1.02]' 
                    : 'text-slate-600 hover:bg-brand-lightBlue hover:text-brand-blue'
                  }`}
                >
                  {cat}
                  <span className={`opacity-0 group-hover:opacity-100 transition ${selectedCategory === cat ? 'opacity-100' : ''}`}>→</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-3/4">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-slate-50">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">{selectedCategory}</h2>
                <p className="text-slate-400 font-medium">Public disclosures and regulatory filings</p>
              </div>
              <div className="bg-brand-lightBlue px-6 py-2 rounded-full text-brand-blue font-bold text-xs uppercase tracking-widest">
                {filteredDocs.length} Documents Found
              </div>
            </div>

            {filteredDocs.length > 0 ? (
              <div className="grid gap-6">
                {filteredDocs.map(doc => (
                  <div key={doc.id} className="group p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-brand-blue/20 hover:bg-white hover:shadow-2xl transition duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-pink text-2xl group-hover:scale-110 transition duration-500">📄</div>
                      <div>
                        <h4 className="text-xl font-black text-slate-800 mb-1 group-hover:text-brand-blue transition">{doc.title}</h4>
                        <p className="text-sm font-bold text-slate-400">Published in {doc.year} • PDF Format</p>
                      </div>
                    </div>
                    <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-100 text-slate-800 rounded-2xl font-black text-sm hover:border-brand-pink hover:text-brand-pink transition group/btn">
                      View Report
                      <svg className="w-5 h-5 group-hover/btn:translate-y-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">📁</div>
                <h3 className="text-2xl font-black text-slate-300">No records found for this year.</h3>
                <p className="text-slate-400 mt-2 font-medium">Please check other categories or contact our Compliance Officer.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
