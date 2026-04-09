import { History } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <History className="h-4 w-4 text-primary" />
            </div>
            <span className="text-lg font-bold tracking-tight text-text-primary">
              Last<span className="text-primary font-mono italic opacity-90 tracking-tighter">Good</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 LastGood. Built for engineers who run production.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
