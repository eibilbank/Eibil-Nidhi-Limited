
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductInfo } from '../types';

/**
 * Prop interface for Footer component
 */
interface FooterProps {
  products: ProductInfo[];
  settings: any;
}

// Updated Footer to accept dynamic products and site settings
export const Footer: React.FC<FooterProps> = ({ products, settings }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center text-white font-black italic shadow-lg">E</div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white leading-none">{settings.companyName} <span className="text-brand-pink">{settings.companySuffix}</span></span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-bold">{settings.tagline}</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed font-medium">
            India's most innovative Nidhi company, bridging the gap between traditional savings and modern financial convenience. Registered under Govt of India.
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-blue/20 hover:text-brand-blue transition-all cursor-pointer">FB</div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-pink/20 hover:text-brand-pink transition-all cursor-pointer">TW</div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-blue/20 hover:text-brand-blue transition-all cursor-pointer">IN</div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-black uppercase text-xs tracking-widest mb-10">Product Suite</h3>
          <div className="grid grid-cols-1 gap-4 text-sm font-semibold">
            {products.slice(0, 6).map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="hover:text-brand-blue transition flex items-center">
                <span className="w-1 h-1 rounded-full bg-brand-pink mr-3"></span>
                {p.name}
              </Link>
            ))}
            <Link to="/apply" className="text-brand-pink text-xs mt-2 hover:underline">View all services →</Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-black uppercase text-xs tracking-widest mb-10">Company</h3>
          <ul className="space-y-4 text-sm font-semibold">
            <li><Link to="/about" className="hover:text-white transition">About Our Legacy</Link></li>
            <li><Link to="/investors" className="hover:text-white transition">Investor Relations</Link></li>
            <li><Link to="/branches" className="hover:text-white transition">Global Network</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Support Hub</Link></li>
            <li><Link to="/admin" className="hover:text-white transition">Employee Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-black uppercase text-xs tracking-widest mb-10">Corporate Office</h3>
          <div className="space-y-6 text-sm font-medium">
            <div className="flex gap-4">
              <span className="text-brand-pink text-xl">📍</span>
              <p>Finance Towers, Level 4, <br/>Bandra Kurla Complex, Mumbai</p>
            </div>
            <div className="flex gap-4">
              <span className="text-brand-blue text-xl">📞</span>
              <p>Toll Free: {settings.phone} <br/>Support: +91 22 9876 5432</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        <p>&copy; 2024 {settings.companyName} {settings.companySuffix}. TRUSTED BY MILLIONS.</p>
        <div className="flex gap-10">
          <Link to="/privacy" className="hover:text-brand-blue transition">Privacy</Link>
          <Link to="/terms" className="hover:text-brand-pink transition">Terms</Link>
          <Link to="/compliance" className="hover:text-white transition">Compliance</Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center mt-12 px-4">
        <p className="text-[9px] text-slate-600 leading-relaxed font-medium">
          Disclaimer: Nidhi Companies are authorized to accept deposits from and lend only to their members. {settings.companyName} {settings.companySuffix} is fully compliant with Nidhi Rules, 2014. Loans are subject to valuation and collateral verification. Interest rates shown are illustrative and actual rates may vary based on membership tenure and plan selection.
        </p>
      </div>
    </footer>
  );
};
