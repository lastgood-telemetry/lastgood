import { Button } from "@/components/ui/button";
import { History, ArrowRight, Terminal } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#000000]/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-6xl">
        <a href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0e0e11] border border-white/15 shadow-sm group-hover:border-white/40 transition-all duration-300">
             <History className="h-5 w-5 text-white group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white">
              Last<span className="text-zinc-400 font-mono tracking-tighter">Good</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] text-zinc-200 bg-white/10 border border-white/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              BETA LIVE
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs">
          <a href="#how-it-works" className="text-zinc-400 hover:text-white transition-colors">
            Telemetry Engine
          </a>
          <a href="#benefits" className="text-zinc-400 hover:text-white transition-colors">
            Architecture
          </a>
          <a href="#for-teams" className="text-zinc-400 hover:text-white transition-colors">
            Integrations
          </a>
          <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">
            Pricing & Scale
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex text-xs font-mono border-white/15 hover:bg-white/10 text-zinc-200 rounded-[3px] cursor-pointer"
            onClick={() => window.open('https://console.lastgood.space/sandbox', '_blank')}
          >
            <Terminal className="mr-1.5 h-3.5 w-3.5 text-zinc-300" />
            Explore Sandbox
          </Button>
          <Button
            variant="default"
            size="sm"
            className="font-mono text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all rounded-[3px] cursor-pointer px-4"
            onClick={() => window.open('https://console.lastgood.space/login', '_blank')}
          >
            <span>Access BETA</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-black" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
