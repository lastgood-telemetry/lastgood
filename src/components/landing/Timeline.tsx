import { useState } from "react";
import { GitBranch, Settings, AlertCircle, Server, Flag, Sparkles, RefreshCw, ChevronRight } from "lucide-react";

interface TimelineEvent {
  time: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  detail: string;
  color: "primary" | "warning" | "danger" | "muted";
  likelihood: string | null;
  meta?: string;
}

const events: TimelineEvent[] = [
  {
    time: "14:23",
    type: "github",
    icon: GitBranch,
    title: "PR #142 Merged: Add new checkout flow",
    detail: "3 commits by @sarah containing db connection adaptations",
    color: "primary",
    likelihood: null,
    meta: "SHA: 7ad4e2c",
  },
  {
    time: "14:45",
    type: "cicd",
    icon: Settings,
    title: "CI/CD Build Started",
    detail: "Action: production-deploy triggered by main branch",
    color: "muted",
    likelihood: null,
    meta: "Workflow: deploy-prod",
  },
  {
    time: "14:52",
    type: "deploy",
    icon: Server,
    title: "api-service v2.4.1 deployed",
    detail: "Deployed to production cluster via REST API",
    color: "primary",
    likelihood: "Primary trigger",
    meta: "Env: production · v2.4.1",
  },
  {
    time: "15:08",
    type: "incident",
    icon: AlertCircle,
    title: "Checkout Latency Spike (504 Gateway Timeout)",
    detail: "Webhook alert service-checkout-latency active",
    color: "danger",
    likelihood: null,
    meta: "P1 Incident #4208",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return {
        bg: "bg-primary/10",
        border: "border-primary/20",
        icon: "text-primary",
        node: "bg-primary",
      };
    case "warning":
      return {
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        icon: "text-amber-500",
        node: "bg-amber-500",
      };
    case "danger":
      return {
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        icon: "text-red-500",
        node: "bg-red-500",
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
  const [selectedEvent, setSelectedEvent] = useState<number | null>(2); // Default to feature flag

  return (
    <section id="timeline" className="py-20 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-40" />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <p className="text-xs font-mono text-primary uppercase tracking-widest">AI Correlation Timeline</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            Stop asking <span className="font-serif-italic text-primary block mt-1 text-xl sm:text-2xl md:text-3xl font-normal lowercase">'did anyone deploy?' in Slack.</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
            LastGood continuously correlates telemetry alerts with upstream system changes. Our engine traces the temporal path to identify the exact code, flag, or config change that initiated the outage.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Correlated Timeline List (8 cols on lg) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-xl border border-border bg-surface shadow-md overflow-hidden">
              {/* Fake Window Header */}
              <div className="h-10 border-b border-border bg-muted/30 flex items-center justify-between px-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="ml-2 font-mono text-[11px] text-muted-foreground/75">live_change_stream.log</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/20">
                  <span className="relative flex h-1.5 w-1.5 mr-0.5">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                  </span>
                  monitoring active
                </div>
              </div>

              <div className="p-4 md:p-6 relative">
                {/* Timeline vertical bar */}
                <div className="absolute left-[31px] md:left-[39px] top-6 bottom-6 w-px bg-border" />

                <div className="space-y-4">
                  {events.map((event, index) => {
                    const colors = getColorClasses(event.color);
                    const isSelected = selectedEvent === index;
                    return (
                      <div
                        key={index}
                        onClick={() => setSelectedEvent(index)}
                        className={`relative flex items-start gap-4 p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-muted/40 border-primary/45 shadow-sm"
                            : "bg-transparent border-transparent hover:bg-muted/20"
                        }`}
                      >
                        {/* Event node dot */}
                        <div className={`relative z-10 w-2.5 h-2.5 rounded-full mt-2.5 ring-4 ring-surface ${colors.node}`} />

                        {/* Icon */}
                        <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0 border ${colors.border}`}>
                          <event.icon className={`h-4.5 w-4.5 ${colors.icon}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap justify-between">
                            <h4 className="text-sm font-semibold text-text-primary truncate">{event.title}</h4>
                            <span className="font-mono text-[11px] text-muted-foreground/60">{event.time}</span>
                          </div>
                          <p className="text-xs text-muted-foreground/80 mt-1 line-clamp-1">
                            {event.detail}
                          </p>
                          {event.likelihood && (
                            <span className={`inline-block text-[10px] font-mono font-bold mt-1.5 px-2 py-0.5 rounded ${
                              event.likelihood === "Primary trigger" 
                                ? "text-primary bg-primary/10 border border-primary/20"
                                : "text-amber-500 bg-amber-500/10 border border-amber-500/20"
                            }`}>
                              {event.likelihood}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: AI Root Cause Analysis HUD (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-primary/30 bg-primary/[0.02] shadow-md p-6 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_center,_var(--gradient-glow)_0%,_transparent_70%)] opacity-30 pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-bold text-text-primary text-sm tracking-tight">AI ROOT CAUSE DIAGNOSIS</h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="bg-surface/80 border border-border p-3.5 rounded-lg space-y-2.5">
                  <div className="flex items-center justify-between text-muted-foreground text-[10px] pb-1 border-b border-border/50">
                    <span>STATUS: CORRELATED</span>
                    <span className="text-primary font-bold">CONFIDENCE: 94%</span>
                  </div>
                  <div>
                    <span className="text-primary">❯ summary:</span>
                    <p className="text-muted-foreground mt-1 leading-normal font-sans text-xs">
                      The recent <strong className="text-text-primary">api-service v2.4.1</strong> deployment triggered gateway timeouts. The GitHub PR #142 introduced an unoptimized database query that exhausts the database connection pool.
                    </p>
                  </div>
                  <div>
                    <span className="text-amber-500">❯ trigger sequence:</span>
                    <ul className="text-[11px] text-muted-foreground mt-1 space-y-1 pl-2 border-l border-border">
                      <li>14:23 GitHub PR merged</li>
                      <li>14:45 CI/CD build started</li>
                      <li className="text-text-primary font-medium">14:52 Deployment completed (Primary trigger)</li>
                      <li>15:08 Latency alert activated</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3.5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-[10px]">RECOMMENDED RESOLUTION</span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1"><RefreshCw className="h-3 w-3 animate-spin-slow" /> Auto-rollback available</span>
                  </div>
                  <p className="text-muted-foreground font-sans text-xs leading-normal">
                    Revert CI/CD deployment <strong className="text-text-primary">v2.4.1</strong> via REST API immediately.
                  </p>
                  <button 
                    onClick={() => window.open('https://forms.gle/9hEBh6WQJae5w7QG8', '_blank')}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-primary text-primary-foreground font-semibold font-sans rounded-md hover:bg-primary/90 transition-colors text-xs"
                  >
                    Excute Auto-Rollback <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Event Metadata Inspector */}
            {selectedEvent !== null && (
              <div className="rounded-xl border border-border bg-surface p-4 text-xs font-mono space-y-2">
                <span className="text-muted-foreground text-[10px]">METADATA INSPECTOR</span>
                <div className="bg-muted/30 p-2.5 rounded border border-border/50 text-muted-foreground overflow-x-auto text-[11px]">
                  <div>Type: {events[selectedEvent].type.toUpperCase()}</div>
                  <div>Timestamp: 2026-07-18T{events[selectedEvent].time}:00Z</div>
                  <div>Details: {events[selectedEvent].detail}</div>
                  <div className="text-primary mt-1">{events[selectedEvent].meta}</div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
