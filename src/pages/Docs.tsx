import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Navbar, { CONSOLE_URL } from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import "@/components/landing/landing.css";

const API = "https://api.lastgood.space";

const sections = [
  ["overview", "Overview"],
  ["github-app", "GitHub App"],
  ["rest", "REST API"],
  ["recipes", "Recipes"],
  ["alerts", "Alert sources"],
  ["slack", "Slack"],
  ["cloudtrail", "AWS CloudTrail"],
  ["troubleshooting", "Troubleshooting"],
] as const;

const Code = ({ children, label }: { children: string; label?: string }) => (
  <figure className="doc-code">
    {label && <figcaption>{label}</figcaption>}
    <pre>
      <code>{children}</code>
    </pre>
  </figure>
);

const quickTest = `curl -X POST ${API}/api/change-events \\
  -H "Authorization: Bearer $LASTGOOD_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "summary": "Deployed payments @ 7f3a91c",
    "service": "payments",
    "environment": "prod",
    "type": "deployment",
    "source": "curl",
    "occurred_at": "'"$(date -u +%Y-%m-%dT%H:%M:%S.000Z)"'",
    "meta": { "author": "you@example.com" }
  }'`;

const actions = `- name: Report deploy to LastGood
  if: success()
  continue-on-error: true
  env:
    LASTGOOD_API_KEY: \${{ secrets.LASTGOOD_API_KEY }}
  run: |
    curl -sS --fail-with-body -X POST ${API}/api/change-events \\
      -H "Authorization: Bearer $LASTGOOD_API_KEY" \\
      -H "Content-Type: application/json" \\
      -d "$(jq -n \\
        --arg summary "Deployed \${GITHUB_REPOSITORY} @ \${GITHUB_SHA::7}" \\
        --arg author "\${GITHUB_ACTOR}" \\
        --arg now "$(date -u +%Y-%m-%dT%H:%M:%S.000Z)" \\
        '{summary:$summary, service:"payments", environment:"prod",
          type:"deployment", source:"GitHub Actions", occurred_at:$now,
          meta:{author:$author}}')"`;

const alertGeneric = `curl -X POST ${API}/api/webhooks/alerts/generic \\
  -H "Authorization: Bearer $LASTGOOD_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "id": "alert-123",
    "title": "HighErrorRate",
    "service": "payments-api",
    "environment": "prod",
    "severity": "sev2",
    "status": "triggered"
  }'`;

const datadog = `{"id":"$ALERT_ID","event_id":"$ID","title":"$EVENT_TITLE","transition":"$ALERT_TRANSITION","priority":"$ALERT_PRIORITY","tags":"$TAGS","last_updated":"$LAST_UPDATED","url":"$LINK"}`;

