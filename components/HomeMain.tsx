import Link from "next/link";
import type { ReactNode } from "react";
import StudioCta from "@/components/StudioCta";

const Lines = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((line) => (
      <span className="hp-l" key={line}>
        {line}
      </span>
    ))}
  </>
);

const icon = (children: ReactNode) => (
  <svg
    className="hp-card-icon"
    viewBox="0 0 26 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const services = [
  {
    title: ["AUDIO EDITING"],
    text: ["Clean, cohesive, and", "professional-sounding episodes."],
    image: "svc-audio",
    icon: icon(
      <>
        <path d="M5 13V10a8 8 0 0 1 16 0v3" />
        <rect x="3.5" y="12" width="4.5" height="7" rx="1.6" />
        <rect x="18" y="12" width="4.5" height="7" rx="1.6" />
      </>
    ),
  },
  {
    title: ["VIDEO PODCAST", "EDITING"],
    text: ["Polished, multicamera edits", "with a professional look."],
    image: "svc-video",
    icon: icon(
      <>
        <rect x="1.5" y="6" width="17" height="12" rx="2" />
        <path d="M18.5 10.5l6-3v9l-6-3" />
        <path d="M1.5 6l3-4h11l3 4M8 2l-2.5 4M13 2l-2.5 4" />
      </>
    ),
  },
  {
    title: ["MIXING &", "MASTERING"],
    text: ["Balanced, consistent audio", "that’s ready to publish."],
    image: "svc-mixing",
    icon: icon(
      <>
        <path d="M5 2v16M13 2v16M21 2v16" />
        <path d="M2.5 7h5M10.5 12h5M18.5 6h5" />
      </>
    ),
  },
  {
    title: ["SHORT-FORM", "CLIPS"],
    text: ["Highlight moments and", "social-ready content to grow", "your audience."],
    image: "svc-clips",
    icon: icon(<path d="M4 2.5l17 7.5-17 7.5 4-7.5-4-7.5z" />),
  },
  {
    title: ["MULTI-CAMERA", "PRODUCTION"],
    text: ["Dynamic, high-quality video", "recording for a cinematic,", "engaging show."],
    image: "svc-multicam",
    icon: icon(
      <>
        <path d="M2 6.5h5l2-3h8l2 3h5v12H2z" />
        <circle cx="13" cy="12" r="3.6" />
      </>
    ),
  },
  {
    title: ["REMOTE GUEST", "SUPPORT"],
    text: ["Bring in guests from anywhere", "with a seamless, high-quality", "remote setup (supplied planning)."],
    image: "svc-remote",
    icon: icon(
      <>
        <rect x="4" y="2.5" width="18" height="12" rx="1.5" />
        <path d="M1.5 17.5h23" />
        <circle cx="13" cy="8.5" r="1.4" />
      </>
    ),
  },
];

const steps = [
  { num: "01", title: "PLAN", text: ["Align on your goals, format,", "guests, and production needs."] },
  { num: "02", title: "RECORD OR UPLOAD", text: ["Record in our Oakbrook Terrace", "studio or send us your files."] },
  { num: "03", title: "EDIT & REFINE", text: ["Our team edits, cleans up, and", "polishes your episode (audio", "and video)."] },
  { num: "04", title: "REVIEW & RELEASE", text: ["Review the final cut, request", "any adjustments, and publish", "to your channels."] },
];

const levels = [
  {
    title: "AUDIO ESSENTIALS",
    lead: ["Professional audio production for a", "polished, ready-to-publish podcast."],
    features: [
      "Audio editing & cleanup",
      "Mixing & mastering",
      "Branded intro/outro (optional)",
      "Publish-ready audio files",
    ],
  },
  {
    title: "VIDEO + AUDIO",
    lead: ["A complete podcast production with", "both high-quality video and audio."],
    features: [
      "Multi-camera studio recording",
      "Audio & video editing",
      "Mixing, mastering & color polish",
      "Episode files for podcast and video platforms",
    ],
  },
  {
    title: "FULL PRODUCTION",
    lead: ["A comprehensive, end-to-end podcast", "production solution with added content support."],
    features: [
      "Planning & production guidance",
      "Studio recording (audio + multi-camera video)",
      "Full post-production (edit, mix, master, color)",
      "Social-ready clips for added reach",
    ],
    featured: true,
  },
];

