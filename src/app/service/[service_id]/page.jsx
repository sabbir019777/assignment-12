// src/app/service/[service_id]/page.jsx

import ServiceDetails from "./ServiceDetails";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.service_id || "Unit";
  
  return {
    title: `Care Protocol: ${id.toUpperCase()} | Care.xyz`,
    description: "Detailed tactical overview of our specialized caregiving units.",
  };
}

export default async function Page({ params }) {
  // ১. params কে await করতে হবে
  const resolvedParams = await params;

  // ২. নিশ্চিত করুন ServiceDetails ঠিকভাবে ইম্পোর্ট হয়েছে
  return <ServiceDetails service_id={resolvedParams.service_id} />;
}