"use client";
import React, { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { 
  User, Mail, Lock, ShieldCheck, Phone, ArrowRight, Cpu, Chrome, 
  Activity, Fingerprint, Eye, EyeOff, Image as ImageIcon 
} from "lucide-react";
import Link from "next/link";
import { auth, googleProvider } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

const RegisterContent = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    photo: "", // ফটো ইউআরএল স্টেট
    nid: "", 
    contact: "", 
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`Welcome ${result.user.displayName}!`);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadToast = toast.loading("Initializing Protocol...");
    
    try {
      // ১. ইউজার ক্রিয়েট করা
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // ২. প্রোফাইল আপডেট করা (নাম এবং ফটো ইউআরএল সহ)
      await updateProfile(userCredential.user, { 
        displayName: formData.name,
        photoURL: formData.photo // এখানে ফটো ইউআরএল সেট হচ্ছে
      });

      const userInfo = {
        name: formData.name,
        email: formData.email,
        photo: formData.photo,
        nid: formData.nid,
        contact: formData.contact,
        role: 'user'
      };

      // ৩. ডাটাবেসে ইউজার সেভ করা
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
      });

      toast.success("Protocol Active! Profile Created.", { id: loadToast });
      router.push("/");
    } catch (error) {
      toast.error(error.message, { id: loadToast });
    }
  };

  return (
    <div className="min-h-screen bg-[#05080a] text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(6,182,212,0.03)_50%,transparent_51%)] bg-[size:100%_4px] animate-[scanline_10s_linear_infinite] opacity-30"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 w-full max-w-[480px] perspective-1000 my-10">
        <div className="bg-[#0a1114]/90 backdrop-blur-3xl border border-cyan-500/20 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-700">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          <header className="text-center mb-8 relative">
            <div className="relative inline-flex mb-4">
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full animate-pulse"></div>
              <div className="relative w-16 h-16 flex items-center justify-center bg-[#0d161a] border border-cyan-400/30 rounded-2xl rotate-45 group-hover:rotate-0 transition-transform duration-700">
                <Fingerprint size={32} className="text-cyan-400 -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
              </div>
            </div>
            
            <h2 className="text-3xl font-black uppercase italic tracking-tighter mb-1">
              Create<span className="text-cyan-400">_Node</span>
            </h2>
            <div className="flex items-center justify-center gap-2 text-cyan-500/40 font-mono text-[9px] tracking-[0.3em] uppercase font-bold">
              <Cpu size={10} /> Initialization_Sequence_v4.0
            </div>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="relative group/input">
               <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                  <input
                    type="text"
                    name="name"
                    placeholder="FULL_NAME"
                    required
                    onChange={handleChange}
                    className="w-full bg-[#0d161a] border border-white/5 p-4 pl-12 rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-xs placeholder:text-gray-800"
                  />
               </div>
            </div>

            {/* Photo URL Field - নতুন ফিল্ড */}
            <div className="relative group/input">
               <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                  <input
                    type="url"
                    name="photo"
                    placeholder="PHOTO_URL (Optional)"
                    onChange={handleChange}
                    className="w-full bg-[#0d161a] border border-white/5 p-4 pl-12 rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-xs placeholder:text-gray-800"
                  />
               </div>
            </div>

            {/* Email */}
            <div className="relative group/input">
               <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL_ADDRESS"
                    required
                    onChange={handleChange}
                    className="w-full bg-[#0d161a] border border-white/5 p-4 pl-12 rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-xs placeholder:text-gray-800"
                  />
               </div>
            </div>

            {/* NID Number */}
            <div className="relative group/input">
               <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                  <input
                    type="text"
                    name="nid"
                    placeholder="NID_IDENTIFIER"
                    required
                    onChange={handleChange}
                    className="w-full bg-[#0d161a] border border-white/5 p-4 pl-12 rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-xs placeholder:text-gray-800"
                  />
               </div>
            </div>

            {/* Contact */}
            <div className="relative group/input">
               <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                  <input
                    type="tel"
                    name="contact"
                    placeholder="SECURE_CONTACT"
                    required
                    onChange={handleChange}
                    className="w-full bg-[#0d161a] border border-white/5 p-4 pl-12 rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-xs placeholder:text-gray-800"
                  />
               </div>
            </div>

            {/* Password */}
            <div className="relative group/input">
               <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within/input:text-cyan-400 transition-colors" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="ENCRYPTION_KEY"
                    required
                    pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                    onChange={handleChange}
                    className="w-full bg-[#0d161a] border border-white/5 p-4 pl-12 pr-12 rounded-xl focus:outline-none focus:border-cyan-500/50 transition-all font-mono text-xs placeholder:text-gray-800"
                  />
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
              className="w-full relative group/btn py-4 overflow-hidden rounded-xl bg-transparent border border-cyan-500/30 transition-all duration-500 active:scale-95"
            >
              <div className="absolute inset-0 w-0 bg-cyan-600 group-hover/btn:w-full transition-all duration-500 ease-out"></div>
              <div className="relative flex items-center justify-center gap-3 text-white group-hover/btn:text-[#05080a] font-black uppercase tracking-[0.2em] text-xs">
                <span>INITIALIZE_PROTOCOL</span>
                <Activity size={16} className="animate-pulse" />
              </div>
            </button>
          </form>

          {/* Google Sync Section */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-4">
              <span className="absolute inset-x-0 h-px bg-white/5"></span>
              <span className="relative bg-[#0a1114] px-4 text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em]">External_Sync</span>
            </div>
            
            <button 
              onClick={handleGoogleLogin}
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/5 hover:border-cyan-500/30 transition-all group/google"
            >
              <Chrome size={18} className="text-gray-400 group-hover/google:text-red-400 transition-colors" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover/google:text-white">Sync with Google_Node</span>
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 text-center">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Existing Node Identity?
            </p>
            <Link href="/login" className="inline-flex items-center gap-2 mt-2 text-cyan-400 hover:text-white transition-all font-black group">
              <span className="text-[11px] uppercase tracking-[0.2em]">ACCESS_LOGINS</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05080a] flex items-center justify-center text-cyan-500 font-mono tracking-widest uppercase animate-pulse">Syncing_Interface...</div>}>
      <RegisterContent />
    </Suspense>
  );
}