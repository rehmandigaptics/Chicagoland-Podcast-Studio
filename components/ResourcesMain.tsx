import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import ResourceLibrary from "@/components/ResourceLibrary";
import NewsletterForm from "@/components/NewsletterForm";
import { I } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const stages = [
  { icon: I.rocket, title: "START", text: "Plan your show, choose a format, and set yourself up for success." },
  { icon: I.wave, title: "PRODUCE", text: "Get recording, editing, and production tips from our studio team." },
  { icon: I.bars, title: "PROMOTE", text: "Grow your audience with content, distribution, and marketing strategies." },
];

const sideArticles = [
  { title: ["BEFORE YOUR", "FIRST STUDIO", "RECORDING"], image: "/images/resources/first-studio-recording.jpg", href: "/how-it-works" },
  { title: ["REMOTE", "GUEST", "RECORDING TIPS"], image: "/images/resources/remote-guest-tips.jpg", href: "/why-chicagoland-podcast-studio" },
];

const guides = [
  { image: "podcast-launch-checklist", title: ["PODCAST", "LAUNCH", "CHECKLIST"], text: "A step-by-step checklist to get your podcast off the ground." },
  { image: "studio-session-prep", title: ["STUDIO", "SESSION", "PREP GUIDE"], text: "Everything you need to know before your recording session.", preview: true },
  { image: "podcast-content-planner", title: ["PODCAST", "CONTENT", "PLANNER"], text: "Plan episodes, topics, and releases with our simple template." },
];

const clipboard = (
  <svg className="hw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="4" width="14" height="18" rx="2" />
    <path d="M9 2.5h6v3H9zM8.5 10h7M8.5 13.5h7M8.5 17h5" />
  </svg>
);

const megaphone = (
  <svg className="hw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10v4h3l8 5V5L6 10z" />
    <path d="M6 14l1.5 5h2.5L9 14M17.5 9.5a3.5 3.5 0 0 1 0 5M20 7.5l1.5-1M20 16.5l1.5 1" />
  </svg>
);

const path = [
  { icon: clipboard, label: "PLAN" },
  { icon: I.mic, label: "RECORD" },
  { icon: I.sliders, label: "EDIT" },
  { icon: I.cloud, label: "PUBLISH" },
  { icon: megaphone, label: "PROMOTE" },
];

const faqs = [
  { q: "What should I bring to my first recording?", a: "Bring your topic outline, any notes or questions, and your guests. We handle the microphones, cameras, and technical setup." },
  { q: "How long should an episode be?", a: "Long enough to cover the topic well. Many shows land between 20 and 45 minutes, but consistency matters more than length." },
  { q: "Can I record a remote guest?", a: "Yes. Remote guests can join online with a high-quality connection while you record in our studio." },
  { q: "Do I need audio and video editing?", a: "Editing makes a big difference in quality. We offer audio and video editing so your episodes sound and look polished." },
];

const Title = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((t, i) => (
      <span key={t}>
        {i > 0 && <br />}
        {t}
      </span>
    ))}
  </>
);

