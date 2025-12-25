"use client";
import React from 'react';
import { Target, Shield, Brain, Globe, Cpu, Zap, Activity, Microscope } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-cyan-500/30 pb-20 pt-32 overflow-hidden">
      
      {/* --- Ultra-Futuristic Background Layer --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* --- Header: Tactical Interface --- */}
        <div className="text-center max-w-4xl mx-auto mb-28">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-sm mb-10 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.1)]">
             <Cpu size={16} className="text-cyan-400 animate-spin-slow" />
             <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.5em] font-bold">Protocol_Identity_v.4.0.1</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none italic">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Human Empathy
            </span>
          </h1>
          
          <div className="flex justify-center items-center gap-4 mb-8 opacity-40">
             <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-cyan-500"></div>
             <Microscope size={14} className="text-cyan-400" />
             <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light tracking-wide italic">
            Care.xyz is the world's first <span className="text-cyan-300 font-medium">Neural-linked Care Grid</span>. We’ve synthesized advanced logistics with clinical empathy to ensure your family's safety is managed by certified professionals.
          </p>
        </div>

        {/* --- Mission & Vision: Cyber Boxes --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
            
            {/* Mission Card */}
            <div className="group relative p-10 bg-700/80 border border-white/5 rounded-br-[4rem] overflow-hidden transition-all duration-700 hover:border-cyan-500/50 hover:bg-[#0a0a1a]">
                <div className="absolute top-0 left-0 w-1 h-20 bg-cyan-500 group-hover:h-full transition-all duration-700"></div>
                <div className="absolute -right-10 -top-10 p-3 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <Target size={200} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
                    <Activity size={24} className="text-cyan-500" />
                    Mission_Log
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                    To digitize and secure the caregiving industry. Our core objective is to integrate <span className="text-white font-medium">Biometric Verification</span> into home care, making elite assistance accessible to every sector of the society.
                </p>
            </div>

            {/* Vision Card */}
            <div className="group relative p-10 bg-gray-700/80 border border-white/5 rounded-tl-[4rem] overflow-hidden transition-all duration-700 hover:border-purple-500/50 hover:bg-[#10081a]">
                <div className="absolute bottom-0 right-0 w-1 h-20 bg-purple-500 group-hover:h-full transition-all duration-700"></div>
                <div className="absolute -left-10 -bottom-10 p-3 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <Globe size={200} />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-widest mb-6 flex items-center gap-4">
                    <Zap size={24} className="text-purple-500" />
                    The_Future
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                    Visualizing a unified global care-matrix where no person is left without support. We are scaling our <span className="text-white font-medium">Rapid Response Units</span> to bridge the gap between medical need and home comfort.
                </p>
            </div>
        </div>

        {/* --- Core Values: Conditional Logic Color Mapping --- */}
        <div className="mb-32">
            <div className="flex items-center gap-4 mb-14">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic">System_Directives</h2>
                <div className="h-[1px] flex-grow bg-white/10"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Zero Trust Security", desc: "Military-grade screening for every operative.", icon: <Shield size={32} />, type: "cyan" },
                    { title: "Neural Empathy", desc: "AI-enhanced caregiver selection for emotional match.", icon: <Brain size={32} />, type: "purple" },
                    { title: "Hyper Efficiency", desc: "System-wide deployment under 1800 seconds.", icon: <Zap size={32} />, type: "yellow" }
                ].map((item, idx) => (
                    <div key={idx} className="group relative p-8 bg-gray-700 border border-white/5 rounded-2xl transition-all duration-500 hover:-translate-y-2">
                        {/* Conditional Logic for Colors */}
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 
                            ${item.type === 'cyan' ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_20px_#06b6d4]' : ''}
                            ${item.type === 'purple' ? 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-black group-hover:shadow-[0_0_20px_#a855f7]' : ''}
                            ${item.type === 'yellow' ? 'bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black group-hover:shadow-[0_0_20px_#eab308]' : ''}
                        `}>
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-black mb-3 font-mono uppercase tracking-tight italic">{item.title}</h4>
                        <p className="text-sm text-gray-500 font-light group-hover:text-gray-300 transition-colors tracking-widest">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- Dynamic Stats with Glassmorphism --- */}
        <div className="relative border border-white/10 rounded-[3rem] p-12 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
                {[
                    { label: "Hours_Logged", value: "128K+", color: "text-cyan-400" },
                    { label: "Verified_Ops", value: "4,200", color: "text-purple-400" },
                    { label: "Grid_Stability", value: "99.9%", color: "text-emerald-400" },
                    { label: "Districts", value: "64", color: "text-yellow-400" }
                ].map((stat, i) => (
                    <div key={i} className="text-center group">
                        <h3 className={`text-5xl md:text-6xl font-black mb-3 font-mono tracking-tighter ${stat.color} group-hover:scale-110 transition-transform`}>{stat.value}</h3>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- Call to Action: Glowing Matrix --- */}
        <div className="mt-32 text-center relative">
             <Link href="/services" className="relative inline-flex group">
                  <div className="absolute transition-all duration-1000 opacity-30 -inset-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full blur-3xl group-hover:opacity-60"></div>
                  <button className="relative inline-flex items-center justify-center px-1 py-5 text-sm font-black text-white transition-all duration-300 bg-gray-700 border border-cyan-500/50 font-mono rounded-full hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] uppercase tracking-[0.5em]">
                    Synchronize_Services
                  </button>
             </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;