const faqs = [
  {
    q: "Can I record both audio and video in the studio?",
    a: "Yes. Our Oakbrook Terrace studio is equipped for both audio-only and multi-camera video recording. We handle the technical setup so you can focus on your conversation.",
  },
  {
    q: "Do you work with remote guests?",
    a: "Absolutely. We provide remote guest support with supplied planning and high-quality recording guidance so your remote participants sound and look professional.",
  },
  {
    q: "What’s included in post-production?",
    a: "Post-production includes audio editing, cleanup, mixing, mastering, and — depending on your package — video editing, color grading, and social-ready clips.",
  },
];

const results = [
  { image: "result-female", label: "Produced podcast example with a female host" },
  { image: "result-male", label: "Produced podcast example with a male host" },
];

const Check = () => (
  <svg className="hp-check" viewBox="0 0 12 10" aria-hidden="true">
    <path d="M1.2 5.4l3.2 3.1L10.8 1.4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayerBar = () => (
  <div className="hp-player" aria-hidden="true">
    <svg viewBox="0 0 12 12"><path d="M2.5 1.5l8 4.5-8 4.5z" fill="currentColor" /></svg>
    <svg viewBox="0 0 14 12">
      <path d="M1.5 4.2h2.6L7.4 1.5v9L4.1 7.8H1.5z" fill="currentColor" />
      <path d="M9.4 3.6a3.3 3.3 0 0 1 0 4.8" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
    <span className="hp-player-spacer" />
    <svg viewBox="0 0 16 12">
      <rect x="1" y="1" width="14" height="10" rx="1.6" fill="none" stroke="currentColor" strokeWidth={1.4} />
      <path d="M7 4.6a1.8 1.8 0 1 0 0 2.8M12 4.6a1.8 1.8 0 1 0 0 2.8" fill="none" stroke="currentColor" strokeWidth={1.2} />
    </svg>
    <svg viewBox="0 0 12 12">
      <circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth={1.5} />
      <path d="M6 .8v1.8M6 9.4v1.8M.8 6h1.8M9.4 6h1.8M2.3 2.3l1.3 1.3M8.4 8.4l1.3 1.3M2.3 9.7l1.3-1.3M8.4 3.6l1.3-1.3" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
    <svg viewBox="0 0 12 12">
      <path d="M1 4V1h3M8 1h3v3M11 8v3H8M4 11H1V8" fill="none" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  </div>
);

