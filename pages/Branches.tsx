
import React from 'react';

interface BranchesProps {
  branches: any[];
}

export const Branches: React.FC<BranchesProps> = ({ branches }) => {
  return (
    <div className="pb-20">
      <div className="bg-brand-blue py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Presence</h1>
        <p className="text-brand-lightBlue max-w-2xl mx-auto">Find an EIBIL Nidhi branch near you. Our doors are open Monday to Saturday, 9:30 AM to 5:30 PM.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {branches.map(b => (
          <div key={b.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-brand-lightBlue text-brand-blue rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{b.name}</h3>
            <p className="text-slate-500 mb-6">{b.address}</p>
            <div className="mt-auto pt-6 border-t w-full space-y-2">
              <p className="text-sm font-bold text-brand-blue">{b.phone}</p>
              <button className="text-slate-400 text-xs font-bold uppercase hover:text-brand-blue transition">View on Google Maps</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
