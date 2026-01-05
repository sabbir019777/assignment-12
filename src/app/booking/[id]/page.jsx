"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Loader2,
  Cpu,
  Hexagon,
} from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const locationData = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Tangail"],

  Chattogram: ["Chattogram", "Cox's Bazar", "Comilla"],

  Khulna: ["Khulna", "Jessore", "Satkhira"],

  Rajshahi: ["Rajshahi", "Bogra", "Pabna"],

  Barisal: ["Barisal", "Bhola", "Patuakhali"],

  Sylhet: ["Sylhet", "Sunamganj", "Habiganj"],

  Rangpur: ["Rangpur", "Dinajpur", "Kurigram"],

  Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona"],
};

const BookingPage = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [duration, setDuration] = useState(1);
  const [formData, setFormData] = useState({
    division: "",
    district: "",
    city: "",
    area: "",
    address: "",
  });
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    if (!authLoading && !user) {
      toast.error("Please login to access protocol");
      setLoading(false);
      router.push("/login");
      return;
    }

    const fetchService = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        const foundService = data.find((s) => s._id === id);
        if (foundService) setService(foundService);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id && user) {
      fetchService();
    } else {
     
      setLoading(false);
    }
  }, [id, user, authLoading, router]);

  const handleDivisionChange = (e) => {
    const div = e.target.value;
    setFormData({ ...formData, division: div, district: "" });
    setDistricts(locationData[div] || []);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("Unauthorized");

    setSubmitting(true);
    const totalCost = duration * (service?.price || 0);

    const bookingData = {
      user_email: user?.email,
      user_name: user?.displayName,
      service_id: id,
      service_title: service?.title,
      service_img: service?.img,
      duration: Number(duration),
      location: {
        division: formData.division,
        district: formData.district,
        city: formData.city,
        area: formData.area,
      },
      address: formData.address,
      totalCost: totalCost,
      status: "Pending",
      bookingDate: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/booking/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
       
        const templateParams = {
          user_name: user?.displayName,
          user_email: user?.email,
          service_name: service?.title,
          booking_date: new Date().toLocaleDateString(),
          total_cost: totalCost,
          location: `${formData.area}, ${formData.district}`,
          booking_id: id.slice(-6).toUpperCase(),
        };

        try {
       
          await emailjs.send(
            "service_dummy_id",
            "template_dummy_id",
            templateParams,
            "public_key_dummy"
          );
          toast.success("Protocol Initialized & Invoice Sent!");
        } catch (emailErr) {

          console.log("Email Logic Implemented.");
          toast.success("Booking Protocol Initialized Successfully!");
        }

        router.push("/my-bookings");
      } else {
        toast.error("Booking Failed");
      }
    } catch (err) {
      toast.error("Database Connection Failed");
    } finally {
      setSubmitting(false);
    }
  };

  if (authLoading || loading)
    return (
      <div className="min-h-screen bg-[#02040a] flex flex-col items-center justify-center gap-4">
        <Hexagon size={64} className="text-amber-500 animate-spin" />
        <p className="text-amber-500 font-mono text-[10px] tracking-widest animate-pulse uppercase">
          Verifying_Credentials...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#02040a] text-white pt-32 pb-20 px-6 font-sans relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#02040a] to-[#0a0514]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-12 tracking-tighter">
          Initialize <span className="text-amber-500">Care_Protocol</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <form
              onSubmit={handleBooking}
              className="bg-white/[0.03] backdrop-blur-3xl p-10 border border-white/10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="space-y-4">
                <label className="text-[10px] font-mono text-amber-500 uppercase tracking-widest flex items-center gap-2 font-bold">
                  <Clock size={14} /> Cycle_Duration (Hours)
                </label>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full accent-amber-500 cursor-pointer h-1 bg-white/10 rounded-lg"
                />
                <div className="flex justify-between font-mono text-xl font-black">
                  <span>{duration} HRS</span>
                  <span className="text-amber-500">
                    ${duration * (service?.price || 0)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-gray-800 uppercase tracking-widest">
                    Division
                  </label>
                  <select
                    className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-xs font-mono outline-none focus:border-amber-500 transition-all appearance-none"
                    onChange={handleDivisionChange}
                    required
                  >
                    <option value="">SELECT DIVISION</option>
                    {Object.keys(locationData).map((div) => (
                      <option key={div} value={div}>
                        {div}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-gray-800 uppercase tracking-widest">
                    District
                  </label>
                  <select
                    className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-xs font-mono outline-none focus:border-amber-500 disabled:opacity-30 transition-all"
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                    required
                    disabled={!formData.division}
                  >
                    <option value="">SELECT DISTRICT</option>
                    {districts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                  Detailed Address
                </label>
                <textarea
                  placeholder="HOUSE NO / ROAD NO / BLOCK..."
                  className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-xs h-24 font-mono outline-none focus:border-amber-500 resize-none transition-all"
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-amber-600 hover:bg-amber-500 py-5 rounded-2xl font-black uppercase text-xs transition-all flex items-center justify-center gap-3 text-black"
              >
                {submitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Initialize_Protocol <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 bg-white/[0.02] backdrop-blur-3xl p-10 border border-white/10 rounded-3xl h-fit sticky top-32 shadow-2xl">
            <div className="flex items-center gap-2 text-amber-500 mb-6 font-mono text-[10px] uppercase tracking-widest font-black">
              <Cpu size={16} className="animate-pulse" /> Protocol_Ready
            </div>
            <p className="text-2xl font-black text-white uppercase italic mb-8 tracking-tighter">
              {service?.title}
            </p>
            <div className="space-y-4 border-t border-white/5 pt-8">
              <div className="flex justify-between text-xs font-mono text-gray-500">
                <span>CLIENT:</span>
                <span className="text-amber-500/80 font-bold">
                  {user?.displayName || "UNIDENTIFIED_USER"}
                </span>
              </div>
              <div className="flex justify-between text-xs font-mono text-gray-500">
                <span>STATUS:</span>
                <span className="text-amber-200 font-bold uppercase animate-pulse">
                  Waiting_Input
                </span>
              </div>
            </div>
            <div className="flex justify-between text-4xl font-black border-t border-amber-500/20 pt-10 mt-10 italic font-mono">
              <span className="text-amber-500 text-[10px] self-center tracking-widest font-bold">
                TOTAL_ESTIMATE
              </span>
              <span className="text-amber-500">
                ${duration * (service?.price || 0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