export default function ResourcesMain() {
  return (
    <div className="hw ap rs">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero rs-hero">
          <img className="hp-hero-img" src="/images/home/hero.webp" alt="Two podcast hosts talking in the Chicagoland studio" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              PODCAST RESOURCES <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              YOUR IDEAS.
              <br />
              OUR INSIGHTS<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              Guides, tips, and tools to help you{" "}
              <br />
              record, launch, and grow your podcast.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="#explore">
                EXPLORE RESOURCES
              </Link>
              <Link className="hp-btn hp-btn-ghost" href="/podcast-launch">
                START YOUR PODCAST
              </Link>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="rs-learn">
        <div className="hw-in rs-learn-grid">
          <div>
            <h2 className="hw-title pm-title">
              LEARN<Dot />
              <br />
              CREATE<Dot />
              <br />
              GROW<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <p className="rs-learn-text">
            Practical guidance, studio tips, and creative strategies for podcasters at every stage &mdash; from your
            first episode to long-term growth.
          </p>
          {stages.map((s) => (
            <div className="rs-stage" key={s.title}>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rs-featured">
        <div className="hw-in rs-featured-grid">
          <div>
            <h2 className="hw-title pm-title">
              FEATURED
              <br />
              RESOURCE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <article className="rs-feature">
            <img src="/images/resources/featured-resource.jpg" alt="Studio microphone and headphones beside audio waveforms on a laptop" loading="lazy" />
            <div>
              <span className="rs-badge">PODCAST LAUNCH</span>
              <h3>HOW TO START A PODCAST: YOUR FIRST 10 STEPS</h3>
              <p>A practical, step-by-step guide to go from idea to a published podcast with confidence.</p>
              <Link className="hp-btn hp-btn-blue rs-feature-btn" href="/podcast-launch">
                READ THE GUIDE <span aria-hidden="true">&rsaquo;</span>
              </Link>
            </div>
          </article>
          <div className="rs-side">
            {sideArticles.map((a) => (
              <article className="rs-side-card" key={a.title.join(" ")}>
                <img src={a.image} alt="" loading="lazy" />
                <div>
                  <h3>
                    <Title lines={a.title} />
                  </h3>
                  <Link className="rs-read" href={a.href}>
                    READ ARTICLE <span aria-hidden="true">&rsaquo;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-explore" id="explore">
        <div className="hw-in rs-explore-grid">
          <div>
            <h2 className="hw-title pm-title">
              EXPLORE
              <br />
              OUR
              <br />
              RESOURCES<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ResourceLibrary />
        </div>
      </section>

      <section className="rs-tools">
        <div className="hw-in rs-tools-grid">
          <div>
            <h2 className="hw-title pm-title">
              FREE
              <br />
              TOOLS &amp;
              <br />
              GUIDES<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <p className="rs-tools-text">Helpful templates, checklists, and planning tools to make your podcast journey easier.</p>
          {guides.map((g) => (
            <article className="rs-guide" key={g.image}>
              <img src={`/images/resources/${g.image}.jpg`} alt="" loading="lazy" />
              <div>
                <h3>
                  <Title lines={g.title} />
                </h3>
                <p>{g.text}</p>
                {g.preview ? (
                  <a className="rs-guide-status rs-guide-preview" href={`/images/resources/${g.image}.jpg`} target="_blank" rel="noopener">
                    PREVIEW GUIDE
                  </a>
                ) : (
                  <span className="rs-guide-status">COMING SOON</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rs-path">
        <div className="hw-in rs-path-grid">
          <h2 className="hw-title rs-path-title">LEARNING PATH:</h2>
          <ol>
            {path.map((p) => (
              <li key={p.label}>
                {p.icon}
                {p.label}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hw-faq ap-faq">
        <div className="hw-in hw-faq-grid">
          <div>
            <h2 className="hw-title hw-faq-title">
              POPULAR
              <br />
              QUESTIONS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-faq-list">
            {faqs.map((f) => (
              <details name="rs-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <section className="hp-cta hp-cta--photo rs-news">
          <img className="hp-cta-img" src="/images/resources/newsletter.webp" alt="" loading="lazy" />
          <div className="hp-cta-shade" aria-hidden="true" />
          <div className="hp-in hp-cta-row rs-news-row">
            <h2 className="hp-title hp-cta-title">
              BETTER PODCASTS
              <br />
              START WITH BETTER IDEAS<span className="hp-blue">.</span>
            </h2>
            <span className="hp-cta-slash" aria-hidden="true" />
            <div className="rs-news-action">
              <p>Get new tips, resources, and studio updates from Chicagoland Podcast Studio.</p>
              <NewsletterForm />
            </div>
          </div>
        </section>
        <StudioCta title={["READY TO CREATE", "SOMETHING GREAT"]} buttonLabel="BOOK A STUDIO SESSION" image="/images/audio/cta-mic.webp" />
      </div>
    </div>
  );
}
