import {
  Github,
  Terminal,
  Code2,
  Blocks
} from "lucide-react";

const Logos = () => {
  return (
    <section className="py-12 relative border-y border-slate-800 bg-[#0b0e14]">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-mono text-slate-400 uppercase tracking-widest mb-8 font-semibold">
          Integrates seamlessly with your engineering stack
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <div className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors bg-[#111827] border border-slate-800 hover:border-indigo-500/40 px-4 py-2 rounded-md cursor-pointer">
            <Github className="h-4.5 w-4.5 text-indigo-400" />
            <span className="font-semibold tracking-tight text-xs font-mono">GitHub</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors bg-[#111827] border border-slate-800 hover:border-indigo-500/40 px-4 py-2 rounded-md cursor-pointer">
            <Blocks className="h-4.5 w-4.5 text-indigo-400" />
            <span className="font-semibold tracking-tight text-xs font-mono">Jenkins</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors bg-[#111827] border border-slate-800 hover:border-indigo-500/40 px-4 py-2 rounded-md cursor-pointer">
            <Code2 className="h-4.5 w-4.5 text-indigo-400" />
            <span className="font-semibold tracking-tight text-xs font-mono">REST API (CI/CD)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
