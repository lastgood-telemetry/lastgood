import { useEffect, useRef } from "react";
import { Database, FileText, Flag, Rocket } from "lucide-react";

// The product's mental model: change signals in, a deterministic engine in the
// middle, ranked suspects out. Plain HTML and CSS so it stays crisp, themed and
// readable at any width. Sample data only; labels say how each source connects.
const sources = [
  { name: "GitHub", how: "GitHub App" },
  { name: "Jenkins, CI", how: "REST API" },
  { name: "Feature flags", how: "REST API" },
  { name: "Migrations", how: "REST API" },
];

const stages = [
  { n: "1", t: "Classify the change", d: "What kind of change, and which files it touched" },
  { n: "2", t: "Weigh the service", d: "Criticality you set, plus what depends on it" },
  { n: "3", t: "Decay with time", d: "Risky changes stay suspects longer than safe ones" },
  { n: "4", t: "Correlate", d: "Rank against the incident's time, service and environment" },
];

const suspects = [
  { rank: "1", t: "Deploy on checkout-api", d: "Touches migration files · 4 min before", hot: true },
  { rank: "2", t: "Flag checkout-v2 turned on", d: "Production · 22 min before", hot: false },
  { rank: "3", t: "Config change to redis cache", d: "Upstream of checkout-api · 1 h 30 min before", hot: false },
];

const chips = [
  { id: "deploy", row: 0, Icon: Rocket, label: "deploy api@2f3a1c", delay: 0 },
  { id: "readme", row: 0, Icon: FileText, label: "README.md", delay: 3.6, drop: true },
  { id: "ci", row: 1, Icon: Rocket, label: "deploy v1.4.2", delay: 2.5 },
  { id: "flag", row: 2, Icon: Flag, label: "checkout-v2 on", delay: 5 },
  { id: "migration", row: 3, Icon: Database, label: "migration 024", delay: 7.5 },
];

const SignalFlow = () => {
  const ref = useRef<HTMLDivElement>(null);
  // Pause the loop while the hero is off screen, so it costs nothing.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => {
      el.dataset.paused = entry.isIntersecting ? "false" : "true";
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
  <div ref={ref} className="sf" role="group" aria-label="How LastGood works: change signals from your tools go through the LastGood engine, which outputs a ranked list of suspect changes for an incident">
    <div className="sf-col sf-sources">
      <span className="sf-label">1 / CHANGE SIGNALS IN</span>
      <ul>
        {sources.map((s) => (
          <li key={s.name}>
            <strong>{s.name}</strong>
            <em>{s.how}</em>
          </li>
        ))}
      </ul>
      <div className="sf-alert">
        <span className="sf-label">INCIDENT TRIGGER</span>
        <strong>Alert from Datadog or a webhook</strong>
        <span>Sets the time, service and environment</span>
      </div>
    </div>
    <div className="sf-lane" aria-hidden="true">
      {[0, 1, 2, 3].map((r) => (
        <span key={r} className="sf-rail" style={{ ["--row" as string]: r }} />
      ))}
      {chips.map(({ id, row, Icon, label, delay, drop }) => (
        <span
          key={id}
          className={`sf-chip${drop ? " sf-chip-drop" : ""}`}
          style={{ ["--row" as string]: row, animationDelay: `${delay}s` }}
        >
          <Icon size={12} />
          {label}
        </span>
      ))}
    </div>
    <div className="sf-col sf-engine">
      <span className="sf-label">2 / THE LASTGOOD ENGINE</span>
      <ol>
        {stages.map((s) => (
          <li key={s.n} style={{ ["--k" as string]: Number(s.n) - 1 }}>
            <b>{s.n}</b>
            <div>
              <strong>{s.t}</strong>
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div className="sf-link" aria-hidden="true"><i /><i /><i /></div>
    <div className="sf-col sf-out">
      <div className="sf-outhead"><span className="sf-label">3 / SUSPECTS OUT</span><em className="sf-updated">re-ranked</em></div>
      <div className="sf-incident">Incident · checkout-api · production</div>
      <ol>
        {suspects.map((s) => (
          <li key={s.rank} className={s.hot ? "sf-hot" : ""} style={{ ["--k" as string]: Number(s.rank) - 1 }}>
            <b>{s.rank}</b>
            <div>
              <strong>{s.t}</strong>
              <span>{s.d}</span>
            </div>
          </li>
        ))}
      </ol>
      <div className="sf-ruled"><span>RULED OUT</span> README update · docs-only change</div>
    </div>
  </div>
  );
};

export default SignalFlow;
