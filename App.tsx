
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { InvestorCenter } from './pages/InvestorCenter';
import { ApplyOnline } from './pages/ApplyOnline';
import { Branches } from './pages/Branches';
import { Contact } from './pages/Contact';
import { AdminDashboard } from './pages/AdminDashboard';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PRODUCTS as INITIAL_PRODUCTS, BRANCHES as INITIAL_BRANCHES } from './constants';
import { ProductInfo } from './types';

// Define explicit interface for site settings used in the About component
interface AboutSettings {
  companyName: string;
  companySuffix: string;
  tagline: string;
  heroTitle: string;
  heroSub: string;
  email: string;
  phone: string;
}

// Define props interface for About component to ensure correct JSX attribute validation
interface AboutProps {
  settings: AboutSettings;
}

/**
 * About Component - Fixed the 'Property settings does not exist on type IntrinsicAttributes' error
 * by using explicit prop destructuring with a typed interface instead of React.FC.
 * This approach is more robust in ensuring TypeScript correctly identifies the allowed props
 * for the component in JSX.
 */
const About = ({ settings }: AboutProps) => (
  <div className="pb-20">
    <section className="bg-brand-lightBlue py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-slate-900">About <span className="text-gradient">{settings.companyName} {settings.companySuffix}</span></h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Founded on the principles of mutual benefit and financial inclusion, we are a leading Nidhi Company dedicated to transforming the way our members save and borrow.
        </p>
      </div>
    </section>

    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800">Our Legacy of Trust</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {settings.companyName} is registered under the Companies Act and strictly follows the Nidhi Rules, 2014, as amended. Our core mission is to promote thrift and savings habit among our members.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Unlike traditional banks, we focus on a member-centric model where transparency is our greatest asset. Every transaction is audited, every policy is member-friendly, and every employee is committed to your growth.
          </p>
          <div className="flex gap-4 pt-4">
             <div className="flex-1 p-6 bg-white border border-brand-blue/20 rounded-2xl shadow-sm">
                <div className="text-brand-pink text-2xl mb-2 font-bold">100%</div>
                <div className="text-sm font-semibold text-slate-500 uppercase">Compliance</div>
             </div>
             <div className="flex-1 p-6 bg-white border border-brand-pink/20 rounded-2xl shadow-sm">
                <div className="text-brand-blue text-2xl mb-2 font-bold">Member</div>
                <div className="text-sm font-semibold text-slate-500 uppercase">Owned</div>
             </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-brand rounded-[2rem] blur-2xl opacity-10"></div>
          <img src="https://images.unsplash.com/photo-1573164060897-425941c302ba?auto=format&fit=crop&q=80&w=800" alt="About EIBIL" className="relative rounded-[2rem] shadow-2xl object-cover h-[500px] w-full" />
        </div>
      </div>
    </section>

    <section className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="text-center p-8">
           <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-blue/30 text-2xl">🤝</div>
           <h3 className="text-xl font-bold mb-4">Mutual Growth</h3>
           <p className="text-slate-400">We grow when our members grow. Our profit margins are reinvested into better rates for you.</p>
        </div>
        <div className="text-center p-8">
           <div className="w-16 h-16 bg-brand-pink rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-pink/30 text-2xl">💎</div>
           <h3 className="text-xl font-bold mb-4">Ethical Lending</h3>
           <p className="text-slate-400">No hidden charges. No aggressive recovery. Just fair lending based on mutual respect.</p>
        </div>
        <div className="text-center p-8">
           <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-blue/30 text-2xl">🛡️</div>
           <h3 className="text-xl font-bold mb-4">Secured Future</h3>
           <p className="text-slate-400">Your deposits are backed by physical gold and property assets, ensuring maximum safety.</p>
        </div>
      </div>
    </section>
  </div>
);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Dynamic State for Content Management
  const [products, setProducts] = useState<ProductInfo[]>(() => {
    const saved = localStorage.getItem('eibil_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [branches, setBranches] = useState(() => {
    const saved = localStorage.getItem('eibil_branches');
    return saved ? JSON.parse(saved) : INITIAL_BRANCHES;
  });

  const [siteSettings, setSiteSettings] = useState<AboutSettings>(() => {
    const saved = localStorage.getItem('eibil_settings');
    return saved ? JSON.parse(saved) : {
      companyName: 'EIBIL NIDHI',
      companySuffix: 'LIMITED',
      tagline: 'Modern Financial Trust',
      heroTitle: 'Invest in your Financial Freedom.',
      heroSub: 'Join EIBIL Nidhi Limited – where your savings grow faster and your dreams get funded instantly.',
      email: 'support@eibilnidhi.com',
      phone: '1800-123-4567'
    };
  });

  // Sync with LocalStorage for persistence
  useEffect(() => {
    localStorage.setItem('eibil_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('eibil_branches', JSON.stringify(branches));
  }, [branches]);

  useEffect(() => {
    localStorage.setItem('eibil_settings', JSON.stringify(siteSettings));
  }, [siteSettings]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar 
          isAdmin={isAdmin} 
          setIsAdmin={setIsAdmin} 
          products={products} 
          settings={siteSettings} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home products={products} settings={siteSettings} />} />
            <Route path="/about" element={<About settings={siteSettings} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/investors" element={<InvestorCenter />} />
            <Route path="/apply" element={<ApplyOnline products={products} branches={branches} />} />
            <Route path="/branches" element={<Branches branches={branches} />} />
            <Route path="/contact" element={<Contact settings={siteSettings} />} />
            <Route path="/admin" element={<AdminDashboard 
              isAdmin={isAdmin} 
              setIsAdmin={setIsAdmin} 
              products={products} 
              setProducts={setProducts}
              branches={branches}
              setBranches={setBranches}
              settings={siteSettings}
              setSettings={setSiteSettings}
            />} />
          </Routes>
        </main>

        <Footer products={products} settings={siteSettings} />
      </div>
    </Router>
  );
}

export default App;
