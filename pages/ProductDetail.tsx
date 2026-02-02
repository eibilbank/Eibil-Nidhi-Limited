
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductInfo } from '../types';

interface ProductDetailProps {
  products: ProductInfo[];
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-4xl font-black text-slate-800 mb-4">Oops! Page Missing.</h2>
        <Link to="/" className="text-brand-blue font-bold border-b-2 border-brand-blue">Return to Home</Link>
      </div>
    );
  }

  const isLoan = product.category === 'loan';

  return (
    <div className="pb-32">
      <div className={`${isLoan ? 'bg-brand-lightBlue' : 'bg-brand-lightPink'} pt-20 pb-32 px-4 relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8 inline-flex items-center hover:text-brand-blue transition">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
            Home / Products
          </Link>
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="lg:w-2/3">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">{product.name}</h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl">{product.overview}</p>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-white flex flex-col items-center text-center">
                <span className="text-xs font-black uppercase text-slate-400 mb-2">Exclusive Member Interest</span>
                <p className="text-5xl font-black text-gradient mb-2">{product.interestRate.split(' ')[0]}</p>
                <p className="text-sm font-bold text-slate-500">{product.interestRate.split(' ').slice(1).join(' ')}</p>
                <Link to="/apply" className="w-full mt-8 py-5 btn-brand text-white font-black rounded-2xl shadow-xl">Start Your Application</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 -mr-48 -mt-48 ${isLoan ? 'bg-brand-blue' : 'bg-brand-pink'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-16">
            <section>
              <h2 className="text-3xl font-black text-slate-800 mb-10 flex items-center">
                <span className="w-1.5 h-8 bg-brand-blue rounded-full mr-4"></span>
                Key Benefits & Features
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start p-6 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-brand-blue transition duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mr-4 text-brand-blue text-xl font-bold group-hover:bg-brand-blue group-hover:text-white transition">✓</div>
                    <span className="text-slate-700 font-semibold leading-relaxed pt-1">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-slate-800 mb-10 flex items-center">
                <span className="w-1.5 h-8 bg-brand-pink rounded-full mr-4"></span>
                Who Can Apply?
              </h2>
              <div className="space-y-4">
                {product.eligibility.map((e, i) => (
                  <div key={i} className="flex items-center text-lg text-slate-600 font-medium py-3 border-b border-slate-50">
                    <span className="w-2 h-2 rounded-full bg-brand-pink mr-4"></span>
                    {e}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-slate-800 mb-10 flex items-center">
                <span className="w-1.5 h-8 bg-brand-blue rounded-full mr-4"></span>
                Documentation Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {product.documents.map((d, i) => (
                  <div key={i} className="flex items-center p-5 bg-brand-lightBlue/50 border border-brand-blue/10 rounded-2xl">
                    <svg className="w-6 h-6 text-brand-blue mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    <span className="font-bold text-slate-700">{d}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 p-10 rounded-[2.5rem] sticky top-24 text-white shadow-2xl">
              <h3 className="text-2xl font-black mb-6">Expert Help</h3>
              <p className="text-slate-400 mb-10 font-medium">Have questions about this scheme? Speak directly with our product manager.</p>
              
              <div className="space-y-6 mb-10">
                 <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">📞</div>
                    <div>
                       <p className="text-xs font-bold text-slate-500 uppercase">Toll Free</p>
                       <p className="font-bold">1800-123-4567</p>
                    </div>
                 </div>
                 <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">💬</div>
                    <div>
                       <p className="text-xs font-bold text-slate-500 uppercase">WhatsApp</p>
                       <p className="font-bold">+91 99999 88888</p>
                    </div>
                 </div>
              </div>

              <Link to="/contact" className="block w-full text-center py-5 bg-white text-slate-900 font-black rounded-2xl hover:scale-105 transition">Request a Call Back</Link>
           </div>
        </div>
      </div>
    </div>
  );
};
