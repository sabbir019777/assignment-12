"use client";
import React from 'react';
import { Star, ShieldCheck, Activity, Quote, Globe, Cpu, ScanFace, Wifi, Zap, Terminal, BarChart3 } from 'lucide-react';

const Testimonials = () => {
  // 1. Success Metrics Data
  const stats = [
    { id: 1, label: "Nodes Active", value: "2,450", icon: <ShieldCheck size={18} />, color: "cyan", unit: "UNT" },
    { id: 2, label: "Bio-Link", value: "85K", icon: <Activity size={18} />, color: "emerald", unit: "HZ" },
    { id: 3, label: "Uptime", value: "99.9", icon: <Wifi size={18} />, color: "yellow", unit: "%" },
    { id: 4, label: "Grid Sec", value: "LVL-5", icon: <Globe size={18} />, color: "purple", unit: "SEC" },
  ];

  // 2. Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Mrs. Rahman",
      role: "Premium User",
      comment: "The neurological care protocol for my father was executed with military precision. Highly recommended.",
      rating: 5,
      location: "Gulshan, DHK",
      idCode: "USR_992",
      img: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 2,
      name: "Mr. Ahmed",
      role: "Corporate Client",
      comment: "Instant deployment of the baby sitting unit saved my workday. The tracking system is incredible.",
      rating: 5,
      location: "Banani, DHK",
      idCode: "CRP_101",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Dr. Sarah",
      role: "Medical Partner",
      comment: "Their ICU-grade nurses are top tier. The integration with medical monitoring is seamless.",
      rating: 5,
      location: "Uttara, DHK",
      idCode: "MED_554",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 4,
      name: "Engr. Kaiser",
      role: "Tech Lead",
      comment: "The real-time vitals dashboard gives me peace of mind while I am abroad. Futuristic service.",
      rating: 5,
      location: "Dhanmondi, DHK",
      idCode: "TCH_887",
      img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      id: 5,
      name: "Mrs. Chowdhury",
      role: "Subscriber",
      comment: "Emergency response time was under 15 minutes. The geo-fencing feature for elderly care is a lifesaver.",
      rating: 5,
      location: "Bashundhara, DHK",
      idCode: "SUB_332",
      img: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
      id: 6,
      name: "Care Point Ltd",
      role: "Enterprise",
      comment: "We outsourced our night-shift nursing to Care.xyz. Efficiency increased by 40%.",
      rating: 5,
      location: "Motijheel, DHK",
      idCode: "ENT_776",
      img: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  ];

  const row1 = reviews.slice(0, 3);
  const row2 = reviews.slice(3, 6);

  // --- REUSED COMPONENTS ---
  
  const ReviewCard = ({ review }) => (
    // Mobile-first width: w-[85vw], Desktop: md:w-[450px]
    <div className="group relative flex-shrink-0 w-[85vw] md:w-[450px] mx-3 md:mx-6 transition-all duration-500 hover:scale-[1.02]">
      
      {/* 1. Neon Bloom Effect behind card */}
      <div className="absolute -inset-[1px] bg-gradient-to-b from-cyan-500/40 to-purple-600/40 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* 2. Main Card Container with "Tech Cut" */}
      <div className="relative h-full bg-gray-900 border border-white/10 p-5 md:p-8 overflow-hidden transition-all duration-300 group-hover:border-cyan-500/50"
           style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}>
        
        {/* Background Circuit Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '20px 20px' }}>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

        {/* --- Top Bar: ID & Status --- */}
        <div className="flex justify-between items-start mb-4 md:mb-6 border-b border-dashed border-white/10 pb-4">
           <div className="flex flex-col">
              <span className="text-[8px] md:text-[9px] font-mono text-gray-500 tracking-widest uppercase mb-1">Identity Code</span>
              <div className="flex items-center gap-2">
                 <Terminal size={10} className="text-cyan-400" />
                 <span className="text-[10px] md:text-xs font-mono text-cyan-200 tracking-wider shadow-cyan-500/50 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                   {review.idCode}
                 </span>
              </div>
           </div>
           
           <div className="flex flex-col items-end">
              <span className="text-[8px] md:text-[9px] font-mono text-gray-500 tracking-widest uppercase mb-1">Rating Protocol</span>
              <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-1 md:w-1.5 h-3 md:h-4 transform skew-x-[-12deg] ${i < review.rating ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-gray-800'}`}></div>
                 ))}
              </div>
           </div>
        </div>

        {/* --- Comment Section --- */}
        <div className="relative mb-6 md:mb-8">
           <div className="absolute -left-3 md:-left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>
           <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-light pl-2 font-mono opacity-90">
              <span className="text-cyan-500 mr-2 text-lg">"</span>
              {review.comment}
           </p>
        </div>

        {/* --- Footer: Holographic User Profile --- */}
        <div className="flex items-center gap-3 md:gap-5 mt-auto bg-white/[0.02] p-2 md:p-3 rounded border border-white/5 relative overflow-hidden group-hover:bg-white/[0.04] transition-colors">
           
           <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-white/10 animate-[shimmer_3s_infinite]"></div>

           <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 border border-cyan-500/30 rounded-sm overflow-hidden">
              <img 
                src={review.img} 
                alt={review.name} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute top-0 left-0 w-full h-[20%] bg-cyan-400/30 blur-[2px] animate-[scan_2s_linear_infinite] pointer-events-none"></div>
           </div>

           <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold uppercase tracking-wider text-[10px] md:text-xs font-sans group-hover:text-cyan-400 transition-colors">
                  {review.name}
                </h4>
                <div className="flex gap-0.5">
                   <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-[7px] md:text-[8px] text-green-500 uppercase tracking-widest font-mono">Online</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-1">
                 <span className="text-[8px] md:text-[9px] px-1 md:px-1.5 py-0.5 bg-cyan-900/20 border border-cyan-500/20 text-cyan-300 font-mono rounded-sm">
                   {review.role}
                 </span>
                 <span className="text-[8px] md:text-[9px] text-gray-500 font-mono flex items-center gap-1">
                   <Globe size={8} /> {review.location}
                 </span>
              </div>
           </div>
        </div>
        
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"></div>
      </div>
    </div>
  );

  return (
    <section className="relative py-20 md:py-32 bg-[#020202] overflow-hidden text-white font-sans selection:bg-cyan-500/30 selection:text-black">
      
      <style jsx>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes scan { 0% { top: -20%; opacity: 0; } 50% { opacity: 1; } 100% { top: 120%; opacity: 0; } }
        @keyframes glitch { 
          0% { text-shadow: 2px 2px 0px #0ff, -2px -2px 0px #f0f; }
          25% { text-shadow: -2px 2px 0px #0ff, 2px -2px 0px #f0f; }
          50% { text-shadow: 2px -2px 0px #0ff, -2px 2px 0px #f0f; }
          75% { text-shadow: -2px -2px 0px #0ff, 2px 2px 0px #f0f; }
          100% { text-shadow: 2px 2px 0px #0ff, -2px -2px 0px #f0f; }
        }
        .animate-scroll-left { animation: scroll-left 60s linear infinite; }
        .animate-scroll-right { animation: scroll-right 60s linear infinite; }
        .glitch-text:hover { animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite; }
        .group-hover-pause:hover .animate-scroll-left,
        .group-hover-pause:hover .animate-scroll-right { animation-play-state: paused; }
      `}</style>

      <div className="absolute inset-0 bg-gray-800">
        <div className="absolute bottom-0 w-full h-[50vh] bg-[linear-gradient(to_bottom,transparent,rgba(6,182,212,0.1))] transform perspective-[1000px] rotate-x-60 origin-bottom"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)] z-10"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 mb-16 md:mb-24 items-start md:items-end justify-between border-b border-white/5 pb-12">
            <div className="lg:w-1/3">
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-cyan-500"></div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em]">System Feedback Loop</span>
               </div>
               
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.85] glitch-text cursor-default">
                  Client <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    Nodes
                  </span>
               </h2>
            </div>
            
            <div className="lg:w-2/3 w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {stats.map((stat) => (
                    <div key={stat.id} className="relative bg-[#080808]/80 backdrop-blur border border-white/10 p-4 md:p-5 group hover:border-cyan-500/40 transition-all overflow-hidden">
                       <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20"></div>
                       <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20"></div>
                       
                       <div className="flex justify-between items-start mb-3 md:mb-4">
                          <div className={`text-cyan-400 bg-cyan-400/10 p-2 rounded-sm`}>{stat.icon}</div>
                          <span className="text-[10px] text-gray-600 font-mono">{stat.unit}</span>
                       </div>
                       <div className="text-xl md:text-2xl font-bold text-white font-mono tracking-tighter group-hover:text-cyan-400 transition-colors">
                          {stat.value}
                       </div>
                       <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                          {stat.label}
                       </div>
                       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>
                 ))}
              </div>
            </div>
        </div>

        <div className="relative w-full group-hover-pause space-y-8 md:space-y-12">
           <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none"></div>
           <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none"></div>

           <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
              {[...row1, ...row1, ...row1, ...row1].map((review, idx) => (
                 <ReviewCard key={`row1-${idx}`} review={review} />
              ))}
           </div>

           <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
              {[...row2, ...row2, ...row2, ...row2].map((review, idx) => (
                 <ReviewCard key={`row2-${idx}`} review={review} />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;