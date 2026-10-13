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
  Bell,
  MessageSquare,
} from "lucide-react";
import Navbar, { CONSOLE_URL, SANDBOX_URL } from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { trackEvent } from "@/util/analytics";
import "@/components/landing/landing.css";

const shots = [
  {
    src: "/screens/rewind.png",
    alt: "LastGood Rewind view in the sandbox showing a checkout-service incident with ranked changes and an AI triage summary",
    title: "Rewind",
    caption: "Ranked changes before the incident, with an AI triage summary. Risk ranks investigation order, not causation.",
    wide: true,
  },
  {
    src: "/screens/events.png",
    alt: "LastGood Events feed in the sandbox listing GitHub, Kubernetes and LaunchDarkly changes",
    title: "Events",
    caption: "Every change from every source in one feed, each with a score rationale.",
  },
  {
    src: "/screens/channels.png",
    alt: "LastGood Ingestion Channels page showing GitHub App and Custom REST API",
    title: "Ingestion Channels",
    caption: "Connect the GitHub App or send events from your own tools.",
  },
];

const integrations = [
  { icon: GitBranch, name: "GitHub App", desc: "Pushes, deployments and workflow runs", status: "LIVE" },
  { icon: Terminal, name: "Custom REST API", desc: "Deploys, migrations, feature flags and config changes from any tool", status: "LIVE" },
  { icon: Bell, name: "Alert webhooks", desc: "Datadog and a generic webhook open and close incidents", status: "LIVE" },
  { icon: MessageSquare, name: "Slack", desc: "Suspect changes in the incident thread, with a Rewind link", status: "LIVE" },
];

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
              No stack crawl, no credits, no agent. Just what changed, in Slack, in seconds.
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
            GitHub <span className="separator">/</span> REST <span className="separator">/</span> Datadog <span className="separator">/</span> Slack
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
        id="product"
        className="shots section-shell"
        aria-labelledby="shots-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">03 / THE PRODUCT</span>
          <h2 id="shots-heading">
            This is the console.
            <br />
            Not a mockup.
          </h2>
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
            onClick={() => trackEvent("click_explore_sandbox", "screenshots", "Revamp")}
          >
            Try the sandbox <ArrowUpRight size={16} />
          </a>
          <span className="action-note">Sample data. No signup needed.</span>
        </div>
      </section>
      <section
        id="slack"
        className="slack-section section-shell"
        aria-labelledby="slack-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">
            SLACK <span className="slack-soon">Live</span>
          </span>
          <h2 id="slack-heading">
            You already have alerting.
            <br />Get the change context.
          </h2>
          <p>
            At 2 AM, you don't need another bot telling you production broke.
            LastGood posts likely suspects into Slack, one message per incident, edited in place as the incident changes.
          </p>
        </div>
        <div className="slack-layout">
          <div className="slack-story">
            <h3>Not another alert bot.</h3>
            <p>
              Datadog, PagerDuty or Grafana raises the alarm. LastGood's job is
              different: put recent deploys and feature-flag flips in one ranked
              list, so your team has a lead before the log-diving starts.
            </p>
            <ol className="slack-flow" aria-label="Slack investigation workflow">
              <li><span>01</span><div><strong>Your existing alert fires.</strong><p>Keep the tools that monitor and page your team.</p></div></li>
              <li><span>02</span><div><strong>Suspect changes land in Slack.</strong><p>One message per incident with the top 3 suspects, edited in place.</p></div></li>
              <li><span>03</span><div><strong>Open Rewind. Follow the evidence.</strong><p>The link opens Rewind for that incident time, service and environment.</p></div></li>
              <li><span>04</span><div><strong>Confirm the cause. Decide the fix.</strong><p>Your team reviews the evidence and rolls back if needed. No automatic production changes.</p></div></li>
            </ol>
          </div>
          <figure className="slack-preview" aria-label="Example Slack suspect card">
            <div className="slack-channel"><span># incident-api</span><span>EXAMPLE DATA</span></div>
            <div className="slack-message">
              <div className="slack-author"><span className="slack-avatar" aria-hidden="true">↳</span><strong>LastGood</strong><span className="slack-app">APP</span><time>02:14</time></div>
              <div className="slack-card">
                <span className="micro-label">CHANGE CONTEXT / API · PRODUCTION</span>
                <h3>HighErrorRate on api</h3>
                <p className="slack-card-intro">You have the alert. Here are the changes worth checking.</p>
                <ol className="slack-suspects" aria-label="Ranked suspect changes">
                  <li><span>1</span><div><strong>deploy <code>api@2f3a1c</code></strong><small>14 min ago · same service &amp; environment</small></div></li>
                  <li><span>2</span><div><strong>flag <code>checkout-v2</code> flipped on</strong><small>22 min ago · production</small></div></li>
                  <li><span>3</span><div><strong>deploy <code>api@9b72e0</code></strong><small>38 min ago · same service &amp; environment</small></div></li>
                </ol>
                <div className="slack-rewind-preview"><span>Open incident in Rewind</span><ArrowUpRight size={16} aria-hidden="true" /></div>
                <p className="slack-card-note">Rewind link carries incident time, service and environment.</p>
                <div className="slack-review">Suspects, not a verdict. Confirm before you roll back.</div>
              </div>
            </div>
            <figcaption>Example data. Defaults: sev2 and above, production only, at most 5 new threads per 10 minutes. Configure it on the console Notifications page.</figcaption>
          </figure>
        </div>
      </section>
      <section
        id="integrations"
        className="integrations section-shell"
        aria-labelledby="integrations-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">04 / CONNECT YOUR CHANGE SIGNALS</span>
          <h2 id="integrations-heading">
            Changes in. Alerts in.
            <br />
            Suspects out.
          </h2>
          <p>
            Not another agent that needs read access to your whole stack. A GitHub App, one API key and one webhook is the whole setup. This is what works today. <a href="/docs">Read the docs</a>
          </p>
        </div>
        <div className="integration-table">
          {integrations.map(({ icon: Icon, name, desc, status }) => (
            <div className="integration-row" key={name}>
              <Icon size={21} />
              <div>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
              <span className="live-status">
                <span className="signal-dot" /> {status}
              </span>
            </div>
          ))}
          <div className="roadmap-row">
            <span className="micro-label">NOT YET</span>
            <p>
              One-click AWS CloudTrail <span>/</span> GitLab <span>/</span>{" "}
              Kubernetes
            </p>
            <small>
              Not available as native connectors. CloudTrail already works
              through EventBridge and the REST API, and GitLab CI can call the
              REST API.
            </small>
          </div>
        </div>
        <div className="integration-cta">
          <a className="secondary-link" href="/docs">
            Every way to integrate <ArrowRight size={16} />
          </a>
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
              <a className="secondary-link" href={CONSOLE_URL}>
                Sign in with GitHub <ArrowUpRight size={16} />
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
