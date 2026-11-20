"use client";

import { useState } from "react";

const filters = ["ALL WORK", "VIDEO PODCASTS", "AUDIO", "SOCIAL CLIPS", "BRAND CONTENT", "STUDIO SESSIONS"] as const;
type Filter = (typeof filters)[number];

const projects: { key: string; title: string; text: string; tags: Filter[]; large?: boolean }[] = [
  { key: "multi-camera-interview", title: "MULTI-CAMERA INTERVIEW", text: "Full, professionally produced video podcast.", tags: ["VIDEO PODCASTS", "STUDIO SESSIONS"], large: true },
  { key: "founder-conversation", title: "FOUNDER CONVERSATION", text: "A focused, two-person discussion format.", tags: ["VIDEO PODCASTS", "BRAND CONTENT", "STUDIO SESSIONS"], large: true },
  { key: "short-form-highlights", title: "SHORT-FORM HIGHLIGHTS", text: "Engaging 30–90 second clips for social media.", tags: ["SOCIAL CLIPS", "BRAND CONTENT"] },
  { key: "panel-discussion", title: "PANEL DISCUSSION", text: "Multi-guest conversations and roundtables.", tags: ["VIDEO PODCASTS", "STUDIO SESSIONS"] },
  { key: "audio-only-episode", title: "AUDIO-ONLY EPISODE", text: "Professionally recorded and edited audio.", tags: ["AUDIO"] },
];

export default function WorkPortfolio() {
  const [active, setActive] = useState<Filter>("ALL WORK");
  const shown = projects.filter((p) => active === "ALL WORK" || p.tags.includes(active));
  const all = active === "ALL WORK";

  return (
    <>
      <div className="wk-filters" role="group" aria-label="Filter work by type">
        {filters.map((f) => (
          <button
            type="button"
            key={f}
            className={`wk-filter${f === active ? " is-active" : ""}`}
            aria-pressed={f === active}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className={`wk-grid${all ? "" : " wk-grid--filtered"}`}>
        {shown.map((p) => (
          <article className={`wk-card wk-card--${p.key}${all && p.large ? " wk-card--large" : ""}`} key={p.key}>
            <img src={`/images/work/${p.key}.webp`} alt="" loading="lazy" />
            <span className="wk-badge">SAMPLE / REPLACE WITH CLIENT WORK</span>
            <span className="wk-play" aria-hidden="true">
              <svg viewBox="0 0 12 12">
                <path d="M4 2.5 9.5 6 4 9.5z" fill="currentColor" />
              </svg>
            </span>
            <div className="wk-card-body">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
