import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesOverview from "@/components/ServicesOverview";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <IndustriesSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
