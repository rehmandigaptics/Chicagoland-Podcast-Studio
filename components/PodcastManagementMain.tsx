import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import { Check, I, Lines } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const why = [
  { key: "consistency", icon: I.calendar, title: ["CONSISTENCY"], text: ["Keep a steady production", "rhythm and a reliable", "release schedule."] },
  { key: "expert-guidance", icon: I.people, title: ["EXPERT GUIDANCE"], text: ["Get producer-level insight", "on content, format, guests,", "and long-term growth."] },
  { key: "workflow", icon: I.rocket, title: ["LESS STRESS,", "BETTER WORKFLOW"], text: ["Hand off the coordination,", "tracking, and execution so you", "can focus on your message."] },
];

const helps = [
  { icon: I.target, title: ["PODCAST", "STRATEGY"], text: "Shape your show’s focus, format, and long-term plan." },
  { icon: I.calendar, title: ["EPISODE", "PLANNING"], text: "Turn your ideas into clear, well-structured episodes." },
  { icon: I.people, title: ["GUEST", "PREP"], text: "Identify, coordinate, and prepare great guests." },
  { icon: I.video, title: ["REMOTE", "RECORDING SUPPORT"], text: "Set up, test, and run smooth remote recordings with your guests." },
  { icon: I.edit, title: ["REVIEW &", "FEEDBACK"], text: "Producer feedback on content, flow, and episode quality." },
  { icon: I.cloud, title: ["PUBLISHING", "COORDINATION"], text: "Get episodes ready and published across your platforms." },
  { icon: I.layers, title: ["CONTENT", "PLANNING"], text: "Align episodes, themes, and content to support your goals." },
  { icon: I.calendar, title: ["SCHEDULE", "MANAGEMENT"], text: "Keep production, recording, and release timelines on track." },
  { icon: I.sliders, title: ["COLLABORATION", "WITH EDITORS"], text: "Work with our editing team on sound, flow, and final polish." },
];

const support = [
  {
    key: "preproduction",
    icon: I.edit,
    title: "PRE-PRODUCTION",
    items: ["Define and refine your show strategy", "Create episode outlines and structure", "Coordinate and prep guests", "Plan upcoming content and themes"],
  },
  {
    key: "production",
    icon: I.mic,
    title: "PRODUCTION",
    items: ["Recording support and coordination", "Live producer guidance during sessions", "Manage and organize your files", "Ensure clean, usable recordings"],
  },
  {
    key: "postproduction",
    icon: I.wave,
    title: "POST-PRODUCTION",
    items: ["Provide edit direction and notes", "Review and approve final episodes", "Coordinate release across platforms", "Plan and organize short-form clips and bonus content"],
  },
];

const steps = [
  { n: "01", title: "MEET YOUR PRODUCER", text: "Tell us about your show, goals, and vision so we can build the right plan together." },
  { n: "02", title: "BUILD THE WORKFLOW", text: "We’ll set up a clear production process, tools, and schedule that fit your team and timeline." },
  { n: "03", title: "CREATE EACH EPISODE", text: "We handle the planning, coordination, recording support, and producer oversight for every episode." },
  { n: "04", title: "REVIEW & REFINE", text: "You review the edit, share feedback, and we work with our team to make it right." },
  { n: "05", title: "PUBLISH & GROW", text: "We coordinate the release, keep the show on schedule, and help identify opportunities to grow your audience." },
];

const include = [
  { icon: I.calendar, title: ["EPISODE", "PLANNING"], text: "Turn ideas into ready-to-produce episodes." },
  { icon: I.people, title: ["PRODUCER", "CHECK-INS"], text: "Regular alignment on content, progress, and goals." },
  { icon: I.mic, title: ["RECORDING", "SUPPORT"], text: "Setup, coordination, and live producer guidance." },
  { icon: I.layers, title: ["RELEASE", "MANAGEMENT"], text: "Prepare, publish, and keep your show on schedule." },
  { icon: I.refresh, title: ["ONGOING", "SHOW COORDINATION"], text: "End-to-end support to keep your podcast running smoothly." },
];

const plans = [
  {
    title: "PLAN & DEVELOP",
    lead: "A focused option to build a strong foundation and get your show on a consistent track.",
    features: ["Develop or refine your show strategy", "Plan and outline upcoming episodes", "Guest prep and coordination", "Basic production and release support"],
  },
  {
    title: "FLEX SUPPORT",
    lead: "Ongoing producer support with the flexibility to fit your schedule and production needs.",
    features: ["All Plan & Develop features", "Ongoing episode planning and coordination", "Recording and production support", "Review, feedback, and release coordination"],
  },
  {
    title: "ONGOING MANAGEMENT",
    lead: "A comprehensive, hands-on solution to fully manage the production and execution of your show.",
    features: ["All Flex Support features", "Dedicated producer oversight and coordination", "Ongoing content planning and guest management", "Release management and clip/content planning", "Long-term show growth and strategy support"],
    featured: true,
  },
];

