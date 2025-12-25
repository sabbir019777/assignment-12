"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, Clock, Activity, ArrowRight, Sparkles, Zap, ChevronLeft, Hexagon, Star } from 'lucide-react';

const ServiceDetails = () => {
  const { service_id } = useParams();
  const router = useRouter();
  const [currentService, setCurrentService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        // সিমুলেশন: লোডিং ইফেক্টটা সুন্দরভাবে দেখার জন্য ১.৫ সেকেন্ড ডিলে দেওয়া হলো
        // প্রোডাকশনে আপনি setTimeout সরিয়ে ফেলতে পারেন
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        const res = await fetch(`/api/services`);
        const data = await res.json();
        const foundService = data.find(s => s._id === service_id);
        setCurrentService(foundService);
      } catch (error) {
        console.error("Failed to fetch service details", error);
      } finally {
        setLoading(false);
      }
    };
    if (service_id) fetchService();
  }, [service_id]);

  // ---- UNIQUE FUTURISTIC LOADING SCREEN (Hyper-Core Reactor) ----
  if (loading) return (
    <div className="min-h-screen bg-[#030014] flex flex-col items-center justify-center relative overflow-hidden z-50">
       {/* Background Depth */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#030014] to-[#030014]"></div>
       
       {/* The Reactor Structure */}
       <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          
          {/* Outer Ring - Dashed & Slow */}
          <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/30 animate-[spin_10s_linear_infinite]"></div>
          
          {/* Middle Ring - Gyroscopic Effect */}
          <div className="absolute w-24 h-24 rounded-full border-t-2 border-b-2 border-cyan-400/80 animate-[spin_3s_linear_infinite]" style={{boxShadow: "0 0 15px #22d3ee"}}></div>
          
          {/* Inner Ring - Reverse Tilt */}
          <div className="absolute w-20 h-20 rounded-full border-r-2 border-l-2 border-purple-500/80 animate-[spin_3s_linear_infinite_reverse]" style={{boxShadow: "0 0 15px #a855f7"}}></div>
          
          {/* The Core - Pulsing Energy */}
          <div className="w-10 h-10 bg-white rounded-full animate-pulse shadow-[0_0_30px_#ffffff] z-10"></div>
          
          {/* Particles */}
          <div className="absolute w-full h-full animate-ping opacity-20 bg-indigo-500 rounded-full"></div>
       </div>

       {/* Loading Text with Glitch Effect Idea */}
       <div className="flex flex-col items-center gap-2 relative z-10">
          <p className="text-cyan-400 font-mono text-sm font-bold tracking-[0.3em] uppercase animate-pulse">
            System_Handshake
          </p>
          <div className="flex gap-1 h-1">
             <div className="w-2 h-full bg-indigo-500 animate-[bounce_1s_infinite]"></div>
             <div className="w-2 h-full bg-indigo-500 animate-[bounce_1s_infinite_0.2s]"></div>
             <div className="w-2 h-full bg-indigo-500 animate-[bounce_1s_infinite_0.4s]"></div>
          </div>
       </div>
    </div>
  );

  // ---- Error State ----
  if (!currentService) return (
    <div className="min-h-screen bg-[#030014] flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="relative z-10 border border-red-500/30 bg-red-900/10 backdrop-blur-xl p-10 rounded-2xl">
         <h2 className="text-3xl font-bold text-red-400 mb-2 uppercase tracking-widest">Signal Lost</h2>
         <p className="text-red-300/60 mb-6 font-light">The requested protocol could not be located.</p>
         <Link href="/services" className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-full text-red-200 transition-all text-sm uppercase tracking-wider">
            Return to Base
         </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#030014] text-white pt-24 pb-20 font-sans relative overflow-hidden selection:bg-indigo-500/30">
      
      {/* ---- Ambient Background Animation ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] bg-indigo-600/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-purple-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-[40%] left-[30%] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button onClick={() => router.back()} className="group flex items-center gap-3 text-indigo-200/60 hover:text-white mb-10 transition-all w-fit">
           <div className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
             <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
           </div>
           <span className="text-xs font-medium uppercase tracking-[0.2em]">Abort & Return</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* ---- Left Column: Holographic Image Portal ---- */}
          <div className="lg:col-span-6 relative group">
              {/* Image Glow/Aura */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              
              <div className="relative h-[600px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a12]/50 backdrop-blur-sm shadow-2xl">
                 <img 
                    src={currentService.img || currentService.image || "https://via.placeholder.com/600x800"} 
                    alt={currentService.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-in-out" 
                 />
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80"></div>

                 {/* Floating HUD Elements on Image */}
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex gap-4">
                       <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex-1">
                          <Activity size={20} className="text-emerald-400 mb-2" />
                          <p className="text-[10px] text-white/50 uppercase">System Status</p>
                          <p className="text-sm font-semibold text-emerald-400">Optimal</p>
                       </div>
                       <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl flex-1">
                          <ShieldCheck size={20} className="text-indigo-400 mb-2" />
                          <p className="text-[10px] text-white/50 uppercase">Security</p>
                          <p className="text-sm font-semibold text-indigo-400">Encrypted</p>
                       </div>
                    </div>
                 </div>
              </div>
          </div>

          {/* ---- Right Column: Data & Actions ---- */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full pt-4">
              
             {/* Category Tag */}
             <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-10 bg-indigo-500/50"></div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[11px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                   <Sparkles size={12} /> {currentService.category || "Premium Service"}
                </span>
             </div>

             {/* Title */}
             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {currentService.title}
             </h1>

             {/* Description with glass background */}
             <div className="relative mb-10 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-l-2xl"></div>
                <p className="text-indigo-100/70 text-lg leading-relaxed font-light">
                   {currentService.description}
                </p>
             </div>
             
             {/* Stats Row */}
             <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { icon: Clock, label: "Duration", val: "Flexible" },
                  { icon: Hexagon, label: "Complexity", val: "High" },
                  { icon: Star, label: "Rating", val: "5.0/5.0" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                     <stat.icon size={16} className="text-indigo-400 mb-2" />
                     <span className="text-[10px] text-white/40 uppercase tracking-wider">{stat.label}</span>
                     <span className="text-sm font-semibold text-white">{stat.val}</span>
                  </div>
                ))}
             </div>

             {/* Action Bar (Price + Button) */}
             <div className="mt-auto">
                <div className="bg-[#0a0a12]/80 backdrop-blur-xl border border-indigo-500/30 p-2 pl-8 rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_-10px_rgba(79,70,229,0.3)]">
                   
                   {/* Price */}
                   <div className="flex flex-col">
                      <p className="text-[10px] text-indigo-300/60 uppercase tracking-widest mb-1">Required Credits</p>
                      <div className="flex items-baseline gap-1">
                         <span className="text-lg font-light text-indigo-400">$</span>
                         <span className="text-4xl font-bold text-white tracking-tighter">{currentService.price}</span>
                      </div>
                   </div>

                   {/* Booking Button */}
                   <Link href={`/booking/${currentService._id}`} className="w-full md:w-auto">
                      <button className="group relative w-full md:w-auto overflow-hidden rounded-[1.2rem] bg-indigo-600 px-8 py-5 transition-all duration-300 hover:scale-105 hover:bg-indigo-500">
                         {/* Button shine effect */}
                         <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
                         
                         <div className="relative z-20 flex items-center justify-center gap-3">
                            <Zap size={18} className="text-yellow-300 fill-yellow-300" />
                            <span className="font-bold uppercase tracking-widest text-sm text-white">Bookings</span>
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                         </div>
                      </button>
                   </Link>
                </div>
             </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .reverse-spin { animation-direction: reverse; }
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetails;