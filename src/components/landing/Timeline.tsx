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
    <section className="py-24 border-t border-border/50 surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Example timeline</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See exactly what happened
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A real incident timeline. LastGood surfaces the config change at 14:45 as the most likely cause—saving your team from chasing ghosts.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-timeline-line" />

            <div className="space-y-4">
              {events.map((event, index) => {
                const colors = getColorClasses(event.color);
                return (
                  <div
                    key={index}
                    className={`relative flex items-start gap-4 p-4 rounded-lg border transition-all ${
                      event.likelihood
                        ? `${colors.bg} ${colors.border} glow-effect`
                        : "bg-transparent border-transparent hover:bg-secondary/30"
                    }`}
                  >
                    {/* Timeline node */}
                    <div className={`relative z-10 w-3 h-3 rounded-full mt-1.5 ${colors.node} ${event.likelihood ? 'animate-pulse-subtle' : ''}`} />

                    {/* Time */}
                    <span className="font-mono text-sm text-muted-foreground w-12 flex-shrink-0 mt-0.5">
                      {event.time}
                    </span>

                    {/* Icon */}
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <event.icon className={`h-4 w-4 ${colors.icon}`} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        {event.likelihood && (
                          <span className="text-xs font-medium text-timeline-warning bg-timeline-warning/10 px-2 py-0.5 rounded">
                            {event.likelihood}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
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
    </section>
  );
};

export default Timeline;
