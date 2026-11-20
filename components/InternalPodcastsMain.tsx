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

const uses = [
  { key: "leadership-updates", icon: I.people, title: ["LEADERSHIP", "UPDATES"], text: ["Share company news,", "priorities, and vision", "directly from leadership."] },
  { key: "employee-onboarding", icon: I.people, title: ["EMPLOYEE", "ONBOARDING"], text: ["Welcome new hires,", "share key resources, and", "accelerate their success."] },
  { key: "training-development", icon: I.layers, title: ["TRAINING &", "DEVELOPMENT"], text: ["Deliver ongoing training,", "compliance updates,", "and learning programs."] },
  { key: "team-culture", icon: I.people, title: ["TEAM &", "CULTURE STORIES"], text: ["Highlight team wins,", "recognize people, and", "strengthen company culture."] },
  { key: "multi-location", icon: I.pin, title: ["MULTI-LOCATION", "UPDATES"], text: ["Keep all locations and", "teams aligned with", "consistent, timely updates."] },
  { key: "executive-qa", icon: I.mic, title: ["EXECUTIVE", "Q&A"], text: ["Give employees a", "forum to hear directly", "from and engage with leaders."] },
];

const steps = [
  { n: "01", icon: I.target, title: "STRATEGIZE", text: "Define your goals, audience, and content plan." },
  { n: "02", icon: I.video, title: "RECORD", text: "Record in our studio or remotely with your team." },
  { n: "03", icon: I.wave, title: "PRODUCE", text: "Edit, polish, and prepare a professional, engaging episode." },
  { n: "04", icon: I.cloud, title: "DISTRIBUTE PRIVATELY", text: "Share with your employees via a private, access-controlled platform." },
  { n: "05", icon: I.bars, title: "REVIEW & IMPROVE", text: "Look at listening insights and plan future episodes for greater impact." },
];

const privacy = [
  { icon: I.lock, title: ["INVITE-ONLY", "ACCESS"], text: "Restrict access to your employees or specific teams." },
  { icon: I.layers, title: ["FEEDS FOR", "TEAMS"], text: "Create dedicated podcast feeds (e.g., company-wide, location, or department)." },
  { icon: I.monitor, title: ["LISTEN ON", "YOUR SCHEDULE"], text: "Employees can tune in on mobile or desktop, whenever it’s convenient for them." },
  { icon: I.bars, title: ["LISTENING", "INSIGHTS"], text: "Review engagement and listening trends to inform future content." },
];

const audiences = [
  { key: "hr-teams", icon: I.people, title: ["HR & PEOPLE TEAMS"], text: "Drive engagement, onboarding, and employee communications." },
  { key: "executive-leadership", icon: I.people, title: ["EXECUTIVE LEADERSHIP"], text: "Share vision, updates, and important company messages." },
  { key: "healthcare-teams", icon: (
    <svg className="hw-ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 2.5h6v6.5h6.5v6H15v6.5H9V15H2.5V9H9z" fill="currentColor" />
    </svg>
  ), title: ["HEALTHCARE &", "SHIFT WORKERS"], text: "Keep frontline and shift-based teams informed and connected." },
  { key: "remote-teams", icon: I.monitor, title: ["MULTI-SITE &", "REMOTE TEAMS"], text: "Unify your organization with consistent, on-demand updates." },
];

const handle = [
  { image: "/images/internal/content-planning.jpg", title: ["CONTENT", "PLANNING"], items: ["Develop topics & episode plan", "Identify and prep speakers", "Structure for clarity & impact", "Align with your internal goals"] },
  { image: "/images/internal/internal-production.jpg", title: ["AUDIO & VIDEO", "PRODUCTION"], items: ["Studio or remote recording", "Professional audio & video setup", "Editing, cleanup & enhancement", "Show notes & internal summaries"] },
  { image: "/images/internal/private-distribution.jpg", title: ["PRIVATE", "DISTRIBUTION", "SUPPORT"], items: ["Platform setup & configuration", "Access and listener setup", "Episode uploads & release schedule", "Ongoing support & guidance"] },
];

