import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden border-t border-white/10 bg-transparent">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xs font-mono text-zinc-400 mb-2.5 uppercase tracking-widest font-semibold">Pricing & Beta Scale</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Simple, transparent <span className="font-inria-serif text-zinc-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">production scale tiers.</span>
          </h2>
        </div>

        {/* Outer Relative Container holding Blurred Background & Crisp Beta Overlay */}
        <div className="relative max-w-5xl mx-auto min-h-[460px] flex items-center justify-center">
          
          {/* HIDE & BLUR THE PRICING SECTION BACKGROUND */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-6 filter blur-lg opacity-20 select-none pointer-events-none">
            {/* Fake Blurred Card 1 */}
            <div className="rounded-lg border border-white/10 bg-[#09090c] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Developer</h3>
                <div className="my-4 text-4xl font-mono text-white">$0</div>
                <div className="space-y-3 text-xs text-zinc-400">
                  <div>• 2 connected services</div>
                  <div>• 7 days retention</div>
                  <div>• Community support</div>
                </div>
              </div>
              <div className="h-10 bg-white/10 rounded mt-8" />
            </div>

            {/* Fake Blurred Card 2 */}
            <div className="rounded-lg border border-white/30 bg-[#0e0e11] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pro Team</h3>
                <div className="my-4 text-4xl font-mono text-white">$49</div>
                <div className="space-y-3 text-xs text-zinc-400">
                  <div>• Unlimited microservices</div>
                  <div>• 30 days retention</div>
                  <div>• Priority SRE support</div>
                </div>
              </div>
              <div className="h-10 bg-white rounded mt-8" />
            </div>

            {/* Fake Blurred Card 3 */}
            <div className="rounded-lg border border-white/10 bg-[#09090c] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <div className="my-4 text-4xl font-mono text-white">$999</div>
                <div className="space-y-3 text-xs text-zinc-400">
                  <div>• Custom signal retention</div>
                  <div>• VPC Deployment</div>
                  <div>• 24/7 SLA</div>
                </div>
              </div>
              <div className="h-10 bg-white/10 rounded mt-8" />
            </div>
          </div>

          {/* CRISP HIGH-CONTRAST MONOCHROME PUBLIC BETA OVERLAY CARD */}
          <div className="relative z-20 w-full max-w-2xl rounded-lg border border-white/20 bg-[#0c0c10]/95 p-8 md:p-12 text-center shadow-2xl backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono text-zinc-200 mb-6 font-bold uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5 text-white" />
              <span>Public Beta Promotion</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              100% Free During Public Beta
            </h3>

            <p className="text-sm md:text-base text-zinc-300 max-w-lg mx-auto leading-relaxed mb-6 font-normal">
              Full incident correlation and telemetry features are <strong className="text-white">100% free during beta for up to 2 connected projects</strong>. No credit card required.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mb-8 text-xs font-mono text-zinc-300 text-left bg-[#050507] border border-white/10 p-4 rounded-md">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-white shrink-0" />
                <span>Up to 2 Active Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-white shrink-0" />
                <span>Unlimited Log Webhooks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-white shrink-0" />
                <span>Full Root Cause Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-white shrink-0" />
                <span>Instant Console Access</span>
              </div>
            </div>

            <Button
              variant="default"
              className="h-11 px-8 font-mono text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all rounded-[3px] shadow-lg cursor-pointer"
              onClick={() => window.open('https://console.lastgood.space/login', '_blank')}
            >
              <span>Access BETA (Free for 2 Projects)</span>
              <ArrowRight className="ml-2 h-4 w-4 text-black" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
