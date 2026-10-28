import { useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import "@/components/landing/landing.css";

const sections = [
  ["reads", "What we receive"],
  ["never", "What we do not do"],
  ["stored", "What we store"],
  ["ai", "AI summaries"],
  ["control", "Your controls"],
] as const;

const Access = () => {
  useEffect(() => {
    document.title = "What LastGood accesses | LastGood";
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
          <span className="eyebrow">TRUST / ACCESS</span>
          <h1>What LastGood accesses</h1>
          <p>
            <strong>Last updated:</strong> October 28, 2026
          </p>
          <p>
            LastGood records what changed and ranks it when an incident
            starts. It does not need your source code, and it does not touch
            your production systems.
          </p>

          <section id="reads">
            <h2>What we receive</h2>
            <p>From the GitHub App, for the repositories you choose:</p>
            <ul>
              <li>
                Webhook events: <code>push</code>, <code>deployment</code>,{" "}
                <code>deployment_status</code> and <code>workflow_run</code>.
                Everything else is ignored.
              </li>
              <li>
                From each push: the commit message, author and pusher name,
                branch, commit and compare links, and the file paths that were
                added, changed or removed. Not the file contents.
              </li>
              <li>
                From each workflow run or deployment: the name, status,
                branch, commit id and author.
              </li>
              <li>
                When you install the app or add repositories, LastGood also
                fetches the last 30 days of finished workflow runs and
                deployments so your timeline is not empty on day one.
              </li>
            </ul>
            <p>
              From the REST API and alert webhooks: only the fields you send
              (see <a href="/docs">Docs</a>). From Slack, if you connect it:
              permission to post messages to the channel you pick.
            </p>
            <p>
              GitHub shows the exact permissions the app requests on its
              install screen. That screen is the source of truth for
              permissions. It lists "Contents: read" because GitHub requires
              that permission to send <code>push</code> and <code>release</code>{" "}
              events. LastGood uses it to receive those events. Its code does
              not call GitHub's contents or clone endpoints.
            </p>
          </section>

          <section id="never">
            <h2>What we do not do</h2>
            <ul>
              <li>We do not read or clone your source code.</li>
              <li>We do not read your database, logs or cloud accounts.</li>
              <li>
                We do not deploy, roll back or change anything in your
                production systems.
              </li>
              <li>We do not sell your data.</li>
            </ul>
          </section>

          <section id="stored">
            <h2>What we store</h2>
            <p>
              The events above, plus incidents, alerts and summaries LastGood
              builds from them. Commit messages and author names can contain
              personal data, so do not put secrets in commit messages or in
              events you send through the API. Each API key belongs to one
              organization and can be limited to one service.
            </p>
          </section>

          <section id="ai">
            <h2>AI summaries</h2>
            <p>
              Some summaries are written with third-party AI model providers.
              Parts of an incident, such as change summaries and alert titles,
              can be sent to them. File contents are not part of that. The
              events we use carry file paths, not file contents, and our code
              does not request file contents from GitHub.
            </p>
          </section>

          <section id="control">
            <h2>Your controls</h2>
            <ul>
              <li>
                Pick which repositories the GitHub App can see, and change it
                any time in your GitHub settings.
              </li>
              <li>Uninstall the app in GitHub to stop all GitHub events.</li>
              <li>
                Remove an API key from your CI secrets to stop that source. To
                have a key revoked on our side, email us.
              </li>
              <li>
                To delete your account data, email{" "}
                <a href="mailto:hello@lastgood.space">hello@lastgood.space</a>.
                See the <a href="/terms">Terms</a> for details.
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Access;
