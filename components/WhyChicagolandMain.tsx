import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import { Check, I } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const reasons = [
  { icon: I.bars, title: ["PROFESSIONAL", "QUALITY"], text: "Broadcast-ready audio and video that makes your show stand out.", image: "professional-quality" },
  { icon: I.camera, title: ["FULL-SERVICE", "SUPPORT"], text: "From recording and editing to publishing and promotion, we handle the details.", image: "full-service" },
  { icon: I.monitor, title: ["FLEXIBLE", "FORMATS"], text: "Pods, interviews, roundtables, training, internal communications and more.", image: "flexible-formats" },
  { icon: I.people, title: ["EXPERT", "TEAM"], text: "A friendly, experienced team that guides you every step of the way.", image: "expert-team" },
  { icon: I.pin, title: ["CONVENIENT", "LOCATION"], text: "Modern, comfortable studio in Oakbrook Terrace with free parking.", image: "location" },
  { icon: I.layers, title: ["MORE THAN", "A STUDIO"], text: "Part of Workspace Junction — a creative hub for podcasts, videos, meetings, and events.", image: "workspace" },
];

const different = [
  { icon: I.broadcast, title: ["ALL-IN-ONE", "SOLUTION"], text: "Record, produce, edit, and grow — all under one roof." },
  { icon: I.mic, title: ["CREATOR", "FRIENDLY"], text: "Designed for first-time and experienced podcasters alike." },
  { icon: I.timer, title: ["FAST", "TURNAROUND"], text: "Get your content edited and ready to publish quickly." },
  { icon: I.sliders, title: ["STATE-OF-THE-ART", "EQUIPMENT"], text: "Pro cameras, broadcast switching, and premium audio." },
  { icon: I.bars, title: ["BUILT FOR", "GROWTH"], text: "Production + strategy to help you reach a bigger audience." },
];

const glance = [
  "1–4 person podcast setup",
  "Remote guest (virtual) capable",
  "Live switching & multi-camera",
  "Professional audio (RØDECaster Pro II)",
  "Blackmagic ATEM video production",
  "In-studio TV / 85” digital whiteboard",
  "Comfortable, modern environment",
  "Free on-site parking",
];

const quotes = [
  { text: "The team made the whole process easy. The studio is professional, well-equipped, and the quality is outstanding.", name: "Omar K.", role: "Podcast Host & Entrepreneur", image: "omar" },
  { text: "From recording to final edits, everything was handled with care and professionalism. Highly recommend!", name: "Dr. Aisha R.", role: "Business & Community Leader", image: "aisha" },
  { text: "A great space for high-quality content. The team is knowledgeable, creative, and truly supportive.", name: "Mark T.", role: "Founder & CEO", image: "mark" },
];

const Two = ({ t }: { t: string[] }) => (
  <>
    {t[0]}
    <br />
    {t[1]}
  </>
);

export default function WhyChicagolandMain() {
  return (
    <div className="hw wy">
      <div className="hp">
        <section className="hp-hero hp-hero--page">
          <img className="hp-hero-img" src="/images/why/hero.webp" alt="Chicagoland Podcast Studio recording table with microphones and headphones" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              WHY CHICAGOLAND PODCAST STUDIO <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              THE RIGHT STUDIO
              <br />
              FOR YOUR PODCAST<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              Professional space, expert support, and a complete
              <br />
              podcast solution &mdash; all in one place.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">BOOK A STUDIO SESSION</Link>
              <Link className="hp-btn hp-btn-ghost" href="/why-chicagoland-podcast-studio">TAKE A STUDIO TOUR</Link>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="wy-intro">
        <div className="hw-in wy-intro-grid">
          <div>
            <h2 className="hw-title wy-title">
              WHY
              <br />
              CHOOSE
              <br />
              US<Dot c="?" />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <p className="wy-intro-text">
            We combine a professional studio, modern equipment, expert production, and a supportive team to help you create high-quality podcasts, videos, and content that gets results.
          </p>
          <img className="wy-intro-strip" src="/images/why/equipment.webp" alt="Studio camera, video switcher, audio mixer and editing workstation" />
        </div>
      </section>

      <section className="wy-reasons">
        <div className="hw-in wy-reasons-grid">
          {reasons.map((r) => (
            <article className="wy-reason" key={r.image}>
              <img src={`/images/why/${r.image}.webp`} alt="" loading="lazy" />
              <div className="wy-reason-copy">
                <h3>
                  {r.icon}
                  <span><Two t={r.title} /></span>
                </h3>
                <p>{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wy-diff">
        <div className="hw-in wy-diff-grid">
          <div>
            <h2 className="hw-title wy-title">
              WHAT
              <br />
              MAKES US
              <br />
              DIFFERENT<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {different.map((d) => (
            <div className="wy-diff-item" key={d.title.join()}>
              {d.icon}
              <h3><Two t={d.title} /></h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wy-glance">
        <img className="wy-glance-img" src="/images/why/glance.webp" alt="Chicagoland lounge podcast set with two chairs and microphones" loading="lazy" />
        <div className="wy-glance-shade" aria-hidden="true" />
        <div className="hw-in wy-glance-row">
          <h2 className="hw-title wy-title wy-glance-title">
            OUR
            <br />
            STUDIO
            <br />
            AT A GLANCE<Dot />
          </h2>
          <ul className="wy-glance-list">
            {glance.map((g) => (
              <li key={g}>
                <Check />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wy-quotes">
        <div className="hw-in wy-quotes-grid">
          <div>
            <h2 className="hw-title wy-title">
              WHAT
              <br />
              OUR CLIENTS
              <br />
              SAY<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {quotes.map((q) => (
            <figure className="wy-quote" key={q.name}>
              <span className="wy-quote-mark" aria-hidden="true">&ldquo;</span>
              <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
              <figcaption>
                <img src={`/images/why/${q.image}.webp`} alt="" loading="lazy" />
                <span>
                  <strong>{q.name}</strong>
                  {q.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="hp">
        <StudioCta title={["READY TO CREATE", "YOUR PODCAST"]} buttonLabel="BOOK A STUDIO SESSION" />
      </div>
    </div>
  );
}
