
import Link from 'next/link';

export const metadata = {
  title: "404 - System Failure | Care.xyz",
};

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#020202] overflow-hidden text-white font-mono selection:bg-cyan-500/30">
      
      {/* 1. Futuristic Background Grid (The Matrix Effect) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none"></div>

      {/* 3. Main HUD Container */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full mx-4">
        
        {/* Top Decorative Line */}
        <div className="w-[2px] h-24 bg-gradient-to-b from-transparent via-cyan-500 to-transparent mb-8 opacity-50"></div>

        {/* Glassmorphic Card */}
        <div className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] p-12 md:p-16 rounded-3xl shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)] w-full text-center relative overflow-hidden group">
          
          {/* Animated Scanline Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-[50%] w-full -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>

          {/* Glitchy 404 Text */}
          <h1 className="text-[100px] md:text-[140px] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            404
          </h1>

          {/* Status Message */}
          <div className="mt-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="text-[10px] tracking-[0.2em] text-red-400 uppercase font-bold">Error: Protocol Missing</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest">
              Lost In Cyberspace
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
              The coordinates you entered imply a zone that does not exist within our secure network. 
            </p>
          </div>

          {/* Decorative Tech Corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-cyan-500/30 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-cyan-500/30 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-500/30 rounded-br-xl"></div>
          
          {/* Button at the VERY BOTTOM of the card with extra spacing */}
          <div className="mt-16 md:mt-20">
            <Link href="/">
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent overflow-hidden rounded-none transition-all hover:bg-cyan-950/30">
                {/* Custom Button Borders */}
                <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-all"></span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-all"></span>
                
                <span className="relative text-cyan-400 font-bold text-sm tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                   &lt; Return to Home /&gt;
                </span>
              </button>
            </Link>
          </div>

        </div>

        {/* Bottom Decorative Line */}
        <div className="w-[2px] h-24 bg-gradient-to-b from-cyan-500 to-transparent mt-8 opacity-50"></div>
        
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] mt-2">
          System ID: C.X.Y.Z-404
        </p>
      </div>
    </div>
  );
}