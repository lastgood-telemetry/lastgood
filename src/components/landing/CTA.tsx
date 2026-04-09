import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] opacity-40 mix-blend-screen pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-primary/20 bg-surface/80 backdrop-blur-xl p-10 md:p-20 text-center shadow-[0_0_80px_rgba(23,207,184,0.15)] relative overflow-hidden">
          {/* Internal grid lines for technical feel */}
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-text-primary relative z-10">
            Ready to find the cause <span className="text-primary italic pr-2">faster?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            Join the waitlist for early access. We're currently onboarding select teams who want to radically cut their MTTR and bring sanity to incident response.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button variant="default" className="h-14 px-10 text-lg font-semibold shadow-[0_0_20px_rgba(64,191,172,0.3)] hover:shadow-[0_0_40px_rgba(64,191,172,0.6)] transition-shadow" onClick={() => window.open('https://forms.gle/9hEBh6WQJae5w7QG8', '_blank')}>
              Get early access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-8 text-sm font-mono tracking-wide text-muted-foreground/60 relative z-10">
            // NO CREDIT CARD REQUIRED · FREE DURING BETA
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
