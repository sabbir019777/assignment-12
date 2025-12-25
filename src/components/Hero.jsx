"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  HeartPulse,
  Baby,
  Users,
  Activity,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

// পরিবর্তন: const এর আগে 'export' যুক্ত করা হয়েছে
export const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "COMPASSIONATE",
      subtitle: "CARE SYSTEMS",
      desc: "Reliable and trusted care services. Making caregiving easy, secure, and accessible via next-gen protocols.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqT9t4ICc1UZReas0sKpcck74FJ_NAGu8YSA&s",
      accent: "#00f2fe", // Cyan
      icon: <HeartPulse className="w-6 h-6" />,
      stat: "98% Recovery Rate",
    },
    {
      id: 2,
      title: "PROFESSIONAL",
      subtitle: "BABYSITTING",
      desc: "Expert caretakers verified by biometric security. Secure a peaceful environment for your little ones.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040",
      accent: "#10b981", // Emerald
      icon: <Baby className="w-6 h-6" />,
      stat: "Verified Experts",
    },
    {
      id: 3,
      title: "DEDICATED",
      subtitle: "ELDERLY CARE",
      desc: "Empowering seniors with dignity and specialized medical attention. Premium lifestyle monitoring.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2070",
      accent: "#f59e0b", // Amber
      icon: <Users className="w-6 h-6" />,
      stat: "24/7 Monitoring",
    },
    {
      id: 4,
      title: "ADVANCED",
      subtitle: "RECOVERY LABS",
      desc: "High-tech home nursing care for rapid recovery. Clinical expertise delivered with personal empathy.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
      accent: "#3b82f6", // Blue
      icon: <Activity className="w-6 h-6" />,
      stat: "Clinical Grade",
    },
    {
      id: 5,
      title: "SPECIALIZED",
      subtitle: "ASSISTANCE",
      desc: "Inclusive care programs designed for neurodiverse individuals. Fostering growth and independence.",
      image: "https://elitecaresolutionsnevada.com/wp-content/uploads/2024/02/elite-care-solutions-las-vegas-henderson-nevada-tamara-shaw-7.jpg",
      accent: "#d946ef", // Fuchsia
      icon: <Sparkles className="w-6 h-6" />,
      stat: "Personalized AI",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  // Next Slide Function
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  // Previous Slide Function
  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // --- Auto Slide Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setCurrent((prevCurrent) => (prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1));
          return 0;
        }
        return oldProgress + 1.67;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [slides.length]);

  // --- Reset Progress on Slide Change ---
  useEffect(() => {
    setProgress(0);
  }, [current]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] font-sans selection:bg-white/20">
      {/* --- Dynamic Background Layer --- */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image with Parallax Scale Effect */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-linear ${
              index === current ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Advanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.15]" 
               style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>
      ))}

      {/* --- SIDE NAVIGATION BUTTONS --- */}
      <button 
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute top-1/2 left-4 lg:left-8 -translate-y-1/2 z-40 p-3 lg:p-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group shadow-lg cursor-pointer"
      >
        <ChevronLeft size={24} className="group-active:-translate-x-1 transition-transform" />
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute top-1/2 right-4 lg:right-8 -translate-y-1/2 z-40 p-3 lg:p-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group shadow-lg cursor-pointer"
      >
        <ChevronRight size={24} className="group-active:translate-x-1 transition-transform" />
      </button>

      {/* --- Main Content Layout --- */}
      <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
        
        {/* Top Header / Status Bar */}
        <div className="absolute top-8 left-6 lg:left-12 right-6 lg:right-12 flex justify-between items-center border-b border-white/10 pb-4 pointer-events-none">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">System Online</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-xs font-mono text-gray-400">
                <span>LAT: 23.8103° N</span>
                <span>LNG: 90.4125° E</span>
                <span>TEMP: 24°C</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mt-10">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Animated Badge */}
            <div className="overflow-hidden">
                <div 
                    key={`badge-${current}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl animate-fade-in-up"
                >
                    <span style={{ color: slides[current].accent }}>{slides[current].icon}</span>
                    <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                        Protocol: 0{slides[current].id}
                    </span>
                </div>
            </div>

            {/* Main Typography */}
            <div className="space-y-2 overflow-hidden pointer-events-none select-none">
              <h1 
                key={`title-${current}`}
                className="text-5xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tighter animate-slide-up leading-[0.9]"
              >
                {slides[current].title}
              </h1>
              <h2 
                key={`sub-${current}`}
                className="text-5xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-white animate-slide-up delay-100"
                style={{ 
                    WebkitTextStroke: `1px ${slides[current].accent}`,
                    textShadow: `0 0 30px ${slides[current].accent}40`
                }}
              >
                {slides[current].subtitle}
              </h2>
            </div>

            <p 
                key={`desc-${current}`}
                className="text-base lg:text-lg text-gray-400 max-w-xl leading-relaxed border-l-2 pl-6 animate-fade-in pointer-events-none"
                style={{ borderColor: slides[current].accent }}
            >
              {slides[current].desc}
            </p>

            {/* --- BUTTON AREA --- */}
            <div className="flex flex-wrap items-center gap-5 pt-4 relative z-50">
              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center focus:outline-none cursor-pointer"
              >
                {/* Glow Behind */}
                <div 
                    className="absolute -inset-1 opacity-30 blur-lg transition duration-200 group-hover:opacity-70 group-hover:duration-200"
                    style={{ backgroundColor: slides[current].accent }}
                ></div>

                {/* Main Button Shape */}
                <div 
                    className="relative flex items-center gap-3 px-8 py-4 bg-black border-t border-b border-white/20 transition-all duration-200 group-hover:border-white/50"
                    style={{ 
                        clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                        boxShadow: `inset 0 0 20px ${slides[current].accent}10`
                    }}
                >
                    <div 
                        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ backgroundColor: slides[current].accent }}
                    ></div>
                    <span className="relative z-10 font-mono tracking-[0.2em] text-sm uppercase group-hover:text-white font-bold">
                        Initialize Care
                    </span>
                    <ArrowUpRight 
                        size={18} 
                        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        style={{ color: slides[current].accent }}
                    />
                </div>
              </Link>
            </div>
            
          </div>

          {/* Right Column: Floating Glass Card */}
          <div className="hidden lg:col-span-5 lg:flex justify-end relative pointer-events-none">
             <div 
                key={`card-${current}`}
                className="relative z-20 w-80 p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl animate-float"
             >
                <div className="absolute -inset-0.5 rounded-2xl opacity-30 blur-sm transition-colors duration-500" style={{ backgroundColor: slides[current].accent }}></div>
                <div className="relative space-y-4">
                    <div className="flex justify-between items-start">
                        <ShieldCheck size={32} style={{ color: slides[current].accent }} />
                        <span className="text-[10px] font-mono text-gray-400 border border-white/10 px-2 py-1 rounded">SECURE_HASH_256</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white">{slides[current].stat}</h3>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">System Metric</p>
                    </div>
                    <div className="flex items-end gap-1 h-12 w-full mt-4">
                        {[40, 70, 45, 90, 60, 85, 95, 100].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t-sm opacity-60 transition-all duration-500" style={{ height: `${h}%`, backgroundColor: slides[current].accent }}></div>
                        ))}
                    </div>
                </div>
             </div>
          </div>

        </div>

        {/* --- Bottom Navigation --- */}
        <div className="absolute bottom-10 left-0 right-0 px-6 lg:px-12 z-30 pointer-events-none">
            <div className="flex flex-col md:flex-row items-end justify-between gap-6 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-white/20 font-mono">0{current + 1}</span>
                    <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full transition-all duration-100 ease-linear" style={{ width: `${progress}%`, backgroundColor: slides[current].accent }}></div>
                    </div>
                    <span className="text-sm font-bold text-white/40 font-mono">0{slides.length}</span>
                </div>
                <div className="hidden lg:flex gap-3 pointer-events-auto">
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`relative group w-20 h-24 overflow-hidden border transition-all duration-300 cursor-pointer ${index === current ? "border-white scale-110 shadow-lg" : "border-white/20 opacity-50 hover:opacity-100"}`}
                            style={{ borderColor: index === current ? slide.accent : '' }}
                        >
                            <img src={slide.image} alt="" className="w-full h-full object-cover" />
                            <div className={`absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors ${index === current ? "bg-transparent" : ""}`}></div>
                        </button>
                    ))}
                </div>
            </div>
        </div>

      </div>
      
      <style jsx>{`
        @keyframes slide-up {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .animate-slide-up {
            animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
// পরিবর্তন: export default Hero ডিলিট করা হয়েছে।