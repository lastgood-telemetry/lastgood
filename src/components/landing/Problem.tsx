import { Activity, AlertTriangle, Clock, Search } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Incidents are chaos.{" "}
            <span className="font-serif-italic text-muted-foreground block mt-1 text-xl sm:text-2xl md:text-3xl font-normal lowercase">change visibility is missing.</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed">
            Your alerts fire. Metrics spike. Logs fill with errors. But what actually changed? Teams scramble through Slack channels, git history, and deployment platforms—wasting critical triage window.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group surface-elevated rounded-2xl p-6 border border-border/80 hover:border-primary/30 transition-all duration-200 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 transition-transform duration-200">
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-text-primary">Logs show symptoms</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Error logs tell you *something* broke, but not why. You see the fire, not the configuration that ignited it.
            </p>
          </div>

          <div className="group surface-elevated rounded-2xl p-6 border border-border/80 hover:border-primary/30 transition-all duration-200 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 transition-transform duration-200">
              <Search className="h-5 w-5 text-amber-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-text-primary">Changes are scattered</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Deploys, configuration updates, and feature flags are distributed across disjointed SaaS portals.
            </p>
          </div>

          <div className="group surface-elevated rounded-2xl p-6 border border-border/80 hover:border-primary/30 transition-all duration-200 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-transform duration-200">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-text-primary">MTTR suffers</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every minute spent guessing downstream dependencies is a minute of customer-facing outage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
