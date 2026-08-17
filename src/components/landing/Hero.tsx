import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, GitCommit, Flag, Server, CheckCircle2, AlertCircle } from "lucide-react";
import { trackEvent } from "@/util/analytics";

const incidents = [
  {
    id: "db-exhaustion",
    title: "Sev-1 DB Pool Exhaustion",
    service: "payment-gateway",
    metric: "HTTP 500 Spike (+420%)",
    culpritType: "GIT COMMIT",
    culpritName: "PR #1492: Add connection pool max limit fallback",
    culpritAuthor: "@alex_sre",
    sha: "a1b2c3d4",
    confidence: "96.4%",
    blastRadius: "14 downstream services",
    remediation: "/rollback --commit a1b2c3d4",
  },
  {
    id: "gateway-timeout",
    title: "504 Gateway Timeout Spike",
    service: "api-router-v2",
    metric: "P99 Latency > 4500ms",
    culpritType: "FEATURE FLAG",
    culpritName: "Flag Toggle: enable_v2_auth_pipeline (enabled)",
    culpritAuthor: "@sarah_dev",
    sha: "ff_88190",
    confidence: "94.1%",
    blastRadius: "8 microservices",
    remediation: "/flag disable enable_v2_auth_pipeline",
  },
  {
    id: "memory-leak",
    title: "OOMKilled Pod Evictions",
    service: "user-auth-cluster",
    metric: "RAM Usage 98.4%",
    culpritType: "K8S DEPLOYMENT",
    culpritName: "Helm Upgrade: user-service:v2.4.1-rc3",
    culpritAuthor: "@ci_bot",
    sha: "deploy_991",
    confidence: "98.7%",
    blastRadius: "Entire auth pod pool",
    remediation: "/helm rollback user-service 41",
  },
];

