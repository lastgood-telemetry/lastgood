import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import "@/components/landing/landing.css";

const sections = [
  ["service", "The service"],
  ["beta", "Beta status"],
  ["accounts", "Accounts and keys"],
  ["data", "Your data"],
  ["ai", "AI-generated summaries"],
  ["use", "Acceptable use"],
  ["plans", "Plans and billing"],
  ["liability", "Disclaimers and liability"],
  ["termination", "Suspension and termination"],
  ["changes", "Changes"],
  ["contact", "Contact"],
] as const;

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of service | LastGood";
  }, []);
  return (
    <div className="landing-page docs-page">
      <Navbar />
      <main id="main" className="docs-shell section-shell">
        <aside className="docs-toc" aria-label="On this page">
          <span className="micro-label">ON THIS PAGE</span>
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </aside>
        <article className="docs-body">
          <span className="eyebrow">LEGAL / TERMS OF SERVICE</span>
          <h1>Terms of service</h1>
          <p>
            <strong>Last updated:</strong> October 13, 2026
          </p>
          <p>
            These terms cover your use of the LastGood website, console, API and
            integrations (the "Service"). LastGood is in public beta. By using
            the Service you agree to these terms. If you use it for a company,
            you confirm you can agree on the company's behalf.
          </p>

          <section id="service">
            <h2>1. The service</h2>
            <p>
              LastGood is a change-correlation tool for incident response. It
              receives change events (such as deployments, migrations and
              feature-flag changes) and alerts from the tools you connect, and
              ranks recent changes as likely suspects for an incident. It can
              post a summary to Slack. It does not monitor your systems, page
              anyone, or make changes to your production systems.
            </p>
          </section>

          <section id="beta">
            <h2>2. Beta status</h2>
            <ul>
              <li>The Service is provided "as is" and "as available". It is a beta and can have bugs and downtime.</li>
              <li>There is no uptime commitment or support commitment during the beta.</li>
              <li>Features, limits and pricing can change. We can pause or remove features. We will try to give notice of changes that affect you, but we may not be able to.</li>
              <li>Do not rely on LastGood as your only way to find the cause of an incident. Its ranking is a heuristic. It points to changes worth checking and does not prove cause.</li>
            </ul>
          </section>

          <section id="accounts">
            <h2>3. Accounts and keys</h2>
            <ul>
              <li>You can sign in with GitHub or Google. You are responsible for activity under your account.</li>
              <li>API keys and connected integrations (for example the GitHub App or Slack) are yours to protect. Store keys in a secret manager, not in code. Tell us if you think a key leaked and revoke it in the console.</li>
              <li>Plans have limits, such as the number of services. We can limit or pause use that goes beyond reasonable levels or harms the Service.</li>
            </ul>
          </section>

          <section id="data">
            <h2>4. Your data</h2>
            <ul>
              <li>You keep ownership of the data you send us, such as change events, alert details and the metadata we read through your integrations ("your data").</li>
              <li>You give LastGood permission to store and process your data to run the Service for you, including ranking changes, showing them in the console and sending Slack notifications.</li>
              <li>Send only what is needed. Do not send passwords, secrets, payment card data, health data or other sensitive personal data in change events or alert payloads.</li>
              <li>You can ask us to delete your account data by emailing us. Deletion timing and backup retention are still being finalized during the beta.</li>
              <li>We do not sell your data.</li>
            </ul>
          </section>

          <section id="ai">
            <h2>5. AI-generated summaries</h2>
            <p>
              Some summaries and triage text are generated with the help of
              third-party AI model providers. Parts of your incident context,
              such as change summaries and alert titles, may be sent to those
              providers to produce the text. AI output can be wrong. Treat it as
              a hypothesis and check it against your own evidence before you act.
            </p>
          </section>

          <section id="use">
            <h2>6. Acceptable use</h2>
            <p>Do not use the Service to:</p>
            <ul>
              <li>break the law or violate someone else's rights;</li>
              <li>try to access another customer's data, or probe, overload or disrupt the Service;</li>
              <li>reverse engineer the Service or resell access without our written permission;</li>
              <li>send data you have no right to send.</li>
            </ul>
          </section>

          <section id="plans">
            <h2>7. Plans and billing</h2>
            <p>
              The beta is free for up to 2 services. If we introduce paid plans,
              we will tell you the price and terms before you are charged, and
              you will not be charged unless you choose a paid plan.
            </p>
          </section>

          <section id="liability">
            <h2>8. Disclaimers and liability</h2>
            <ul>
              <li>To the extent allowed by law, the Service comes without warranties of any kind, express or implied.</li>
              <li>We do not guarantee that LastGood will find the cause of an incident, prevent an outage, or be free of errors.</li>
              <li>To the extent allowed by law, LastGood is not liable for indirect or consequential losses, such as lost profit, lost data or downtime. Our total liability for any claim is limited to the amount you paid us for the Service in the 12 months before the claim, which is zero during the free beta.</li>
            </ul>
          </section>

          <section id="termination">
            <h2>9. Suspension and termination</h2>
            <p>
              You can stop using the Service and delete your account at any time.
              We can suspend or end access if you break these terms or put the
              Service or other users at risk. We may end the beta or the Service
              and will try to give notice first.
            </p>
          </section>

          <section id="changes">
            <h2>10. Changes</h2>
            <p>
              We may update these terms. We will change the date above, and for
              material changes we will notify you by email or in the console.
              Using the Service after a change means you accept the new terms.
            </p>
          </section>

          <section id="contact">
            <h2>11. Contact</h2>
            <p>
              Questions about these terms, or requests to delete your data:{" "}
              <a href="mailto:hello@lastgood.space">hello@lastgood.space</a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
