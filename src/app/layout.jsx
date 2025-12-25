// src/app/layout.js
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext"; // আপনার AuthProvider ইম্পোর্ট করুন

import "./globals.css";

export const metadata = {
  title: "Care.xyz | Elite Care Protocols",
  description: "Next-Gen Baby Sitting & Elderly Care Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen bg-[#050505] text-white">
        
        {/* পুরো অ্যাপকে AuthProvider দিয়ে মুড়িয়ে দিতে হবে */}
        <AuthProvider>
          
          {/* টোস্ট মেসেজ কন্টেইনার */}
          <Toaster 
            position="top-center" 
            toastOptions={{
              style: {
                background: '#111',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.1)'
              }
            }} 
          />
          
          <Navbar /> 
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer /> 
          
        </AuthProvider>

      </body>
    </html>
  );
}