import Link from "next/link";
import PremiumCta from "@/components/PremiumCta";

const Arrow = () => (
  <svg
    aria-hidden="true"
    className="editorial-svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.4}
    viewBox="0 0 24 24"
  >
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
);

const team = [
  {
    name: "Tom Brown",
    role: "Founder & Managing Director",
    focus: "Vision · Client relationships · Production strategy",
    image: "/images/team/tom-brown.jpg",
    num: "01",
  },
  {
    name: "Luke Bechtel",
    role: "Studio Manager & Lead Editor",
    focus: "Session flow · Editing · Delivery",
    image: "/images/team/luke-bechtel.jpg",
    num: "02",
  },
  {
    name: "Shelby Steele",
    role: "Studio Engineer & Editor",
    focus: "Audio · Cameras · On-set support",
    image: "/images/team/shelby-steele.jpg",
    num: "03",
  },
];

export default function TeamMain() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell inner-hero-grid">
          <div className="inner-hero-copy">
            <p className="eyebrow">[ OAKBROOK TERRACE / ILLINOIS ]</p>
            <h1 className="inner-display">
              YOUR
              <br />
              STUDIO
              <br />
              <em>TEAM.</em>
            </h1>
            <p className="inner-lead">
              Our team handles everything from setup to delivery, so clients can
              stay focused on the conversation — not the gear.
            </p>
            <Link className="solid-btn" href="/booking">
              BOOK A SESSION <Arrow />
            </Link>
          </div>
          <div className="inner-hero-media">
            <img
              alt="Chicagoland Podcast Studio team at work"
              src="/images/session-open.jpg"
            />
            <span className="hero-media-stamp">TEAM / PRODUCTION</span>
            <span aria-hidden="true" className="media-corner media-tl" />
            <span aria-hidden="true" className="media-corner media-br" />
          </div>
        </div>
        <div className="shell">
          <div className="hero-baseline">
            <span>TECHNICALLY SHARP. EASY TO WORK WITH.</span>
            <span>CHICAGOLAND · ILLINOIS</span>
          </div>
        </div>
      </section>

      <section className="inner-section cream team-roster">
        <div className="shell">
          <div className="team-roster-head">
            <div>
              <div className="section-kicker">[ WHO YOU&apos;LL MEET ]</div>
              <h2 className="display-title">
                A SMOOTH,
                <br />
                LOW-STRESS
                <br />
                <span className="studio-blue">EXPERIENCE.</span>
              </h2>
            </div>
            <p className="lead-note team-roster-lead">
              Everyone on our team is both technically sharp and easy to work
              with. The goal is simple: a comfortable production experience and
              content you&apos;re genuinely excited to share.
            </p>
          </div>
          <div className="team-grid team-grid--premium">
            {team.map((member) => (
              <article className="team-card team-card--premium" key={member.name}>
                <div className="team-photo">
                  <img alt={member.name} src={member.image} />
                  <span className="team-num">{member.num} /</span>
                  <span aria-hidden="true" className="team-frame team-frame-tl" />
                  <span aria-hidden="true" className="team-frame team-frame-br" />
                </div>
                <div className="team-card-body">
                  <span className="team-role-label">TEAM</span>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-focus">{member.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-section cream">
        <div className="shell split-panel">
          <div className="image-panel">
            <img
              alt="Podcast recording support in studio"
              src="/images/workspace-open.jpg"
            />
            <span className="image-caption">SETUP TO DELIVERY</span>
          </div>
          <div>
            <div className="section-kicker">[ HOW WE WORK ]</div>
            <h2 className="display-title">
              YOU TALK.
              <br />
              WE HANDLE
              <br />
              THE REST.
            </h2>
            <p className="lead-note">
              From session prep and technical setup through editing and delivery,
              the team keeps production running so your focus stays on the story
              in the room.
            </p>
            <Link className="outline-dark-btn" href="/how-it-works">
              SEE HOW IT WORKS <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <PremiumCta
        eyebrow="[ READY WHEN YOU ARE ]"
        title={
          <>
            MEET THE
            <br />
            TEAM IN
            <br />
            <em>THE STUDIO.</em>
          </>
        }
        description="Tell us your format, guest count, and preferred dates. We'll help you plan the right session."
        image={"/images/session-open.jpg"}
        actionKicker="BOOK THE ROOM"
        buttonLabel="BOOK YOUR SESSION"
        baselineLeft="TECHNICALLY SHARP. EASY TO WORK WITH."
      />
    </>
  );
}
