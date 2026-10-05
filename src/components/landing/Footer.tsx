import { ArrowUpRight } from "lucide-react";
const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <a className="wordmark" href="/">
        LastGood
      </a>
      <p>Less guesswork. More evidence.</p>
      <a
        href="https://www.producthunt.com/products/lastgood?launch=lastgood"
        target="_blank"
        rel="noopener noreferrer"
      >
        Find us on Product Hunt <ArrowUpRight size={14} />
      </a>
    </div>
    <div className="footer-bottom">
      <span>© 2026 LastGood</span>
      <div>
        <a href="/terms">Terms of service</a>
        <a href="mailto:hello@lastgood.space">hello@lastgood.space</a>
        <a
          href="https://github.com/lastgood-telemetry/lastgood"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
