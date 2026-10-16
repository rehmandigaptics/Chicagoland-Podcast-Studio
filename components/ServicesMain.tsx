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

const services = [
  {
    num: "01",
    title: "Coworking",
    description:
      "Flexible shared workspace with high-speed Wi-Fi, amenities, and a productive community environment.",
    icon: (
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    ),
  },
  {
    num: "02",
    title: "Dedicated Desks",
    description:
      "Your own reserved desk in a professional setting — settle in and focus without the daily scramble.",
    icon: (
      <>
        <rect height="8" rx="1" width="18" x="3" y="10" />
        <path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M8 21v-3M16 21v-3" />
      </>
    ),
  },
  {
    num: "03",
    title: "Business Address",
    description:
      "A professional Oakbrook Terrace address for your company registration, branding, and correspondence.",
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    num: "04",
    title: "Event Space",
    description:
      "Host workshops, launches, panels, and private gatherings in a flexible, presentation-ready room.",
    icon: (
      <>
        <path d="M4 6h16v12H4zM8 6V4m8 2V4M4 10h16" />
      </>
    ),
  },
  {
    num: "05",
    title: "Podcast Studio",
    description:
      "Fully equipped audio and video recording for creators, founders, and brands — ready when you walk in.",
    icon: (
      <>
        <rect height="13" rx="3" width="6" x="9" y="2" />
        <path d="M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8" />
      </>
    ),
  },
  {
    num: "06",
    title: "Virtual Offices",
    description:
      "Operate remotely with a local presence — phone support, address services, and professional credibility.",
    icon: (
      <>
        <rect height="14" rx="2" width="18" x="3" y="4" />
        <path d="M3 10h18M8 15h.01M12 15h.01M16 15h.01" />
      </>
    ),
  },
  {
    num: "07",
    title: "Meeting Rooms",
    description:
      "Book private rooms for client calls, interviews, team sessions, and focused collaboration.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 21v-2a7 7 0 0 1 14 0v2M17 5a3 3 0 0 1 0 6m4 10v-2a6 6 0 0 0-4-5.7" />
      </>
    ),
  },
  {
    num: "08",
    title: "Mailbox",
    description:
      "Secure mail handling and package receipt so nothing important gets missed while you're away.",
    icon: (
      <>
        <path d="M4 6h16v12H4zM4 8l8 5 8-5" />
      </>
    ),
  },
  {
    num: "09",
    title: "Community",
    description:
      "Connect with founders, creators, and professionals through events, networking, and shared energy.",
    icon: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M4 20v-1a6 6 0 0 1 8-5.7M20 20v-1a6 6 0 0 0-6-5.9M17 5a3 3 0 1 1-2 5.2" />
      </>
    ),
  },
];

export default function ServicesMain() {
  return (
    <>
      <section className="inner-hero dark-hero">
        <div className="shell inner-hero-grid">
          <div className="inner-hero-copy">
            <p className="eyebrow">[ OAKBROOK TERRACE / ILLINOIS ]</p>
            <h1 className="inner-display">
              WORK.
              <br />
              CREATE.
              <br />
              <em>CONNECT.</em>
            </h1>
            <p className="inner-lead">
              From flexible coworking and meeting rooms to a fully equipped
              podcast studio — everything you need under one roof at Workspace
              Junction.
            </p>
            <Link className="solid-btn" href="/booking">
              PLAN YOUR VISIT <Arrow />
            </Link>
          </div>
          <div className="inner-hero-media">
            <img
              alt="Workspace Junction coworking and studio environment"
              src="/images/workspace-open.jpg"
            />
            <span className="hero-media-stamp">WORKSPACE JUNCTION</span>
            <span aria-hidden="true" className="media-corner media-tl" />
            <span aria-hidden="true" className="media-corner media-br" />
          </div>
        </div>
        <div className="shell">
          <div className="hero-baseline">
            <span>ONE ADDRESS. MANY WAYS TO WORK.</span>
            <span>OAKBROOK TERRACE · ILLINOIS</span>
          </div>
        </div>
      </section>

      <section className="inner-section cream services-catalog">
        <div className="shell">
          <div className="services-catalog-head">
            <div>
              <p className="section-kicker services-catalog-kicker">
                [ SERVICES ]
              </p>
              <h2 className="display-title services-catalog-title">
                EVERYTHING
                <br />
                YOU NEED
                <br />
                TO <span className="studio-blue">GROW.</span>
              </h2>
            </div>
            <p className="lead-note services-catalog-lead">
              Workspace, production, events, and community — built for
              entrepreneurs, creators, and teams in Chicagoland.
            </p>
          </div>
          <div className="feature-grid services-nine">
            {services.map((service) => (
              <article
                className="feature-card service-tile"
                data-card={service.num}
                key={service.num}
              >
                <div className="service-tile-top">
                  <span className="feature-num">{service.num} /</span>
                </div>
                <div className="feature-icon service-tile-icon">
                  <svg
                    aria-hidden="true"
                    className="editorial-svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-section cream">
        <div className="shell split-panel">
          <div className="image-panel">
            <img
              alt="Podcast studio at Workspace Junction"
              src="/images/studio-room-a.jpg"
            />
            <span className="image-caption">PODCAST STUDIO</span>
          </div>
          <div>
            <div className="section-kicker">[ INSIDE THE SPACE ]</div>
            <h2 className="display-title">
              WORK BY DAY.
              <br />
              RECORD
              <br />
              ANYTIME.
            </h2>
            <p className="lead-note">
              Pair your coworking membership with studio sessions, meeting
              rooms, and event space — all in one professional environment.
            </p>
            <Link className="outline-dark-btn" href="/studio">
              EXPLORE THE STUDIO <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <PremiumCta
        eyebrow="[ READY WHEN YOU ARE ]"
        title={
          <>
            FIND YOUR
            <br />
            <em>FIT.</em>
          </>
        }
        description="Tell us what you need — a desk, a studio session, or a full workspace plan — and we will help you get started."
        image={"/images/workspace-open.jpg"}
        actionKicker="START HERE"
        buttonLabel="GET IN TOUCH"
        actionNote="Coworking · Studio · Meeting rooms"
        baselineLeft="ONE ADDRESS. MANY WAYS TO WORK."
      />
    </>
  );
}
