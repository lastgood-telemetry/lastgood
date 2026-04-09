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
    <section id="benefits" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20 skew-y-3 transform origin-bottom-left -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <p className="text-sm font-mono text-primary uppercase tracking-widest">Why LastGood</p>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-text-primary">
            Incident response, streamlined
          </h2>
          <p className="text-muted-foreground text-lg">
            Spend less time guessing and more time fixing. Transform chaos into clear, actionable data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Bento Item 1: Large Span */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-border/50 bg-surface p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(23,207,184,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">Faster root cause</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Stop hunting through an endless array of tools. LastGood aggregates everything and surfaces the most relevant changes instantly, mathematically ranked by likelihood.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Small Span */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-2xl border border-border/50 bg-surface p-8 transition-all duration-500 hover:border-timeline-warning/50 hover:shadow-[0_0_40px_rgba(255,191,0,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-bl from-timeline-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 rounded-xl bg-timeline-warning/10 border border-timeline-warning/20 flex items-center justify-center mb-6 group-hover:rotate-12 transition-all duration-500">
                <Target className="h-5 w-5 text-timeline-warning" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-text-primary">Less guesswork</h3>
                <p className="text-muted-foreground">
                  Replace "did anyone deploy recently?" with hard, undeniable data.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 3: Small Span */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-2xl border border-border/50 bg-surface p-8 transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-all duration-500">
                <TrendingDown className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-text-primary">Lower MTTR</h3>
                <p className="text-muted-foreground">
                  Shave critical minutes off every incident. Get a head start when every second counts.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Item 4: Large Span */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-border/50 bg-surface p-8 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-row items-center justify-between h-full gap-8">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text-primary group-hover:text-purple-400 transition-colors">Shared context</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Everyone on the incident call sees the exact same timeline. No more siloed knowledge or disjointed investigations across disconnected teams.
                </p>
              </div>
              {/* Abstract decorative element for the larger card */}
              <div className="hidden md:flex flex-shrink-0 relative w-32 h-32 items-center justify-center">
                 <div className="absolute w-full h-full border border-purple-500/20 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                 <div className="absolute w-24 h-24 border border-purple-500/30 rounded-full animate-ping opacity-40" style={{ animationDuration: '2s' }}></div>
                 <div className="w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-md border border-purple-500/40 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-400" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
