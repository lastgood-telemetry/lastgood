import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to find the cause faster?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the waitlist for early access. We're onboarding teams who want to cut their MTTR and bring sanity to incident response.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" onClick={() => window.open('https://forms.gle/5SPGmk9AyMp8QjDX7', '_blank')}>
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Free during beta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
