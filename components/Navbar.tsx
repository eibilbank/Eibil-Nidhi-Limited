
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductInfo } from '../types';

interface NavbarProps {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  products: ProductInfo[];
  settings: any;
}

export const Navbar: React.FC<NavbarProps> = ({ isAdmin, setIsAdmin, products, settings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 border-b border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center text-white font-black italic shadow-lg">E</div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-800 leading-none">
                  {settings.companyName} <span className="text-brand-pink">{settings.companySuffix}</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">{settings.tagline}</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition">Home</Link>
            <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition">About</Link>
            
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsProductsOpen(true)}
                className="flex items-center text-sm font-semibold text-slate-600 hover:text-brand-pink transition h-20"
              >
                Financial Products
                <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              <div 
                onMouseLeave={() => setIsProductsOpen(false)}
                className={`${isProductsOpen ? 'grid' : 'hidden'} absolute left-1/2 -translate-x-1/2 mt-0 w-[640px] bg-white border border-slate-100 shadow-2xl rounded-2xl p-8 grid-cols-2 gap-10 animate-in fade-in slide-in-from-top-2 duration-300`}
              >
                <div>
                  <h4 className="text-[11px] font-black uppercase text-brand-blue tracking-[0.15em] mb-5">Loan Solutions</h4>
                  <div className="space-y-2">
                    {products.filter(p => p.category === 'loan').map(p => (
                      <Link key={p.id} to={`/product/${p.id}`} className="flex items-center group/item p-2 rounded-xl hover:bg-brand-lightBlue transition" onClick={() => setIsProductsOpen(false)}>
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 group-hover/item:scale-110 transition">🏷️</div>
                        <span className="text-sm font-medium text-slate-700 group-hover/item:text-brand-blue">{p.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase text-brand-pink tracking-[0.15em] mb-5">Saving Schemes</h4>
                  <div className="space-y-2">
                    {products.filter(p => p.category === 'deposit').map(p => (
                      <Link key={p.id} to={`/product/${p.id}`} className="flex items-center group/item p-2 rounded-xl hover:bg-brand-lightPink transition" onClick={() => setIsProductsOpen(false)}>
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center mr-3 group-hover/item:scale-110 transition">💰</div>
                        <span className="text-sm font-medium text-slate-700 group-hover/item:text-brand-pink">{p.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/investors" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition">Investors</Link>
            <Link to="/contact" className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition">Contact</Link>
            
            <Link 
              to="/apply" 
              className="btn-brand text-white px-7 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-brand-pink/20"
            >
              Apply Online
            </Link>

            {isAdmin && (
               <Link to="/admin" className="p-2 bg-slate-900 rounded-lg text-white font-bold text-xs">ADMIN</Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-slate-100 p-6 space-y-4 shadow-xl`}>
          <Link to="/" className="block text-lg font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block text-lg font-bold text-slate-800" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <div className="pt-2">
            <p className="text-xs font-black uppercase text-brand-blue mb-4">Services</p>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/apply" className="p-4 bg-brand-lightBlue rounded-2xl font-bold text-brand-blue" onClick={() => setIsMenuOpen(false)}>Loans</Link>
              <Link to="/investors" className="p-4 bg-brand-lightPink rounded-2xl font-bold text-brand-pink" onClick={() => setIsMenuOpen(false)}>Investors</Link>
            </div>
          </div>
      </div>
    </nav>
  );
};
