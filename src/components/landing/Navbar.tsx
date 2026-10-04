import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { trackEvent } from "@/util/analytics";

export const CONSOLE_URL = "https://console.lastgood.space/login";
export const SANDBOX_URL = "https://console.lastgood.space/sandbox";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <a className="wordmark" href="/" aria-label="LastGood home">
        <span
          className="brand-mark"
          aria-hidden="true"
          style={{
            maskImage: 'url("/logo.png")',
            WebkitMaskImage: 'url("/logo.png")',
          }}
        />
        LastGood<span className="beta-label">BETA</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="/#how-it-works">Workflow</a>
        <a href="/#integrations">Integrations</a>
        <a href="/#pricing">Free beta</a>
      </nav>
      <div className="nav-actions">
        <a
          className="nav-login"
          href={CONSOLE_URL}
          onClick={() =>
            trackEvent("click_access_beta", "navigation", "Navbar")
          }
        >
          Open console <ArrowUpRight size={14} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <a href="/#how-it-works" onClick={() => setOpen(false)}>
            Workflow
          </a>
          <a href="/#integrations" onClick={() => setOpen(false)}>
            Integrations
          </a>
          <a href="/#pricing" onClick={() => setOpen(false)}>
            Free beta
          </a>
          <a href={SANDBOX_URL}>
            Try the sandbox <ArrowUpRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
};
export default Navbar;
