"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Mail, 
  Lock, 
  Fingerprint, 
  ArrowRight, 
  Chrome,
  ShieldAlert,
  UserPlus,
  Cpu,
  Activity,
  Eye,      // Eye icon import
  EyeOff    // EyeOff icon import
} from "lucide-react";
import Link from "next/link";
import { auth, googleProvider } from "../../firebase/firebase.config"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false); // পাসওয়ার্ড ভিজিবিলিটি স্টেট
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Login Successful:", result.user);
      router.push("/");
    } catch (error) {
      console.error("Login Error:", error.message);
      alert("Error: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login Successful:", result.user);
      router.push("/");
    } catch (error) {
      console.error("Google Login Error:", error.message);
      alert("Google Login Failed!");
    }
  };

  return (
    <div className="min-h-screen bg-[#05080a] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* ---- Ultra-Futuristic Background ---- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(6,182,212,0.03)_50%,transparent_51%)] bg-[size:100%_4px] animate-[scanline_10s_linear_infinite] opacity-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        
        <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-[440px] perspective-1000">
        <div className="bg-[#0a1114]/90 backdrop-blur-3xl border border-cyan-500/20 rounded-[2rem] p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-700">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          <header className="text-center mb-12 relative">
            <div className="relative inline-flex mb-6">
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full animate-pulse"></div>
              <div className="relative w-20 h-20 flex items-center justify-center bg-[#0d161a] border border-cyan-400/30 rounded-2xl rotate-45 group-hover:rotate-0 transition-transform duration-700">
                <Fingerprint size={40} className="text-cyan-400 -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-cyan-500 p-1.5 rounded-lg border-2 border-[#05080a]">
                <ShieldAlert size={14} className="text-[#05080a]" />
              </div>
            </div>
            
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2">
              Access<span className="text-cyan-400">_Grant</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-cyan-500/40 font-mono text-[9px] tracking-[0.4em] uppercase font-bold">
              <Cpu size={10} /> Secure_Verification_System_v9.2
            </div>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Terminal ID (Email) */}
            <div className="relative group/input">
               <label className="block text-[10px] font-mono text-cyan-400/50 uppercase tracking-widest mb-2 ml-1">Terminal_ID</label>
               <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="ENTER_DATABASE_ID"
                    required
                    onChange={handleChange}
                    className="w-full bg-[#0d161a] border border-white/5 p-4 pl-12 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all font-mono text-xs placeholder:text-gray-800"
                  />
               </div>
            </div>

            {/* Encryption Key (Password) */}
            <div className="relative group/input">
               <label className="block text-[10px] font-mono text-cyan-400/50 uppercase tracking-widest mb-2 ml-1">Encryption_Key</label>
               <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                  <input
                    type={showPassword ? "text" : "password"} // পাসওয়ার্ড টাইপ পরিবর্তন
                    name="password"
                    placeholder="••••••••••••"
                    required
                    onChange={handleChange}
                    className="w-full bg-[#0d161a] border border-white/5 p-4 pl-12 pr-12 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all font-mono text-xs placeholder:text-gray-800"
                  />
                  {/* Eye Button */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
               </div>
            </div>

            <button
              type="submit"
              className="w-full relative group/btn py-5 overflow-hidden rounded-xl bg-transparent border border-cyan-500/30 transition-all duration-500 active:scale-95"
            >
              <div className="absolute inset-0 w-0 bg-cyan-600 group-hover/btn:w-full transition-all duration-500 ease-out"></div>
              <div className="relative flex items-center justify-center gap-3 text-white group-hover/btn:text-[#05080a] font-black uppercase tracking-[0.3em] text-xs">
                <span>Login...</span>
                <Activity size={16} className="animate-pulse" />
              </div>
            </button>
          </form>

          <div className="mt-10">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-x-0 h-px bg-white/5"></div>
              <span className="relative bg-[#0a1114] px-4 text-[9px] font-mono text-gray-600 uppercase tracking-[0.5em]">External_Node</span>
            </div>
            
            <button 
              onClick={handleGoogleLogin}
              type="button"
              className="w-full flex items-center justify-center gap-4 py-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/5 hover:border-cyan-500/30 transition-all group/google"
            >
              <Chrome size={20} className="text-gray-400 group-hover/google:text-cyan-400 transition-colors" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 group-hover/google:text-white">Google Login</span>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Unregistered Identity?
            </p>
            <Link href="/register" className="inline-flex items-center gap-2 mt-3 text-cyan-400 hover:text-white transition-all font-black group">
              <span className="text-[11px] uppercase tracking-[0.3em]">Register</span>
              <UserPlus size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-400 rounded-tl-3xl opacity-20 pointer-events-none group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-cyan-400 rounded-br-3xl opacity-20 pointer-events-none group-hover:opacity-100 transition-opacity"></div>
      </div>

      <style jsx global>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;