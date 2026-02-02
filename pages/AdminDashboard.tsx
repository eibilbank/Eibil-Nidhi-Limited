
import React, { useState } from 'react';
import { ProductInfo } from '../types';

interface AdminDashboardProps {
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  products: ProductInfo[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInfo[]>>;
  branches: any[];
  setBranches: React.Dispatch<React.SetStateAction<any[]>>;
  settings: any;
  setSettings: React.Dispatch<React.SetStateAction<any>>;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  isAdmin, setIsAdmin, products, setProducts, branches, setBranches, settings, setSettings 
}) => {
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'loans' | 'products' | 'branches' | 'settings'>('loans');
  const [editingItem, setEditingItem] = useState<any>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAdmin(true);
    } else {
      alert('Incorrect password! (Hint: admin123)');
    }
  };

  const saveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = products.map(p => p.id === editingItem.id ? editingItem : p);
    setProducts(updated);
    setEditingItem(null);
  };

  const saveBranch = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = branches.map(b => b.id === editingItem.id ? editingItem : b);
    setBranches(updated);
    setEditingItem(null);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-md w-full">
          <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center text-white text-2xl mb-8 mx-auto shadow-xl">🔐</div>
          <h1 className="text-3xl font-black text-slate-800 mb-2 text-center">Admin Portal</h1>
          <p className="text-slate-500 mb-8 text-center">Manage EIBIL Nidhi operations.</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 ring-brand-blue/10 transition font-bold" 
                placeholder="••••••••"
              />
            </div>
            <button className="w-full py-5 btn-brand text-white font-black rounded-2xl shadow-xl shadow-brand-pink/20">
              Authorize Access
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-xs font-black text-brand-pink uppercase tracking-[0.2em] mb-2 block">System Administrator</span>
            <h1 className="text-5xl font-black text-slate-900 tracking-tight">Control Panel</h1>
          </div>
          <button onClick={() => setIsAdmin(false)} className="px-6 py-3 bg-white text-red-500 font-bold rounded-xl border border-red-50 hover:bg-red-50 transition">Sign Out</button>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { id: 'loans', label: 'Applications', icon: '📝' },
            { id: 'products', label: 'Products', icon: '💎' },
            { id: 'branches', label: 'Branches', icon: '📍' },
            { id: 'settings', label: 'Site Settings', icon: '⚙️' },
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => { setActiveTab(tab.id as any); setEditingItem(null); }}
              className={`px-8 py-4 rounded-2xl font-black text-sm transition flex items-center gap-3 shadow-sm ${activeTab === tab.id ? 'bg-slate-900 text-white shadow-xl' : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'}`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl p-10 md:p-16 min-h-[600px]">
          {/* Applications View */}
          {activeTab === 'loans' && (
            <div>
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-black text-slate-800">Recent Applications</h2>
                <div className="bg-brand-lightBlue px-4 py-2 rounded-xl text-brand-blue text-xs font-bold uppercase tracking-widest">LIVE FEED</div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-100">
                      <th className="pb-6 px-4">Member Name</th>
                      <th className="pb-6 px-4">Type</th>
                      <th className="pb-6 px-4">Amount</th>
                      <th className="pb-6 px-4">Status</th>
                      <th className="pb-6 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { name: 'Amitabh V.', type: 'Gold Loan', amount: '₹1,50,000', status: 'Pending' },
                      { name: 'Priya Sharma', type: 'FD Deposit', amount: '₹5,00,000', status: 'Approved' },
                      { name: 'Kunal Kapoor', type: 'Property Loan', amount: '₹12,00,000', status: 'Under Review' },
                    ].map((row, i) => (
                      <tr key={i} className="group hover:bg-slate-50 transition">
                        <td className="py-6 px-4 font-bold text-slate-700">{row.name}</td>
                        <td className="py-6 px-4 text-slate-500">{row.type}</td>
                        <td className="py-6 px-4 font-black text-slate-900">{row.amount}</td>
                        <td className="py-6 px-4">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${row.status === 'Approved' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{row.status}</span>
                        </td>
                        <td className="py-6 px-4 text-right">
                          <button className="text-brand-blue font-black text-xs hover:underline">MANAGE</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Products Management */}
          {activeTab === 'products' && (
            <div>
              <h2 className="text-3xl font-black text-slate-800 mb-12">Product Management</h2>
              {editingItem ? (
                <form onSubmit={saveProduct} className="max-w-3xl space-y-8 animate-in slide-in-from-right-10 duration-500">
                   <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Product Name</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl" value={editingItem.name} onChange={e => setEditingItem({...editingItem, name: e.target.value})} />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Interest Rate Label</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl" value={editingItem.interestRate} onChange={e => setEditingItem({...editingItem, interestRate: e.target.value})} />
                      </div>
                   </div>
                   <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Product Overview</label>
                      <textarea rows={4} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl" value={editingItem.overview} onChange={e => setEditingItem({...editingItem, overview: e.target.value})} />
                   </div>
                   <div className="flex gap-4">
                      <button type="submit" className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl shadow-xl">Update Product</button>
                      <button type="button" onClick={() => setEditingItem(null)} className="px-10 py-4 bg-white border border-slate-200 text-slate-500 font-black rounded-2xl">Cancel</button>
                   </div>
                </form>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {products.map(p => (
                    <div key={p.id} className="p-8 border border-slate-100 bg-slate-50 rounded-3xl flex justify-between items-center group hover:bg-white hover:shadow-2xl hover:border-brand-blue/20 transition duration-500">
                      <div>
                        <h4 className="text-xl font-black text-slate-800 mb-1">{p.name}</h4>
                        <p className="text-xs font-bold text-slate-400">{p.category.toUpperCase()} • {p.interestRate}</p>
                      </div>
                      <button onClick={() => setEditingItem(p)} className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 hover:text-brand-blue hover:scale-110 transition">✏️</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Branches Management */}
          {activeTab === 'branches' && (
            <div>
              <h2 className="text-3xl font-black text-slate-800 mb-12">Branch Locator Management</h2>
              {editingItem ? (
                <form onSubmit={saveBranch} className="max-w-3xl space-y-8 animate-in slide-in-from-right-10 duration-500">
                   <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Branch Name</label>
                      <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl" value={editingItem.name} onChange={e => setEditingItem({...editingItem, name: e.target.value})} />
                   </div>
                   <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Full Address</label>
                      <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl" value={editingItem.address} onChange={e => setEditingItem({...editingItem, address: e.target.value})} />
                   </div>
                   <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Contact Phone</label>
                      <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl" value={editingItem.phone} onChange={e => setEditingItem({...editingItem, phone: e.target.value})} />
                   </div>
                   <div className="flex gap-4">
                      <button type="submit" className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl shadow-xl">Update Branch</button>
                      <button type="button" onClick={() => setEditingItem(null)} className="px-10 py-4 bg-white border border-slate-200 text-slate-500 font-black rounded-2xl">Cancel</button>
                   </div>
                </form>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {branches.map(b => (
                    <div key={b.id} className="p-8 border border-slate-100 bg-slate-50 rounded-3xl group hover:bg-white transition duration-500">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl">📍</div>
                        <button onClick={() => setEditingItem(b)} className="text-slate-300 hover:text-brand-pink transition">✏️ Edit</button>
                      </div>
                      <h4 className="text-xl font-black text-slate-800 mb-2">{b.name}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{b.address}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Site Settings */}
          {activeTab === 'settings' && (
            <div className="animate-in fade-in duration-500">
               <h2 className="text-3xl font-black text-slate-800 mb-12">Global Site Settings</h2>
               <div className="max-w-4xl grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                     <h4 className="text-[10px] font-black uppercase text-brand-blue tracking-[0.2em]">Branding</h4>
                     <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Company Name</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold" value={settings.companyName} onChange={e => setSettings({...settings, companyName: e.target.value})} />
                     </div>
                     <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Company Suffix</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold" value={settings.companySuffix} onChange={e => setSettings({...settings, companySuffix: e.target.value})} />
                     </div>
                     <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Tagline</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold" value={settings.tagline} onChange={e => setSettings({...settings, tagline: e.target.value})} />
                     </div>
                  </div>

                  <div className="space-y-8">
                     <h4 className="text-[10px] font-black uppercase text-brand-pink tracking-[0.2em]">Homepage Content</h4>
                     <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Hero Heading</label>
                        <input type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold" value={settings.heroTitle} onChange={e => setSettings({...settings, heroTitle: e.target.value})} />
                     </div>
                     <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Hero Subtext</label>
                        <textarea rows={3} className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold" value={settings.heroSub} onChange={e => setSettings({...settings, heroSub: e.target.value})} />
                     </div>
                  </div>
               </div>
               
               <div className="mt-16 pt-12 border-t border-slate-100 flex justify-end">
                  <div className="bg-brand-lightBlue p-6 rounded-2xl flex items-center gap-6">
                     <p className="text-sm font-bold text-brand-blue">Changes will be visible to all visitors immediately.</p>
                     <button className="px-12 py-4 bg-slate-900 text-white font-black rounded-xl shadow-xl hover:scale-105 transition">Commit Global Changes</button>
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
