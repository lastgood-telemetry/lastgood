import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] opacity-40 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <div className="animate-fade-in flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary/80 animate-pulse"></span>
            </span>
            <span>AI-native change correlation</span>
          </div>
        </div>

        <h1 className="animate-slide-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-5 drop-shadow-sm">
          Incidents start with change.
          <span className="font-serif-italic text-primary block mt-2 text-3xl sm:text-4xl md:text-5xl font-normal lowercase">find the trigger instantly.</span>
        </h1>

        <p className="animate-slide-up text-sm sm:text-base text-muted-foreground/80 max-w-xl mx-auto mb-8 tracking-wide leading-relaxed" style={{ animationDelay: '0.1s' }}>
          LastGood continuously correlates telemetry alerts with deployments, config changes, and feature flags—revealing the exact root cause in seconds.
        </p>

        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-3" style={{ animationDelay: '0.2s' }}>
          <Button variant="default" className="h-10 px-6 text-sm font-semibold transition-all duration-200" onClick={() => window.open("https://forms.gle/9hEBh6WQJae5w7QG8", "_blank")}>
            Join the Waitlist
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
          <Button 
            variant="outline" 
            className="h-10 px-6 text-sm font-semibold border-border/80 hover:bg-white/5 transition-all duration-200"
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Example Timeline
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
