import { useState } from "react";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const proPrice = isAnnual ? 39 : 49;

  return (
    <section id="pricing" className="py-20 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary uppercase tracking-widest">Pricing Plans</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Transparent, <span className="font-serif-italic text-primary block mt-1 text-xl sm:text-2xl md:text-3xl font-normal lowercase">developer-first pricing.</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground/80 max-w-xl mx-auto">
            Choose the retention window and ingestion limits that match your system's frequency.
          </p>

          {/* Monthly / Annual Selector */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className={`text-sm ${!isAnnual ? "text-text-primary font-medium" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 bg-muted rounded-full border border-border transition-colors duration-200 focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] bg-primary rounded-full transition-transform duration-200 transform ${
                  isAnnual ? "translate-x-6 bg-primary" : "bg-muted-foreground/60"
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-text-primary font-medium" : "text-muted-foreground"}`}>
              Annually <span className="ml-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Developer/Free Tier */}
          <Card className="flex flex-col justify-between surface border-border/80 hover:border-border transition-colors duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-text-primary">Developer</CardTitle>
              <CardDescription className="text-muted-foreground min-h-[40px]">
                For hobbyists, sandbox environments, and test repos.
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-extrabold tracking-tight text-text-primary">$0</span>
                <span className="text-muted-foreground text-sm font-normal"> / forever</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <div className="h-px bg-border/50" />
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Up to <strong>2 projects</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span><strong>7 days</strong> signal retention</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Standard community support</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="flex items-center gap-1.5">
                    Up to 500 MB/month ingestion
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-muted-foreground/60 hover:text-foreground">
                            <Info className="h-3.5 w-3.5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-popover border border-border text-foreground text-xs p-2 max-w-xs">
                          Perfect for lightweight change webhooks (Git commits, configuration updates).
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4 pb-6">
              <Button variant="outline" className="w-full font-medium" onClick={() => window.open('https://forms.gle/9hEBh6WQJae5w7QG8', '_blank')}>
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Tier */}
          <Card className="flex flex-col justify-between surface border-primary/30 relative shadow-xl hover:border-primary/50 transition-colors duration-200">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <CardHeader className="pb-4 pt-8">
              <CardTitle className="text-xl font-bold text-text-primary">Pro</CardTitle>
              <CardDescription className="text-muted-foreground min-h-[40px]">
                For production-grade teams requiring end-to-end auditability.
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-extrabold tracking-tight text-text-primary">${proPrice}</span>
                <span className="text-muted-foreground text-sm font-normal"> / mo</span>
                {isAnnual && <div className="text-xs text-primary font-mono mt-1">Billed annually (${proPrice * 12}/yr)</div>}
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <div className="h-px bg-border/50" />
              
              <ul className="space-y-3 text-sm text-muted-foreground pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span><strong>AI Root Cause Diagnosis</strong> included</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span><strong>Unlimited</strong> projects & services</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span><strong>30 days</strong> signal retention</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Priority Slack & email support</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="flex items-center gap-1.5">
                    Up to 5 GB/month data ingestion
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-muted-foreground/60 hover:text-foreground">
                            <Info className="h-3.5 w-3.5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-popover border border-border text-foreground text-xs p-2 max-w-xs">
                          Perfect for ~10 active daily CI deployments, feature flag changes, and server scale events.
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4 pb-6">
              <Button 
                variant="default" 
                className="w-full font-semibold shadow-md"
                onClick={() => window.open('https://forms.gle/9hEBh6WQJae5w7QG8', '_blank')}
              >
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>

          {/* Enterprise Tier */}
          <Card className="flex flex-col justify-between surface border-border/80 hover:border-border transition-colors duration-200">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-text-primary">Enterprise</CardTitle>
              <CardDescription className="text-muted-foreground min-h-[40px]">
                For mission-critical operations needing custom scale and SLAs.
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-extrabold tracking-tight text-text-primary">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
              <div className="h-px bg-border/50" />
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span><strong>Custom</strong> retention (up to 1+ year)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span><strong>Custom</strong> data volume scale</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>SAML SSO & IAM integrations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Audit logs & custom compliance</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>24/7 dedicated SRE support with SLA</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-4 pb-6">
              <Button variant="outline" className="w-full font-medium" onClick={() => window.open('mailto:sales@lastgood.io?subject=Enterprise%20Inquiry', '_blank')}>
                Contact Sales
              </Button>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
