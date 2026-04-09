import { Activity, AlertTriangle, Clock, Search } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Incidents are chaos.{" "}
            <span className="text-muted-foreground">Change visibility is missing.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your alerts fire. Metrics spike. Logs fill with errors. But what actually changed? Teams scramble through Slack, git logs, and deployment tools—wasting critical minutes during outages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group surface-elevated rounded-2xl p-8 border border-border/50 hover:border-timeline-danger/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,50,50,0.1)] hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-timeline-danger/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="h-6 w-6 text-timeline-danger" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-text-primary">Logs show symptoms</h3>
            <p className="text-muted-foreground leading-relaxed">
              Error logs tell you something broke, but not why. You see the fire, not what started it.
            </p>
          </div>

          <div className="group surface-elevated rounded-2xl p-8 border border-border/50 hover:border-timeline-warning/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,191,0,0.1)] hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-timeline-warning/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Search className="h-6 w-6 text-timeline-warning" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-text-primary">Changes are scattered</h3>
            <p className="text-muted-foreground leading-relaxed">
              Deploys, config updates, infra changes—spread across tools with no unified view.
            </p>
          </div>

          <div className="group surface-elevated rounded-2xl p-8 border border-border/50 hover:border-muted-foreground/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(150,150,150,0.1)] hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-muted-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Activity className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-text-primary">MTTR suffers</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every minute spent guessing is a minute your customers are impacted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
