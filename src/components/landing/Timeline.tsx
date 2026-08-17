import { Terminal } from "lucide-react";

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden border-t border-slate-800 bg-transparent">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-mono text-indigo-400 mb-2.5 uppercase tracking-widest font-semibold">Live Sandbox</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            Stop asking <span className="font-inria-serif text-slate-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">'did anyone deploy?' in Slack.</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Experience LastGood directly inside our live sandbox. Test a simulated Sev-1 outage scenario and watch our telemetry engine score candidate mutations in real time.
          </p>
        </div>

        {/* Console Sandbox Embed */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg border border-slate-800 bg-[#111827] shadow-2xl overflow-hidden relative">
            {/* Engineering Header */}
            <div className="h-10 border-b border-slate-800 bg-[#0f172a] flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                <span className="ml-2 font-mono text-[11px] text-slate-400">console.lastgood.space/sandbox</span>
              </div>
              <span className="font-mono text-[10px] text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded border border-indigo-500/30 uppercase tracking-wider font-bold">Interactive Console</span>
            </div>

            {/* Iframe Container */}
            <div className="relative w-full h-[600px] md:h-[720px] bg-[#0b0e14]">
              <iframe
                src="https://console.lastgood.space/sandbox"
                className="w-full h-full border-none"
                title="LastGood Interactive Sandbox"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