const more = [
  { icon: I.wave, title: ["AUDIO", "PRODUCTION"], text: "Professional editing, mixing, and mastering.", href: "/audio-production" },
  { icon: I.video, title: ["VIDEO", "PRODUCTION"], text: "Bring your podcast to life with high-quality video.", href: "/production" },
  { icon: I.bars, title: ["PODCAST", "MARKETING"], text: "Grow your audience with strategy, content, and promotion.", href: "/podcast-marketing" },
  { icon: I.cloud, title: ["HOSTING"], text: "Reliable, secure hosting with distribution to major platforms.", href: "/podcast-hosting" },
];

const faqs = [
  { q: "Why does having a producer help my podcast?", a: "A producer keeps your show organized, consistent, and on schedule, and brings an outside perspective on content, guests, and growth so you can focus on the conversation." },
  { q: "Will I work with the same producer long term?", a: "Yes. With ongoing management you work with a dedicated producer who gets to know your show, audience, and goals." },
  { q: "How does podcast management work with editing?", a: "Your producer coordinates with our editing team, provides direction and notes, and reviews each episode before it goes out." },
  { q: "Is remote support available for my show?", a: "Absolutely. We support remote recordings, remote guests, and remote check-ins, so your show can run smoothly wherever you are." },
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

export default function PodcastManagementMain() {
  return (
    <div className="hw ap pm">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero">
          <img className="hp-hero-img" src="/images/management/hero.jpg" alt="Podcaster and producer working together in the Chicagoland studio" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              PODCAST SERVICES <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              PODCAST
              <br />
              MANAGEMENT<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              Ongoing producer support, planning, coordination, and{" "}
              <br />
              execution to keep your podcast consistent, high-quality,{" "}
              <br />
              and growing &mdash; for creators, founders, and brands.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                BOOK A MANAGEMENT CALL
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

      <section className="pm-why">
        <div className="hw-in pm-why-grid">
          <div>
            <h2 className="hw-title pm-title">
              WHY PODCAST
              <br />
              MANAGEMENT
              <br />
              MATTERS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {why.map((w) => (
            <article className={`ap-card pm-why-card pm-why-card--${w.key}`} key={w.key}>
              <div className="ap-card-media">
                <img src={`/images/management/${w.key}.jpg`} alt="" loading="lazy" />
              </div>
              <div className="ap-card-body">
                {w.icon}
                <h3>
                  <Title lines={w.title} />
                </h3>
                <p>
                  <Lines lines={w.text} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pm-helps" id="included">
        <div className="hw-in pm-helps-grid">
          <div>
            <h2 className="hw-title pm-title">
              WHAT YOUR
              <br />
              PRODUCER
              <br />
              HELPS WITH<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="pm-help-cards">
            {helps.map((h) => (
              <article className="pm-help" key={h.title.join(" ")}>
                {h.icon}
                <div>
                  <h3>
                    <Title lines={h.title} />
                  </h3>
                  <p>{h.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-support">
        <div className="hw-in pm-support-grid">
          <div>
            <h2 className="hw-title pm-title">
              END-TO-END
              <br />
              SUPPORT<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {support.map((s) => (
            <article className="pm-stage" key={s.key}>
              <img src={`/images/management/${s.key}.jpg`} alt="" loading="lazy" />
              <div className="pm-stage-body">
                <h3>
                  {s.icon}
                  {s.title}
                </h3>
                <ul>
                  {s.items.map((t) => (
                    <li key={t}>
                      <Check />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ap-process">
        <div className="hw-in ap-process-grid">
          <div>
            <h2 className="hw-title ap-process-title">
              HOW
              <br />
              IT WORKS<Dot />
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

      <section className="ap-related ph-more pm-include">
        <div className="hw-in ap-related-grid ph-more-grid">
          <h2 className="hw-title ap-related-title">
            WHAT
            <br />
            MANAGEMENT
            <br />
            CAN INCLUDE<Dot />
          </h2>
          {include.map((m) => (
            <div className="ap-related-item" key={m.title.join(" ")}>
              {m.icon}
              <h3>
                <Title lines={m.title} />
              </h3>
              <p>{m.text}</p>
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
              MANAGEMENT
              <br />
              PATH<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {plans.map((p) => (
            <article className={`ap-plan${p.featured ? " ap-plan--featured" : ""}`} key={p.title}>
              <h3>{p.title}</h3>
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
            KEEP THE
            <br />
            SHOW MOVING<Dot />
          </h2>
          {more.map((r) => (
            <Link className="ap-related-item" href={r.href} key={r.title.join(" ")}>
              {r.icon}
              <h3>
                <Title lines={r.title} />
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
              <details name="pm-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta
          title={["READY FOR A PRODUCER", "TO HELP RUN YOUR SHOW"]}
          buttonLabel="BOOK A MANAGEMENT CONSULTATION"
          image="/images/audio/cta-mic.webp"
        />
      </div>
    </div>
  );
}
