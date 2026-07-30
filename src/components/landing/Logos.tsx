import { 
  Github, 
  Terminal,
  Code2,
  Blocks
} from "lucide-react";

const Logos = () => {
  return (
    <section className="py-12 relative border-b border-border/30 bg-surface/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
          Integrates seamlessly with your stack
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 text-muted-foreground hover:text-text-primary transition-colors">
            <Github className="h-6 w-6" />
            <span className="font-semibold tracking-tight">GitHub</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-text-primary transition-colors">
            <Blocks className="h-6 w-6" />
            <span className="font-semibold tracking-tight">Jenkins</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-text-primary transition-colors">
            <Code2 className="h-6 w-6" />
            <span className="font-semibold tracking-tight">REST API (CI/CD)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
