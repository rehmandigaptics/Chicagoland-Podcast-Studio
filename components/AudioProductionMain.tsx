import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import { Check, I, Lines } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const services = [
  { key: "editing", icon: I.scissors, title: "AUDIO EDITING", text: ["Clean up your recording,", "remove distractions and", "tighten the flow."], image: "/images/audio/editing.webp" },
  { key: "noise", icon: I.wave, title: "NOISE CLEANUP", text: ["Remove background noise,", "hums, and room echo for", "a clear, professional sound."], image: "/images/audio/noise-cleanup.webp" },
  { key: "mixing", icon: I.sliders, title: "MIXING", text: ["Balance voices, music,", "and sound elements for", "a natural, engaging listen."], image: "/images/audio/mixing.webp" },
  { key: "mastering", icon: I.layers, title: "MASTERING", text: ["Apply the final polish for", "consistent volume, clarity,", "and a broadcast-ready sound."], image: "/images/audio/mastering.webp" },
  { key: "intros", icon: I.play, title: "INTROS & OUTROS", text: ["Add branded intros, outros,", "music beds, and transitions", "to elevate your show."], image: "/images/audio/intros-outros.webp" },
  { key: "remote", icon: I.people, title: "REMOTE GUEST AUDIO", text: ["Combine and clean multi-", "track recordings for smooth,", "professional conversations."], image: "/images/audio/remote-guest.webp" },
];

const process = [
  { n: "01", title: "SEND YOUR FILES", text: "Upload your raw recording (files, multi-track, or remote sessions)." },
  { n: "02", title: "EDIT & ENHANCE", text: "We clean, edit, and improve the audio—removing noise, fixing issues, and refining flow." },
  { n: "03", title: "REVIEW & DELIVER", text: "Listen to your polished episode and request any adjustments if needed." },
  { n: "04", title: "READY TO PUBLISH", text: "Receive your final, broadcast-ready audio files, optimized for major podcast platforms." },
];

const comparisons = [
  { icon: I.mic, title: "VOICE CLARITY" },
  { icon: I.wave, title: "NOISE REMOVAL" },
  { icon: I.sliders, title: "BALANCED FINAL MIX" },
];

const plans = [
  {
    title: "ESSENTIAL AUDIO",
    features: ["Professional audio editing", "Noise reduction & cleanup", "Smooth, natural flow", "Publish-ready audio files"],
  },
  {
    title: "EDIT + POLISH",
    features: ["Everything in Essential Audio", "Audio mixing & leveling", "Intro/outro integration (optional)", "Enhanced sound quality & consistency"],
  },
  {
    title: "FULL AUDIO PRODUCTION",
    features: ["Everything in Edit + Polish", "Advanced mixing & mastering", "Custom intro, outro & music (optional)", "Multi-track & remote guest audio support"],
    featured: true,
  },
];

const related = [
  { icon: I.video, title: ["VIDEO", "PRODUCTION"], text: "Bring your podcast to life with high-quality video.", href: "/production" },
  { icon: I.layers, title: ["PODCAST", "MANAGEMENT"], text: "Ongoing production, editing, and publishing support.", href: "/podcast-management" },
  { icon: I.cloud, title: ["HOSTING"], text: "Reliable, secure hosting with distribution to major platforms.", href: "/podcast-hosting" },
  { icon: I.bars, title: ["PODCAST", "MARKETING"], text: "Grow your audience with strategy, content, and promotion.", href: "/podcast-marketing" },
];

const faqs = [
  {
    q: "Can you work with recordings I do at home?",
    a: "Yes. Send us your home or remote recordings and we’ll clean, edit, and polish them so they sound consistent and professional.",
  },
  {
    q: "Do you handle remote guest audio?",
    a: "Absolutely. We combine and clean multi-track and remote guest recordings so every voice sounds clear and balanced.",
  },
  {
    q: "What’s the difference between editing, mixing, and mastering?",
    a: "Editing removes mistakes and tightens the flow, mixing balances voices, music, and sound elements, and mastering applies the final polish for consistent, broadcast-ready volume.",
  },
  {
    q: "What file formats will I receive?",
    a: "You’ll receive publish-ready MP3 and WAV files optimized for major podcast platforms. Other formats are available on request.",
  },
];

const waveBars = (seed: number, count = 46) =>
  Array.from({ length: count }, (_, i) => {
    const v = Math.abs(Math.sin(i * 0.55 + seed) * 0.6 + Math.sin(i * 1.7 + seed * 2) * 0.4);
    return 0.18 + v * 0.82;
  });

const Waveform = ({ seed, after }: { seed: number; after?: boolean }) => {
  const bars = waveBars(seed);
  return (
    <svg className={`ap-wave${after ? " ap-wave--after" : ""}`} viewBox={`0 0 ${bars.length * 4} 20`} preserveAspectRatio="none" aria-hidden="true">
      {bars.map((h, i) => {
        const height = (after ? 0.35 + h * 0.65 : h * 0.8) * 18;
        return <rect key={i} x={i * 4} y={10 - height / 2} width="2.2" height={height} rx="1" />;
      })}
    </svg>
  );
};

