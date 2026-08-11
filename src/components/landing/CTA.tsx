import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/util/analytics";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="rounded-lg border border-white/15 bg-[#09090c] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Accelerate Sev-1 incident triage <span className="font-inria-serif text-zinc-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">with automated change correlation.</span>
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
            Public Beta is live. Connect your repositories and alerting channels in under 3 minutes to eliminate outage guesswork.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button
              variant="default"
              className="h-11 px-8 text-xs font-mono font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all rounded-[3px] shadow-sm cursor-pointer"
              onClick={() => {
                trackEvent("click_access_beta", "conversion", "CTA");
                window.open('https://console.lastgood.space/login', '_blank');
              }}
            >
              <span>Access BETA (Free for 2 Projects)</span>
              <ArrowRight className="ml-2 h-4 w-4 text-black" />
            </Button>
          </div>

          <p className="mt-6 text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            // PUBLIC BETA ACTIVE · IMMEDIATE CONSOLE ACCESS
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
