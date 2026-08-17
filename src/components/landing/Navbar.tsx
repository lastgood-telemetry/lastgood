import { Button } from "@/components/ui/button";
import { History, ArrowRight, Terminal } from "lucide-react";
import { trackEvent } from "@/util/analytics";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-[#0b0e14]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 max-w-6xl">
        <a href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-950/60 border border-indigo-500/30 group-hover:border-indigo-400 transition-all duration-200">
            <History className="h-5 w-5 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white">
              Last<span className="text-slate-400 font-mono tracking-tighter ml-0.5">Good</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              BETA LIVE
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs">
          <a href="#how-it-works" className="text-slate-400 hover:text-indigo-300 transition-colors">
            Telemetry Engine
          </a>
          <a href="#benefits" className="text-slate-400 hover:text-indigo-300 transition-colors">
            Architecture
          </a>
          <a href="#for-teams" className="text-slate-400 hover:text-indigo-300 transition-colors">
            Integrations
          </a>
          <a href="#pricing" className="text-slate-400 hover:text-indigo-300 transition-colors">
            Pricing & Scale
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex text-xs font-mono border-slate-800 hover:bg-slate-900 hover:border-slate-700 hover:text-white text-slate-300 rounded-md transition-all cursor-pointer bg-transparent"
            onClick={() => {
              trackEvent("click_explore_sandbox", "navigation", "Navbar");
              window.open('https://console.lastgood.space/sandbox', '_blank');
            }}
          >
            <Terminal className="mr-1.5 h-3.5 w-3.5 text-indigo-400" />
            Explore Sandbox
          </Button>
          <Button
            variant="default"
            size="sm"
            className="font-mono text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white transition-all rounded-md cursor-pointer px-4 shadow-sm"
            onClick={() => {
              trackEvent("click_access_beta", "navigation", "Navbar");
              window.open('https://console.lastgood.space/login', '_blank');
            }}
          >
            <span>Access BETA</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 text-white" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
