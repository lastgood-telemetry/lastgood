import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/util/analytics";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-slate-800">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="rounded-lg border border-slate-800 bg-[#111827] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Accelerate Sev-1 incident triage <span className="font-inria-serif text-slate-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">with automated change correlation.</span>
          </h2>
          <p className="text-xs md:text-sm text-slate-300 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
            Public Beta is live. Connect your repositories and alerting channels in under 3 minutes to eliminate outage guesswork.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button
              variant="default"
              className="h-11 px-8 text-xs font-mono font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white transition-all rounded-md shadow-sm cursor-pointer"
              onClick={() => {
                trackEvent("click_access_beta", "conversion", "CTA");
                window.open('https://console.lastgood.space/login', '_blank');
              }}
            >
              <span>Access BETA (Free for 2 Projects)</span>
              <ArrowRight className="ml-2 h-4 w-4 text-white" />
            </Button>
          </div>

          <p className="mt-6 text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-semibold">
            // PUBLIC BETA ACTIVE · IMMEDIATE CONSOLE ACCESS
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
