import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Architecture from "@/components/sections/Architecture";
import CasesPreview from "@/components/sections/CasesPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Architecture />
      <CasesPreview />
      <CTA />
    </>
  );
}
