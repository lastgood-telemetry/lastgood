import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  GitCommitHorizontal,
  GitBranch,
  Activity,
  Check,
  ChevronRight,
  Terminal,
  Circle,
} from "lucide-react";
import Navbar, { CONSOLE_URL, SANDBOX_URL } from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { trackEvent } from "@/util/analytics";
import "@/components/landing/landing.css";

const examples = [
  {
    service: "checkout-api",
    incident: "Error rate increased",
    detail: "HTTP 5xx · production",
    change: "Update connection pool limits",
    commit: "7f3a91c",
    time: "14:02:18",
    alert: "14:06:32",
    evidence:
      "Same service and environment. The deployment preceded the alert by about 4 minutes.",
    earlier: "Update checkout validation",
    earlierTime: "13:44:07",
  },
  {
    service: "edge-gateway",
    incident: "Response time increased",
    detail: "p95 latency · production",
    change: "Update upstream timeout",
    commit: "a8d21e4",
    time: "09:12:40",
    alert: "09:15:09",
    evidence:
      "Same service and environment. The configuration change preceded the alert by about 2 minutes.",
    earlier: "Deploy gateway patch",
    earlierTime: "08:53:12",
  },
];

function ProductScene() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];
  return (
    <div
      className="product-scene"
      aria-label="Illustrative change investigation"
    >
      <div className="scene-toolbar">
        <span>
          <span className="signal-dot" /> Rewind
        </span>
        <span className="scene-caption">
          ILLUSTRATIVE DATA · NOT A LIVE INCIDENT
        </span>
      </div>
      <div className="scene-body">
        <aside className="scene-sidebar">
          <span className="micro-label">INVESTIGATION</span>
          <span className="sidebar-active">
            <Activity size={15} /> Change timeline
          </span>
          <span>
            <GitBranch size={15} /> Services
          </span>
          <div className="sidebar-bottom">
            <span className="signal-dot" /> Evidence, then action.
          </div>
        </aside>
        <div className="scene-workspace">
          <div className="scene-topline">
            <div
              className="service-switch"
              role="group"
              aria-label="Example service"
            >
              {examples.map((item, index) => (
                <button
                  key={item.service}
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                >
                  {item.service}
                </button>
              ))}
            </div>
            <span className="environment">
              <Circle size={8} fill="currentColor" /> production
            </span>
          </div>
          <div className="incident-heading">
            <div>
              <span className="micro-label">
                INCIDENT WINDOW / 04 OCT 2026 · UTC
              </span>
              <h3>{example.incident}</h3>
              <p>{example.detail}</p>
            </div>
            <span className="incident-pill">INVESTIGATING</span>
          </div>
          <div className="evidence-grid">
            <div className="change-timeline">
              <div className="timeline-label">
                <span>TIME / UTC</span>
                <span>RECENT CHANGES</span>
              </div>
              <div className="change-row muted-row">
                <time>{example.earlierTime}</time>
                <GitCommitHorizontal size={17} />
                <div>
                  {example.earlier}
                  <small>GitHub deployment</small>
                </div>
              </div>
              <div className="change-row selected-row">
                <time>{example.time}</time>
                <GitCommitHorizontal size={17} />
                <div>
                  {example.change}
                  <small>
                    GitHub · <code>{example.commit}</code>
                  </small>
                </div>
                <ChevronRight size={16} />
              </div>
              <div className="change-row alert-row">
                <time>{example.alert}</time>
                <Activity size={17} />
                <div>
                  {example.incident}
                  <small>Incident signal</small>
                </div>
              </div>
            </div>
            <div className="evidence-panel">
              <span className="micro-label">SUSPECTED CONTRIBUTOR</span>
              <h4>{example.change}</h4>
              <p>{example.evidence}</p>
              <div className="evidence-tags">
                <span>
                  <Check size={12} /> Service match
                </span>
                <span>
                  <Check size={12} /> Before alert
                </span>
              </div>
              <div className="human-review">
                <span className="review-icon">↳</span>
                <p>
                  Correlation is a lead, not proof.
                  <br />
                  <strong>Review the change before acting.</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="scene-status">
            <span>
              <span className="signal-dot" /> 2 changes in this example window
            </span>
            <span>
              Human review required <ArrowUpRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Index = () => (
  <div className="landing-page">
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <section className="hero section-shell" aria-labelledby="hero-heading">
        <div className="hero-kicker">
          <span className="signal-dot" /> CHANGE INTELLIGENCE FOR INCIDENT
          RESPONSE <span className="kicker-line" />
        </div>
        <div className="hero-heading-row">
          <h1 id="hero-heading">
            Production broke.
            <br />
            <span>What changed?</span>
          </h1>
          <div className="hero-side">
            <p>
              Your monitors tell you something is wrong. LastGood puts the
              changes that might explain it in one place.
            </p>
            <p className="hero-fine">
              A clearer starting point for your next investigation.
            </p>
          </div>
        </div>
        <div className="hero-actions">
          <a
            className="primary-link"
            href={CONSOLE_URL}
            onClick={() => trackEvent("click_access_beta", "hero", "Revamp")}
          >
            Start free beta <ArrowRight size={16} />
          </a>
          <a
            className="secondary-link"
            href={SANDBOX_URL}
            onClick={() =>
              trackEvent("click_explore_sandbox", "hero", "Revamp")
            }
          >
            Try the sandbox <ArrowUpRight size={16} />
          </a>
          <span className="action-note">No signup needed for the demo</span>
        </div>
        <ProductScene />
        <div className="hero-footnote">
          <span>
            YOUR OBSERVABILITY STACK, WITH THE CHANGE CONTEXT IT'S MISSING.
          </span>
          <span>
            GitHub webhooks <span className="separator">/</span> Custom REST
            ingestion
          </span>
        </div>
      </section>
      <section
        id="how-it-works"
        className="workflow section-shell"
        aria-labelledby="workflow-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">01 / THE WORKFLOW</span>
          <h2 id="workflow-heading">
            From alert to
            <br />a useful first lead.
          </h2>
          <p>
            Keep your monitoring. Add the missing context between a production
            symptom and a recent change.
          </p>
        </div>
        <div className="workflow-steps">
          <article>
            <span className="step-number">01</span>
            <GitBranch size={22} />
            <h3>Bring in the changes.</h3>
            <p>
              Connect GitHub webhooks or send events from your own tools through
              the REST API.
            </p>
            <span className="step-meta">DEPLOYS / COMMITS / CUSTOM EVENTS</span>
          </article>
          <article>
            <span className="step-number">02</span>
            <Activity size={22} />
            <h3>Rewind to the incident.</h3>
            <p>
              Choose a time, service and environment. Review the changes around
              the incident in a single timeline.
            </p>
            <span className="step-meta">TIME / SERVICE / ENVIRONMENT</span>
          </article>
          <article>
            <span className="step-number">03</span>
            <Terminal size={22} />
            <h3>Follow the evidence.</h3>
            <p>
              Inspect suspected contributors and their event details. Your team
              decides what to investigate or roll back.
            </p>
            <span className="step-meta">CONTEXT / EVIDENCE / HUMAN REVIEW</span>
          </article>
        </div>
      </section>
      <section
        className="principles section-shell"
        aria-labelledby="principles-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">02 / BUILT FOR THE INVESTIGATION</span>
          <h2 id="principles-heading">
            A timeline.
            <br />
            Not another firehose.
          </h2>
        </div>
        <div className="principle-list">
          <article>
            <span>01</span>
            <div>
              <h3>Context before conclusions.</h3>
              <p>
                Exact timestamps, commit links and event payloads give you
                something to inspect, not a black-box verdict.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Alongside your existing tools.</h3>
              <p>
                LastGood is a change-correlation layer, not a replacement for
                Datadog, PagerDuty or your logs.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Your team stays in control.</h3>
              <p>
                Use the diagnostic report as a starting point. Confirm the cause
                and review remediation before making production changes.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section
        id="integrations"
        className="integrations section-shell"
        aria-labelledby="integrations-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">03 / CONNECT YOUR CHANGE SIGNALS</span>
          <h2 id="integrations-heading">
            Start with what's live.
            <br />
            Build from there.
          </h2>
          <p>
            No mystery connector list. This is what you can use today, and what
            is still on the roadmap.
          </p>
        </div>
        <div className="integration-table">
          <div className="integration-row">
            <GitBranch size={21} />
            <div>
              <h3>GitHub</h3>
              <p>Webhook-based change ingestion</p>
            </div>
            <span className="live-status">
              <span className="signal-dot" /> LIVE
            </span>
          </div>
          <div className="integration-row">
            <Terminal size={21} />
            <div>
              <h3>Custom REST API</h3>
              <p>Send change events from your own tools</p>
            </div>
            <span className="live-status">
              <span className="signal-dot" /> LIVE
            </span>
          </div>
          <div className="roadmap-row">
            <span className="micro-label">COMING SOON</span>
            <p>
              Datadog <span>/</span> GitLab <span>/</span> Kubernetes{" "}
              <span>/</span> AWS CloudTrail
            </p>
            <small>
              Planned integrations. Not available in the beta today.
            </small>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="beta-section section-shell"
        aria-labelledby="beta-heading"
      >
        <div className="beta-box">
          <div>
            <span className="eyebrow">
              <span className="signal-dot" /> PUBLIC BETA
            </span>
            <h2 id="beta-heading">
              Your next incident deserves
              <br />a better starting point.
            </h2>
            <p>
              Free beta for up to 2 projects. Paid plans are not available yet.
            </p>
            <div className="beta-links">
              <a
                className="primary-link"
                href={CONSOLE_URL}
                onClick={() =>
                  trackEvent("click_access_beta", "pricing", "Revamp")
                }
              >
                Start free beta <ArrowRight size={16} />
              </a>
              <a className="secondary-link" href={SANDBOX_URL}>
                Explore the demo <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="beta-aside">
            <span className="micro-label">A NOTE ON THE BETA</span>
            <p>
              We're building in the open. Expect the product to evolve, and tell
              us where the workflow needs to be better.
            </p>
            <a href="mailto:hello@lastgood.space">
              Talk to us <ArrowUpRight size={14} />
            </a>
            <small>
              No SOC 2 certification claimed. Contact us to discuss security
              requirements before connecting sensitive production data.
            </small>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Index;
