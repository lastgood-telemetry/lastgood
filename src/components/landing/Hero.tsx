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
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(64,191,172,0.1)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Uncover the root cause in seconds</span>
          </div>
        </div>

        <h1 className="animate-slide-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl mx-auto leading-[1.05] mb-6 drop-shadow-sm">
          Production broke
          <span className="text-gradient block mt-2">Find what changed.</span>
        </h1>

        <p className="animate-slide-up text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto mb-10 font-medium tracking-wide" style={{ animationDelay: '0.1s' }}>
          Stop guessing. LastGood maps your deployments, feature flags, and infrastructure changes to surface exactly what caused the incident.
        </p>

        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.2s' }}>
          <Button variant="default" className="h-12 px-8 text-base font-semibold shadow-[0_0_20px_rgba(64,191,172,0.3)] hover:shadow-[0_0_30px_rgba(64,191,172,0.5)] transition-shadow" onClick={() => window.open("https://forms.gle/9hEBh6WQJae5w7QG8", "_blank")}>
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            className="h-12 px-8 text-base font-semibold border-border/50 hover:bg-white/5"
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
