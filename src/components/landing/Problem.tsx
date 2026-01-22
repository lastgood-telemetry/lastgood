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

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="surface-elevated rounded-xl p-6 border border-border/50">
            <div className="w-10 h-10 rounded-lg bg-timeline-danger/10 flex items-center justify-center mb-4">
              <AlertTriangle className="h-5 w-5 text-timeline-danger" />
            </div>
            <h3 className="font-semibold mb-2">Logs show symptoms</h3>
            <p className="text-sm text-muted-foreground">
              Error logs tell you something broke, but not why. You see the fire, not what started it.
            </p>
          </div>

          <div className="surface-elevated rounded-xl p-6 border border-border/50">
            <div className="w-10 h-10 rounded-lg bg-timeline-warning/10 flex items-center justify-center mb-4">
              <Search className="h-5 w-5 text-timeline-warning" />
            </div>
            <h3 className="font-semibold mb-2">Changes are scattered</h3>
            <p className="text-sm text-muted-foreground">
              Deploys, config updates, infra changes—spread across tools with no unified view.
            </p>
          </div>

          <div className="surface-elevated rounded-xl p-6 border border-border/50">
            <div className="w-10 h-10 rounded-lg bg-muted-foreground/10 flex items-center justify-center mb-4">
              <Activity className="h-5 w-5 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">MTTR suffers</h3>
            <p className="text-sm text-muted-foreground">
              Every minute spent guessing is a minute your customers are impacted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
