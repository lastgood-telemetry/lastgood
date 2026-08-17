"use client";

import { useState } from "react";
import { Radio, Rewind, ListOrdered, GitMerge, Fingerprint, Eye } from "lucide-react";

const steps = [
  {
    id: 0,
    icon: Radio,
    title: "Ingest upstream system signals",
    description: "LastGood continuously ingests your engineering change vector: Git commits, feature flag toggles, cloud infrastructure mutations, and deployment pipeline runs.",
    visualText: "[Ingestion Agent Active]\n\n[Nodes] 14 services, 92 pipelines, 418 feature flags\n[Providers] Listening to GitHub, Vercel, LaunchDarkly, CloudTrail, AWS",
    visualIcon: GitMerge,
  },
  {
    id: 1,
    icon: Rewind,
    title: "Correlate telemetry alerts with diffs",
    description: "When an alert fires, our correlation engine parses the incident trace payload to calculate semantic similarity and isolate candidate failure mutations.",
    visualText: "[Telemetry Alert Correlator]\n\n[Trace] Service: payment-gateway\n[Pattern] db_connection_exhaustion, http_504\n[Correlated Mutation] PR #1492 (commit a1b2c3d)",
    visualIcon: Fingerprint,
  },
  {
    id: 2,
    icon: ListOrdered,
    title: "Generate ranked diagnostic brief",
    description: "Rank changes by blast radius, criticality tier, and timeline delta, producing a 1-click incident postmortem and recovery rollback path.",
    visualText: "[Diagnostic Brief Output]\n\nPrimary Culprit: new-checkout-flow flag toggle\nConfidence Score: 94.2%\nRemediation Path: /rollback --target flag:new-checkout-flow",
    visualIcon: Eye,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 relative border-t border-slate-800 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-indigo-400 mb-2.5 uppercase tracking-widest font-semibold">System Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            From telemetry alert <span className="font-inria-serif text-slate-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">to root-cause trigger in 3 seconds.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto items-center">
          {/* Left side: Interactive Steps */}
          <div className="flex-1 space-y-3 w-full">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.title} 
                  className={`group relative flex gap-4 items-center p-5 rounded-lg border transition-all duration-200 cursor-pointer ${isActive ? 'bg-[#111827] border-slate-700 shadow-sm' : 'bg-transparent border-transparent hover:bg-slate-900/50'}`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                     <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-indigo-500 rounded-r-full"></div>
                  )}

                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-10 h-10 rounded-md border flex items-center justify-center transition-all duration-200 ${isActive ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-300' : 'bg-slate-900 border-slate-800 text-slate-500 group-hover:text-slate-300'}`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                       <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>0{index + 1}</span>
                       <h3 className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>{step.title}</h3>
                    </div>
                    <p className={`text-xs transition-all duration-200 leading-relaxed ${isActive ? 'text-slate-300 h-auto opacity-100 mt-1.5' : 'h-0 opacity-0 overflow-hidden'}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side: Dynamic Visual Code Terminal */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-square lg:aspect-auto lg:h-[360px] relative rounded-lg border border-slate-800 bg-[#111827] shadow-2xl overflow-hidden flex flex-col">
              {/* Engineering Header */}
              <div className="h-10 border-b border-slate-800 bg-[#0f172a] flex items-center justify-between px-4 gap-2 w-full flex-shrink-0">
                 <div className="flex items-center gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
                   <span className="ml-2 font-mono text-[11px] text-slate-400">~ / lastgood / engine / step_0{activeStep + 1}.rs</span>
                 </div>
              </div>
              
              <div className="relative flex-1 p-6 flex flex-col justify-center bg-[#111827]">
                 <div className="relative z-10 flex flex-col items-center text-center">
                    {steps.map((step, idx) => {
                       const ActiveIcon = step.visualIcon;
                       return (
                          <div key={`visual-${idx}`} className={`transition-all duration-300 absolute inset-0 flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-6 ${activeStep === idx ? 'opacity-100 scale-100 relative' : 'opacity-0 scale-95 pointer-events-none hidden'}`}>
                             <div className="w-14 h-14 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-300">
                                <ActiveIcon className="h-7 w-7" />
                             </div>
                             <div className="bg-[#0b0e14] border border-slate-800 rounded-md p-4 w-full text-left font-mono text-xs leading-relaxed text-slate-300 shadow-inner">
                                {step.visualText.split('\n').map((line, i) => (
                                  <div key={i} className={`min-h-[1.5em] ${line.startsWith('[') ? 'text-indigo-400 font-bold' : line.includes('Confidence') ? 'text-emerald-400 font-semibold' : 'text-slate-300'}`}>{line}</div>
                                ))}
                                <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse mt-2"></span>
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