const personIcon = (
  <svg className="hw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-1.5A5.5 5.5 0 0 1 9.5 14h5a5.5 5.5 0 0 1 5.5 5.5V21z" />
  </svg>
);

const phoneIcon = (
  <svg className="hw-ico ic-flow-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="2.5" />
    <circle cx="12" cy="12.5" r="2.6" />
    <path d="M10.5 5h3" />
  </svg>
);

const flow = [
  { icon: personIcon, title: ["LEADER’S", "MESSAGE"] },
  { icon: I.wave, title: ["PRIVATE", "PODCAST EPISODE"] },
  { icon: I.people, title: ["EMPLOYEE", "LISTENING"], extra: phoneIcon },
];

const plans = [
  { icon: I.mic, title: "PILOT SERIES", features: ["Ideal to get started and test the impact", "Strategy and episode planning (e.g., 3–5 episodes)", "Studio or remote recording", "Editing and private publishing setup"] },
  { icon: I.calendar, title: "ONGOING INTERNAL PODCAST", features: ["A consistent internal communication channel", "Monthly or bi-weekly production", "Editing, show notes, and release coordination", "Platform and access support"] },
  { icon: I.layers, title: "FULL-SERVICE COMMUNICATIONS", features: ["End-to-end podcast strategy, production, and management", "Ongoing content planning and guest coordination", "Multi-format options (audio and/or video)", "Distribution, engagement insights, and ongoing support"], featured: true },
];

const faqs = [
  { q: "Can episodes stay private?", a: "Yes. Episodes are shared through a private, access-controlled feed, so only the employees or teams you choose can listen." },
  { q: "Can employees listen on mobile?", a: "Absolutely. Employees can listen on their phones or desktops, whenever it suits their schedule." },
  { q: "Can we record remote leaders?", a: "Yes. We record leaders and team members remotely with a high-quality setup, alongside in-studio recordings." },
  { q: "Can we measure engagement?", a: "Depending on the platform you choose, you can review listening and engagement insights to shape future episodes." },
];

