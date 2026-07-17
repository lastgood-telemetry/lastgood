import { Terminal, Shield, Gauge } from "lucide-react";

const audiences = [
  {
    icon: Terminal,
    title: "Backend Engineers",
    description: "Find the deploy or config change that broke prod without digging through CI logs.",
  },
  {
    icon: Shield,
    title: "Platform & SRE Teams",
    description: "Get a unified view of all production changes—deploys, infra, flags—in one timeline.",
  },
  {
    icon: Gauge,
    title: "On-Call Engineers",
    description: "Start every incident with context. Know what changed before the alert even fired.",
  },
];

const ForTeams = () => {
  return (
    <section id="for-teams" className="py-20 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--gradient-glow)_0%,_transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 relative">
          <p className="text-xs font-mono text-primary mb-2.5 uppercase tracking-widest relative inline-block">
            <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-3.5 h-px bg-primary/45"></span>
            Built for
            <span className="absolute -right-5 top-1/2 -translate-y-1/2 w-3.5 h-px bg-primary/45"></span>
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Engineering teams <span className="font-serif-italic text-primary block mt-1 text-xl sm:text-2xl md:text-3xl font-normal lowercase">who own production.</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
            LastGood is built for teams at organizations who take uptime seriously and want to resolve incidents faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, idx) => (
            <div key={audience.title} className="group relative surface-elevated rounded-2xl p-6 border border-border/80 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Card internal gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              <div className="relative z-10 text-center flex flex-col items-center h-full">
                <div className="w-12 h-12 rounded-xl bg-surface border border-border/80 flex items-center justify-center mb-4 shadow-inner group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  <audience.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-sm font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">{audience.title}</h3>
                <p className="text-xs text-muted-foreground/80 leading-normal flex-1">
                  {audience.description}
                </p>
                <div className="mt-4 font-mono text-[9px] text-muted-foreground/45 group-hover:text-primary/70 transition-colors uppercase tracking-widest">
                  {idx === 0 ? "// Deployment Triage" : idx === 1 ? "// Centralized Audit" : "// Resolution Context"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForTeams;
