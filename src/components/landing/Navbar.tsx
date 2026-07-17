import { Button } from "@/components/ui/button";
import { History } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 transition-all duration-200 group-hover:bg-primary/25">
             <History className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">
            Last<span className="text-primary font-mono italic opacity-90 tracking-tighter">Good</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#for-teams" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            For teams
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </div>

        <Button variant="default" size="sm" className="font-semibold transition-all duration-200" onClick={() => window.open('https://forms.gle/9hEBh6WQJae5w7QG8', '_blank')}>
          Join waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
