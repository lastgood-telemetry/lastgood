import { GitBranch, Settings, AlertCircle, Server, Flag } from "lucide-react";

const events = [
  {
    time: "14:23",
    type: "deploy",
    icon: GitBranch,
    title: "api-service v2.4.1 deployed",
    detail: "3 commits by @sarah",
    color: "primary",
    likelihood: null,
  },
  {
    time: "14:45",
    type: "config",
    icon: Settings,
    title: "Database connection pool increased",
    detail: "max_connections: 100 → 200",
    color: "warning",
    likelihood: "High likelihood",
  },
  {
    time: "14:52",
    type: "flag",
    icon: Flag,
    title: "Feature flag enabled",
    detail: "new-checkout-flow: 100%",
    color: "primary",
    likelihood: null,
  },
  {
    time: "15:01",
    type: "infra",
    icon: Server,
    title: "Auto-scaling triggered",
    detail: "instances: 4 → 8",
    color: "muted",
    likelihood: null,
  },
  {
    time: "15:08",
    type: "incident",
    icon: AlertCircle,
    title: "Incident started",
    detail: "PagerDuty alert triggered",
    color: "danger",
    likelihood: null,
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return {
        bg: "bg-primary/10",
        border: "border-primary/30",
        icon: "text-primary",
        node: "bg-primary",
      };
    case "warning":
      return {
        bg: "bg-timeline-warning/10",
        border: "border-timeline-warning/30",
        icon: "text-timeline-warning",
        node: "bg-timeline-warning",
      };
    case "danger":
      return {
        bg: "bg-timeline-danger/10",
        border: "border-timeline-danger/30",
        icon: "text-timeline-danger",
        node: "bg-timeline-danger",
      };
    default:
      return {
        bg: "bg-muted",
        border: "border-border",
        icon: "text-muted-foreground",
        node: "bg-muted-foreground",
      };
  }
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <p className="text-sm font-mono text-primary uppercase tracking-widest">Live Forensics</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            See exactly what happened
          </h2>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
            A real incident timeline. LastGood surfaces the config change at 14:45 as the most likely cause—saving your team from chasing ghosts.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Terminal / HUD Window */}
          <div className="rounded-xl border border-border/80 bg-surface shadow-2xl relative overflow-hidden backdrop-blur-sm">
            {/* Window header */}
            <div className="h-10 border-b border-border/50 bg-white/5 flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
               <div className="ml-4 font-mono text-xs text-muted-foreground/50">~/lastgood/timeline.sh</div>
            </div>
            
            <div className="p-6 md:p-10 relative">
              {/* Timeline line */}
              <div className="absolute left-[39px] md:left-[55px] top-6 md:top-10 bottom-6 md:bottom-10 w-px bg-gradient-to-b from-transparent via-timeline-line to-transparent" />

              <div className="space-y-6">
                {events.map((event, index) => {
                  const colors = getColorClasses(event.color);
                  return (
                    <div
                      key={index}
                      className={`relative flex items-start gap-4 md:gap-6 p-4 rounded-lg border transition-all duration-300 ${
                        event.likelihood
                          ? `${colors.bg} ${colors.border} shadow-[0_0_20px_rgba(var(--timeline-node-warning),0.15)] ring-1 ring-timeline-warning/50`
                          : "bg-black/20 border-transparent hover:bg-white/5"
                      }`}
                    >
                      {/* Timeline node */}
                      <div className={`relative z-10 w-3 h-3 rounded-full mt-2 ring-4 ring-surface ${colors.node} ${event.likelihood ? 'animate-pulse-subtle shadow-[0_0_10px_currentColor]' : ''}`} />

                      {/* Time */}
                      <span className="font-mono text-sm text-muted-foreground/70 w-12 flex-shrink-0 mt-1">
                        {event.time}
                      </span>

                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0 ${event.likelihood ? 'bg-opacity-20' : 'bg-white/5'}`}>
                        <event.icon className={`h-5 w-5 ${colors.icon}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h4 className="font-semibold text-text-primary tracking-tight">{event.title}</h4>
                          {event.likelihood && (
                            <span className="text-xs font-mono font-bold text-timeline-warning bg-timeline-warning/10 border border-timeline-warning/20 px-2.5 py-0.5 rounded-sm">
                              {event.likelihood}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-mono text-text-muted mt-1 leading-snug">
                          <span className="text-primary/50 mr-2">❯</span>
                          {event.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
