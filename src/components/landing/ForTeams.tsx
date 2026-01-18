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
    <section id="for-teams" className="py-24 border-t border-border/50 surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Built for</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Engineering teams who run production
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            LastGood is built for teams at B2B SaaS companies who take uptime seriously and want to resolve incidents faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {audiences.map((audience) => (
            <div key={audience.title} className="surface-elevated rounded-xl p-6 border border-border/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForTeams;
