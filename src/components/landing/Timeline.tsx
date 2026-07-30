import { Sparkles } from "lucide-react";

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <p className="text-xs font-mono text-primary uppercase tracking-widest">Interactive Sandbox</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Stop asking <span className="font-serif-italic text-primary block mt-1 text-xl sm:text-2xl md:text-3xl font-normal lowercase">'did anyone deploy?' in Slack.</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
            Experience LastGood firsthand. Play with a live incident scenario to see how our engine correlates telemetry alerts with upstream system changes.
          </p>
        </div>

        {/* Sandbox Embed */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl border border-border/80 bg-surface shadow-2xl overflow-hidden relative group">
            {/* Fake Window Header */}
            <div className="h-10 border-b border-border/50 bg-muted/30 flex items-center justify-between px-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground bg-background/50 px-3 py-1 rounded-full border border-border/50 truncate max-w-[200px] sm:max-w-none">
                console.lastgood.space/sandbox
              </div>
            </div>

            {/* Iframe Container */}
            <div className="relative w-full h-[600px] md:h-[750px] bg-background">
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