const Docs = () => {
  useEffect(() => {
    document.title = "Docs | LastGood";
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
          <span className="eyebrow">DOCS / INTEGRATE</span>
          <h1>Send changes and alerts to LastGood</h1>

          <section id="overview">
            <h2>Overview</h2>
            <p>
              LastGood needs two kinds of input. <strong>Change sources</strong>{" "}
              tell it what changed: deploys, migrations, feature flags, config
              edits. <strong>Alert sources</strong> tell it when something broke,
              so it can open an incident and rank recent changes against it.
              Slack is where the result goes. Your alerting tools keep paging
              your team; LastGood never pages anyone.
            </p>
            <div className="doc-table-wrap">
              <table>
                <thead>
                  <tr><th>Path</th><th>Direction</th><th>Use it for</th></tr>
                </thead>
                <tbody>
                  <tr><td><a href="#github-app">GitHub App</a></td><td>Changes in</td><td>Pushes, deployments, workflow runs. No code.</td></tr>
                  <tr><td><a href="#rest">REST API</a></td><td>Changes in</td><td>Anything else: CI, scripts, migrations, flags, Terraform.</td></tr>
                  <tr><td><a href="#alerts">Generic alert webhook</a></td><td>Alerts in</td><td>Any monitor that can send an HTTP request.</td></tr>
                  <tr><td><a href="#alerts">Datadog webhook</a></td><td>Alerts in</td><td>Datadog monitors.</td></tr>
                  <tr><td><a href="#slack">Slack</a></td><td>Results out</td><td>One message per incident with ranked suspects.</td></tr>
                  <tr><td><a href="#cloudtrail">AWS CloudTrail</a></td><td>Changes in</td><td>AWS changes, through EventBridge and the REST API.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="github-app">
            <h2>GitHub App</h2>
            <p>
              The quickest way in. Install the LastGood GitHub App from
              Ingestion Channels in the console and choose your repositories.
              LastGood reads <code>push</code>, <code>deployment</code>,{" "}
              <code>deployment_status</code> and <code>workflow_run</code>{" "}
              events. Other GitHub events are ignored.
            </p>
          </section>

          <section id="rest">
            <h2>REST API (change events)</h2>
            <p>
              Create an API key in the console, store it
              as a secret, and send one POST whenever something changes.
            </p>
            <Code label="POST /api/change-events">{`POST ${API}/api/change-events
Authorization: Bearer <YOUR_API_KEY>
Content-Type: application/json`}</Code>
            <div className="doc-table-wrap">
              <table>
                <thead>
                  <tr><th>Field</th><th>Required</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  <tr><td><code>summary</code></td><td>yes</td><td>One line a human reads during an incident.</td></tr>
                  <tr><td><code>service</code></td><td>yes</td><td>The service the change affects, e.g. <code>payments</code>.</td></tr>
                  <tr><td><code>environment</code></td><td>yes</td><td>e.g. <code>prod</code>, <code>staging</code>.</td></tr>
                  <tr><td><code>type</code></td><td>yes</td><td>Scored types: <code>deployment</code>, <code>migration</code>, <code>config-change</code>, <code>infrastructure</code>, <code>rollback</code>, <code>hotfix</code>, <code>feature-flag</code>, <code>scaling</code>, <code>maintenance</code>. Other values are stored with a flat default score.</td></tr>
                  <tr><td><code>source</code></td><td>yes</td><td>The tool that reported it, e.g. <code>GitHub Actions</code>.</td></tr>
                  <tr><td><code>occurred_at</code></td><td>yes</td><td>ISO 8601 time of the real change.</td></tr>
                  <tr><td><code>meta</code></td><td>no</td><td>Free-form JSON: author, commit, run URL, flag key.</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Keys belong to one organization and can be restricted to one
              service. Use the same <code>service</code> and{" "}
              <code>environment</code> strings every time: <code>payments</code>{" "}
              and <code>Payments</code> are different services.
            </p>
            <Code label="Quick test">{quickTest}</Code>
            <p>A <code>201</code> response means the event is stored and shows up in Events.</p>
          </section>

          <section id="recipes">
            <h2>Recipes</h2>
            <h3>CI/CD (GitHub Actions, GitLab CI, Jenkins, anything that runs a command)</h3>
            <p>
              Add a step after your deploy that runs the curl call. Make it fail
              soft so a notification problem never fails a deploy.
            </p>
            <Code label="GitHub Actions">{actions}</Code>
            <h3>Database migrations</h3>
            <p>
              Run the same call at the end of your migration job with{" "}
              <code>type</code> set to <code>migration</code>.
            </p>
            <h3>Feature flags (LaunchDarkly and others)</h3>
            <p>
              Flag tools send their own webhook body, which cannot be reshaped.
              Point the webhook at a small relay (a serverless function) that
              calls the REST API with <code>type</code> set to{" "}
              <code>feature-flag</code>.
            </p>
            <h3>Terraform and infrastructure</h3>
            <p>
              Call the API from the pipeline step after <code>apply</code> with{" "}
              <code>type</code> set to <code>infrastructure</code>, or relay an
              HCP Terraform notification the same way as flags.
            </p>
          </section>

          <section id="alerts">
            <h2>Alert sources</h2>
            <p>
              Alerts open, update and close incidents. Use the same API key as
              the REST API. Alerts with the same service, environment and title
              within 30 minutes join one incident, a more severe alert raises its
              severity, and a resolve closes it.
            </p>
            <h3>Generic webhook</h3>
            <Code label="POST /api/webhooks/alerts/generic">{alertGeneric}</Code>
            <p>
              Send the same payload with <code>"status": "resolved"</code> when
              the alert recovers. Required: <code>title</code> and{" "}
              <code>service</code>. Optional: <code>id</code>,{" "}
              <code>environment</code> (default <code>prod</code>),{" "}
              <code>severity</code> (<code>sev1</code> to <code>sev4</code>,
              default <code>sev3</code>), <code>status</code>,{" "}
              <code>occurred_at</code>, <code>url</code>. The response is{" "}
              <code>202</code>.
            </p>
            <h3>Datadog</h3>
            <p>
              In Datadog, add a webhook named <code>lastgood</code> with the URL{" "}
              <code>{API}/api/webhooks/alerts/datadog</code> and the custom
              header <code>{`{"Authorization": "Bearer <KEY>"}`}</code>. Add{" "}
              <code>@webhook-lastgood</code> to the monitor message and tag the
              monitor with <code>service:&lt;name&gt;</code> and{" "}
              <code>env:&lt;name&gt;</code>.
            </p>
            <Code label="Datadog webhook payload">{datadog}</Code>
          </section>

          <section id="slack">
            <h2>Slack</h2>
            <p>
              Slack is a destination, not a source. Connect it from the
              Notifications page in the console. LastGood posts one message per
              incident and edits it in place as the incident changes. The
              message shows the top three suspect changes and a Rewind link that
              opens the incident window for that service and environment.
            </p>
            <p>
              Noise controls: minimum severity (default <code>sev2</code>),
              production only by default, and at most 5 new threads per 10
              minutes.
            </p>
          </section>

          <section id="cloudtrail">
            <h2>AWS CloudTrail</h2>
            <p>
              There is no one-click CloudTrail connector yet. It works today by
              routing selected CloudTrail events through an Amazon EventBridge
              rule to a small function that calls the REST API with{" "}
              <code>type</code> set to <code>infrastructure</code>.
            </p>
          </section>

          <section id="troubleshooting">
            <h2>Troubleshooting</h2>
            <div className="doc-table-wrap">
              <table>
                <thead><tr><th>Status</th><th>Meaning</th></tr></thead>
                <tbody>
                  <tr><td><code>400</code></td><td>A required field is missing, or <code>occurred_at</code> is not a valid date.</td></tr>
                  <tr><td><code>401</code></td><td>Missing, invalid or revoked API key.</td></tr>
                  <tr><td><code>403</code></td><td>Key is restricted to another service, or the plan's service limit is reached.</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Send the event when the change finishes, with the real{" "}
              <code>occurred_at</code>. Correlation depends on that timestamp.
            </p>
          </section>

          <div className="docs-cta">
            <a className="primary-link" href={CONSOLE_URL}>
              Open console <ArrowUpRight size={16} />
            </a>
            <a className="secondary-link" href="mailto:hello@lastgood.space">
              Stuck? Email us
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default Docs;
