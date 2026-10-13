import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/landing/useTheme";
import { trackEvent } from "@/util/analytics";

export const CONSOLE_URL = "https://console.lastgood.space/login";
export const SANDBOX_URL = "https://console.lastgood.space/sandbox";

const links = [
  { href: "/product", label: "Product" },
  { href: "/#how-it-works", label: "Workflow" },
  { href: "/#integrations", label: "Integrations" },
  { href: "/docs", label: "Docs" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={scrolled ? "site-header is-scrolled" : "site-header"}
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
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={l.href === path ? "page" : undefined}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggle}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a
          className="nav-sandbox"
          href={CONSOLE_URL}
          onClick={() =>
            trackEvent("click_access_beta", "navigation", "Navbar")
          }
        >
          Sign in
        </a>
        <a
          className="nav-login"
          href={SANDBOX_URL}
          onClick={() =>
            trackEvent("click_explore_sandbox", "navigation", "Navbar")
          }
        >
          <span className="nl-long">Try the sandbox</span>
          <span className="nl-short" aria-hidden="true">Sandbox</span>
          <ArrowUpRight size={14} />
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
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={CONSOLE_URL}>Sign in</a>
          <a href={SANDBOX_URL}>
            Try the sandbox <ArrowUpRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
};
export default Navbar;
