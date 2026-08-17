import { Shield, Lock, Server, Users } from "lucide-react";

const Trust = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t border-slate-800">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-emerald-400 mb-2.5 uppercase tracking-widest font-semibold">Enterprise Security & Compliance</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Built for <span className="font-inria-serif text-slate-300 block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal italic">production infrastructure trust.</span>
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Ingesting production change signals requires uncompromising security. LastGood is engineered with strict zero-code retention and zero third-party AI training guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Security & Infrastructure */}
          <div className="rounded-lg border border-slate-800 bg-[#111827] p-8 relative overflow-hidden hover:border-slate-700 transition-all duration-200">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span>Infrastructure Governance</span>
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-md bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                  <Lock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Enterprise Encryption</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Telemetry signals encrypted in transit via TLS 1.3 and at rest with AES-256 keys.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-md bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                  <Server className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Zero Model Training & Zero Retention</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Your git diffs, payload metadata, and trace events are <strong className="text-white font-bold">never</strong> used to train public or internal AI models.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* SRE Origin */}
          <div className="rounded-lg border border-slate-800 bg-[#111827] p-8 relative overflow-hidden flex flex-col hover:border-slate-700 transition-all duration-200">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
              <Users className="h-5 w-5 text-indigo-400" />
              <span>Engineering Founders</span>
            </h3>
            
            <div className="flex-1 space-y-4">
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                LastGood is built by Staff SREs and platform architects who lived through the nightmare of 3 AM incident bridges. Having managed infrastructure at hyper-scale, we built the missing correlation layer between production alerts and code mutations.
              </p>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded font-semibold">SOC 2 Type II Architecture</span>
                <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 px-3 py-1 rounded font-semibold">VPC Deployment Ready</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