export default function HomeMain() {
  return (
    <div className="hp">
      <section className="hp-hero">
        <img className="hp-hero-img" src="/images/home/hero.webp" alt="Two hosts recording a podcast at Chicagoland Podcast Studio" />
        <div className="hp-hero-shade" aria-hidden="true" />
        <div className="hp-in hp-hero-copy">
          <p className="hp-hero-loc">
            OAKBROOK TERRACE <span>/</span> ILLINOIS
          </p>
          <h1 className="hp-hero-title">
            PODCAST
            <br />
            PRODUCTION.
            <br />
            FROM RECORDING
            <br />
            TO RELEASE<span className="hp-blue">.</span>
          </h1>
          <p className="hp-hero-desc">
            Professional audio, video, and post-production{" "}
            <br />
            for creators, founders, and brands.
          </p>
          <div className="hp-hero-btns">
            <Link className="hp-btn hp-btn-blue" href="/booking">
              GET A PRODUCTION QUOTE
            </Link>
            <Link className="hp-btn hp-btn-ghost" href="#services">
              SEE OUR SERVICES
            </Link>
          </div>
        </div>
      </section>

      <div className="hp-strip">
        <div className="hp-in hp-strip-row">
          <span>IN-STUDIO RECORDING</span>
          <i aria-hidden="true">/</i>
          <span>AUDIO &amp; VIDEO EDITING</span>
          <i aria-hidden="true">/</i>
          <span>SOCIAL-READY CLIPS</span>
          <i aria-hidden="true">/</i>
          <span>ONGOING PRODUCTION</span>
        </div>
      </div>

      <section className="hp-voice">
        <div className="hp-in hp-voice-grid">
          <div>
            <h2 className="hp-title hp-voice-title">
              YOUR VOICE.
              <br />
              OUR PRODUCTION TEAM.
            </h2>
            <span className="hp-rule" aria-hidden="true" />
            <p className="hp-voice-text">
              <Lines
                lines={[
                  "A great podcast is more than a recording — it’s a well-produced",
                  "show that sounds great, looks professional, and connects with",
                  "the right audience. Our team handles the technical details, creative",
                  "editing, and polish so you can focus on the conversation.",
                ]}
              />
            </p>
          </div>
          <div className="hp-voice-media">
            <img src="/images/home/intro-editing.webp" alt="Podcast episode being edited and color graded" />
          </div>
        </div>
      </section>

      <section className="hp-services" id="services">
        <div className="hp-in hp-services-grid">
          <div>
            <h2 className="hp-title hp-services-title">
              OUR PODCAST
              <br />
              PRODUCTION
              <br />
              SERVICES
            </h2>
            <span className="hp-rule" aria-hidden="true" />
          </div>
          <div className="hp-cards">
            {services.map((s) => (
              <article className={`hp-card hp-card--${s.image}`} key={s.image}>
                <img className="hp-card-img" src={`/images/home/${s.image}.webp`} alt="" />
                <div className="hp-card-body">
                  {s.icon}
                  <h3>
                    {s.title.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p>
                    <Lines lines={s.text} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-how">
        <div className="hp-in hp-how-grid">
          <h2 className="hp-title hp-how-title">
            HOW
            <br />
            IT WORKS<span className="hp-blue">.</span>
          </h2>
          {steps.map((s) => (
            <article className="hp-step" key={s.num}>
              <span className="hp-step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>
                <Lines lines={s.text} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="hp-levels">
        <div className="hp-in hp-levels-grid">
          <div>
            <h2 className="hp-title hp-levels-title">
              CHOOSE YOUR
              <br />
              PRODUCTION
              <br />
              LEVEL<span className="hp-blue">.</span>
            </h2>
            <p className="hp-levels-text">
              <Lines
                lines={[
                  "Flexible production options to match",
                  "your goals, format, and budget — from",
                  "essential post-production to a fully",
                  "produced, video-ready show.",
                ]}
              />
            </p>
          </div>
          {levels.map((l) => (
            <article className={`hp-level${l.featured ? " hp-level--featured" : ""}`} key={l.title}>
              <h3>{l.title}</h3>
              <p className="hp-level-lead">
                <Lines lines={l.lead} />
              </p>
              <ul>
                {l.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link className="hp-level-btn" href="/booking">
                REQUEST A QUOTE
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="hp-results">
        <div className="hp-in hp-results-grid">
          <div>
            <h2 className="hp-title hp-results-title">
              EXPLORE THE
              <br />
              FINISHED RESULT<span className="hp-blue">.</span>
            </h2>
            <p className="hp-results-text">
              <Lines lines={["See examples of fully produced podcasts", "recorded and edited by our team."]} />
            </p>
          </div>
          {results.map((r) => (
            <figure className={`hp-video hp-video--${r.image}`} key={r.image}>
              <img src={`/images/home/${r.image}.webp`} alt={r.label} />
              <span className="hp-play" aria-hidden="true">
                <svg viewBox="0 0 12 12"><path d="M3.5 1.8l7 4.2-7 4.2z" fill="currentColor" /></svg>
              </span>
              <PlayerBar />
            </figure>
          ))}
        </div>
      </section>

      <section className="hp-faq">
        <div className="hp-in hp-faq-grid">
          <h2 className="hp-title hp-faq-title">
            FREQUENTLY
            <br />
            ASKED QUESTIONS<span className="hp-blue">.</span>
          </h2>
          <div className="hp-faq-list">
            {faqs.map((f) => (
              <details name="hp-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <StudioCta buttonLabel="BOOK A PRODUCTION CALL" />
    </div>
  );
}
