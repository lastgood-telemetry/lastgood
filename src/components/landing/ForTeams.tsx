import { Terminal, Shield, Gauge } from "lucide-react";

const audiences = [
  {
    icon: Terminal,
    title: "Backend & Systems Engineers",
    description: "Instantly isolate the commit, PR, or config mutation that introduced latency drift without digging through raw CI logs.",
  },
  {
    icon: Shield,
    title: "Platform & SRE Teams",
    description: "Maintain a unified, automated audit trail of every production change vector—deploys, infrastructure, flags—across all clusters.",
  },
  {
    icon: Gauge,
    title: "On-Call Responders",
    description: "Enter every Sev-1 bridge with complete context. Know what mutated across dependencies before the alert even fired.",
  },
];

const ForTeams = () => {
  return (
    <section id="for-teams" className="py-24 relative overflow-hidden bg-transparent border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-zinc-400 mb-2.5 uppercase tracking-widest font-semibold">Target Engineering Ecosystem</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
            Built for engineering teams <span className="font-inria-serif text-zinc-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">who own production reliability.</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
            Designed for high-throughput organizations where uptime is critical and incident resolution time directly impacts business SLA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, idx) => (
            <div key={audience.title} className="group relative rounded-lg bg-[#09090c] p-7 border border-white/10 hover:border-white/20 transition-all duration-200">
              <div className="relative z-10 flex flex-col items-start h-full">
                <div className="w-10 h-10 rounded bg-white/5 border border-white/15 flex items-center justify-center mb-6 text-white">
                  <audience.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
                  {idx === 0 ? "01 // Deployment Triage" : idx === 1 ? "02 // Centralized Audit" : "03 // Incident Context"}
                </span>
                <h3 className="text-base font-bold mb-2 text-white">{audience.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal flex-1">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForTeams;
