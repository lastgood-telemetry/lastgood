import Navbar from "@/components/landing/Navbar";
import ProductHuntBanner from "@/components/landing/ProductHuntBanner";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Timeline from "@/components/landing/Timeline";
import Benefits from "@/components/landing/Benefits";
import ForTeams from "@/components/landing/ForTeams";
import Pricing from "@/components/landing/Pricing";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Logos from "@/components/landing/Logos";
import Trust from "@/components/landing/Trust";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0b0e14] flex flex-col items-stretch relative overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-100">
      
      {/* ENTERPRISE SRE ARCHITECTURAL GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-30" />
      
      {/* Subtle Top Indigo Spotlight */}
      <div className="fixed top-[-150px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none z-0 bg-indigo-950/25 blur-[140px] rounded-full" />

      {/* Main Content Sections */}
      <div className="relative z-10 flex-1 flex flex-col">
        <ProductHuntBanner />
        <Navbar />
        <Hero />
        <Logos />
        <Problem />
        <HowItWorks />
        <Timeline />
        <Benefits />
        <ForTeams />
        <Trust />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