export default function AudioProductionMain() {
  return (
    <div className="hw ap">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero">
          <img className="hp-hero-img" src="/images/audio/hero.webp" alt="Audio engineer editing podcast audio at a mixing console" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              AUDIO PRODUCTION SERVICES <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              MAKE EVERY WORD
              <br />
              SOUND ITS BEST<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              Podcast audio editing, cleanup, mixing and{" "}
              <br />
              mastering&mdash;so you can focus on the conversation.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                GET AN AUDIO PRODUCTION QUOTE
              </Link>
              <Link className="hp-btn hp-btn-ghost" href="#included">
                SEE WHAT&rsquo;S INCLUDED
              </Link>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="ap-intro">
        <div className="hw-in ap-intro-grid">
          <div>
            <h2 className="hw-title ap-intro-title">
              GREAT CONTENT
              <br />
              DESERVES GREAT SOUND<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
            <p className="ap-intro-text">
              <Lines
                lines={[
                  "Turn raw recordings into professional, polished episodes",
                  "with expert audio production. We remove distractions,",
                  "enhance your voice, and deliver a clean, engaging listen",
                  "that keeps your audience coming back.",
                ]}
              />
            </p>
          </div>
          <div className="ap-intro-media">
            <img src="/images/audio/intro.webp" alt="Laptop showing podcast audio waveforms beside studio headphones and a microphone" />
          </div>
        </div>
      </section>

      <section className="ap-services" id="included">
        <div className="hw-in ap-services-grid">
          <div>
            <h2 className="hw-title ap-services-title">
              EVERYTHING
              <br />
              YOUR EPISODE
              <br />
              NEEDS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ap-cards">
            {services.map((s) => (
              <article className={`ap-card ap-card--${s.key}`} key={s.key}>
                <div className="ap-card-media">
                  <img src={s.image} alt="" loading="lazy" />
                </div>
                <div className="ap-card-body">
                  {s.icon}
                  <h3>{s.title}</h3>
                  <p>
                    <Lines lines={s.text} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-process">
        <div className="hw-in ap-process-grid">
          <div>
            <h2 className="hw-title ap-process-title">
              THE AUDIO
              <br />
              PRODUCTION
              <br />
              PROCESS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ol className="ap-steps">
            {process.map((s) => (
              <li className="ap-step" key={s.n}>
                <span className="ap-step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ap-hear">
        <div className="hw-in ap-hear-grid">
          <div>
            <h2 className="hw-title ap-hear-title">
              HEAR THE
              <br />
              DIFFERENCE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ap-compare">
            {comparisons.map((c, i) => (
              <article className="ap-compare-card" key={c.title}>
                <h3>
                  {c.icon}
                  {c.title}
                </h3>
                {(["BEFORE", "AFTER"] as const).map((label) => (
                  <div className={`ap-compare-row${label === "AFTER" ? " is-after" : ""}`} key={label}>
                    <span className="ap-compare-label">{label}</span>
                    <span className="ap-compare-play" title="Audio sample coming soon" aria-hidden="true">
                      <svg viewBox="0 0 12 12">
                        <path d="M4 2.5 9.5 6 4 9.5z" fill="currentColor" />
                      </svg>
                    </span>
                    <Waveform seed={i * 3 + (label === "AFTER" ? 1.3 : 0)} after={label === "AFTER"} />
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-get">
        <div className="hw-in ap-get-grid">
          <div>
            <h2 className="hw-title ap-get-title">
              WHAT
              <br />
              YOU GET<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ap-get-media">
            <img src="/images/audio/deliverables.webp" alt="Blue audio file folder next to studio headphones" loading="lazy" />
          </div>
          <span className="ap-get-line" aria-hidden="true" />
          <ul className="ap-get-list">
            {[
              "Clean, professional dialogue",
              "Balanced audio (voices, music, sound)",
              "Publish-ready MP3 and WAV files",
              "Optional branded intro and outro",
            ].map((t) => (
              <li key={t}>
                <Check />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ap-plans">
        <div className="hw-in ap-plans-grid">
          <div>
            <h2 className="hw-title ap-plans-title">
              CHOOSE YOUR
              <br />
              AUDIO
              <br />
              PRODUCTION
              <br />
              PLAN<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {plans.map((p) => (
            <article className={`ap-plan${p.featured ? " ap-plan--featured" : ""}`} key={p.title}>
              <h3>{p.title}</h3>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link className="ap-plan-btn" href="/booking">
                REQUEST A QUOTE
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="ap-related">
        <div className="hw-in ap-related-grid">
          <h2 className="hw-title ap-related-title">
            KEEP YOUR
            <br />
            PODCAST MOVING<Dot />
          </h2>
          {related.map((r) => (
            <Link className="ap-related-item" href={r.href} key={r.title.join(" ")}>
              {r.icon}
              <h3>
                {r.title.map((t, i) => (
                  <span key={t}>
                    {i > 0 && <br />}
                    {t}
                  </span>
                ))}
              </h3>
              <p>{r.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="hw-faq ap-faq">
        <div className="hw-in hw-faq-grid">
          <div>
            <h2 className="hw-title hw-faq-title">
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTIONS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-faq-list">
            {faqs.map((f) => (
              <details name="ap-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta
          title={["READY TO SOUND", "LIKE A PRO"]}
          buttonLabel="BOOK AN AUDIO PRODUCTION CALL"
          image="/images/audio/cta-mic.webp"
        />
      </div>
    </div>
  );
}
