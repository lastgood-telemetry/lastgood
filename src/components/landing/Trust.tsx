import { Shield, Lock, Server, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Trust = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface/50 border-t border-border/50">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Enterprise Readiness</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-text-primary">
            Built for <span className="font-serif-italic text-primary block mt-1 text-2xl sm:text-3xl md:text-4xl font-normal lowercase">production trust.</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Ingesting production telemetry requires uncompromising security. We designed LastGood from the ground up to protect your most sensitive data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Security & Infrastructure */}
          <div className="rounded-2xl border border-border bg-surface shadow-md p-8 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lock className="w-24 h-24 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
              Infrastructure & Security
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Military-Grade Encryption</h4>
                  <p className="text-sm text-muted-foreground mt-1">Data is encrypted in transit (TLS 1.3) and at rest (AES-256) across all systems.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Server className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">Strict LLM Privacy</h4>
                  <p className="text-sm text-muted-foreground mt-1">Your trace data and codebase context are <strong>never</strong> used to train public or internal models. Zero data retention by third-party LLM providers.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">SOC 2 Compliance</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-sm text-muted-foreground">Type II certification in progress.</p>
                    <span className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full">ROADMAP</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Founder Context */}
          <div className="rounded-2xl border border-border bg-surface shadow-md p-8 relative overflow-hidden group hover:border-primary/30 transition-colors flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-24 h-24 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
              Who's Building This?
            </h3>
            
            <div className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                LastGood is built by a team of SREs and platform engineers who lived through the pain of "who deployed what?" during 3AM incidents. We spent years scaling observability systems at hyper-growth companies and realized that knowing a service is broken is useless without knowing exactly what changed to break it.
              </p>
              

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
