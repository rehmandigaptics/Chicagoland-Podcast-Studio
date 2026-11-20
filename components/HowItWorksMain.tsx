import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import { Check, I, Lines } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const journey = [
  { n: "01", icon: I.search, title: ["DISCOVER"], text: ["Share your goals,", "topic, show format", "and number of guests."] },
  { n: "02", icon: I.calendar, title: ["PLAN"], text: ["Confirm the right", "package, recording", "date and deliverables", "for your goals."] },
  { n: "03", icon: I.video, title: ["RECORD OR UPLOAD"], text: ["Record in our studio,", "include a remote guest,", "or send us your", "existing footage."] },
  { n: "04", icon: I.sliders, title: ["PRODUCE"], text: ["We edit and enhance", "your episode (audio cleanup,", "camera cuts, color and", "graphics) as quoted."] },
  { n: "05", icon: I.checkCircle, title: ["REVIEW &", "APPROVE"], text: ["See a draft, share", "consolidated feedback", "and approve the final", "version."] },
  { n: "06", icon: I.broadcast, title: ["RECEIVE OR", "PUBLISH"], text: ["Get your final files", "and, if you’d like, we can", "also help publish and", "promote your episode."] },
];

const paths = [
  {
    key: "studio",
    title: "IN-STUDIO RECORDING",
    icon: I.mic,
    image: "/images/hiw/path-studio.webp",
    alt: "Studio microphone in front of the Chicagoland Podcast Studio sign",
    href: "/why-chicagoland-podcast-studio",
    features: [
      "Record in our professional studio in Oakbrook Terrace",
      "Multi-camera video and studio-quality audio",
      "Technical team and live session support",
    ],
  },
  {
    key: "edit",
    title: "EDIT MY RECORDINGS",
    icon: I.film,
    image: "/images/hiw/path-edit.webp",
    alt: "Editor with headphones working on podcast audio waveforms",
    href: "/production",
    features: [
      "Professional editing for audio and/or video",
      "Clean, polished and ready-to-publish content",
      "Add intros, outros, graphics and captions",
    ],
  },
  {
    key: "plan",
    title: "END-TO-END PODCAST",
    icon: I.layers,
    image: "/images/hiw/path-plan.webp",
    alt: "Podcast production checklist on a laptop: plan, record, edit, publish",
    href: "/podcast-management",
    features: [
      "From strategy and planning to publishing support",
      "Recording, full production and ongoing management",
      "Ideal for new shows and busy teams",
    ],
    featured: true,
  },
];

const after = [
  { key: "files", icon: I.folder, title: ["FILE", "ORGANIZATION"], text: ["We securely organize and", "back up your recordings", "and assets."] },
  { key: "editing", icon: I.wave, title: ["AUDIO &", "VIDEO EDITING"], text: ["We clean up audio, cut", "for flow, enhance video,", "add graphics and polish", "your episode."] },
  { key: "review", icon: I.edit, title: ["REVIEW &", "REVISIONS"], text: ["You review a draft,", "share consolidated", "feedback, and we make", "the agreed updates."] },
  { key: "exports", icon: I.cloud, title: ["FINAL", "EXPORTS"], text: ["You receive your", "final, high-quality", "deliverables in the", "agreed formats."] },
];

const expectations = [
  { icon: I.calendar, title: "BEFORE RECORDING", text: ["We confirm your goals, format,", "recording details, deliverables", "and any special needs (e.g.,", "remote guest setup, branding, etc.)", "in your project scope."] },
  { icon: I.timer, title: "TURNAROUND", text: ["We’ll share the expected", "timeline for your edit and", "delivery based on the scope", "and complexity of your project"] },
  { icon: I.refresh, title: "REVISION ROUNDS", text: ["Your package includes a set", "number of revision rounds", "(e.g., one or more) to fine-tune", "your episode, as outlined in", "your quote."] },
  { icon: I.broadcast, title: "PUBLISHING APPROVAL", text: ["You’ll review and approve the final", "version before we deliver files or", "publish (if selected). We’ll also", "confirm file formats and any", "additional services, such as show", "notes, video clips or social assets."] },
];

