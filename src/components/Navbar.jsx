"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Menu, X, HeartPulse, ChevronRight, Zap, ShieldCheck, LogOut, 
  ListChecks, Info, LayoutGrid, Cpu, Activity, Terminal, ShieldAlert 
} from 'lucide-react'; 
import { useAuth } from '../context/AuthContext'; 

const Navbar = () => {
  const { user, logOut } = useAuth(); 
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'My Bookings', href: '/my-bookings' },
  ];

  return (
    <div className="fixed w-full z-50 top-0 transition-all duration-500">
      <nav className={`w-full mx-auto transition-all duration-500 ease-in-out border-b ${
        scrolled 
        ? "bg-gray-800/50 backdrop-blur-md border-gray-800 py-2 shadow-lg" 
        : "bg-gray-800/50 backdrop-blur-sm py-3 border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="bg-green-900 p-1.5 rounded-lg border border-emerald-600 shadow-sm">
              <HeartPulse className="text-emerald-500 w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Care<span className="text-emerald-500 italic">.nxt</span>
              </span>
              <span className="text-[8px] font-bold text-emerald-500 tracking-widest uppercase">Next-Gen Health</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 bg-white/10 p-1 rounded-xl border border-white/10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`px-4 py-1.5 text-xs font-bold text-gray-400 transition-all rounded-lg hover:bg-emerald-500 hover:text-white ${scrolled ? 'text-gray-300' : 'text-gray-200'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Profile / Login Button Section */}
          <div className="hidden md:flex items-center gap-4" ref={dropdownRef}>
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 p-1 pr-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"
                >
                  <img 
                    src={user?.photoURL || "https://i.ibb.co/5GzXp3C/user-profile.png"} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border border-emerald-500 object-cover"
                  />
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${scrolled ? 'text-gray-400' : 'text-white'}`}>
                    Account
                  </span>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-4 w-64 bg-gray-900/90 backdrop-blur-2xl rounded-none border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] py-3 animate-in fade-in zoom-in duration-300 z-[100] overflow-hidden clip-path-dropdown">
                    
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                    
                    <div className="px-5 py-4 border-b border-white/5 relative">
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-500 animate-ping rounded-full"></div>
                      <p className="text-[9px] font-mono font-black text-cyan-500/60 uppercase tracking-[0.3em] mb-1">Authenticated_As</p>
                      <p className="text-[13px] font-mono font-black text-white truncate uppercase italic tracking-tighter">
                        {user?.displayName || "Anonymous_Node"}
                      </p>
                    </div>

                    <div className="py-2">
                      <Link 
                        href="/" 
                        onClick={() => setShowDropdown(false)} 
                        className="flex items-center gap-4 px-5 py-3 text-[10px] font-mono font-bold text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all border-l-2 border-transparent hover:border-cyan-500 uppercase tracking-widest group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center bg-white/5 group-hover:bg-cyan-500/20 transition-colors">
                          <Cpu size={12} /> 
                        </div>
                        Home
                      </Link>

                      <Link 
                        href="/services" 
                        onClick={() => setShowDropdown(false)} 
                        className="flex items-center gap-4 px-5 py-3 text-[10px] font-mono font-bold text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all border-l-2 border-transparent hover:border-cyan-500 uppercase tracking-widest group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center bg-white/5 group-hover:bg-cyan-500/20 transition-colors">
                          <Activity size={12} /> 
                        </div>
                       Services
                      </Link>

                      <Link 
                        href="/my-bookings" 
                        onClick={() => setShowDropdown(false)} 
                        className="flex items-center gap-4 px-5 py-3 text-[10px] font-mono font-bold text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all border-l-2 border-transparent hover:border-cyan-500 uppercase tracking-widest group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center bg-white/5 group-hover:bg-cyan-500/20 transition-colors">
                          <Terminal size={12} /> 
                        </div>
                        My-Bookings
                      </Link>

                      <Link 
                        href="/about" 
                        onClick={() => setShowDropdown(false)} 
                        className="flex items-center gap-4 px-5 py-3 text-[10px] font-mono font-bold text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all border-l-2 border-transparent hover:border-cyan-500 uppercase tracking-widest group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center bg-white/5 group-hover:bg-cyan-500/20 transition-colors">
                          <ShieldAlert size={12} /> 
                        </div>
                       About
                      </Link>
                    </div>

                    <button 
                      onClick={() => { logOut(); setShowDropdown(false); }}
                      className="w-full flex items-center gap-4 px-5 py-4 text-[10px] font-mono font-bold text-red-500 hover:bg-red-500/10 transition-all border-t border-white/5 group"
                    >
                      <div className="w-5 h-5 flex items-center justify-center bg-red-500/10 group-hover:bg-red-500 group-hover:text-white transition-all">
                        <LogOut size={12} /> 
                      </div>
                     Logout
                    </button>

                    <style jsx>{`
                      .clip-path-dropdown {
                        clip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);
                      }
                    `}</style>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/login"
                className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold rounded-xl bg-emerald-600 text-white transition-all shadow-lg hover:shadow-emerald-500/40"
              >
                <div className="relative flex items-center gap-1.5 text-sm">
                  <ShieldCheck size={16} />
                  <span>Login</span>
                </div>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-all ${scrolled ? 'text-emerald-600 bg-emerald-50' : 'text-white bg-white/10'}`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <div className={`fixed inset-0 bg-gray-900/95 backdrop-blur-xl transition-all duration-500 md:hidden z-[60] ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}>
        <div className="flex flex-col h-full pt-24 px-8 gap-4">
          {user && (
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 mb-4">
              <img src={user?.photoURL} alt="Profile" className="w-12 h-12 rounded-full border-2 border-emerald-500" />
              <div>
                <p className="text-white font-black uppercase text-sm">{user?.displayName}</p>
                <p className="text-emerald-500 text-[10px] font-bold">Active Grid Session</p>
              </div>
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 text-white font-bold hover:bg-emerald-500/20 transition-all"
            >
              <span className="text-lg">{link.name}</span>
              <ChevronRight size={20} className="text-emerald-500" />
            </Link>
          ))}

          {user ? (
            <button 
              onClick={() => { logOut(); setIsOpen(false); }}
              className="mt-4 flex items-center justify-center gap-3 w-full py-5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl font-black text-lg"
            >
              <LogOut size={22} /> Logout 
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-3 w-full py-5 bg-emerald-600 text-white rounded-2xl font-black text-xl"
            >
              <ShieldCheck size={22} /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;