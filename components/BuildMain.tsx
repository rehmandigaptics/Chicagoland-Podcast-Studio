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

export default function BuildMain() {
  return (
    <>
      <section className="inner-hero dark-hero">
        <div className="shell inner-hero-grid">
          <div className="inner-hero-copy">
            <p className="eyebrow">[ OAKBROOK TERRACE / ILLINOIS ]</p>
            <h1 className="inner-display">
              BUILD THE
              <br />
              STUDIO OF
              <br />
              <em>YOUR DREAMS.</em>
            </h1>
            <p className="inner-lead">
              Expert gear selection, on-site installation, and full setup so
              your podcast studio is ready to create from day one. Build
              programs start at $35,000.
            </p>
            <Link className="solid-btn" href="/booking">
              START A BUILD CONVERSATION <Arrow />
            </Link>
          </div>
          <div className="inner-hero-media">
            <img
              alt="Custom podcast studio build and installation"
              src="/images/studio-room-d.jpg"
            />
            <span className="hero-media-stamp">BUILD / INSTALL / SETUP</span>
            <span aria-hidden="true" className="media-corner media-tl" />
            <span aria-hidden="true" className="media-corner media-br" />
          </div>
        </div>
        <div className="shell">
          <div className="hero-baseline">
            <span>GEAR. ACOUSTICS. INSTALLATION.</span>
            <span>BUDGETS FROM $35,000</span>
          </div>
        </div>
      </section>

      <section className="inner-section cream build-program">
        <div className="shell">
          <div className="build-program-head">
            <div>
              <p className="section-kicker build-program-kicker">
                [ THE BUILD PROGRAM ]
              </p>
              <h2 className="display-title build-program-title">
                FROM VISION
                <br />
                TO FIRST
                <br />
                <span className="studio-blue">RECORDING.</span>
              </h2>
            </div>
            <p className="lead-note build-program-lead">
              We help creative individuals and businesses design and build
              professional podcast studios — selecting the right gear,
              installing it on site, and making sure everything is ready to rock
              from day one.
            </p>
          </div>
          <div className="feature-grid build-steps">
            <article className="feature-card build-step" data-card="1">
              <div className="build-step-top">
                <span className="feature-num">01 /</span>
              </div>
              <div className="feature-icon build-step-icon">
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
                  <path d="M4 20h4L20 8a3 3 0 0 0-4-4L4 16v4Zm9-13 4 4" />
                </svg>
              </div>
              <h3>Plan the room</h3>
              <p>
                Define your format, capacity, visual direction, and production
                goals before a single cable is run.
              </p>
            </article>
            <article className="feature-card build-step" data-card="2">
              <div className="build-step-top">
                <span className="feature-num">02 /</span>
              </div>
              <div className="feature-icon build-step-icon">
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
                  <rect height="13" rx="3" width="6" x="9" y="2" />
                  <path d="M5 10a7 7 0 0 0 14 0M12 17v5m-4 0h8" />
                </svg>
              </div>
              <h3>Select the gear</h3>
              <p>
                Cameras, microphones, lighting, audio, and networking chosen to
                fit your budget and content style.
              </p>
            </article>
            <article className="feature-card build-step" data-card="3">
              <div className="build-step-top">
                <span className="feature-num">03 /</span>
              </div>
              <div className="feature-icon build-step-icon">
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
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3>Install &amp; set up</h3>
              <p>
                On-site installation and configuration so your studio is
                production-ready without the technical overwhelm.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="inner-section cream mission-section">
        <div className="shell split-panel mission-panel">
          <div className="image-panel mission-media">
            <img
              alt="Professional podcast studio gear installation"
              src="/images/studio-room-c.jpg"
              loading="lazy"
            />
            <span className="image-caption mission-caption">WHY WE BUILD</span>
            <span aria-hidden="true" className="mission-corner mission-tl" />
            <span aria-hidden="true" className="mission-corner mission-br" />
          </div>
          <div className="mission-copy">
            <p className="section-kicker mission-kicker">[ OUR MISSION ]</p>
            <h2 className="display-title mission-title">
              SEAMLESS
              <br />
              SETUP.
              <br />
              SERIOUS
              <br />
              <span className="studio-blue">RESULTS.</span>
            </h2>
            <p className="lead-note mission-lead">
              We empower creators and businesses to produce high-quality video
              podcasts by building and setting up professional-grade studios.
              The process stays stress-free so you can focus on great content —
              not the gear list.
            </p>
            <Link className="outline-dark-btn mission-cta" href="/booking">
              DISCUSS YOUR BUILD <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="inner-section charcoal testimonials-section">
        <div className="shell">
          <div className="testimonials-head">
            <div>
              <p className="section-kicker testimonials-kicker">
                [ WHAT OTHERS ARE SAYING ]
              </p>
              <h2 className="display-title testimonials-title">
                BUILT FOR
                <br />
                CREATORS
                <br />
                WHO <span className="studio-blue">SHIP.</span>
              </h2>
            </div>
            <p className="lead-note testimonials-lead">
              From first install to weekly production — studios that get used,
              not just admired.
            </p>
          </div>
          <div className="testimonial-grid testimonials-grid">
            <blockquote className="testimonial-card testimonial-quote">
              <span className="testimonial-mark" aria-hidden="true">
                ”
              </span>
              <span className="testimonial-num">01 /</span>
              <p>
                Hiring Tom and the team made all the difference taking our
                Podcast Studio to the next level. We now produce weekly videos
                here and the team loves it!
              </p>
              <cite>
                <span className="testimonial-rule" aria-hidden="true" />
                Troy M.
              </cite>
              <span aria-hidden="true" className="testimonial-corner testimonial-tl" />
              <span aria-hidden="true" className="testimonial-corner testimonial-br" />
            </blockquote>
            <blockquote className="testimonial-card testimonial-quote">
              <span className="testimonial-mark" aria-hidden="true">
                ”
              </span>
              <span className="testimonial-num">02 /</span>
              <p>
                Their knowledge on the industry is second to none. They were
                able to buy all of the gear and set it up within our budget and
                now we have a great studio for content creation and other
                business functions. Highly recommend!
              </p>
              <cite>
                <span className="testimonial-rule" aria-hidden="true" />
                John B.
              </cite>
              <span aria-hidden="true" className="testimonial-corner testimonial-tl" />
              <span aria-hidden="true" className="testimonial-corner testimonial-br" />
            </blockquote>
          </div>
        </div>
      </section>

      <PremiumCta
        eyebrow="[ READY TO BUILD ]"
        title={
          <>
            TURN YOUR
            <br />
            VISION INTO
            <br />
            A <em>STUDIO.</em>
          </>
        }
        description="Tell us about your space, budget, and production goals. We will help you plan a build that fits."
        image={"/images/studio-room-d.jpg"}
        actionKicker="BUILD PROGRAM"
        buttonLabel="CONTACT THE BUILD TEAM"
        actionNote="Custom builds from $35,000"
        baselineLeft="GEAR. ACOUSTICS. INSTALLATION."
      />
    </>
  );
}