const receive = [
  { icon: I.play, title: "MASTER EPISODE", text: ["A polished, ready-to-publish", "episode (video, audio or both)."] },
  { icon: I.wave, title: "AUDIO FILES", text: ["High-quality audio (e.g., MP3/WAV)", "for podcast platforms."] },
  { icon: I.clips, title: "SOCIAL CLIPS", text: ["Short, shareable clips for", "social media (if included)."] },
  { icon: I.doc, title: "SHOW NOTES & PUBLISHING", text: ["Episode summary, key takeaways", "and optional publishing support."] },
];

const faqs = [
  {
    q: "Can I record with a remote guest?",
    a: "Yes. Remote guests can join online with a high-quality, reliable connection while you record in our Oakbrook Terrace studio. We plan the setup with you before the session.",
  },
  {
    q: "What should I prepare before my session?",
    a: "Bring your topic, key talking points and any references. We confirm your format, guests and deliverables in advance so you can focus on the conversation.",
  },
  {
    q: "Can you edit footage I recorded elsewhere?",
    a: "Absolutely. Send us your existing audio or video files and we’ll edit, enhance and deliver them as agreed in your package.",
  },
  {
    q: "When will I receive my files?",
    a: "We share an expected timeline before work begins, based on the scope and complexity of your project. You’ll review a draft before final delivery.",
  },
  {
    q: "Can you publish episodes for me?",
    a: "Yes, if publishing is part of your package. After you approve the final version, we can publish and support ongoing promotion of your episodes.",
  },
];

