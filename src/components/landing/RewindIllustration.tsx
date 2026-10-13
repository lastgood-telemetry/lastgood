// A simplified vector rendering of the console's Rewind view. Same structure
// and data story as the real product; detail is stripped. Colors come from
// the landing theme variables, so it follows light and dark mode.
const rows = [
  { rank: "#1", title: "Flag enabled: new-checkout-flow", meta: "launchdarkly · 5 min before", risk: 92, suspect: true },
  { rank: "#2", title: "Deployment: checkout-service v1.4.2", meta: "github · 15 min before", risk: 40, suspect: false },
  { rank: "#3", title: "Merge PR #412: update redis cache config", meta: "github · 1h 30m before", risk: 25, suspect: false },
];

const RewindIllustration = () => (
  <svg
    className="rw-ill"
    viewBox="0 0 1200 640"
    role="img"
    aria-label="Simplified view of LastGood Rewind: a timeline of recent changes before an incident, with three ranked changes and the top suspect highlighted"
  >
    <rect className="rw-frame" x="0.5" y="0.5" width="1199" height="639" rx="6" />

    {/* sidebar */}
    <line className="rw-line" x1="200" y1="0" x2="200" y2="640" />
    <path className="rw-mark" d="M24 22 l10 -8 v8 l-10 8z M34 22 l10 8 v-8 l-10 -8z" />
    <text className="rw-brand" x="54" y="29">LastGood</text>
    <rect className="rw-nav-active" x="12" y="62" width="176" height="34" rx="3" />
    <text className="rw-nav rw-nav-on" x="32" y="84">Rewind</text>
    <text className="rw-nav" x="32" y="122">Events</text>
    <text className="rw-nav" x="32" y="160">Services</text>
    <text className="rw-nav" x="32" y="198">Ingestion Channels</text>

    {/* top bar */}
    <line className="rw-line" x1="200" y1="48" x2="1200" y2="48" />
    <text className="rw-crumb" x="228" y="29">LastGood  /  Rewind</text>
    <rect className="rw-pill" x="1004" y="14" width="168" height="22" rx="3" />
    <text className="rw-pill-t" x="1088" y="29" textAnchor="middle">SAMPLE INCIDENT DATA</text>

    {/* heading and incident context */}
    <text className="rw-h" x="228" y="94">Rewind</text>
    <g className="rw-chips">
      {["checkout-service", "production", "2 hour window", "incident 10:42 UTC"].map((t, i) => {
        const x = 228 + [0, 168, 288, 424][i];
        const w = [150, 104, 118, 150][i];
        return (
          <g key={t}>
            <rect className="rw-chip" x={x} y="112" width={w} height="26" rx="3" />
            <text className="rw-chip-t" x={x + w / 2} y="129" textAnchor="middle">{t}</text>
          </g>
        );
      })}
    </g>

    {/* timeline */}
    <text className="rw-label" x="228" y="176">CHANGES BEFORE THE INCIDENT</text>
    <line className="rw-base" x1="228" y1="226" x2="1160" y2="226" />
    <line className="rw-draw" x1="228" y1="226" x2="1000" y2="226" pathLength="1" />
    {[340, 440, 560, 620, 700, 780, 860].map((x, i) => (
      <line key={x} className="rw-tick" x1={x} y1="220" x2={x} y2="232" style={{ animationDelay: `${0.3 + i * 0.1}s` }} />
    ))}
    <g className="rw-ev rw-ev-3" style={{ animationDelay: "0.9s" }}>
      <circle className="rw-dot" cx="420" cy="226" r="6" />
      <text className="rw-ev-t" x="420" y="254" textAnchor="middle">PR #412</text>
    </g>
    <g className="rw-ev rw-ev-2" style={{ animationDelay: "1.3s" }}>
      <circle className="rw-dot" cx="660" cy="226" r="6" />
      <text className="rw-ev-t" x="660" y="254" textAnchor="middle">deploy v1.4.2</text>
    </g>
    <g className="rw-ev rw-ev-1" style={{ animationDelay: "1.7s" }}>
      <circle className="rw-halo" cx="880" cy="226" r="14" />
      <circle className="rw-dot rw-dot-hot" cx="880" cy="226" r="8" />
      <text className="rw-ev-t rw-ev-hot" x="880" y="254" textAnchor="middle">flag on</text>
    </g>
    <g className="rw-ev" style={{ animationDelay: "2.1s" }}>
      <line className="rw-inc" x1="1000" y1="196" x2="1000" y2="240" />
      <path className="rw-inc-f" d="M1000 196 l14 0 l-6 6 l6 6 l-14 0z" />
      <text className="rw-ev-t rw-inc-t" x="1000" y="260" textAnchor="middle">incident</text>
    </g>

    {/* ranked changes */}
    <rect className="rw-card" x="228" y="284" width="500" height="328" rx="4" />
    <text className="rw-label" x="248" y="312">RANKED CHANGES IN WINDOW (3)</text>
    {rows.map((r, i) => {
      const y = 330 + i * 92;
      return (
        <g key={r.rank} className={r.suspect ? "rw-row rw-row-hot" : "rw-row"} style={{ animationDelay: `${2.4 + i * 0.25}s` }}>
          <rect className={r.suspect ? "rw-rowbg rw-rowbg-hot" : "rw-rowbg"} x="240" y={y} width="476" height="80" rx="3" />
          <text className="rw-rank" x="258" y={y + 30}>{r.rank}</text>
          <text className="rw-rt" x="292" y={y + 30}>{r.title}</text>
          <text className="rw-rm" x="292" y={y + 54}>{r.meta}</text>
          <text className="rw-risk" x="696" y={y + 32} textAnchor="end">{r.risk}<tspan className="rw-risk-s">/100</tspan></text>
          <rect className="rw-bar-bg" x="616" y={y + 48} width="80" height="4" rx="2" />
          <rect className={r.suspect ? "rw-bar rw-bar-hot" : "rw-bar"} x="616" y={y + 48} width={(80 * r.risk) / 100} height="4" rx="2" style={{ animationDelay: `${2.6 + i * 0.25}s` }} />
        </g>
      );
    })}
    <text className="rw-suspect-t" x="292" y="402" style={{ animationDelay: "3.2s" }}>SUSPECTED CONTRIBUTOR</text>

    {/* diagnosis */}
    <rect className="rw-card" x="748" y="284" width="424" height="328" rx="4" />
    <text className="rw-label" x="768" y="312">DIAGNOSIS / SUMMARY</text>
    {[["Rules", true], ["AI triage", true], ["Deep", false]].map(([t, on], i) => (
      <g key={String(t)}>
        <rect className={on ? "rw-seg rw-seg-on" : "rw-seg"} x={768 + i * 132} y="332" width="120" height="3" style={{ animationDelay: `${3 + i * 0.2}s` }} />
        <text className="rw-rm" x={768 + i * 132} y="356">{String(t)}</text>
      </g>
    ))}
    <text className="rw-label" x="768" y="400">EXECUTIVE SUMMARY</text>
    {[384, 372, 384, 300, 340].map((w, i) => (
      <rect key={i} className="rw-text" x="768" y={420 + i * 26} width={w} height="7" rx="3.5" style={{ animationDelay: `${3.4 + i * 0.12}s` }} />
    ))}
    <text className="rw-rm" x="768" y="580">Risk ranks investigation order, not causation.</text>
  </svg>
);

export default RewindIllustration;
