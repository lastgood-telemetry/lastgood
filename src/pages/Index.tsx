import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Timeline from "@/components/landing/Timeline";
import Benefits from "@/components/landing/Benefits";
import ForTeams from "@/components/landing/ForTeams";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Timeline />
      <Benefits />
      <ForTeams />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
