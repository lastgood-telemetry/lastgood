import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] opacity-40 mix-blend-screen pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-surface/85 backdrop-blur-xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          {/* Internal grid lines for technical feel */}
          <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-text-primary relative z-10">
            Ready to find the cause <span className="font-serif-italic text-primary block mt-1 text-xl sm:text-2xl md:text-3xl font-normal lowercase">faster than before?</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground/80 mb-6 max-w-xl mx-auto relative z-10 font-medium leading-relaxed">
            Join the waitlist for early access. We're currently onboarding select teams who want to radically cut their MTTR and bring sanity to incident response.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
            <Button variant="default" className="h-10 px-6 text-sm font-semibold transition-all duration-200" onClick={() => window.open('https://forms.gle/9hEBh6WQJae5w7QG8', '_blank')}>
              Get early access
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>

          <p className="mt-6 text-[10px] font-mono tracking-wide text-muted-foreground/60 relative z-10">
            // NO CREDIT CARD REQUIRED · FREE DURING BETA
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