const Hero = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  const currentInc = incidents[activeScenario];

  const integrations = [
    "GitHub Webhooks",
    "Datadog Alerts",
    "AWS CloudTrail",
    "LaunchDarkly",
    "Kubernetes Operator",
    "Vercel Deployments",
    "Ansible Automation"
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent">
      {/* Structural Grid Background */}
      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">

        {/* Monochromatic Telemetry Beacon */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1 text-xs font-mono mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
          </span>
          <span className="text-slate-300 font-medium">Telemetry Change Correlation Engine</span>
          <span className="text-slate-700">|</span>
          <span className="text-indigo-400 font-bold uppercase tracking-wider">Public Beta Live</span>
        </div>

        {/* Authoritative Monochrome Headline */}
        <h1 className="animate-slide-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-6">
          When production breaks, telemetry tells you what.
          <span className="font-inria-serif text-slate-300 block mt-3 text-3xl sm:text-4xl md:text-5xl font-normal italic">
            LastGood tells you why.
          </span>
        </h1>

        <p className="animate-slide-up text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 tracking-wide leading-relaxed font-normal">
          Stop hunting through logs and asking "who deployed?" during live Sev-1 bridges. LastGood correlates every alert spike with upstream code commits, flag flips, and infra state mutations in 3 seconds.
        </p>

        {/* Sharp Architectural Buttons */}
        <div className="animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.1s' }}>
          <Button
            variant="default"
            className="h-11 px-8 text-xs font-mono font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white transition-all rounded-md shadow-sm cursor-pointer border border-transparent"
            onClick={() => {
              trackEvent("click_access_beta", "conversion", "Hero");
              window.open("https://console.lastgood.space/login", "_blank");
            }}
          >
            <span>Access BETA</span>
            <ArrowRight className="ml-2 h-4 w-4 text-white" />
          </Button>
          <Button
            variant="outline"
            className="h-11 px-7 text-xs font-mono font-medium border-slate-800 hover:bg-slate-900 text-slate-200 transition-all rounded-md cursor-pointer bg-transparent"
            onClick={() => {
              trackEvent("click_explore_sandbox", "engagement", "Hero");
              window.open('https://console.lastgood.space/sandbox', '_blank');
            }}
          >
            <Terminal className="mr-2 h-4 w-4 text-indigo-400" />
            Explore Interactive Sandbox
          </Button>
        </div>

        {/* Interactive Incident Switcher Box */}
        <div className="animate-slide-up mt-14 max-w-4xl mx-auto rounded-lg overflow-hidden border border-slate-800 bg-[#111827] shadow-2xl relative text-left" style={{ animationDelay: '0.2s' }}>
          {/* Engineering Window Header */}
          <div className="h-10 border-b border-slate-800 bg-[#0f172a] flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
              <span className="ml-2 font-mono text-[11px] text-slate-400">lastgood-telemetry-engine // live-correlation-demo</span>
            </div>
            <div className="flex items-center gap-3">
               <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">100% DETERMINISTIC</span>
            </div>
          </div>

          {/* Scenario Selector Tabs */}
          <div className="grid grid-cols-3 border-b border-slate-800 bg-[#0b0e14] text-xs font-mono">
            {incidents.map((inc, index) => (
              <button
                key={inc.id}
                onClick={() => setActiveScenario(index)}
                className={`py-3 px-4 text-center transition-all cursor-pointer border-r border-slate-800 last:border-r-0 flex items-center justify-center gap-2 ${
                  activeScenario === index
                    ? "bg-[#1e2937] text-white font-bold border-b-2 border-b-indigo-500"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                }`}
              >
                <AlertCircle className={`h-3.5 w-3.5 ${activeScenario === index ? 'text-indigo-400' : 'text-slate-500'}`} />
                <span className="truncate">{inc.title}</span>
              </button>
            ))}
          </div>

          {/* Scenario Content Visualizer */}
          <div className="p-6 bg-[#111827] font-mono text-xs text-slate-300 space-y-5">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                   <div className="text-[10px] text-indigo-400 uppercase tracking-widest font-semibold">Active Incident Trigger</div>
                   <div className="text-base font-bold text-white mt-0.5">{currentInc.title}</div>
                   <div className="text-slate-300 text-xs mt-1">Alert Payload: <span className="text-amber-400 font-semibold">{currentInc.metric}</span> ({currentInc.service})</div>
                </div>
                <div className="flex items-center gap-3 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-2 rounded-md">
                   <div>
                      <div className="text-[9px] text-emerald-400/80 uppercase tracking-wider font-semibold">Correlation Score</div>
                      <div className="text-lg font-bold text-emerald-300">{currentInc.confidence}</div>
                   </div>
                   <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0b0e14] border border-slate-800 rounded-md p-4 space-y-2">
                   <div className="text-[10px] text-indigo-400 uppercase tracking-widest flex items-center gap-1.5 font-semibold">
                      {currentInc.culpritType === "GIT COMMIT" ? <GitCommit className="h-3.5 w-3.5 text-indigo-400" /> : currentInc.culpritType === "FEATURE FLAG" ? <Flag className="h-3.5 w-3.5 text-amber-400" /> : <Server className="h-3.5 w-3.5 text-emerald-400" />}
                      <span>Isolated Culprit Mutation</span>
                   </div>
                   <div className="text-white font-bold text-sm">{currentInc.culpritName}</div>
                   <div className="text-slate-400 text-xs">Author: <span className="text-white">{currentInc.culpritAuthor}</span> | SHA: <span className="text-indigo-300">{currentInc.sha}</span></div>
                </div>

                <div className="bg-[#0b0e14] border border-slate-800 rounded-md p-4 space-y-2">
                   <div className="text-[10px] text-amber-400 uppercase tracking-widest font-semibold">Automated Blast Radius & Remediation</div>
                   <div className="text-slate-300 text-xs">Impact: <span className="text-rose-400 font-bold">{currentInc.blastRadius}</span></div>
                   <div className="bg-[#030712] border border-indigo-500/30 p-2.5 rounded text-indigo-300 text-[11px] font-mono mt-1 shadow-inner">
                      {currentInc.remediation}
                   </div>
                </div>
             </div>
          </div>

          {/* Footer Bar */}
          <div className="h-9 border-t border-slate-800 bg-[#0f172a] px-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
             <span>Press button above to access live telemetry console</span>
             <a href="https://console.lastgood.space/login" target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 hover:underline flex items-center gap-1 font-semibold">
                Launch Full Console <ArrowRight size={10} />
             </a>
          </div>
        </div>

        {/* Integration Logo Stream Ticker */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-6 font-semibold">
            Native Telemetry Ingestion Connectors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {integrations.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#111827]/80 border border-slate-800 px-3 py-1.5 rounded-full hover:border-indigo-500/40 hover:text-white transition-all">
                <span className="text-indigo-400 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
