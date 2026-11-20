import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import { Check, I, Lines } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const services = [
  { key: "setup", icon: I.gear, title: "HOSTING SETUP", text: ["We help you choose the right", "podcast hosting provider and", "get your show set up correctly."], image: "hosting-setup" },
  { key: "distribution", icon: I.broadcast, title: "PODCAST DISTRIBUTION", text: ["Submit and connect your show", "to major platforms like Apple", "Podcasts, Spotify, Amazon Music."], image: "podcast-distribution" },
  { key: "publishing", icon: I.film, title: "EPISODE PUBLISHING", text: ["We upload your episodes with", "titles, descriptions, show notes,", "artwork and release scheduling."], image: "episode-publishing" },
  { key: "rss", icon: I.rss, title: "RSS FEED MANAGEMENT", text: ["Set up and maintain your RSS", "feed so your podcast stays", "connected and up to date."], image: "rss-feed" },
  { key: "analytics", icon: I.bars, title: "LISTENER ANALYTICS", text: ["Track how your show is", "performing with key metrics like", "downloads and audience growth."], image: "listener-analytics" },
  { key: "player", icon: I.code, title: "EMBEDDED PLAYERS", text: ["Get a customizable player you", "can add to your website or blog", "to stream episodes directly."], image: "embedded-player" },
];

const platforms = [
  { name: "Apple Podcasts", logo: "logo-apple" },
  { name: "Spotify", logo: "logo-spotify" },
  { name: "YouTube Music", logo: "logo-youtube" },
  { name: "Amazon Music", logo: "logo-amazon", wide: true },
];

const steps = [
  { n: "01", title: "PLAN", text: "Confirm your goals, show format, and distribution needs." },
  { n: "02", title: "SET UP", text: "We create your hosting account, set up your show and RSS feed." },
  { n: "03", title: "SUBMIT & CONNECT", text: "We help submit and connect your show to major podcast platforms." },
  { n: "04", title: "PUBLISH", text: "Upload episodes with metadata, artwork, and a release schedule." },
  { n: "05", title: "TRACK & GROW", text: "Monitor performance, review listener insights, and plan your next releases." },
];

const simpler = [
  { icon: I.folder, title: "ORGANIZED EPISODES", text: "Keep your show, files, and assets in order." },
  { icon: I.calendar, title: "CONSISTENT RELEASES", text: "Stay on schedule with planned publishing support." },
  { icon: I.bars, title: "CLEAR INSIGHTS", text: "Understand what’s working and where to grow." },
];

const handle = [
  [
    "Hosting provider selection (e.g., Buzzsprout, Libsyn, Podbean, Captivate, etc.)",
    "Show account and RSS feed setup",
    "Platform submission assistance (Apple, Spotify, Amazon Music, and more)",
  ],
  [
    "Uploading artwork and metadata (titles, descriptions, show notes)",
    "Scheduled release support (one-time or ongoing)",
    "Analytics guidance and performance review",
    "Show migration assistance",
  ],
];

const plans = [
  { icon: I.rocket, title: "HOSTING SETUP", features: ["One-time show launch and setup", "Create hosting account and RSS feed", "Submit to major podcast platforms", "Upload artwork and initial metadata"] },
  { icon: I.calendar, title: "MANAGED PUBLISHING", features: ["Ongoing episode uploading and publishing", "Episode metadata and show notes", "Release scheduling and coordination", "Basic performance check-ins"] },
  { icon: I.layers, title: "HOSTING + PRODUCTION", features: ["Audio and/or video production for your show", "Ongoing managed publishing and releases", "Platform distribution and optimization guidance", "Performance reviews and growth recommendations"], featured: true },
];

const more = [
  { icon: I.rocket, title: "PODCAST LAUNCH", text: "Go from idea to a published show.", href: "/podcast-launch" },
  { icon: I.wave, title: "AUDIO PRODUCTION", text: "Professional audio editing and mastering.", href: "/audio-production" },
  { icon: I.layers, title: "PODCAST MANAGEMENT", text: "End-to-end production and show operations.", href: "/podcast-management" },
  { icon: I.bars, title: "PODCAST MARKETING", text: "Grow your audience with strategic promotion.", href: "/podcast-marketing" },
  { icon: I.lock, title: "PRIVATE HOSTING", text: "Hosting options for internal or restricted use.", href: "/podcast-hosting" },
];

const faqs = [
  { q: "What is a podcast host?", a: "A podcast host stores your audio files and generates the RSS feed that platforms like Apple Podcasts and Spotify use to list and deliver your episodes." },
  { q: "Can you help move an existing podcast?", a: "Yes. We can migrate your show to a new host, redirect your RSS feed, and make sure your episodes and subscribers carry over." },
  { q: "Do I own my podcast and RSS feed?", a: "Yes. Your show, episodes, and RSS feed are set up under your account, so you keep full ownership and control." },
  { q: "Can you manage ongoing episode publishing?", a: "Absolutely. With managed publishing we upload, schedule, and release your episodes with metadata and show notes on your schedule." },
];

