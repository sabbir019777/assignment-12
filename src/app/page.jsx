
import React from 'react';


import { Hero } from "../components/Hero"; 

import AboutSection from "../components/AboutSection";
import {ServicesOverview} from "../components/ServicesOverview"; 
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">

      <Hero /> 
      
     
      <AboutSection />
      

      <ServicesOverview /> 
      
   
      <Testimonials /> 
    </main>
  );
}