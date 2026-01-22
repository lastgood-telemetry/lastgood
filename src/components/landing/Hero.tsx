import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-30 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <Activity className="h-3.5 w-3.5 text-primary" />
            <span>Incident time-travel for engineering teams</span>
          </div>
        </div>

        <h1 className="animate-slide-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6">
          Production broke
          <span className="text-gradient">.What changed?</span>
        </h1>

        <p className="animate-slide-up text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12" style={{ animationDelay: '0.1s' }}>
          LastGood shows a ranked timeline of everything that changed before an incident — deployments, commits, feature flags, and manual actions — so engineers can identify root cause fast.
        </p>

        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.2s' }}>
          <Button variant="hero" size="xl" onClick={() => window.open("https://forms.gle/9hEBh6WQJae5w7QG8", "_blank")}>
            Join the waitlist
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="hero-outline" size="xl">
            See how it works
          </Button>
        </div>

        <p className="animate-fade-in mt-8 text-sm text-muted-foreground" style={{ animationDelay: '0.3s' }}>
          Built for SREs, platform teams, and on-call engineers
        </p>
      </div>
    </section>
  );
};

export default Hero;
