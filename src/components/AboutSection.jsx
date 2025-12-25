"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, HeartPulse, Zap, Activity, Aperture, Globe } from 'lucide-react';

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://omegayksi.com/wp-content/uploads/2024/12/Black-Elderly-Care-OMEGAYKSI-768x768.jpg',

    'https://previews.123rf.com/images/choreograph/choreograph1601/choreograph160100004/50423857-doctor-examining-a-child-girl-in-a-hospital.jpg',

    'https://c-care.ca/wp-content/uploads/2019/04/5-important-benefits-of-homecare.jpg',

    'https://raisingchildren.net.au/__data/assets/image/0020/48341/child-care-planning-settling-innarrow.jpg',

    'https://alzheimer.ca/sites/default/files/styles/hero/public/2020-10/Friendly-nurse-talking-to-senior-woman%20%281%29.jpg?itok=1n_YWyIf',


'https://img.freepik.com/free-photo/family-spending-time-together-home_23-2149032161.jpg?semt=ais_hybrid&w=740&q=80',

'https://cdn.aarp.net/content/dam/aarp/caregiving/2020/05/1140x655-grandpa-son-grandson-walking.jpg',

    'https://www.allnursingschools.com/wp-content/uploads/2020/09/icu-nurse-listening-to-patients-heart-1200x628-1.jpg',

    'https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/getty_521047180_186951.jpg',

    'https://as1.ftcdn.net/jpg/05/27/95/72/1000_F_527957231_eDLVOs22y7yULKpU9ypZqPhFI5uNPU96.jpg',
  ];

  const features = [
    {
      icon: <ShieldCheck size={32} className="text-cyan-400" />,
      title: "Verified Trust",
      desc: "Multi-layer neural identity verification protocols active."
    },
    {
      icon: <HeartPulse size={32} className="text-pink-500" />,
      title: "Empathy Core",
      desc: "AI-driven matching algorithm for optimal human connection."
    },
    {
      icon: <Zap size={32} className="text-yellow-400" />,
      title: "Instant Deploy",
      desc: "Real-time grid system connects you to help within minutes."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden text-white font-sans selection:bg-cyan-500/30">
      
      {/* 1. Futuristic Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="lg:w-1/2 space-y-10">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border-l-2 border-cyan-500 bg-gradient-to-r from-cyan-950/30 to-transparent backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase">System: Online</span>
            </div>
            
            {/* Heading */}
            <div className="relative">
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-600">
                NEXT_GEN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  CARE PROTOCOL
                </span>
              </h2>
              {/* Decorative Line */}
              <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-xl">
              <span className="text-cyan-400 font-bold font-mono">&lt;CARE.XYZ /&gt;</span> bridges the gap between biological empathy and digital precision. We ensure your family's safety with military-grade security and human-centric care.
            </p>

            {/* Feature Modules */}
            <div className="grid grid-cols-1 gap-5">
              {features.map((item, idx) => (
                <div key={idx} className="group relative p-5 bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden">
                  {/* Hover Corner Effect */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-cyan-500/0 group-hover:border-r-cyan-500 transition-all duration-300"></div>
                  
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-black/50 border border-white/10 rounded-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-500 font-mono mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: VISUAL HUD --- */}
          <div className="lg:w-1/2 w-full relative">
            
            {/* Main Holographic Container */}
            <div className="relative aspect-square md:aspect-[4/5] bg-gray-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20">
              
              {/* Slideshow Images */}
              {images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
                    idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                  style={{ backgroundImage: `url('${imgUrl}')` }}
                >
                  {/* Dark Overlay for text readability */}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              ))}

        
              
              {/* 1. Scanline Animation */}
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-[20%] w-full animate-[scan_4s_linear_infinite]"></div>
              
              {/* 2. Grid Overlay */}
              <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(18,18,18,0)_2px,transparent_2px),linear-gradient(90deg,rgba(18,18,18,0)_2px,transparent_2px)] bg-[size:40px_40px] opacity-20"></div>

              {/* 3. Corner Brackets */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500 z-20"></div>
              <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-500 z-20"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-cyan-500 z-20"></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-500 z-20"></div>

              {/* Floating Data Card */}

              <div className="absolute bottom-12 left-12 right-12 z-30">
                <div className="backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Activity size={14} className="text-green-500 animate-pulse" />
                        <span className="text-[10px] text-green-500 font-mono uppercase tracking-widest">Live Monitoring</span>
                      </div>
                      <h4 className="text-4xl font-bold text-white tracking-tighter">
                        2,450<span className="text-cyan-400 text-2xl align-top">+</span>
                      </h4>
                      <p className="text-gray-400 text-xs font-mono mt-1">ACTIVE CAREGIVERS</p>
                    </div>
                    
                    {/* Rotating Element */}

                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="absolute inset-0 border-2 border-dashed border-gray-600 rounded-full animate-[spin_10s_linear_infinite]"></div>
                      <div className="absolute inset-2 border border-cyan-500/30 rounded-full"></div>
                      <Aperture size={24} className="text-cyan-400 animate-[spin_3s_linear_infinite]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Tech Badge */}

              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 px-4 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                <Globe size={12} className="text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-400">GLOBAL_GRID_V.2.0</span>
              </div>

            </div>
            
            {/* Background Glow behind the card */}
            
            <div className="absolute -inset-4 bg-cyan-500/20 rounded-[50px] blur-2xl -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;