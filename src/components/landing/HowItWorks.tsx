import { Radio, Rewind, ListOrdered } from "lucide-react";

const steps = [
  {
    icon: Radio,
    title: "Capture changes",
    description: "LastGood continuously ingests high-signal change events: deployments, config changes, feature flags, infrastructure updates, and manual operations.",
    accent: "primary",
  },
  {
    icon: Rewind,
    title: "Rewind time",
    description: "When an incident starts, select the incident timestamp. LastGood instantly surfaces everything that changed in the hours and minutes before.",
    accent: "primary",
  },
  {
    icon: ListOrdered,
    title: "Rank likely causes",
    description: "Changes are ranked by proximity and relevance. The most likely culprits rise to the top, giving you a clear starting point for investigation.",
    accent: "primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            From incident start to root cause
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-12 bottom-12 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex gap-6 items-start">
                  {/* Step number with icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center timeline-glow">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