export default function PodcastHostingMain() {
  return (
    <div className="hw ap ph">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero ph-hero">
          <img className="hp-hero-img" src="/images/hosting/hero.webp" alt="Podcaster recording in the Chicagoland studio beside an audio monitor" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              PODCAST HOSTING &amp; DISTRIBUTION <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              PODCAST HOSTING &amp;
              <br />
              DISTRIBUTION<span className="hp-blue">.</span>
            </h1>
            <p className="ph-hero-sub">PUBLISH YOUR SHOW. REACH MORE LISTENERS.</p>
            <p className="hp-hero-desc">
              We help you set up, organize, publish, and manage{" "}
              <br />
              your podcast across the platforms your audience uses.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                PLAN YOUR PODCAST HOSTING
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

      <section className="ph-home">
        <div className="hw-in ph-home-grid">
          <div>
            <h2 className="hw-title ph-home-title">
              ONE HOME FOR
              <br />
              YOUR PODCAST<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
            <p className="ph-home-text">
              <Lines
                lines={[
                  "Get your show set up with a professional podcast host,",
                  "so you can publish episodes, distribute to major platforms,",
                  "track performance, and grow your audience with confidence.",
                ]}
              />
            </p>
          </div>
          <div className="ph-home-media">
            <img src="/images/hosting/hosting-dashboard.webp" alt="Podcast hosting dashboard on a laptop with streaming platform icons" />
          </div>
        </div>
      </section>

      <section className="ap-services" id="included">
        <div className="hw-in ap-services-grid">
          <div>
            <h2 className="hw-title ap-services-title">
              EVERYTHING
              <br />
              YOUR SHOW
              <br />
              NEEDS TO
              <br />
              GO LIVE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ap-cards">
            {services.map((s) => (
              <article className={`ap-card ph-card--${s.key}`} key={s.key}>
                <div className="ap-card-media">
                  <img src={`/images/hosting/${s.image}.webp`} alt="" loading="lazy" />
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

      <section className="ph-platforms">
        <div className="hw-in ph-platforms-grid">
          <div>
            <h2 className="hw-title ph-platforms-title">
              YOUR PODCAST<Dot />
              <br />
              EVERYWHERE
              <br />
              THEY LISTEN<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {platforms.map((p) => (
            <div className="ph-platform" key={p.name}>
              <img className={p.wide ? "is-wide" : ""} src={`/images/hosting/${p.logo}.webp`} alt="" loading="lazy" />
              <h3>{p.name}</h3>
            </div>
          ))}
          <div className="ph-platform">
            <img src="/images/hosting/logo-more.png" alt="" loading="lazy" />
            <h3>More Platforms</h3>
            <p>(subject to platform compatibility)</p>
          </div>
        </div>
      </section>

      <section className="ap-process ph-process">
        <div className="hw-in ap-process-grid">
          <div>
            <h2 className="hw-title ap-process-title">
              HOW
              <br />
              PODCAST
              <br />
              HOSTING
              <br />
              WORKS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ol className="ap-steps ph-steps">
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

      <section className="ph-simpler">
        <div className="hw-in ph-simpler-grid">
          <div>
            <h2 className="hw-title ph-simpler-title">
              A SIMPLER WAY
              <br />
              TO STAY
              <br />
              PUBLISHED<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ul className="ph-simpler-list">
            {simpler.map((s) => (
              <li key={s.title}>
                {s.icon}
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="ph-simpler-media">
            <img src="/images/hosting/publishing-workflow.webp" alt="Podcast analytics dashboard on a laptop next to a studio microphone" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="ph-handle">
        <div className="hw-in ph-handle-grid">
          <div>
            <h2 className="hw-title ph-handle-title">
              WHAT WE
              <br />
              CAN HANDLE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {handle.map((col, i) => (
            <ul className="ph-handle-list" key={i}>
              {col.map((t) => (
                <li key={t}>
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <section className="ap-plans ph-plans">
        <div className="hw-in ap-plans-grid">
          <div>
            <h2 className="hw-title ap-plans-title">
              CHOOSE YOUR
              <br />
              HOSTING
              <br />
              SUPPORT<Dot />
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

      <section className="ap-related ph-more">
        <div className="hw-in ap-related-grid ph-more-grid">
          <h2 className="hw-title ap-related-title">
            MORE WAYS TO
            <br />
            GROW YOUR SHOW<Dot />
          </h2>
          {more.map((m) => (
            <Link className="ap-related-item" href={m.href} key={m.title}>
              {m.icon}
              <h3>{m.title}</h3>
              <p>{m.text}</p>
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
              HOSTING
              <br />
              QUESTIONS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-faq-list">
            {faqs.map((f) => (
              <details name="ph-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta
          title={["READY TO GET YOUR", "PODCAST EVERYWHERE"]}
          buttonLabel="BOOK A HOSTING CONSULTATION"
          image="/images/audio/cta-mic.webp"
        />
      </div>
    </div>
  );
}
