import { Button } from "@/components/ui/button";
import { History } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-[0_0_15px_rgba(23,207,184,0.15)] group-hover:shadow-[0_0_25px_rgba(23,207,184,0.3)] transition-all duration-300 group-hover:scale-105 overflow-hidden">
             {/* Small rotating backdrop glow for tech feel */}
             <div className="absolute inset-0 bg-primary/20 animate-spin-slow blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <History className="h-5 w-5 text-primary relative z-10 group-hover:-rotate-45 transition-transform duration-500" />
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
        </div>

        <Button variant="default" size="sm" className="shadow-[0_0_15px_rgba(64,191,172,0.2)] hover:shadow-[0_0_25px_rgba(64,191,172,0.4)] transition-shadow" onClick={() => window.open('https://forms.gle/9hEBh6WQJae5w7QG8', '_blank')}>
          Join waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
