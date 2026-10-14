import RewindIllustration from "@/components/landing/RewindIllustration";
import SignalFlow from "@/components/landing/SignalFlow";
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
import ChatLink from "@/components/landing/ChatLink";
import { trackEvent } from "@/util/analytics";
import "@/components/landing/landing.css";

const integrations = [
  { icon: GitBranch, name: "GitHub App", desc: "Pushes, deployments and workflow runs", status: "LIVE" },
  { icon: Terminal, name: "Custom REST API", desc: "Deploys, migrations, feature flags and config changes from any tool", status: "LIVE" },
  { icon: Bell, name: "Alert webhooks", desc: "Datadog and a generic webhook open and close incidents", status: "LIVE" },
  { icon: MessageSquare, name: "Slack", desc: "Suspect changes in the incident thread, with a Rewind link", status: "LIVE" },
];

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
            href={SANDBOX_URL}
            onClick={() =>
              trackEvent("click_explore_sandbox", "hero", "Revamp")
            }
          >
            Try the sandbox <ArrowRight size={16} />
          </a>
          <a
            className="secondary-link"
            href={CONSOLE_URL}
            onClick={() => trackEvent("click_access_beta", "hero", "Revamp")}
          >
            Start free beta <ArrowUpRight size={16} />
          </a>
          <span className="action-note">
            No signup for the sandbox. <a href="/docs">Read the integration docs</a>
          </span>
        </div>
        <figure className="hero-shot hero-flow">
          <SignalFlow />
          <span className="hero-shot-caption">
            <span>HOW IT WORKS · EXAMPLE INCIDENT, SAMPLE DATA</span>
          </span>
        </figure>
      </section>
      <section
        id="how-it-thinks"
        className="thinking section-shell"
        aria-labelledby="thinking-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">01 / HOW LASTGOOD THINKS</span>
          <h2 id="thinking-heading">
            Not every change
            <br />
            deserves your attention.
          </h2>
          <p>
            The ranking comes from a small set of rules you can read and argue
            with. Here is what the engine asks about every change.
          </p>
        </div>
        <div className="think-grid">
          <article>
            <span className="step-number">Q1</span>
            <h3>What kind of change is it?</h3>
            <p>
              A migration, a hotfix, an infra change, a config edit, a deploy
              and a flag flip carry different risk. So do the files touched.
            </p>
            <div className="mini mini-tags" aria-hidden="true">
              <span className="hot">migration</span>
              <span>config</span>
              <span>deploy</span>
              <span className="off">docs</span>
            </div>
          </article>
          <article>
            <span className="step-number">Q2</span>
            <h3>How much does this service matter?</h3>
            <p>
              Criticality is something you set per service, not a guess from its
              name. Map dependencies and a change upstream gets weight too. No
              map? It still works.
            </p>
            <div className="mini mini-graph" aria-hidden="true">
              <span>web</span><i /><span className="hot">api</span><i /><span>db</span>
            </div>
          </article>
          <article>
            <span className="step-number">Q3</span>
            <h3>Is it still a live suspect?</h3>
            <p>
              Risk fades with time, slower for risky changes. A migration can
              stay a suspect for up to 48 hours. A low-risk change drops away
              fast.
            </p>
            <div className="mini mini-decay" aria-hidden="true">
              <div><b className="long" /><em>migration</em></div>
              <div><b className="short" /><em>deploy</em></div>
            </div>
          </article>
          <article>
            <span className="step-number">Q4</span>
            <h3>Did it happen where the incident is?</h3>
            <p>
              Production counts in full. Staging and dev count for less. Changes
              are matched to the incident's service and environment.
            </p>
            <div className="mini mini-env" aria-hidden="true">
              <div><b style={{ width: "100%" }} /><em>prod</em></div>
              <div><b style={{ width: "50%" }} /><em>staging</em></div>
              <div><b style={{ width: "15%" }} /><em>dev</em></div>
            </div>
          </article>
        </div>
        <div className="think-example">
          <div className="think-example-head">
            <span className="micro-label">SAME INCIDENT, TWO VERY DIFFERENT CHANGES</span>
          </div>
          <div className="think-example-rows">
            <div className="think-row think-row-out">
              <span className="think-verdict">RULED OUT</span>
              <div>
                <strong>README.md edited, 3 min before</strong>
                <p>Docs-only. Very recent, but it cannot break production. It is listed as ruled out, not silently hidden.</p>
              </div>
            </div>
            <div className="think-row think-row-in">
              <span className="think-verdict">STILL A SUSPECT</span>
              <div>
                <strong>Migration deployed, 31 h before</strong>
                <p>Old, but schema changes fail late. It stays on the list with the reason: touches migration files.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="think-foot">
          <div>
            <h3>Every rank comes with a reason.</h3>
            <p>
              Reasons are written in plain language, so the on-call engineer can
              check them in seconds. An AI model writes the summary from the
              result. It never changes the ranking.
            </p>
          </div>
          <div>
            <h3>Suspects, not a verdict.</h3>
            <p>
              LastGood tells you which change to look at first. It does not
              prove causation and it does not roll anything back. Your team
              confirms the cause and decides the fix.
            </p>
          </div>
        </div>
      </section>
      <section className="cta-strip section-shell" aria-labelledby="cta-heading">
        <h2 id="cta-heading">See the ranking for yourself.</h2>
        <div>
          <p>
            The sandbox needs no signup and uses fixed sample data. The console
            behind login runs the engine on your own changes.
          </p>
          <div className="beta-links">
            <a
              className="primary-link"
              href={SANDBOX_URL}
              onClick={() => trackEvent("click_explore_sandbox", "after_thinking", "Revamp")}
            >
              Try the sandbox <ArrowRight size={16} />
            </a>
            <a
              className="secondary-link"
              href={CONSOLE_URL}
              onClick={() => trackEvent("click_access_beta", "after_thinking", "Revamp")}
            >
              Start free beta <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section
        id="integrations"
        className="integrations section-shell"
        aria-labelledby="integrations-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">02 / CONNECT YOUR CHANGE SIGNALS</span>
          <h2 id="integrations-heading">
            Changes in.
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
        id="result"
        className="result section-shell"
        aria-labelledby="result-heading"
      >
        <div className="section-heading">
          <span className="eyebrow">03 / THE RESULT</span>
          <h2 id="result-heading">
            Open Rewind. The
            <br />
            ranking is already there.
          </h2>
          <p>
            Pick the incident time, service and environment. Rewind shows the
            ranked suspects with their reasons, and the evidence behind each one.
          </p>
        </div>
        <figure className="hero-shot result-shot">
          <RewindIllustration />
          <span className="hero-shot-caption">
            <span>SIMPLIFIED VIEW OF THE CONSOLE · SAMPLE DATA</span>
          </span>
        </figure>
      </section>
      <section
        id="slack"
        className="slack-section section-shell"
        aria-labelledby="slack-heading"
      >
        <div className="slack-layout">
          <div className="slack-story">
            <span className="eyebrow">
              04 / SLACK <span className="slack-soon">Live</span>
            </span>
            <h2 id="slack-heading" className="slack-title">
              You already have alerting.
              <br />Get the change context.
            </h2>
            <h3>Not another alert bot.</h3>
            <p>
              Datadog, PagerDuty or Grafana raises the alarm. LastGood puts
              recent deploys and feature-flag flips in one ranked list, so your
              team has a lead before the log-diving starts. Your team reviews
              the evidence and decides on a rollback. Nothing changes in
              production automatically.
            </p>
          </div>
          <figure className="slack-preview" aria-label="Example Slack suspect card">
            <div className="slack-channel"><span># incident-checkout</span><span>EXAMPLE DATA</span></div>
            <div className="slack-message">
              <div className="slack-author"><span className="slack-avatar" aria-hidden="true">↳</span><strong>LastGood</strong><span className="slack-app">APP</span><time>02:14</time></div>
              <div className="slack-card">
                <span className="micro-label">CHANGE CONTEXT / CHECKOUT-API · PRODUCTION</span>
                <h3>HighErrorRate on checkout-api</h3>
                <p className="slack-card-intro">You have the alert. Here are the changes worth checking.</p>
                <ol className="slack-suspects" aria-label="Ranked suspect changes">
                  <li><span>1</span><div><strong>deploy <code>checkout-api@2f3a1c</code></strong><small>4 min ago · same service &amp; environment</small></div></li>
                  <li><span>2</span><div><strong>flag <code>checkout-v2</code> flipped on</strong><small>22 min ago · production</small></div></li>
                  <li><span>3</span><div><strong>config <code>redis-cache</code> changed</strong><small>1 h 30 min ago · upstream service</small></div></li>
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
              Free beta for up to 2 services. Paid plans are not available yet.
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
                Try the sandbox <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="beta-aside">
            <span className="micro-label">A NOTE ON THE BETA</span>
            <p>
              We're building in the open. Expect the product to evolve, and tell
              us where the workflow needs to be better.
            </p>
            <ChatLink>
              Chat with us
            </ChatLink>
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
