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

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-stretch">
      <Navbar />
      <div className="flex-1 flex flex-col bg-background">
        <Hero />
        <Problem />
        <HowItWorks />
        <Timeline />
        <Benefits />
        <ForTeams />
        <Pricing />
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
