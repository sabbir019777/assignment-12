"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Lock,
  Box,
  Cpu,
  Orbit,
  Terminal,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export const ServicesOverview = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    const fetchServices = async () => {
      const controller = new AbortController();
 
      const timeout = setTimeout(() => controller.abort(), 15000); 

      try {
        const res = await fetch("/api/services", { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        if (data && data.length >= 18) {
          const specificServices = data.slice(18, 24);
          setServices(specificServices);
        } else {
          setServices(data);
        }
      } catch (error) {
        if (error.name === "AbortError") {
         
          console.warn("Services fetch aborted due to timeout (Server took too long)");
        } else {
          console.error("Failed to load services:", error);
        }
        setServices([]);
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleDetailsClick = (serviceId) => {
    if (authLoading) return;
    if (user) {
      router.push(`/service/${serviceId}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-[#020408] overflow-hidden text-white font-sans"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,rgba(6,182,212,0.05)_50%,transparent_51%)] bg-[size:100%_4px] animate-scanline opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ---- Header Section ---- */}
        <div className="text-center mb-28 relative">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-cyan-500/30 bg-cyan-950/20 backdrop-blur-2xl mb-8 rounded-full skew-x-[-15deg]">
            <Cpu
              size={16}
              className="text-cyan-400 animate-spin-slow skew-x-[15deg]"
            />
            <span className="text-[11px] font-mono text-cyan-400 tracking-[0.4em] uppercase font-bold skew-x-[15deg]">
              Neural_Network_v4.0.1
            </span>
          </div>

          <h2 className="text-7xl md:text-1xl font-black uppercase tracking-tighter italic leading-none">
            <span className="relative">
              CORE
              <span className="absolute -top-6 -right-12 text-[10px] font-mono text-cyan-500/50 not-italic tracking-widest">
                CMD_04
              </span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              OPERATIONS
            </span>
          </h2>
        </div>

        {loading || authLoading ? (
          <div className="flex flex-col justify-center items-center h-80 gap-6">
            <div className="relative">
              <Loader2 size={60} className="text-cyan-500 animate-spin" />
              <Orbit
                size={30}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-400 animate-reverse-spin"
              />
            </div>
            <p className="text-[12px] font-mono text-cyan-400 tracking-[0.5em] uppercase italic animate-pulse">
              Syncing_Identity_Matrix...
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <div key={service?._id} className="group relative">
                  {/* Card Main Body */}
                  <div className="relative h-[560px] bg-black/40 border border-cyan-500/20 transition-all duration-700 group-hover:border-cyan-500/60 overflow-hidden clip-path-tech group-hover:bg-cyan-950/20">
                    {/* Corners & Accents */}
                    <div className="absolute top-0 right-0 w-20 h-[1px] bg-gradient-to-l from-cyan-500 to-transparent opacity-50"></div>
                    <div className="absolute top-0 right-0 w-[1px] h-20 bg-gradient-to-b from-cyan-500 to-transparent opacity-50"></div>

                    {/* Image Section */}
                    <div className="relative h-[48%] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-100 group-hover:scale-110 opacity-100"
                        style={{
                          backgroundImage: `url('${service?.img || ""}')`,
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-70"></div>

                      <div className="absolute top-6 left-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-[9px] font-mono text-cyan-400 font-bold tracking-tighter flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                            ACTIVE_NODE
                          </span>
                          <span className="text-[10px] font-mono text-white/40 bg-black/40 px-2 py-0.5 border border-white/5">
                            #{" "}
                            {service?._id
                              ? service._id.slice(-8).toUpperCase()
                              : "NULL_ID"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col h-[52%] justify-between relative z-20">
                      <div className="absolute -top-10 right-8">
                        <div className="w-16 h-16 bg-[#020408] border border-cyan-500/30 flex items-center justify-center rotate-45 group-hover:rotate-[225deg] transition-all duration-1000">
                          <Box
                            size={24}
                            className="text-cyan-400 -rotate-45 group-hover:-rotate-[225deg] transition-all duration-1000"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-end gap-3">
                          <div className="w-1 h-8 bg-cyan-500"></div>
                          <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-cyan-300 italic transition-colors">
                            {service?.title || "Unknown Module"}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed font-medium group-hover:text-gray-200 transition-colors line-clamp-3 italic font-mono">
                          {">"}{" "}
                          {service?.description ||
                            "No data stream available for this unit."}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDetailsClick(service?._id)}
                        className="relative w-full py-4 bg-transparent border border-white/10 group/btn overflow-hidden transition-all duration-500 hover:border-cyan-500/50"
                      >
                        <div className="absolute inset-0 w-0 bg-cyan-500/10 group-hover/btn:w-full transition-all duration-500 ease-in-out"></div>

                        <div className="relative flex items-center justify-center gap-4">
                          <span className="text-[11px] font-mono font-black uppercase tracking-[0.4em] text-cyan-100/50 group-hover/btn:text-cyan-400 transition-colors flex items-center gap-2">
                            {!user && !authLoading ? (
                              <Lock size={14} className="text-red-500" />
                            ) : (
                              <ShieldCheck
                                size={14}
                                className="text-cyan-400"
                              />
                            )}
                            View Details
                          </span>
                          <ArrowRight
                            size={16}
                            className="text-cyan-500 -translate-x-2 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-500"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ---- Footer Action ---- */}
            <div className="mt-32 flex flex-col items-center pb-20">
              <Link href="/services" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-sm blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>

                <button className="relative flex items-center bg-black border border-cyan-500/40 px-12 py-6 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500 group-hover:w-full group-hover:h-full transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500 group-hover:w-full group-hover:h-full transition-all duration-500"></div>

                  <div className="flex items-center gap-10">
                    <div className="relative flex items-center justify-center">
                      <Terminal
                        size={24}
                        className="text-cyan-500 animate-pulse"
                      />
                      <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-150"></div>
                    </div>

                    <div className="flex flex-col items-start z-10">
                      <span className="text-[10px] font-mono text-cyan-500/70 uppercase tracking-[0.6em] mb-1">
                        Global_Directory_V04
                      </span>
                      <span className="text-lg font-mono font-black uppercase tracking-[0.4em] text-white group-hover:text-cyan-400 transition-colors">
                        Show All Services
                      </span>
                    </div>

                    <div className="w-14 h-14 bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-center transition-all duration-500 group-hover:bg-cyan-500 group-hover:rotate-90">
                      <ChevronRight
                        size={28}
                        className="text-cyan-400 group-hover:text-black transition-all"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                </button>
              </Link>

              <p className="mt-8 text-[9px] font-mono text-cyan-500/40 tracking-[1em] uppercase animate-pulse">
                Ready for system wide synchronization
              </p>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .clip-path-tech {
          clip-path: polygon(
            0 0,
            calc(100% - 40px) 0,
            100% 40px,
            100% 100%,
            40px 100%,
            0 calc(100% - 40px)
          );
        }
        @keyframes scanline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .animate-scanline {
          animation: scanline 10s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-reverse-spin {
          animation: reverse-spin 4s linear infinite;
        }
        @keyframes reverse-spin {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
};