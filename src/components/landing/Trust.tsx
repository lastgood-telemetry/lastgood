import { Shield, Lock, Server, Users } from "lucide-react";

const Trust = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-zinc-400 mb-2.5 uppercase tracking-widest font-semibold">Enterprise Security & Compliance</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Built for <span className="font-inria-serif text-zinc-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">production infrastructure trust.</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Ingesting production change signals requires uncompromising security. LastGood is engineered with strict zero-code retention and zero third-party AI training guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Security & Infrastructure */}
          <div className="rounded-lg border border-white/10 bg-[#09090c] p-8 relative overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Shield className="h-5 w-5 text-white" />
              <span>Infrastructure Governance</span>
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded bg-white/5 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-white">
                  <Lock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Enterprise Encryption</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Telemetry signals encrypted in transit via TLS 1.3 and at rest with AES-256 keys.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded bg-white/5 border border-white/15 flex items-center justify-center shrink-0 mt-0.5 text-white">
                  <Server className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Zero Model Training & Zero Retention</h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Your git diffs, payload metadata, and trace events are **never** used to train public or internal AI models.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* SRE Origin */}
          <div className="rounded-lg border border-white/10 bg-[#09090c] p-8 relative overflow-hidden flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-white" />
              <span>Engineering Founders</span>
            </h3>
            
            <div className="flex-1 space-y-4">
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                LastGood is built by Staff SREs and platform architects who lived through the nightmare of 3 AM incident bridges. Having managed infrastructure at hyper-scale, we built the missing correlation layer between production alerts and code mutations.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="text-[11px] font-mono text-zinc-200 bg-white/10 border border-white/20 px-2.5 py-1 rounded">SOC 2 Type II Architecture</span>
                <span className="text-[11px] font-mono text-zinc-200 bg-white/10 border border-white/20 px-2.5 py-1 rounded">VPC Deployment Ready</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
