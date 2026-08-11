import Navbar from "@/components/landing/Navbar";
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
    <div className="min-h-screen bg-[#000000] flex flex-col items-stretch relative overflow-x-hidden">
      
      {/* PERSISTENT FULL-PAGE ARCHITECTURAL GRID BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-60" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0 bg-white/[0.03] blur-[140px] rounded-full" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0 bg-white/[0.02] blur-[160px] rounded-full" />

      {/* Main Content Sections */}
      <div className="relative z-10 flex-1 flex flex-col">
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
