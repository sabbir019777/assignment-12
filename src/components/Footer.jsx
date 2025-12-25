import React from 'react';
import { Facebook, Linkedin, Youtube, ExternalLink } from 'lucide-react';


const XIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white pt-24 pb-12 overflow-hidden font-sans">
      {/* ব্যাকগ্রাউন্ড নিয়ন গ্লো */}
      <div className="absolute top-[-100px] left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-50px] right-1/4 w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Column 1: Brand */}

          <div className="md:col-span-4 space-y-8">
            <div>
              <h2 className="text-5xl font-black tracking-[-0.05em] italic">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                  CARE.XYZ
                </span>
              </h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-cyan-500 to-transparent mt-2"></div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-sm">
              Redefining caregiving through <span className="text-cyan-400">Next-Gen Intelligence</span>. 
              We bridge the gap between human trust and digital precision.
            </p>
          </div>

          {/* Column 2: Expertise */}

          <div className="md:col-span-2 space-y-6">
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] opacity-60">Expertise</h3>
            <ul className="space-y-4">
              {['Baby Sitting', 'Elderly Care', 'Specialized Nursing'].map((item) => (
                <li key={item} className="group flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer text-sm">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-cyan-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: System */}

          <div className="md:col-span-2 space-y-6">
            <h3 className="text-white font-bold uppercase tracking-[0.3em] text-[10px] opacity-60">System</h3>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'My Bookings', 'Mission'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 flex items-center gap-1 transition-colors text-sm group">
                    {link} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}

          <div className="md:col-span-4 space-y-10">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-cyan-500/30 transition-colors duration-500">
              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-4 opacity-50">Secure Channel</h3>
              <p className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent break-all">
                support@carexyz.io
              </p>
            </div>
            
            <div className="flex gap-5">
              {[
                { name: 'FB', icon: <Facebook size={20} />, color: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-blue-500' },

                { name: 'X', icon: <XIcon size={18} />, color: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:border-white' },

                { name: 'LI', icon: <Linkedin size={20} />, color: 'hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] hover:border-cyan-500' },
                
                { name: 'YT', icon: <Youtube size={20} />, color: 'hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:border-red-500' }
              ].map((social, idx) => (
                <div 
                  key={idx} 
                  className={`w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 cursor-pointer bg-[#0c0c0e] ${social.color}`}
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Futuristic Glowing Divider */}
        <div className="mt-24 relative h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[2px] bg-cyan-500 shadow-[0_0_20px_#06b6d4]"></div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:row justify-between items-center gap-6">
          <div className="text-gray-500 text-[10px] tracking-[0.3em] font-medium uppercase">
            © 2025 CARE.XYZ <span className="mx-2 text-gray-800">|</span> 
            <span className="text-cyan-500/50">Core Protocol v2.0.4</span>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="text-gray-500 text-[10px] tracking-widest hover:text-white transition-all uppercase">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-[10px] tracking-widest hover:text-white transition-all uppercase">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;