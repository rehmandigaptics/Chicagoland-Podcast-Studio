import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import { Check, I, Lines } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

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

const services = [
  { key: "podcast-seo", icon: I.search, title: ["PODCAST SEO"], text: ["Optimize your episodes with", "compelling titles, descriptions,", "and targeted keywords."] },
  { key: "social-video-clips", icon: I.play, title: ["SOCIAL VIDEO CLIPS"], text: ["Turn key moments into", "engaging short-form videos", "(Reels, Shorts and TikTok)."] },
  { key: "youtube-optimization", icon: I.video, title: ["YOUTUBE", "OPTIMIZATION"], text: ["Grow your reach on YouTube with", "optimized titles, thumbnails,", "descriptions and playlists."] },
  { key: "episode-promotion", icon: I.broadcast, title: ["EPISODE", "PROMOTION"], text: ["Strategic campaigns and", "release planning to get your", "episodes in front of the right audience."] },
  { key: "branded-social-graphics", icon: I.layers, title: ["BRANDED", "SOCIAL GRAPHICS"], text: ["Custom, on-brand graphics", "including episode promos,", "quote cards, and guest spotlights."] },
  { key: "content-repurposing", icon: I.doc, title: ["TRANSCRIPTS &", "CONTENT REPURPOSING"], text: ["Accurate transcripts that turn", "your episode into show notes,", "blog articles, and more."] },
];

const outputs = [
  { icon: I.clips, title: ["Short Clips"], note: "(Reels, Shorts, TikTok)" },
  { icon: I.edit, title: ["Quote", "Graphics"] },
  { icon: I.doc, title: ["Email", "Newsletter"] },
  { icon: I.folder, title: ["Show Notes", "& Articles"] },
  { icon: I.bars, title: ["More", "Discovery"] },
];

const audience = [
  { key: "audience-discovery", icon: I.target, title: ["BE DISCOVERED"], text: ["Improve search visibility and", "get in front of new listeners", "looking for content like yours."] },
  { key: "audience-consistency", icon: I.calendar, title: ["STAY", "CONSISTENT"], text: ["A repeatable content and", "promotion plan that keeps your", "show active and growing."] },
  { key: "audience-growth", icon: I.bars, title: ["MAKE CONTENT", "WORK HARDER"], text: ["Turn one recording into", "multiple assets across platforms", "to reach more people, more often."] },
];

const steps = [
  { n: "01", title: "PLAN", text: "Define goals, audience, key topics and a 90-day content strategy." },
  { n: "02", title: "UPLOAD", text: "Send us your episode (audio or video) and any assets." },
  { n: "03", title: "CREATE", text: "We produce clips, graphics, show notes, transcripts and platform-ready content." },
  { n: "04", title: "REVIEW", text: "You review and approve the content and campaign schedule." },
  { n: "05", title: "PUBLISH & LEARN", text: "We publish, promote and track performance to keep improving your results." },
];

const kit = [
  { key: "kit-social-clips", title: "SOCIAL CLIPS", text: "Short, engaging video clips for Reels, Shorts and TikTok." },
  { key: "kit-episode-promos", title: "EPISODE PROMOS", text: "Branded promo videos and platform posts." },
  { key: "kit-show-notes", title: "SEARCH-READY SHOW NOTES", text: "SEO-optimized notes with key takeaways and links." },
  { key: "kit-report", title: "PERFORMANCE REPORT", text: "Insights on reach, engagement and what’s working next." },
];

const plans = [
  { icon: I.broadcast, title: "EPISODE PROMOTION", lead: "Focused promotion for individual episodes.", features: ["Create and publish social clips", "Branded promo graphics", "SEO-optimized show notes"] },
  { icon: I.calendar, title: "ONGOING CONTENT", lead: "Consistent marketing for regular releases.", features: ["Multi-episode content creation", "Social graphics and short-form videos", "Transcripts and show notes", "Monthly content calendar"] },
  { icon: I.bars, title: "FULL PODCAST GROWTH", lead: "A complete marketing engine for long-term growth.", features: ["90-day content & promotion plan", "Ongoing episode marketing and distribution", "YouTube, social and search optimization", "Performance insights and content recommendations"], featured: true },
];

const more = [
  { icon: I.wave, title: ["AUDIO PRODUCTION"], text: "Professional editing, cleanup and mastering.", href: "/audio-production" },
  { icon: I.video, title: ["VIDEO PRODUCTION"], text: "High-quality video episodes, clips and show content.", href: "/production" },
  { icon: I.layers, title: ["PODCAST MANAGEMENT"], text: "Ongoing production, publishing and show operations.", href: "/podcast-management" },
  { icon: I.cloud, title: ["PODCAST HOSTING"], text: "Reliable, secure hosting with distribution to major platforms.", href: "/podcast-hosting" },
];

