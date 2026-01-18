import { Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="font-semibold">LastGood</span>
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
