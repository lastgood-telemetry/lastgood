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
    <section id="for-teams" className="py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--gradient-glow)_0%,_transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <p className="text-sm font-mono text-primary mb-3 uppercase tracking-widest relative inline-block">
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-px bg-primary/50"></span>
            Built for
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-px bg-primary/50"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Engineering teams who <span className=" bg-clip-text bg-gradient-to-r from-text-primary to-muted-foreground">run production</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            LastGood is built for teams at organizations who take uptime seriously and want to resolve incidents faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, idx) => (
            <div key={audience.title} className="group relative surface-elevated rounded-2xl p-8 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(23,207,184,0.1)] hover:-translate-y-2">
              {/* Card internal gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              <div className="relative z-10 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border/80 flex items-center justify-center mb-6 shadow-inner group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110">
                  <audience.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">{audience.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {audience.description}
                </p>
                <div className="mt-6 font-mono text-xs text-muted-foreground/40 group-hover:text-primary/40 transition-colors uppercase tracking-widest">
                  Target_audience_{idx + 1}
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
