"use client";

import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Cpu, ShieldCheck, Terminal, Box, Lock } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res] = await Promise.all([
          fetch('/api/services'),
          new Promise(resolve => setTimeout(resolve, 2000)) 
        ]);
        
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleViewDetails = (serviceId) => {
    if (authLoading) return;

    if (user) {
      router.push(`/service/${serviceId}`); 
    } else {
      router.push('/login');
    }
  };

  if (loading || authLoading) return (
    <div className="min-h-screen bg-[#020408] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#020408] to-[#020408]"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-40 h-40 flex items-center justify-center mb-10">
           <div className="absolute w-full h-full border-[1px] border-cyan-500/20 rounded-full animate-[spin_4s_linear_infinite]"></div>
           <div className="absolute w-[80%] h-[80%] border-t-[2px] border-cyan-400 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
           <Cpu size={40} className="text-cyan-400 animate-pulse" />
        </div>
        
        <h2 className="text-xl font-mono text-cyan-400 mb-4 tracking-[0.5em] uppercase italic animate-pulse">Initializing_Grid_Nodes</h2>
        <div className="w-72 h-[2px] bg-gray-900 rounded-full overflow-hidden border border-white/5">
          <div className="h-full bg-cyan-500 shadow-[0_0_15px_#06b6d4] animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020408] text-white font-sans relative overflow-hidden pt-32 pb-24">
      
      {/* ---- Background Decor ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(6,182,212,0.03)_50%,transparent_51%)] bg-[size:100%_4px] animate-scanline opacity-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <header className="mb-32 text-center max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-3xl rounded-none skew-x-[-20deg] mb-10">
            <Terminal size={14} className="text-cyan-400 skew-x-[20deg]" />
            <span className="text-[10px] font-mono text-cyan-400 tracking-[0.4em] uppercase font-bold skew-x-[20deg]">
              Central_Database_v8.0
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-none italic uppercase">
            System<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">_Services</span>
          </h1>
          <p className="text-cyan-500/40 font-mono text-[10px] tracking-[1.5em] uppercase">Authorized Access Only</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service._id} className="group relative">
              <div className="relative h-[600px] flex flex-col bg-black/60 border border-white/5 backdrop-blur-md transition-all duration-700 group-hover:bg-cyan-950/10 group-hover:border-cyan-500/50 clip-path-tech">
                
                {/* Image Section - Fixed: Removed grayscale, opacity-50 and white overlays */}
                <div className="relative h-[45%] overflow-hidden border-b border-white/5">
                  <img 
                    src={service.img || "https://via.placeholder.com/400x300"} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform transition-all duration-1000 scale-100 group-hover:scale-110 opacity-100"
                  />
                  {/* Lightened Gradient to maintain original image colors */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-black/80 border border-cyan-500/30 px-4 py-2 flex flex-col items-start gap-0.5">
                        <span className="text-[8px] font-mono text-cyan-500/60 uppercase tracking-widest leading-none">Access_Fee</span>
                        <span className="text-xl font-bold text-cyan-400 tracking-tighter font-mono">${service.price}</span>
                    </div>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow relative">
                  <div className="absolute -top-10 right-10">
                     <div className="w-16 h-16 bg-[#020408] border border-cyan-500/30 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-700">
                        <Box size={24} className="text-cyan-500 -rotate-45 group-hover:rotate-0 transition-all duration-700" />
                     </div>
                  </div>

                  <div className="mb-6">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-5 bg-cyan-500"></div>
                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.4em]">Node_{service._id.slice(-6).toUpperCase()}</span>
                     </div>

                    <h2 className="text-3xl font-black text-white mb-4 leading-none group-hover:text-cyan-400 transition-colors uppercase italic">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 text-xs leading-relaxed font-medium italic font-mono line-clamp-3 group-hover:text-gray-300 transition-colors">
                      {">"} {service.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <button 
                      onClick={() => handleViewDetails(service._id)}
                      className="w-full relative group/btn py-5 overflow-hidden border border-white/10 bg-transparent transition-all duration-500 hover:border-cyan-500/50"
                    >
                      <div className="absolute inset-0 w-0 bg-cyan-500/10 group-hover/btn:w-full transition-all duration-500 ease-out"></div>
                      
                      <div className="relative flex items-center justify-between px-6">
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-white/40 group-hover/btn:text-cyan-400 transition-colors flex items-center gap-3">
                           {user ? <ShieldCheck size={14} className="text-cyan-500" /> : <Lock size={14} className="text-red-500 animate-pulse" />}
                           View Details
                        </span>
                        <ArrowRight size={18} className="text-cyan-500 transition-transform duration-500 group-hover/btn:translate-x-2" />
                      </div>
                      <div className="absolute bottom-0 left-0 h-[1px] bg-cyan-500 w-0 group-hover/btn:w-full transition-all duration-700"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .clip-path-tech {
          clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 30px));
        }
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-scanline {
          animation: scanline 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;