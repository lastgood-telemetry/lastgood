import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Navbar, { SANDBOX_URL, CONSOLE_URL } from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { trackEvent } from "@/util/analytics";
import "@/components/landing/landing.css";

const shots = [
  {
    src: "/screens/rewind.svg",
    alt: "LastGood Rewind view in the sandbox showing a checkout-service incident with ranked changes and an AI triage summary",
    title: "Rewind",
    caption: "Ranked changes before the incident, with an AI triage summary. Risk ranks investigation order, not causation.",
    wide: true,
  },
  {
    src: "/screens/events.svg",
    alt: "LastGood Events feed in the sandbox listing GitHub, Kubernetes and LaunchDarkly changes",
    title: "Events",
    caption: "Every change from every source in one feed, each with a score rationale.",
  },
  {
    src: "/screens/channels.svg",
    alt: "LastGood Ingestion Channels page showing GitHub App and Custom REST API",
    title: "Ingestion Channels",
    caption: "Connect the GitHub App or send events from your own tools.",
  },
];

const Product = () => {
  useEffect(() => {
    document.title = "Product | LastGood";
  }, []);
  return (
    <div className="landing-page product-page">
      <Navbar />
      <main id="main" className="shots section-shell">
        <div className="section-heading">
          <span className="eyebrow">PRODUCT</span>
          <h1 id="shots-heading">
            This is the console.
            <br />
            Not a mockup.
          </h1>
          <p>
            Screenshots from the live sandbox, which runs on a simulated
            checkout incident. The data is sample data; the screens are the real
            product.
          </p>
        </div>
        <div className="shots-grid">
          {shots.map((shot) => (
            <figure key={shot.src} className={shot.wide ? "shot shot-wide" : "shot"}>
              <img
                src={shot.src}
                alt={shot.alt}
                width={1356}
                height={847}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="shots-actions">
          <a
            className="primary-link"
            href={SANDBOX_URL}
            onClick={() => trackEvent("click_explore_sandbox", "product", "Revamp")}
          >
            Try the sandbox <ArrowUpRight size={16} />
          </a>
          <a className="secondary-link" href={CONSOLE_URL}>
            Start free beta <ArrowUpRight size={16} />
          </a>
          <span className="action-note">Sample data. No signup needed for the sandbox.</span>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Product;
