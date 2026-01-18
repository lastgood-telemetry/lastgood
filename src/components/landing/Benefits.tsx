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
    <section id="benefits" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Incident response, streamlined
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
