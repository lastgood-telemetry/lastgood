import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";
import { trackEvent } from "@/util/analytics";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden border-t border-white/10 bg-transparent">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xs font-mono text-indigo-400 mb-2.5 uppercase tracking-widest font-semibold">Pricing & Beta Scale</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Try the public beta <span className="font-inria-serif text-slate-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">at no cost.</span>
          </h2>
        </div>

        <p className="text-center text-sm text-slate-400 max-w-2xl mx-auto mb-8">
          The public beta covers up to 2 connected projects. Paid-plan billing units, limits, and prices are not specified here; contact us for terms before planning a paid rollout.
        </p>
        <div className="relative max-w-5xl mx-auto flex items-center justify-center">

          {/* Public beta terms; no unconfirmed paid-plan prices */}
          <div className="relative z-20 w-full max-w-2xl rounded-lg border border-slate-700 bg-[#111827]/95 p-8 md:p-12 text-center shadow-2xl backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-mono text-emerald-400 mb-6 font-bold uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              <span>Public Beta Promotion</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              100% Free During Public Beta
            </h3>

            <p className="text-sm md:text-base text-slate-300 max-w-lg mx-auto leading-relaxed mb-6 font-normal">
              Full incident correlation and telemetry features are <strong className="text-white font-bold">100% free during beta for up to 2 connected projects</strong>. No credit card required.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mb-8 text-xs font-mono text-slate-300 text-left bg-[#0b0e14] border border-slate-800 p-4 rounded-md">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Up to 2 Active Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Incident Change Timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Ranked Candidate Changes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Instant Console Access</span>
              </div>
            </div>

            <Button
              variant="default"
              className="h-11 px-8 font-mono text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white transition-all rounded-md shadow-sm cursor-pointer"
              onClick={() => {
                trackEvent("click_access_beta", "conversion", "Pricing");
                window.open('https://console.lastgood.space/login', '_blank');
              }}
            >
              <span>Access BETA (Free for 2 Projects)</span>
              <ArrowRight className="ml-2 h-4 w-4 text-white" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
