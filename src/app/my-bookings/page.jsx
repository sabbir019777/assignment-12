"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Calendar, MapPin, Clock, Activity, Trash2, Hexagon, Zap, Cpu, Terminal, ShieldAlert, XCircle 
} from "lucide-react";
import { useAuth } from '../../context/AuthContext'; 
import toast from "react-hot-toast";

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All"); 
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/my-bookings', { cache: 'no-store' });
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch (error) {
      console.error("Failed to load bookings");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
      return;
    }
    if (user) {
      fetchBookings();
    }
  }, [user, authLoading, router]);


  const handleCancel = async (id) => {
    const confirmed = confirm("URGENT: Abort this care protocol? System state will be set to CANCELLED.");
    if (!confirmed) return;

    try {
      const res = await fetch('/api/my-bookings', {
        method: 'PATCH', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: 'Cancelled' }), 
      });

      if (res.ok) {
        setBookings(prev => prev.map(b => b._id === id ? { ...b, status: 'Cancelled' } : b));
        toast.success("Protocol Aborted. Status: Cancelled");
      } else {
        toast.error("Handshake Failed: Update Denied.");
      }
    } catch (error) {
      toast.error("Network Error: Could not reach the server.");
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
        toast.error("Error: Protocol ID missing.");
        return;
    }

    const confirmed = confirm("WARNING: Initiate deletion protocol? This record will be permanently purged.");
    if (!confirmed) return;
    
    try {
        const res = await fetch('/api/my-bookings', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }), 
        });

        if (res.ok) {
            setBookings(prev => prev.filter(booking => booking._id !== id));
            toast.success("Protocol Purged from Database.");
        } else {
            toast.error("Deletion Failed");
        }
    } catch (error) {
        toast.error("Network Error: Could not reach the server.");
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (filter === "All") return true;
    return (booking.status || "Pending") === filter;
  });

  if (loading || authLoading) return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mb-8 relative">
            <div className="absolute inset-2 border-4 border-fuchsia-500/30 border-b-fuchsia-400 rounded-full animate-spin reverse-spin"></div>
            <Hexagon size={32} className="absolute inset-0 m-auto text-cyan-400 animate-pulse" />
          </div>
          <p className="text-cyan-400 text-sm tracking-[0.5em] animate-pulse uppercase">Synchronizing_Logs</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#030014] text-white pt-28 pb-20 px-4 md:px-6 font-sans relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 relative pb-6 border-b border-cyan-500/20">
            <div>
              <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400">
                 Mission <span className="text-cyan-500">Control</span>
              </h1>
            </div>

            <div className="mt-6 md:mt-0 flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase transition-all border ${
                    filter === status 
                    ? "bg-cyan-500 text-black border-cyan-400" 
                    : "bg-black/40 text-cyan-500 border-cyan-500/30 hover:bg-cyan-900/20"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
        </div>

        {filteredBookings.length === 0 ? (
          <div className="relative flex flex-col items-center justify-center py-32 border border-dashed border-white/10 bg-white/5 backdrop-blur-sm rounded-none clip-corners">
            <ShieldAlert size={64} className="text-gray-600 mb-6 opacity-50" />
            <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">
              {filter === "All" ? "Sector Clear" : `${filter} Records Null`}
            </h2>
            <Link href="/services">
              <button className="relative px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-black font-bold uppercase tracking-widest transition-all clip-button">
                 Initiate New Protocol
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8">
            {filteredBookings.map((booking) => {
              const status = booking.status || 'Pending';
              const isCancelled = status === 'Cancelled';
              
              const statusColors = {
                Pending: "border-cyan-500/30 text-cyan-400 bg-cyan-950/40",
                Confirmed: "border-emerald-500/50 text-emerald-400 bg-emerald-950/40",
                Completed: "border-purple-500/50 text-purple-400 bg-purple-950/40",
                Cancelled: "border-red-500/50 text-red-400 bg-red-950/40"
              };

              return (
                <div key={booking._id} className={`group relative transition-all ${isCancelled ? 'opacity-60' : ''}`}>
                  <div className={`relative bg-[#0a0f1c]/80 border ${isCancelled ? 'border-red-500/20' : 'border-white/5'} hover:border-cyan-500/50 transition-all duration-500 p-1 backdrop-blur-md clip-card overflow-hidden`}>
                    <div className="flex flex-col md:flex-row h-full relative z-10">
                      
                      <div className="md:w-64 h-48 md:h-auto relative shrink-0 overflow-hidden bg-black/50 md:border-r border-white/5">
                         <img 
                            src={booking.service_img || "https://via.placeholder.com/200"} 
                            alt={booking.service_title} 
                            className={`w-full h-full object-cover transition-all duration-700 ${isCancelled ? 'grayscale' : 'group-hover:scale-110'}`} 
                         />
                         <div className="absolute bottom-0 left-0 w-full p-2 font-mono text-[9px] text-cyan-400 uppercase tracking-widest">LOG_ID: {booking._id.slice(-6).toUpperCase()}</div>
                      </div>

                      <div className="flex-grow p-8 flex flex-col justify-between">
                         <div>
                            <div className="flex justify-between items-start mb-6">
                               <h3 className={`text-3xl font-black uppercase italic font-mono transition-colors ${isCancelled ? 'text-gray-500' : 'text-white group-hover:text-cyan-400'}`}>
                                 {booking.service_title}
                               </h3>
                               <div className={`px-4 py-1 border text-[10px] font-bold uppercase tracking-[0.2em] ${statusColors[status] || statusColors.Pending}`}>
                                 [{status}]
                               </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                               <div className="flex items-center gap-3 bg-white/5 p-3 clip-small">
                                  <Calendar size={14} className="text-cyan-500" />
                                  <span className="text-xs font-mono">{new Date(booking.bookingDate || Date.now()).toLocaleDateString()}</span>
                               </div>
                               <div className="flex items-center gap-3 bg-white/5 p-3 clip-small">
                                  <Clock size={14} className="text-purple-500" />
                                  <span className="text-xs font-mono">{booking.duration} HRS Cycle</span>
                               </div>
                            </div>
                         </div>

                         <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-dashed border-white/10">
                            <div>
                               <p className="text-[9px] text-gray-500 font-mono uppercase tracking-widest mb-1">Total Credits Required</p>
                               <div className="font-mono text-3xl font-bold text-white tracking-tighter"><span className="text-cyan-500 text-lg">$</span>{booking.totalCost}</div>
                            </div>

                            <div className="flex gap-3 mt-4 sm:mt-0">
                           
                                {!isCancelled && status !== 'Completed' && (
                                    <button onClick={() => handleCancel(booking._id)} className="flex items-center gap-2 px-6 py-3 bg-orange-950/20 border border-orange-500/50 text-orange-400 hover:bg-orange-600 hover:text-white transition-all uppercase text-[10px] font-black font-mono clip-button">
                                       <XCircle size={14} /> Canceled
                                    </button>
                                )}

                                <button onClick={() => handleDelete(booking._id)} className="flex items-center gap-2 px-6 py-3 bg-red-950/20 border border-red-500/50 text-red-500 hover:bg-red-600 hover:text-white transition-all uppercase text-[10px] font-black font-mono clip-button group">
                                   <Trash2 size={14} className="group-hover:rotate-12 transition-transform" /> Delete
                                </button>
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style jsx global>{`
        .clip-card { clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px); }
        .clip-small { clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px); }
        .clip-button { clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); }
      `}</style>
    </div>
  );
};

export default MyBookingsPage;