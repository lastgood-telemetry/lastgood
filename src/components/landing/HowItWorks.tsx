"use client";

import { useState } from "react";
import { Radio, Rewind, ListOrdered, GitMerge, Fingerprint, Eye } from "lucide-react";

const steps = [
  {
    id: 0,
    icon: Radio,
    title: "Capture changes instantly",
    description: "LastGood continuously ingests high-signal change events: deployments, config changes, feature flags, infrastructure updates, and manual operations.",
    visualText: "Listening on webhooks... \n\n[INFO] payload received: GitHub Push\n[INFO] payload received: PagerDuty Incident\n[INFO] payload received: AWS CloudTrail",
    visualIcon: GitMerge,
  },
  {
    id: 1,
    icon: Rewind,
    title: "Rewind the timeline",
    description: "When an incident starts, select the incident timestamp. LastGood instantly surfaces everything that changed in the hours and minutes before.",
    visualText: "Searching window: -2h to +5m \n\nFound 14 discrete system changes.\nReconstructing temporal graph...",
    visualIcon: Fingerprint,
  },
  {
    id: 2,
    icon: ListOrdered,
    title: "Rank likely causes",
    description: "Changes are ranked by proximity and relevance. The most likely culprits rise to the top, giving you a clear starting point for investigation.",
    visualText: "Analyzing impact vectors...\n\n1. config change (99% match)\n2. deploy v4.1 (12% match)\n\nResult: High Likelihood identified.",
    visualIcon: Eye,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 relative border-t border-border/50 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-wider">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            From incident start to root cause
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center">
          {/* Left side: Interactive Steps */}
          <div className="flex-1 space-y-6 w-full">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.title} 
                  className={`group relative flex gap-6 items-center p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive ? 'bg-surface border-primary/50 shadow-[0_0_30px_rgba(23,207,184,0.15)]' : 'bg-transparent border-transparent hover:bg-surface/50 hover:border-border'}`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-r-full shadow-[0_0_10px_currentColor]"></div>
                  )}

                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-primary/20 border-primary/50 text-primary scale-110' : 'bg-muted border-border text-muted-foreground group-hover:text-primary'}`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <span className={`text-xs font-mono font-bold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>0{index + 1}</span>
                       <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-text-primary' : 'text-muted-foreground group-hover:text-text-primary'}`}>{step.title}</h3>
                    </div>
                    <p className={`text-sm md:text-base transition-all duration-300 ${isActive ? 'text-muted-foreground h-auto opacity-100 mt-2' : 'h-0 opacity-0 overflow-hidden'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side: Dynamic Visual */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square lg:aspect-auto lg:h-[450px] relative rounded-2xl border border-border/80 bg-surface shadow-2xl overflow-hidden flex flex-col group">
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
