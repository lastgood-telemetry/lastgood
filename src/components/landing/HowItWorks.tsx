"use client";

import { useState } from "react";
import { Radio, Rewind, ListOrdered, GitMerge, Fingerprint, Eye } from "lucide-react";

const steps = [
  {
    id: 0,
    icon: Radio,
    title: "Ingest upstream system signals",
    description: "LastGood continuously monitors your change vector: deployments, feature flag updates, cloud infrastructure changes, and manual terminal runs.",
    visualText: "Building system graph...\n\n[Nodes] 12 services, 84 pipelines, 412 flags\n[Active] Listening to Git, Vercel, LaunchDarkly, CloudTrail",
    visualIcon: GitMerge,
  },
  {
    id: 1,
    icon: Rewind,
    title: "Parse alert traces with AI",
    description: "When an alert fires, our LLM engine parses the incident trace payload (error logs, latency boundaries, service graphs) to isolate the failure domain.",
    visualText: "Correlating telemetry alert...\n\n[Traces] Service: checkout-service\n[Pattern] gateway_timeout, db_starvation\n[Mapping] Extracting related services: pool_db",
    visualIcon: Fingerprint,
  },
  {
    id: 2,
    icon: ListOrdered,
    title: "Generate context-aware diagnosis",
    description: "Our correlation engine ranks changes based on semantic trace similarity and structural diffs, automatically outputting a root-cause explanation and rollback commands.",
    visualText: "AI diagnosis complete.\n\nTrigger: new-checkout-flow flag toggle\nConfidence: 94%\nResolution: /rollback flag targets",
    visualIcon: Eye,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 relative border-t border-border/50 bg-black/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-primary mb-2 uppercase tracking-wider">How it works</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            From telemetry alert <span className="font-serif-italic text-primary block mt-1 text-xl sm:text-2xl md:text-3xl font-normal lowercase">to incident root cause.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto items-center">
          {/* Left side: Interactive Steps */}
          <div className="flex-1 space-y-4 w-full">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.title} 
                  className={`group relative flex gap-4 items-center p-4 rounded-xl border transition-all duration-200 cursor-pointer ${isActive ? 'bg-surface border-primary/30 shadow-md' : 'bg-transparent border-transparent hover:bg-surface/40'}`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-8 bg-primary rounded-r-full shadow-[0_0_8px_currentColor]"></div>
                  )}

                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-primary/20 border-primary/40 text-primary' : 'bg-muted border-border text-muted-foreground group-hover:text-primary'}`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                       <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>0{index + 1}</span>
                       <h3 className={`text-sm font-bold transition-colors ${isActive ? 'text-text-primary' : 'text-muted-foreground group-hover:text-text-primary'}`}>{step.title}</h3>
                    </div>
                    <p className={`text-xs transition-all duration-200 ${isActive ? 'text-muted-foreground/80 h-auto opacity-100 mt-1' : 'h-0 opacity-0 overflow-hidden'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side: Dynamic Visual */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square lg:aspect-auto lg:h-[350px] relative rounded-xl border border-border bg-surface shadow-md overflow-hidden flex flex-col group">
              {/* Fake Window Header */}
              <div className="h-12 border-b border-border/50 bg-white/5 flex items-center px-4 gap-2 w-full flex-shrink-0">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 <div className="ml-4 font-mono text-xs text-muted-foreground/50 truncate">~ / lastgood / engine / step_0{activeStep + 1}.rs</div>
              </div>
              
              <div className="relative flex-1 p-8 flex flex-col justify-center bg-[radial-gradient(ellipse_at_center,_var(--gradient-glow)_0%,_transparent_100%)]">
                 <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30"></div>
                 
                 <div className="relative z-10 flex flex-col items-center text-center">
                    {steps.map((step, idx) => {
                       const ActiveIcon = step.visualIcon;
                       return (
                          <div key={`visual-${idx}`} className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-8 ${activeStep === idx ? 'opacity-100 scale-100 relative' : 'opacity-0 scale-95 pointer-events-none hidden'}`}>
                             <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 animate-pulse-subtle shadow-[0_0_40px_rgba(23,207,184,0.2)]">
                                <ActiveIcon className="h-10 w-10 text-primary" />
                             </div>
                             <div className="bg-black/50 border border-border/50 rounded-lg p-6 w-full text-left font-mono text-sm leading-relaxed text-primary/80 shadow-inner">
                                {step.visualText.split('\n').map((line, i) => (
                                  <div key={i} className="min-h-[1.5em]">{line}</div>
                                ))}
                                <span className="inline-block w-2 h-4 bg-primary/70 animate-pulse mt-2"></span>
                             </div>
                          </div>
                       )
                    })}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
