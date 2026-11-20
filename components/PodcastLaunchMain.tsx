import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import { Check, I, Lines } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const services = [
  { key: "show-strategy", icon: I.target, title: ["SHOW STRATEGY"], text: ["Define your purpose,", "audience, format and", "long-term vision."] },
  { key: "name-branding", icon: I.layers, title: ["NAME &", "BRANDING"], text: ["Create a standout name,", "look and cover art", "for your show."] },
  { key: "episode-planning", icon: I.calendar, title: ["EPISODE", "PLANNING"], text: ["Develop your episode", "structure, topics and", "guest strategy."] },
  { key: "studio-recording", icon: I.mic, title: ["STUDIO", "RECORDING"], text: ["Record professional-", "quality audio and video", "in our studio."] },
  { key: "audio-video-editing", icon: I.monitor, title: ["AUDIO &", "VIDEO EDITING"], text: ["Clean, polish and", "produce episodes that", "sound and look great."] },
  { key: "trailer-intro", icon: I.play, title: ["TRAILER &", "INTRO"], text: ["Create a compelling", "trailer and custom", "intro/outro for your show."] },
  { key: "hosting-distribution", icon: I.broadcast, title: ["HOSTING &", "DISTRIBUTION"], text: ["Set up your podcast", "hosting and publish", "across major platforms."] },
  { key: "launch-marketing", icon: I.bars, title: ["LAUNCH", "MARKETING"], text: ["Build awareness, create", "promo assets and get", "your first listeners."] },
];

const steps = [
  { n: "01", title: "DISCOVER", text: "Learn your goals, audience and vision." },
  { n: "02", title: "DEVELOP", text: "Shape your show concept, format and content plan." },
  { n: "03", title: "DESIGN", text: "Create your show name, cover art and audio identity." },
  { n: "04", title: "RECORD", text: "Capture high-quality audio and/or video in our studio." },
  { n: "05", title: "PRODUCE", text: "Edit, enhance and prepare your episodes." },
  { n: "06", title: "PUBLISH", text: "Set up hosting and distribute to major platforms." },
  { n: "07", title: "PROMOTE", text: "Launch your show with targeted marketing support." },
];

const deliverables = [
  { image: "brand-kit", title: "Podcast Brand Kit", note: "(Name, Cover Art & Style)" },
  { image: "show-trailer", title: "Show Trailer /", note: "Intro & Outro" },
  { image: "platform-setup", title: "Hosting &", note: "Platform Setup" },
  { image: "social-promo", title: "Social Promo Clips", note: "(for Launch & Ongoing Use)", video: true },
];

const plans = [
  { icon: I.rocket, title: "PODCAST STARTER", features: ["Launch strategy & show planning", "Show name & cover art design", "Studio recording (audio or video)", "Episode editing & first episodes"] },
  { icon: I.video, title: "VIDEO PODCAST LAUNCH", features: ["All Podcast Starter inclusions", "Multi-camera video recording", "Branded intro/outro & trailer", "Platform setup & launch support"] },
  { icon: I.people, title: "FULL-SERVICE LAUNCH", features: ["End-to-end strategy, production & launch", "Audio & video (multi-episode)", "Branding, assets, hosting & distribution", "Launch marketing & growth support"], featured: true },
];

const after = [
  { icon: I.wave, title: ["AUDIO PRODUCTION"], text: "Ongoing editing and episode production.", href: "/audio-production" },
  { icon: I.video, title: ["VIDEO PRODUCTION"], text: "High-quality video episodes, clips and show content.", href: "/production" },
  { icon: I.layers, title: ["PODCAST MANAGEMENT"], text: "Release planning, publishing and show operations.", href: "/podcast-management" },
  { icon: I.bars, title: ["PODCAST MARKETING"], text: "Grow your audience with strategic content and promotion.", href: "/podcast-marketing" },
];

const faqs = [
  { q: "Do I need podcasting experience?", a: "Not at all. We guide you from the first idea through recording and publishing, so you can launch confidently even if it’s your first show." },
  { q: "Can you record remote guests?", a: "Yes. We can bring in remote guests with a high-quality, reliable connection while you record in our Oakbrook Terrace studio." },
  { q: "Can you help with cover art and a trailer?", a: "Yes. Branding, cover art, and a show trailer with intro/outro can all be part of your launch package." },
  { q: "Can you help publish to Spotify, Apple Podcasts and YouTube?", a: "Absolutely. We set up your hosting and submit your show to Spotify, Apple Podcasts, YouTube and other major platforms." },
];

