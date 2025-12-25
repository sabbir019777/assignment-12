// src/app/page.js
import React from 'react';

// পরিবর্তন: Hero কে { } এর মধ্যে ইমপোর্ট করা হয়েছে
import { Hero } from "../components/Hero"; 

import AboutSection from "../components/AboutSection";
import {ServicesOverview} from "../components/ServicesOverview"; 
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero সেকশন */}
      <Hero /> 
      
      {/* মিশন / এবাউট সেকশন */}
      <AboutSection />
      
      {/* সার্ভিস ওভারভিউ সেকশন */}
      <ServicesOverview /> 
      
      {/* Testimonials সেকশন */}
      <Testimonials /> 
    </main>
  );
}