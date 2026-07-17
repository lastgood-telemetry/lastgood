import { Zap, Target, TrendingDown, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster root cause",
    description: "Stop hunting through tools. See the most relevant changes instantly, ranked by likelihood.",
  },
  {
    icon: Target,
    title: "Less guesswork",
    description: "Replace \"did anyone deploy recently?\" with hard data. Every change, timestamped and surfaced.",
  },
  {
    icon: TrendingDown,
    title: "Lower MTTR",
    description: "Shave minutes off every incident. When every second counts, LastGood gives you a head start.",
  },
  {
    icon: Users,
    title: "Shared context",
    description: "Everyone on the incident call sees the same timeline. No more siloed knowledge during outages.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 skew-y-3 transform origin-bottom-left -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-primary/45"></span>
            <p className="text-xs font-mono text-primary uppercase tracking-widest">Why LastGood</p>
            <span className="h-px w-6 bg-primary/45"></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-text-primary">
            Incident response, <span className="font-serif-italic text-primary block mt-1 text-xl sm:text-2xl md:text-3xl font-normal lowercase">fully streamlined.</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground/80">
            Spend less time guessing and more time fixing. Transform chaos into clear, actionable data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Bento Item 1: Large Span */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">Faster root cause</h3>
                <p className="text-xs md:text-sm text-muted-foreground/80 leading-normal">
                  Stop hunting through an endless array of tools. LastGood aggregates everything and surfaces the most relevant changes instantly, mathematically ranked by likelihood.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Small Span */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-9 h-9 rounded-lg bg-timeline-warning/10 border border-timeline-warning/20 flex items-center justify-center mb-4 transition-all duration-300">
                <Target className="h-4.5 w-4.5 text-timeline-warning" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 text-text-primary">Less guesswork</h3>
                <p className="text-xs text-muted-foreground/80">
                  Replace "did anyone deploy recently?" with hard, undeniable data.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Small Span */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
             <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 transition-all duration-300">
                <TrendingDown className="h-4.5 w-4.5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 text-text-primary">Lower MTTR</h3>
                <p className="text-xs text-muted-foreground/80">
                  Shave critical minutes off every incident. Get a head start when every second counts.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 4: Large Span */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 flex flex-row items-center justify-between h-full gap-8">
              <div className="flex-1">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 transition-all duration-300">
                  <Users className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-text-primary group-hover:text-purple-400 transition-colors">Shared context</h3>
                <p className="text-xs md:text-sm text-muted-foreground/80 leading-normal">
                  Everyone on the incident call sees the exact same timeline. No more siloed knowledge or disjointed investigations across disconnected teams.
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
