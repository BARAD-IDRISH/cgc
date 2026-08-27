import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesOverview from "@/components/ServicesOverview";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="relative bg-[#FAF6EE] min-h-screen text-[#0F2137]">
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <IndustriesSection />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </div>
  );
}