const faqs = [
  { q: "Can you market an existing podcast?", a: "Yes. We can start with your back catalog and upcoming episodes, building a content and promotion plan around the show you already have." },
  { q: "Can you create clips from audio-only episodes?", a: "Absolutely. We turn audio-only episodes into audiograms, captioned clips and branded graphics that work on social platforms." },
  { q: "Which social platforms do you support?", a: "We create content for YouTube, Instagram, TikTok, LinkedIn, Facebook and other platforms your audience uses." },
  { q: "Do you guarantee downloads or audience growth?", a: "No one can honestly guarantee specific numbers, but we use proven strategy, consistent content and performance tracking to give your show the best chance to grow." },
];

export default function PodcastMarketingMain() {
  return (
    <div className="hw ap mk">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero mk-hero">
          <img className="hp-hero-img" src="/images/marketing/hero.jpg" alt="Podcaster recording in the Chicagoland studio while an editor prepares social clips" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              PODCAST MARKETING SERVICES <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              TURN EVERY
              <br />
              EPISODE INTO
              <br />
              AN AUDIENCE<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              Strategic clips, content, podcast SEO and{" "}
              <br />
              promotion that help more people discover your show.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                PLAN YOUR PODCAST MARKETING
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

      <section className="pl-intro">
        <div className="hw-in pl-intro-grid">
          <div>
            <h2 className="hw-title pl-intro-title">
              GREAT EPISODES
              <br />
              DESERVE TO BE FOUND<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
            <p className="pl-intro-text">
              <Lines
                lines={[
                  "You put in the work to create a great podcast — we make",
                  "sure the right people find it. We turn each episode into",
                  "multiple, platform-ready pieces of content that build",
                  "awareness, drive engagement, and grow your audience.",
                ]}
              />
            </p>
          </div>
          <div className="pl-intro-media">
            <img src="/images/marketing/intro.jpg" alt="Podcast episode on YouTube with two vertical clips on phones" />
          </div>
        </div>
      </section>

      <section className="ap-services" id="included">
        <div className="hw-in ap-services-grid">
          <div>
            <h2 className="hw-title ap-services-title">
              EVERYTHING
              <br />
              YOU NEED
              <br />
              TO GROW<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ap-cards">
            {services.map((s) => (
              <article className="ap-card mk-card" key={s.key}>
                <div className="ap-card-media">
                  <img src={`/images/marketing/${s.key}.jpg`} alt="" loading="lazy" />
                </div>
                <div className="ap-card-body">
                  {s.icon}
                  <h3>
                    <Title lines={s.title} />
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

      <section className="mk-one">
        <div className="hw-in mk-one-grid">
          <div>
            <h2 className="hw-title pm-title">
              ONE EPISODE<Dot />
              <br />
              MORE
              <br />
              CONTENT<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <img className="mk-one-laptop" src="/images/marketing/one-episode.jpg" alt="Podcast episode being edited on a laptop" loading="lazy" />
          <span className="mk-one-arrow" aria-hidden="true">
            {I.arrow}
          </span>
          <ul className="mk-outputs">
            {outputs.map((o) => (
              <li key={o.title.join(" ")}>
                {o.icon}
                <h3>
                  <Title lines={o.title} />
                </h3>
                {o.note && <p>{o.note}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ap-services mk-audience">
        <div className="hw-in pm-why-grid">
          <div>
            <h2 className="hw-title ap-services-title">
              BUILT FOR
              <br />
              YOUR
              <br />
              AUDIENCE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {audience.map((a) => (
            <article className="ap-card pm-why-card mk-card" key={a.key}>
              <div className="ap-card-media">
                <img src={`/images/marketing/${a.key}.jpg`} alt="" loading="lazy" />
              </div>
              <div className="ap-card-body">
                {a.icon}
                <h3>
                  <Title lines={a.title} />
                </h3>
                <p>
                  <Lines lines={a.text} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ap-process">
        <div className="hw-in ap-process-grid">
          <div>
            <h2 className="hw-title ap-process-title">
              OUR
              <br />
              MARKETING
              <br />
              PROCESS<Dot />
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

      <section className="mk-kit">
        <div className="hw-in mk-kit-grid">
          <div>
            <h2 className="hw-title pm-title">
              YOUR PODCAST
              <br />
              CONTENT KIT<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {kit.map((k) => (
            <div className="pl-deliver mk-kit-item" key={k.key}>
              <img src={`/images/marketing/${k.key}.jpg`} alt="" loading="lazy" />
              <h3>{k.title}</h3>
              <p>{k.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-plans">
        <div className="hw-in ap-plans-grid">
          <div>
            <h2 className="hw-title ap-plans-title">
              CHOOSE YOUR
              <br />
              MARKETING
              <br />
              PATH<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {plans.map((p) => (
            <article className={`ap-plan wk-service${p.featured ? " ap-plan--featured" : ""}`} key={p.title}>
              <h3>
                {p.icon}
                {p.title}
              </h3>
              <p className="pm-plan-lead">{p.lead}</p>
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
            GROW THE
            <br />
            SHOW FROM
            <br />
            EVERY ANGLE<Dot />
          </h2>
          {more.map((r) => (
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
              <details name="mk-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta
          title={["READY TO GET YOUR", "PODCAST DISCOVERED"]}
          buttonLabel="BOOK A MARKETING CONSULTATION"
          image="/images/audio/cta-mic.webp"
        />
      </div>
    </div>
  );
}
