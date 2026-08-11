import { AlertTriangle, Search, Clock } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 border-t border-white/10 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-mono text-zinc-400 mb-2.5 uppercase tracking-widest font-semibold">The Triage Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Incidents are chaotic.{" "}
            <span className="font-inria-serif text-zinc-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">
              Telemetry logs show symptoms, not the trigger.
            </span>
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            When alerts fire and latency spikes, error logs tell you *what* broke, but not *which upstream mutation* ignited the failure. SRE teams waste critical triage windows hunting across Slack, Git commits, and SaaS portals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="group rounded-lg border border-white/10 bg-[#09090c] p-7 transition-all duration-200 hover:border-white/20">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/15 flex items-center justify-center mb-6 text-zinc-200">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">01 // Logs Show Symptoms</span>
            <h3 className="text-base font-bold mb-2 text-white">Symptom Metrics vs Root Cause</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Datadog or Prometheus show CPU exhaustion, but fail to pinpoint the underlying pull request or configuration mutation that introduced the thread leak.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-lg border border-white/10 bg-[#09090c] p-7 transition-all duration-200 hover:border-white/20">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/15 flex items-center justify-center mb-6 text-zinc-200">
              <Search className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">02 // Scattered Mutations</span>
            <h3 className="text-base font-bold mb-2 text-white">Fragmented Signal Vectors</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Deploys, feature flag toggles, Terraform updates, and Kubernetes config maps live in disconnected portals with zero unified correlation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-lg border border-white/10 bg-[#09090c] p-7 transition-all duration-200 hover:border-white/20">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/15 flex items-center justify-center mb-6 text-zinc-200">
              <Clock className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">03 // High MTTR Triage</span>
            <h3 className="text-base font-bold mb-2 text-white">Slack Communication Chaos</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              On-call engineers waste 80% of live incident response asking "did anyone deploy recently?" instead of executing immediate remediation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
