import { Zap, Target, TrendingDown, Users } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-transparent border-t border-slate-800">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-mono text-indigo-400 mb-2.5 uppercase tracking-widest font-semibold">Value Proposition</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Incident triage, <span className="font-inria-serif text-slate-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">engineered for speed and clarity.</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Eliminate triage paralysis. Replace chaotic Slack speculation with hard, timestamped engineering mutation data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Bento Item 1: Large Span */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-lg border border-slate-800 bg-[#111827] p-7 transition-all duration-200 hover:border-slate-700">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-10 h-10 rounded-md bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center mb-6 text-indigo-400">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-white">Automated Trigger Discovery</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  Stop manually parsing thousands of log lines across disjointed dashboards. LastGood surfaces recent production mutations instantly, mathematically ranked by probability and blast radius.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Small Span */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-lg border border-slate-800 bg-[#111827] p-7 transition-all duration-200 hover:border-slate-700">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-10 h-10 rounded-md bg-amber-950/60 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-2 text-white">Zero Slack Guesswork</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Replace "did anyone deploy recently?" with undeniable, verified deployment timestamps.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Small Span */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-lg border border-slate-800 bg-[#111827] p-7 transition-all duration-200 hover:border-slate-700">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-10 h-10 rounded-md bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-400">
                <TrendingDown className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-2 text-white">85% MTTR Reduction</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  Shave critical minutes off every Sev-1 outage. Get an instant head start when every second counts.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 4: Large Span */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-lg border border-slate-800 bg-[#111827] p-7 transition-all duration-200 hover:border-slate-700">
            <div className="relative z-10 flex flex-row items-center justify-between h-full gap-8">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 text-indigo-300">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Unified Incident Context</h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
                  Everyone on the incident bridge sees the exact same change graph timeline. No more siloed knowledge or disjointed investigation across platform, SRE, and product engineering teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