export default function HowItWorksMain() {
  return (
    <div className="hw">
      <div className="hp">
        <section className="hp-hero hp-hero--page">
          <img className="hp-hero-img" src="/images/home/hero.webp" alt="Two podcast hosts recording in the Chicagoland studio" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              HOW IT WORKS <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              FROM YOUR FIRST
              <br />
              IDEA TO YOUR
              <br />
              FINAL EPISODE<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              An easy, guided process for studio recording,{" "}
              <br />
              editing, publishing and beyond.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                PLAN YOUR SESSION
              </Link>
              <Link className="hp-btn hp-btn-ghost" href="#journey">
                EXPLORE HOW PROCESS
              </Link>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="hw-intro">
        <div className="hw-in hw-intro-grid">
          <div className="hw-intro-head">
            <h2 className="hw-title hw-intro-title">
              SIMPLE TO START<Dot />
              <br />
              EASY TO KEEP
              <br />
              CREATING<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <span className="hw-vline" aria-hidden="true" />
          <p className="hw-intro-text">
            <Lines
              lines={[
                "Whether you’re launching a new show,",
                "producing a single episode, editing content",
                "you’ve already recorded, or setting up",
                "ongoing production and management—",
                "we make the process simple, professional",
                "and collaborative.",
              ]}
            />
          </p>
          <div className="hw-intro-media">
            <img src="/images/hiw/intro-laptop.webp" alt="Podcast episode being edited on a laptop next to studio headphones" />
          </div>
        </div>
      </section>

      <section className="hw-journey" id="journey">
        <div className="hw-in hw-journey-grid">
          <div>
            <h2 className="hw-title hw-journey-title">
              YOUR
              <br />
              PODCAST
              <br />
              JOURNEY<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ol className="hw-steps">
            {journey.map((s) => (
              <li className="hw-step" key={s.n}>
                <div className="hw-step-top">
                  {s.icon}
                  <span className="hw-step-num">{s.n}</span>
                </div>
                <h3 className="hw-step-title">
                  <span>
                    {s.title.map((t, i) => (
                      <span key={t}>
                        {i > 0 && <br />}
                        {t}
                      </span>
                    ))}
                  </span>
                </h3>
                <p className="hw-step-text">
                  <Lines lines={s.text} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hw-paths">
        <div className="hw-in hw-paths-grid">
          <div>
            <h2 className="hw-title hw-paths-title">
              PICK YOUR
              <br />
              PRODUCTION
              <br />
              PATH<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {paths.map((p) => (
            <article className={`hw-path${p.featured ? " hw-path--featured" : ""}`} key={p.title}>
              <div className={`hw-path-media hw-path-media--${p.key}`}>
                <img src={p.image} alt={p.alt} loading="lazy" />
              </div>
              <div className="hw-path-body">
                <h3>
                  {p.icon}
                  {p.title}
                </h3>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link className="hw-path-btn" href={p.href}>
                  EXPLORE SERVICE
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hw-after">
        <div className="hw-in hw-after-grid">
          <div>
            <h2 className="hw-title hw-after-title">
              WHAT HAPPENS
              <br />
              AFTER YOU
              <br />
              HIT RECORD<Dot c="?" />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-after-cards">
            {after.map((c) => (
              <article className={`hw-after-card hw-after-card--${c.key}`} key={c.key}>
                <div className="hw-after-visual">
                  <img src={`/images/hiw/after-${c.key}.webp`} alt="" loading="lazy" />
                </div>
                <div className="hw-after-body">
                  <h3>
                    {c.icon}
                    <span>
                      {c.title[0]}
                      <br />
                      {c.title[1]}
                    </span>
                  </h3>
                  <p>
                    <Lines lines={c.text} />
                  </p>
                </div>
              </article>
            ))}
            <p className="hw-after-note">Exact deliverables depend on your selected package.</p>
          </div>
        </div>
      </section>

      <section className="hw-handle">
        <div className="hw-in hw-handle-grid">
          <div>
            <h2 className="hw-title hw-handle-title">
              WE HANDLE THE
              <br />
              PRODUCTION<Dot />
              <br />
              YOU OWN THE
              <br />
              CONVERSATION<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-handle-col hw-handle-col--bring">
            <h3>
              {I.people}
              YOU BRING
            </h3>
            <ul>
              {[
                "Your topic, message and key goals",
                "Yourself and any guests (in-studio or remote)",
                "Any preferences (style, tone, references, etc.)",
                "Timely feedback and approvals",
              ].map((t) => (
                <li key={t}>
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="hw-handle-col hw-handle-col--handle">
            <h3>
              {I.gear}
              WE HANDLE
            </h3>
            <ul>
              {[
                "A professional studio setup and a great recording experience",
                "All technical production (audio, video, lighting, and switching)",
                "The agreed editing, enhancements and final delivery",
                "Optional publishing and ongoing support, if you need",
              ].map((t) => (
                <li key={t}>
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hw-expect">
        <div className="hw-in hw-expect-grid">
          <div>
            <h2 className="hw-title hw-expect-title">
              CLEAR
              <br />
              EXPECTATIONS,
              <br />
              BETTER
              <br />
              RESULTS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-expect-cards">
            {expectations.map((e) => (
              <article className="hw-expect-card" key={e.title}>
                <h3>
                  {e.icon}
                  {e.title}
                </h3>
                <p>
                  <Lines lines={e.text} />
                </p>
              </article>
            ))}
          </div>
          <div className="hw-options">
            <p>
              {I.studio}
              <b>STUDIO OPTION</b>
              <span>Record in our Oakbrook Terrace studio with a professional setup and live support.</span>
            </p>
            <i aria-hidden="true" />
            <p>
              {I.monitor}
              <b>REMOTE GUEST OPTION</b>
              <span>Include guests online with a high-quality, reliable remote connection.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="hw-receive">
        <div className="hw-in hw-receive-grid">
          <div>
            <h2 className="hw-title hw-receive-title">
              WHAT YOU
              <br />
              RECEIVE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {receive.map((r) => (
            <article className="hw-receive-item" key={r.title}>
              {r.icon}
              <h3>{r.title}</h3>
              <p>
                <Lines lines={r.text} />
              </p>
            </article>
          ))}
          <p className="hw-receive-note">
            Optional items (e.g., social clips, show notes, publishing) depend on your selected package.
          </p>
        </div>
      </section>

      <section className="hw-faq">
        <div className="hw-in hw-faq-grid">
          <div>
            <h2 className="hw-title hw-faq-title">
              COMMON
              <br />
              QUESTIONS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-faq-list">
            {faqs.map((f) => (
              <details name="hw-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta buttonLabel="BOOK A SESSION" />
      </div>
    </div>
  );
}
