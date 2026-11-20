"use client";

import Link from "next/link";
import { useState } from "react";

const categories = ["ALL RESOURCES", "GETTING STARTED", "RECORDING", "AUDIO & VIDEO", "PUBLISHING", "MARKETING", "EQUIPMENT"] as const;
type Category = (typeof categories)[number];

const articles: { badge: string; title: string; text: string; image: string; tags: Category[]; href: string }[] = [
  { badge: "EQUIPMENT", title: "PODCAST EQUIPMENT CHECKLIST", text: "The essential gear you need for high-quality recording and video.", image: "/images/resources/equipment-checklist.jpg", tags: ["EQUIPMENT", "GETTING STARTED"], href: "/why-chicagoland-podcast-studio" },
  { badge: "FORMAT", title: "AUDIO VS. VIDEO PODCASTS", text: "Key differences, benefits, and how to choose the right format for your goals.", image: "/images/resources/audio-vs-video.jpg", tags: ["AUDIO & VIDEO", "GETTING STARTED"], href: "/production" },
  { badge: "RECORDING", title: "HOW TO RECORD REMOTE GUESTS", text: "Tools, setup, and best practices for a smooth, professional remote interview.", image: "/images/resources/remote-guests.jpg", tags: ["RECORDING"], href: "/how-it-works" },
  { badge: "PRODUCTION", title: "PODCAST EDITING BASICS", text: "A simple guide to editing audio and video, cleaning up your sound, and adding polish.", image: "/images/resources/editing-basics.jpg", tags: ["AUDIO & VIDEO"], href: "/audio-production" },
  { badge: "PUBLISHING", title: "WHERE TO PUBLISH YOUR PODCAST", text: "A breakdown of top podcast platforms and how to get your show listed.", image: "/images/resources/where-to-publish.jpg", tags: ["PUBLISHING"], href: "/podcast-hosting" },
  { badge: "MARKETING", title: "TURN ONE EPISODE INTO SOCIAL CLIPS", text: "How to repurpose your podcast into short, engaging content for social media.", image: "/images/resources/social-clips.jpg", tags: ["MARKETING"], href: "/podcast-marketing" },
];

export default function ResourceLibrary() {
  const [category, setCategory] = useState<Category>("ALL RESOURCES");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const shown = articles.filter(
    (a) =>
      (category === "ALL RESOURCES" || a.tags.includes(category)) &&
      (!q || a.title.toLowerCase().includes(q) || a.text.toLowerCase().includes(q))
  );

  return (
    <div className="rs-library">
      <p className="rs-label">PROPOSED ARTICLES</p>
      <label className="rs-search">
        <span className="visually-hidden">Search resources</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M15.5 15.5 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input type="search" placeholder="Search podcast tips and guides..." value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <div className="rs-filters" role="group" aria-label="Filter resources by category">
        {categories.map((c) => (
          <button type="button" key={c} className={`wk-filter${c === category ? " is-active" : ""}`} aria-pressed={c === category} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="rs-grid" aria-live="polite">
        {shown.map((a) => (
          <article className="rs-article" key={a.title}>
            <img src={a.image} alt="" loading="lazy" />
            <div>
              <span className="rs-badge">{a.badge}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <Link className="rs-read" href={a.href}>READ ARTICLE <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </article>
        ))}
        {!shown.length && <p className="rs-empty">No resources match your search yet.</p>}
      </div>
    </div>
  );
}
