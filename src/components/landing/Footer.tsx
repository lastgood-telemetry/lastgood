import { History, Shield, CheckCircle2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0e14] border-t border-slate-800 text-slate-400 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-3 max-w-sm">
            <a href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-950/60 border border-indigo-500/30 group-hover:border-indigo-400 transition-all">
                <History className="h-4 w-4 text-indigo-400" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Last<span className="text-slate-400 font-mono tracking-tighter ml-0.5">Good</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Autonomous engineering change correlation platform. Eliminating incident triage guesswork across production microservices.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <h4 className="font-mono text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-4">Platform</h4>
              <ul className="space-y-2.5 font-normal">
                <li><a href="#how-it-works" className="hover:text-indigo-300 transition-colors">Telemetry Engine</a></li>
                <li><a href="#benefits" className="hover:text-indigo-300 transition-colors">Architecture</a></li>
                <li><a href="#pricing" className="hover:text-indigo-300 transition-colors">Pricing & Scale</a></li>
                <li><a href="https://console.lastgood.space/sandbox" target="_blank" rel="noreferrer" className="hover:text-indigo-300 transition-colors">Console Sandbox</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-4">Ingestion</h4>
              <ul className="space-y-2.5 font-normal">
                <li><span className="text-slate-300">GitHub Webhooks</span></li>
                <li><span className="text-slate-300">Datadog Monitors</span></li>
                <li><span className="text-slate-300">AWS CloudTrail</span></li>
                <li><span className="text-slate-300">REST Ingest API</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-4">Compliance</h4>
              <ul className="space-y-2.5 font-normal">
                <li className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>TLS 1.3 In-Transit</span>
                </li>
                <li className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>AES-256 At-Rest</span>
                </li>
                <li className="flex items-center gap-1.5 text-slate-300">
                  <Shield size={13} className="text-indigo-400" />
                  <span>SOC 2 Type II Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 LastGood Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://console.lastgood.space/login" target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-indigo-300 hover:underline font-bold">Access Beta Console</a>
            <a href="mailto:support@lastgood.space" className="hover:text-slate-300 transition-colors">Engineering Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