export default function InternalPodcastsMain() {
  return (
    <div className="hw ap ic">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero ic-hero">
          <img className="hp-hero-img" src="/images/internal/hero.jpg" alt="Executive recording an internal podcast with a host at Chicagoland Podcast Studio" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              INTERNAL COMMUNICATIONS PODCASTS <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              BRING YOUR PEOPLE
              <br />
              CLOSER. ONE EPISODE
              <br />
              AT A TIME<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              Private podcasts for leadership updates, employee{" "}
              <br />
              engagement, onboarding and training&mdash;produced with confidence.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                PLAN AN INTERNAL PODCAST
              </Link>
              <Link className="hp-btn hp-btn-ghost" href="#process">
                EXPLORE HOW IT WORKS
              </Link>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="ic-message">
        <div className="hw-in ic-message-grid">
          <div>
            <h2 className="hw-title pm-title">
              MAKE EVERY
              <br />
              MESSAGE COUNT<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <span className="hw-vline" aria-hidden="true" />
          <p className="ic-message-text">
            Go beyond overflowing emails and inconsistent updates. An internal podcast helps you connect with your
            people, share important information, build culture, and keep everyone aligned&mdash;no matter where they work.
          </p>
          <div className="ic-message-media">
            <img src="/images/internal/message.jpg" alt="Employee listening to a private company podcast on a phone" />
          </div>
        </div>
      </section>

      <section className="ap-services">
        <div className="hw-in ap-services-grid">
          <div>
            <h2 className="hw-title ap-services-title ic-dark-title">
              BUILT FOR
              <br />
              THE WAY
              <br />
              TEAMS
              <br />
              COMMUNICATE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ap-cards">
            {uses.map((u) => (
              <article className="ap-card ic-card" key={u.key}>
                <div className="ap-card-media">
                  <img src={`/images/internal/${u.key}.jpg`} alt="" loading="lazy" />
                </div>
                <div className="ap-card-body">
                  {u.icon}
                  <h3>
                    <Title lines={u.title} />
                  </h3>
                  <p>
                    <Lines lines={u.text} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ic-process" id="process">
        <div className="hw-in ic-process-grid">
          <div>
            <h2 className="hw-title pm-title">
              FROM
              <br />
              STUDIO
              <br />
              TO STAFF<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ol className="ic-steps">
            {steps.map((s) => (
              <li key={s.n}>
                <div className="ic-step-top">
                  {s.icon}
                  <span className="ap-step-num">{s.n}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="hw-options ic-options">
            <p>
              {I.mic}
              <b>IN-STUDIO RECORDING</b>
              <span>A professional, broadcast-quality experience at our Oakbrook Terrace studio.</span>
            </p>
            <i aria-hidden="true" />
            <p>
              {I.monitor}
              <b>REMOTE RECORDING</b>
              <span>Include leaders and team members from anywhere.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="ic-private">
        <div className="hw-in ic-private-grid">
          <div>
            <h2 className="hw-title pm-title">
              PRIVATE
              <br />
              BY DESIGN<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ic-phone">
            <img src="/images/internal/private-podcast.jpg" alt="Phone playing a private company podcast" loading="lazy" />
          </div>
          <div className="ic-private-cards">
            {privacy.map((p) => (
              <article key={p.title.join(" ")}>
                <h3>
                  {p.icon}
                  <span>
                    <Title lines={p.title} />
                  </span>
                </h3>
                <p>{p.text}</p>
              </article>
            ))}
            <p className="ic-private-note">Hosting and access features depend on selected platform and implementation.</p>
          </div>
        </div>
      </section>

      <section className="ic-who">
        <div className="hw-in ic-who-grid">
          <div>
            <h2 className="hw-title pm-title">
              WHO
              <br />
              IT HELPS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {audiences.map((a) => (
            <article className={`ic-who-card ic-who-card--${a.key}`} key={a.key}>
              <img src={`/images/internal/${a.key}.jpg`} alt="" loading="lazy" />
              <div>
                <h3>
                  {a.icon}
                  <span>
                    <Title lines={a.title} />
                  </span>
                </h3>
                <p>{a.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pm-support ic-handle">
        <div className="hw-in pm-support-grid">
          <div>
            <h2 className="hw-title pm-title">
              WHAT WE
              <br />
              HANDLE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {handle.map((h) => (
            <article className="pm-stage" key={h.title.join(" ")}>
              <img src={h.image} alt="" loading="lazy" />
              <div className="pm-stage-body">
                <h3 className="ic-handle-title">
                  <Title lines={h.title} />
                </h3>
                <ul>
                  {h.items.map((t) => (
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

      <section className="ic-flow">
        <div className="hw-in ic-flow-grid">
          <h2 className="hw-title ic-flow-title">
            ONE MESSAGE<Dot />
            <br />
            MANY WAYS TO CONNECT<Dot />
          </h2>
          <span className="ic-flow-slash" aria-hidden="true" />
          <ol className="ic-flow-steps">
            {flow.map((f) => (
              <li key={f.title.join(" ")}>
                {f.icon}
                <h3>
                  <Title lines={f.title} />
                </h3>
                {f.extra}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="ap-plans">
        <div className="hw-in ap-plans-grid">
          <div>
            <h2 className="hw-title ap-plans-title">
              CHOOSE YOUR
              <br />
              INTERNAL
              <br />
              PODCAST PLAN<Dot />
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

      <section className="hw-faq ap-faq">
        <div className="hw-in hw-faq-grid">
          <div>
            <h2 className="hw-title hw-faq-title">
              GOOD
              <br />
              QUESTIONS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-faq-list">
            {faqs.map((f) => (
              <details name="ic-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta
          title={["READY TO MAKE INTERNAL", "COMMUNICATION PERSONAL"]}
          buttonLabel="BOOK A CONSULTATION"
          image="/images/audio/cta-mic.webp"
        />
      </div>
    </div>
  );
}
