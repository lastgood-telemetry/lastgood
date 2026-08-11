import { Terminal } from "lucide-react";

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden border-t border-white/10 bg-[#020204]">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-mono text-sky-400 mb-2.5 uppercase tracking-widest font-semibold">Live Sandbox</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            Stop asking <span className="font-inria-serif text-sky-400 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">'did anyone deploy?' in Slack.</span>
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            Experience LastGood directly inside our live sandbox. Test a simulated Sev-1 outage scenario and watch our telemetry engine score candidate mutations in real time.
          </p>
        </div>

        {/* Console Sandbox Embed */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg border border-white/15 bg-[#060608] shadow-2xl overflow-hidden relative">
            {/* Engineering Header */}
            <div className="h-9 border-b border-white/10 bg-[#08080b] flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-zinc-400">console.lastgood.space/sandbox</span>
              </div>
              <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider">Interactive Console</span>
            </div>

            {/* Iframe Container */}
            <div className="relative w-full h-[600px] md:h-[720px] bg-[#030305]">
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
