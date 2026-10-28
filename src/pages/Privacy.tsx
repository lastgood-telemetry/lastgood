import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import "@/components/landing/landing.css";

const sections = [
  ["collect", "What we collect"],
  ["use", "How we use it"],
  ["providers", "Service providers"],
  ["analytics", "Website analytics and chat"],
  ["retention", "Retention and deletion"],
  ["rights", "Your choices"],
  ["changes", "Changes"],
  ["contact", "Contact"],
] as const;

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy policy | LastGood";
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
          <span className="eyebrow">LEGAL / PRIVACY POLICY</span>
          <h1>Privacy policy</h1>
          <p>
            <strong>Last updated:</strong> October 28, 2026
          </p>
          <p>
            This policy explains what personal data LastGood handles when you
            use the website, console, API and GitHub App (the "Service"). For
            the exact fields we receive from GitHub and what we never read, see{" "}
            <a href="/access">What LastGood accesses</a>. Use of the Service is
            also covered by the <a href="/terms">Terms of service</a>.
          </p>

          <section id="collect">
            <h2>What we collect</h2>
            <ul>
              <li>
                <strong>Account data.</strong> Your name and email address, and
                your sign-in method (GitHub, Google, or email and password).
                Passwords are stored hashed, not in plain text.
              </li>
              <li>
                <strong>Change data from your integrations.</strong> From the
                GitHub App, for the repositories you choose: commit messages,
                author and pusher names, branch names, file paths (not file
                contents), and workflow run and deployment details. From the
                REST API and alert webhooks: the fields you send. From Slack, if
                you connect it: permission to post to the channel you pick.
              </li>
              <li>
                <strong>Content LastGood builds.</strong> Incidents, alerts,
                rankings, summaries and postmortems created from the data
                above.
              </li>
              <li>
                <strong>Messages you send us.</strong> Chat messages and emails
                to support.
              </li>
              <li>
                <strong>Usage data.</strong> Pages viewed and clicks on the
                website and console, collected by our analytics tool.
              </li>
            </ul>
            <p>
              Commit messages and author names can contain personal data. Do
              not put secrets or sensitive personal data in commit messages or
              in events you send through the API.
            </p>
          </section>

          <section id="use">
            <h2>How we use it</h2>
            <ul>
              <li>To run the Service: store events, rank changes during an incident, show them in the console and send Slack notifications.</li>
              <li>To sign you in, send sign-in links and invitations, and answer support requests.</li>
              <li>To understand how the product is used and to fix problems.</li>
            </ul>
            <p>We do not sell your data.</p>
          </section>

          <section id="providers">
            <h2>Service providers</h2>
            <p>
              We use other companies to run the Service. They process data on
              our behalf:
            </p>
            <ul>
              <li>Amazon Web Services: hosting and database for the API.</li>
              <li>Vercel: hosting for the website and console.</li>
              <li>Resend: transactional email such as sign-in links and invitations.</li>
              <li>
                AI model providers (currently Groq and Google Gemini): they
                receive parts of an incident, such as change summaries
                (which can include commit messages) and alert titles, to write
                summaries. We do not request file contents from GitHub, so we
                do not send them.
              </li>
              <li>PostHog: product analytics.</li>
              <li>Crisp: website chat and support.</li>
              <li>Zoho: our business email.</li>
            </ul>
            <p>
              GitHub, Google and Slack handle your data under their own
              policies when you sign in with them or connect them.
            </p>
          </section>

          <section id="analytics">
            <h2>Website analytics and chat</h2>
            <p>
              The website and console use PostHog to record page views and
              clicks, and the chat widget from Crisp. Both can set cookies or
              use local storage in your browser. You can block them with your
              browser settings or a content blocker. The Service still works,
              and the chat widget will not load.
            </p>
          </section>

          <section id="retention">
            <h2>Retention and deletion</h2>
            <ul>
              <li>
                Change events on the free plan are deleted automatically after
                about 2 days, by a job that runs hourly.
              </li>
              <li>
                Other data, such as account details, incidents, alerts,
                summaries and postmortems, is kept while your organization's
                account is active.
              </li>
              <li>
                To ask for deletion of your data, email{" "}
                <a href="mailto:hello@lastgood.space">hello@lastgood.space</a>.
                We review each request. Because data belongs to an
                organization, deleting an organization removes its events,
                incidents, postmortems, summaries, services and member
                accounts, so we confirm with the organization's admin before
                we do that.
              </li>
              <li>
                This policy does not specify a backup retention period. Deleted
                data can remain in backups until they are overwritten.
              </li>
            </ul>
          </section>

          <section id="rights">
            <h2>Your choices</h2>
            <ul>
              <li>Choose which repositories the GitHub App can see, and change it any time in your GitHub settings.</li>
              <li>Uninstall the GitHub App to stop all GitHub events.</li>
              <li>Ask us to access, correct or delete the personal data we hold about you by emailing us. We will reply to genuine requests.</li>
            </ul>
          </section>

          <section id="changes">
            <h2>Changes</h2>
            <p>
              We may update this policy. We will change the date above, and for
              material changes we will notify you by email or in the console.
            </p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>
              Privacy questions and requests:{" "}
              <a href="mailto:hello@lastgood.space">hello@lastgood.space</a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
