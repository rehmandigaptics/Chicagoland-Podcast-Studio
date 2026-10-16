"use client";

import { useState, useTransition } from "react";

type MoodKey =
  | "modern"
  | "creative"
  | "executive"
  | "urban"
  | "conversational";

type MoodShot = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type Mood = {
  key: MoodKey;
  label: string;
  shots: [MoodShot, MoodShot];
};

const MOODS: Mood[] = [
  {
    key: "modern",
    label: "Modern & Tech-Forward",
    shots: [
      {
        src: "/images/studio-room-c.jpg",
        alt: "Modern tech-forward podcast set",
        title: "Clean lines, current tech",
        description:
          "Sleek backdrops and camera-ready lighting for digital-first brands.",
      },
      {
        src: "/images/studio-room-a.jpg",
        alt: "Contemporary podcast recording room",
        title: "Precision & presence",
        description:
          "A sharp visual language for product demos, launches, and explainers.",
      },
    ],
  },
  {
    key: "creative",
    label: "Creative & Artistic",
    shots: [
      {
        src: "/images/session-open.jpg",
        alt: "Creative artistic podcast setup",
        title: "Expressive & open",
        description:
          "Layered textures and flexible framing for story-driven content.",
      },
      {
        src: "/images/lounge.jpg",
        alt: "Artistic lounge recording environment",
        title: "Mood-led storytelling",
        description:
          "A softer look that still holds up under multi-camera capture.",
      },
    ],
  },
  {
    key: "executive",
    label: "Executive & Professional",
    shots: [
      {
        src: "/images/studio-room-e.jpg",
        alt: "Professional studio environment for interviews",
        title: "Executive & Professional",
        description:
          "A structured atmosphere for business, leadership and industry conversations.",
      },
      {
        src: "/images/session-panel.jpg",
        alt: "Panel-style executive podcast table",
        title: "Boardroom energy",
        description:
          "Panel layouts that read as intentional, credible, and composed.",
      },
    ],
  },
  {
    key: "urban",
    label: "Urban & Energetic",
    shots: [
      {
        src: "/images/workspace-open.jpg",
        alt: "Urban energetic coworking studio space",
        title: "City pulse",
        description:
          "Open energy with Workspace Junction character behind the set.",
      },
      {
        src: "/images/inside-studio.jpg",
        alt: "Inside the podcast studio with urban atmosphere",
        title: "Movement & momentum",
        description:
          "High-contrast frames that feel active without looking chaotic.",
      },
    ],
  },
  {
    key: "conversational",
    label: "Conversational & Intimate",
    shots: [
      {
        src: "/images/lounge-session.jpg",
        alt: "Comfortable lounge setting for conversational recordings",
        title: "Conversational & Intimate",
        description:
          "Welcoming, relaxed visual language for interviews and personal stories.",
      },
      {
        src: "/images/conversation.jpg",
        alt: "Intimate two-person podcast conversation",
        title: "Close & human",
        description:
          "Seating and camera angles built for trust and natural dialogue.",
      },
    ],
  },
];

export default function StudioExperiences() {
  const [active, setActive] = useState<MoodKey>("conversational");
  const [, startTransition] = useTransition();
  const mood = MOODS.find((m) => m.key === active) ?? MOODS[4];

  return (
    <section className="inner-section charcoal experiences-section">
      <div className="shell">
        <div className="studio-section-head experiences-head">
          <div>
            <p className="section-kicker experiences-kicker">
              [ 04 / STUDIO EXPERIENCES ]
            </p>
            <h2 className="display-title experiences-title">
              SET THE MOOD.
              <br />
              OWN THE <span className="studio-blue">ROOM.</span>
            </h2>
          </div>
          <p className="lead-note experiences-lead">
            Select a visual direction for your content. Backdrops and
            configurations are discussed before your session and depend on
            availability.
          </p>
        </div>

        <div className="experiences-gallery" key={mood.key}>
          {mood.shots.map((shot, index) => (
            <article className="experience-shot" key={shot.src}>
              <div className="experience-media">
                <img alt={shot.alt} src={shot.src} loading="lazy" />
                <span className="experience-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="experience-corner experience-tl" />
                <span aria-hidden="true" className="experience-corner experience-br" />
              </div>
              <div className="experience-copy">
                <strong>{shot.title}</strong>
                <p>{shot.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="experiences-moods"
          role="tablist"
          aria-label="Studio experience moods"
        >
          {MOODS.map((item) => {
            const isActive = item.key === active;
            return (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`experience-mood${isActive ? " is-active" : ""}`}
                onClick={() => startTransition(() => setActive(item.key))}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