export default function PodcastLaunchMain() {
  return (
    <div className="hw ap pl">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero">
          <img className="hp-hero-img" src="/images/home/hero.webp" alt="Two podcast hosts recording in the Chicagoland studio" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              PODCAST LAUNCH SERVICES <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              YOUR PODCAST
              <br />
              STARTS HERE<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              From the first idea to your first published episode&mdash;{" "}
              <br />
              strategy, recording, production and launch support under one roof.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                PLAN YOUR PODCAST LAUNCH
              </Link>
              <Link className="hp-btn hp-btn-ghost" href="#process">
                EXPLORE THE PROCESS
              </Link>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="pl-intro">
        <div className="hw-in pl-intro-grid">
          <div>
            <h2 className="hw-title pl-intro-title">
              GO FROM IDEA TO ON AIR<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
            <p className="pl-intro-text">
              <Lines
                lines={[
                  "A complete podcast launch service for creators, founders",
                  "and brands who want to start strong, sound professional",
                  "and reach the right audience from day one.",
                ]}
              />
            </p>
          </div>
          <div className="pl-intro-media">
            <img src="/images/launch/intro.jpg" alt="Podcast cover art, video editing on a laptop and a phone showing podcast platforms" />
          </div>
        </div>
      </section>

      <section className="ap-services pl-services">
        <div className="hw-in ap-services-grid">
          <div>
            <h2 className="hw-title ap-services-title">
              EVERYTHING
              <br />
              YOU NEED
              <br />
              TO LAUNCH<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ap-cards pl-cards">
            {services.map((s) => (
              <article className={`ap-card pl-card--${s.key}`} key={s.key}>
                <div className="ap-card-media">
                  <img src={`/images/launch/${s.key}.jpg`} alt="" loading="lazy" />
                </div>
                <div className="ap-card-body">
                  {s.icon}
                  <h3>
                    {s.title.map((t, i) => (
                      <span key={t}>
                        {i > 0 && <br />}
                        {t}
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

      <section className="ap-process pl-process" id="process">
        <div className="hw-in ap-process-grid">
          <div>
            <h2 className="hw-title ap-process-title">
              THE ROAD
              <br />
              TO YOUR FIRST
              <br />
              EPISODE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ol className="ap-steps pl-steps">
            {steps.map((s) => (
              <li className="ap-step" key={s.n}>
                <span className="ap-step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pl-team">
        <div className="pl-team-media" aria-hidden="true">
          <img src="/images/launch/production-team.jpg" alt="" loading="lazy" />
        </div>
        <div className="hw-in pl-team-grid">
          <div>
            <h2 className="hw-title pl-team-title">
              YOUR LAUNCH<Dot />
              <br />
              OUR PRODUCTION
              <br />
              TEAM<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="pl-panel">
            <h3>WE CAN HANDLE</h3>
            <ul>
              {[
                "End-to-end launch roadmap",
                "Show identity (name, artwork, assets)",
                "Studio session support & direction",
                "Professional audio & video editing",
                "Publishing & platform setup",
                "Launch promo assets (clips, graphics, etc.)",
              ].map((t) => (
                <li key={t}>
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="pl-panel">
            <h3>YOU BRING</h3>
            <ul>
              {["Your voice and perspective", "Your topic expertise and ideas", "Guest ideas or connections", "Creative feedback and approvals"].map((t) => (
                <li key={t}>
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pl-include">
        <div className="hw-in pl-include-grid">
          <div>
            <h2 className="hw-title pl-include-title">
              WHAT YOUR
              <br />
              LAUNCH CAN
              <br />
              INCLUDE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {deliverables.map((d) => (
            <div className="pl-deliver" key={d.image}>
              <div className="pl-deliver-media">
                <img src={`/images/launch/${d.image}.jpg`} alt="" loading="lazy" />
                {d.video && (
                  <span className="pl-play" aria-hidden="true">
                    <svg viewBox="0 0 12 12">
                      <path d="M4 2.5 9.5 6 4 9.5z" fill="currentColor" />
                    </svg>
                  </span>
                )}
              </div>
              <h3>{d.title}</h3>
              <p>{d.note}</p>
            </div>
          ))}
          <p className="pl-include-note">
            <span aria-hidden="true">i</span>
            Specific deliverables are tailored to your show&rsquo;s goals and included in your custom quote.
          </p>
        </div>
      </section>

      <section className="ap-plans">
        <div className="hw-in ap-plans-grid">
          <div>
            <h2 className="hw-title ap-plans-title">
              CHOOSE YOUR
              <br />
              LAUNCH PATH<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {plans.map((p) => (
            <article className={`ap-plan wk-service${p.featured ? " ap-plan--featured" : ""}`} key={p.title}>
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
            AFTER LAUNCH,
            <br />
            KEEP GROWING<Dot />
          </h2>
          {after.map((r) => (
            <Link className="ap-related-item" href={r.href} key={r.title[0]}>
              {r.icon}
              <h3>{r.title[0]}</h3>
              <p>{r.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="hw-faq ap-faq">
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
              <details name="pl-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta
          title={["READY TO BRING YOUR", "PODCAST TO LIFE"]}
          buttonLabel="BOOK A LAUNCH CONSULTATION"
          image="/images/audio/cta-mic.webp"
        />
      </div>
    </div>
  );
}
