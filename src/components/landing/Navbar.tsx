import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Clock className="h-4 w-4 text-primary" />
          </div>
          <span className="text-lg font-semibold tracking-tight">LastGood</span>
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

        <Button variant="hero" size="sm">
          Join waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
