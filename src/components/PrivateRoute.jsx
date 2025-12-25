"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Hexagon, Zap } from "lucide-react"; 

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {

    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);


  if (loading) {
    return (
      <div className="min-h-screen bg-[#030014] flex flex-col items-center justify-center font-mono z-50">
        <div className="relative">
          <Hexagon size={64} className="text-cyan-500 animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center">
             <Zap size={24} className="text-white animate-pulse" />
          </div>
        </div>
        <h2 className="text-white mt-8 tracking-[0.3em] uppercase text-sm">Authenticating_Identity...</h2>
      </div>
    );
  }


  return user ? children : null;
};

export default PrivateRoute;