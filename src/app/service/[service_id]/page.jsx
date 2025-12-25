

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

  const resolvedParams = await params;


  return <ServiceDetails service_id={resolvedParams.service_id} />;
}