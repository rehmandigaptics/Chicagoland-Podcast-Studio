import Link from "next/link";

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

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="prod-check"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={18}
    height={18}
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function ProductionMain() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="prod-hero">
        <div className="prod-hero-bg">
          <img
            alt="Chicagoland Podcast Studio recording session"
            src="/images/prod-hero.webp"
          />
          <div className="prod-hero-overlay" />
        </div>
        <div className="shell prod-hero-grid">
          <div className="prod-hero-copy">
            <p className="prod-hero-location">OAKBROOK TERRACE / ILLINOIS</p>
            <h1 className="prod-hero-title">
              PODCAST
              <br />
              PRODUCTION.
              <br />
              FROM RECORDING
              <br />
              TO <span className="prod-blue">RELEASE.</span>
            </h1>
            <p className="prod-hero-desc">
              Professional audio, video, and post-production
              <br />
              for creators, founders, and brands.
            </p>
            <div className="prod-hero-actions">
              <Link className="solid-btn" href="/booking">
                GET A PRODUCTION QUOTE
              </Link>
              <Link className="prod-outline-btn" href="#services">
                SEE OUR SERVICES
              </Link>
            </div>
          </div>
          <div className="prod-hero-visual">
            <div className="prod-hero-badge">
              <img
                src="/images/logo-chicagoland.png"
                alt="Chicagoland Podcast Studio"
                className="prod-hero-badge-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Baseline Strip ── */}
      <div className="prod-baseline-strip">
        <div className="shell">
          <div className="prod-hero-baseline">
            <span>IN-STUDIO RECORDING</span>
            <span className="prod-baseline-sep">/</span>
            <span>AUDIO &amp; VIDEO EDITING</span>
            <span className="prod-baseline-sep">/</span>
            <span>SOCIAL-READY CLIPS</span>
            <span className="prod-baseline-sep">/</span>
            <span>ONGOING PRODUCTION</span>
          </div>
        </div>
      </div>

      {/* ── YOUR VOICE / OUR PRODUCTION TEAM ── */}
      <section className="prod-section prod-voice">
        <div className="shell prod-voice-grid">
          <div className="prod-voice-copy">
            <h2 className="prod-section-title">
              <em>YOUR VOICE.</em>
              <br />
              OUR PRODUCTION TEAM.
            </h2>
            <div className="prod-title-rule" />
            <p className="prod-voice-text">
              A great podcast is more than a recording — it&apos;s a well-produced
              show that sounds great, looks professional, and connects with
              the right audience. Our team handles the technical details, creative
              editing, and polish so you can focus on the conversation.
            </p>
          </div>
          <div className="prod-voice-media">
            <img
              alt="Video editing workspace"
              src="/images/prod-voice-media.webp"
            />
            <div className="prod-waveform" aria-hidden="true">
              <div className="prod-waveform-bars">
                {Array.from({ length: 60 }).map((_, i) => (
                  <span
                    key={i}
                    style={{ height: `${15 + Math.sin(i * 0.4) * 35 + ((i * 17 + 7) % 20)}%` }}
                  />
                ))}
              </div>
              <div className="prod-waveform-line" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PODCAST PRODUCTION SERVICES ── */}
      <section className="prod-section prod-services" id="services">
        <div className="shell prod-services-layout">
          <div className="prod-services-head">
            <h2 className="prod-section-title">
              OUR PODCAST
              <br />
              PRODUCTION
              <br />
              SERVICES
            </h2>
            <div className="prod-title-rule" />
          </div>
          <div className="prod-services-grid">
            <article className="prod-service-card">
              <div className="prod-service-card-content">
                <div className="prod-service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
                  </svg>
                </div>
                <h3>AUDIO EDITING</h3>
                <p>Clean, cohesive, and professional-sounding episodes.</p>
              </div>
              <div className="prod-service-card-visual">
                <img src="/images/prod-audio.webp" alt="" aria-hidden="true" />
              </div>
            </article>
            <article className="prod-service-card">
              <div className="prod-service-card-content">
                <div className="prod-service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <h3>VIDEO PODCAST EDITING</h3>
                <p>Polished, multicamera edits with a professional look.</p>
              </div>
              <div className="prod-service-card-visual">
                <img src="/images/prod-video.webp" alt="" aria-hidden="true" />
              </div>
            </article>
            <article className="prod-service-card">
              <div className="prod-service-card-content">
                <div className="prod-service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
                  </svg>
                </div>
                <h3>MIXING &amp; MASTERING</h3>
                <p>Balanced, consistent audio that&apos;s ready to publish.</p>
              </div>
              <div className="prod-service-card-visual">
                <img src="/images/prod-mixing.webp" alt="" aria-hidden="true" />
              </div>
            </article>
            <article className="prod-service-card">
              <div className="prod-service-card-content">
                <div className="prod-service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <h3>SHORT-FORM CLIPS</h3>
                <p>Highlight moments and social-ready content to grow your audience.</p>
              </div>
              <div className="prod-service-card-visual">
                <img src="/images/prod-shortform.webp" alt="" aria-hidden="true" />
              </div>
            </article>
            <article className="prod-service-card">
              <div className="prod-service-card-content">
                <div className="prod-service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <path d="M15 10l4.553-2.069A1 1 0 0121 8.879V15.12a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
                <h3>MULTI-CAMERA PRODUCTION</h3>
                <p>Dynamic, high-quality video recording for a cinematic, engaging show.</p>
              </div>
              <div className="prod-service-card-visual">
                <img src="/images/prod-multicam.webp" alt="" aria-hidden="true" />
              </div>
            </article>
            <article className="prod-service-card">
              <div className="prod-service-card-content">
                <div className="prod-service-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20}>
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><circle cx="12" cy="10" r="2" /><path d="M8 10a4 4 0 018 0" />
                  </svg>
                </div>
                <h3>REMOTE GUEST SUPPORT</h3>
                <p>Bring in guests from anywhere with a seamless, high-quality remote setup (supplied planning).</p>
              </div>
              <div className="prod-service-card-visual">
                <img src="/images/prod-remote.webp" alt="" aria-hidden="true" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="prod-section prod-how">
        <div className="shell prod-how-layout">
          <div className="prod-how-head">
            <h2 className="prod-section-title">
              HOW
              <br />
              IT WORKS.
            </h2>
            <div className="prod-title-rule" />
          </div>
          <div className="prod-steps">
            <article className="prod-step">
              <span className="prod-step-num">01</span>
              <h3>PLAN</h3>
              <p>Align on your goals, format, guests, and production needs.</p>
            </article>
            <article className="prod-step">
              <span className="prod-step-num">02</span>
              <h3>RECORD OR UPLOAD</h3>
              <p>Record in our Oakbrook Terrace studio or send us your files.</p>
            </article>
            <article className="prod-step">
              <span className="prod-step-num">03</span>
              <h3>EDIT &amp; REFINE</h3>
              <p>Our team edits, cleans up, and polishes your episode (audio and video).</p>
            </article>
            <article className="prod-step">
              <span className="prod-step-num">04</span>
              <h3>REVIEW &amp; RELEASE</h3>
              <p>Review the final cut, request any adjustments, and publish to your channels.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR PRODUCTION LEVEL ── */}
      <section className="prod-section prod-levels">
        <div className="shell prod-levels-layout">
          <div className="prod-levels-head">
            <h2 className="prod-section-title">
              CHOOSE YOUR
              <br />
              PRODUCTION
              <br />
              LEVEL.
            </h2>
            <div className="prod-title-rule" />
            <p className="prod-levels-desc">
              Flexible production options to match your goals, format, and budget
              — from essential post-production to a fully produced, video-ready show.
            </p>
          </div>
          <div className="prod-levels-cards">
            <article className="prod-level-card">
              <h3>AUDIO ESSENTIALS</h3>
              <p className="prod-level-lead">
                Professional audio production for a polished, ready-to-publish podcast.
              </p>
              <ul className="prod-level-features">
                <li><CheckIcon /> Audio editing &amp; cleanup</li>
                <li><CheckIcon /> Mixing &amp; mastering</li>
                <li><CheckIcon /> Branded intro/outro (optional)</li>
                <li><CheckIcon /> Publish-ready audio files</li>
              </ul>
              <Link className="prod-level-btn" href="/booking">
                REQUEST A QUOTE
              </Link>
            </article>
            <article className="prod-level-card">
              <h3>VIDEO + AUDIO</h3>
              <p className="prod-level-lead">
                A complete podcast production with both high-quality video and audio.
              </p>
              <ul className="prod-level-features">
                <li><CheckIcon /> Multi-camera studio recording</li>
                <li><CheckIcon /> Audio &amp; video editing</li>
                <li><CheckIcon /> Mixing, mastering &amp; color polish</li>
                <li><CheckIcon /> Episode files for podcast and video platforms</li>
              </ul>
              <Link className="prod-level-btn" href="/booking">
                REQUEST A QUOTE
              </Link>
            </article>
            <article className="prod-level-card prod-level-card--featured">
              <h3>FULL PRODUCTION</h3>
              <p className="prod-level-lead">
                A comprehensive, end-to-end podcast production solution with added content support.
              </p>
              <ul className="prod-level-features">
                <li><CheckIcon /> Planning &amp; production guidance</li>
                <li><CheckIcon /> Studio recording (audio + multi-camera video)</li>
                <li><CheckIcon /> Full post-production (edit, mix, master, color)</li>
                <li><CheckIcon /> Social-ready clips for added reach</li>
              </ul>
              <Link className="prod-level-btn prod-level-btn--featured" href="/booking">
                REQUEST A QUOTE
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── EXPLORE THE FINISHED RESULT ── */}
      <section className="prod-section prod-results">
        <div className="shell prod-results-layout">
          <div className="prod-results-head">
            <h2 className="prod-section-title">
              EXPLORE THE
              <br />
              FINISHED RESULT.
            </h2>
            <div className="prod-title-rule" />
            <p className="prod-results-desc">
              See examples of fully produced podcasts recorded and edited by our team.
            </p>
          </div>
          <div className="prod-results-videos">
            <div className="prod-video-preview">
              <img src="/images/prod-result-female.webp" alt="Produced podcast example" />
              <div className="prod-video-overlay">
                <button type="button" className="prod-play-btn" aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </button>
              </div>
              <div className="prod-video-controls" aria-hidden="true">
                <span className="prod-ctrl-play">▶</span>
                <div className="prod-ctrl-bar"><div className="prod-ctrl-progress" /></div>
                <span className="prod-ctrl-icons">◀◀ ▶▶</span>
              </div>
            </div>
            <div className="prod-video-preview">
              <img src="/images/prod-result-male.webp" alt="Produced podcast example" />
              <div className="prod-video-overlay">
                <button type="button" className="prod-play-btn" aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </button>
              </div>
              <div className="prod-video-controls" aria-hidden="true">
                <span className="prod-ctrl-play">▶</span>
                <div className="prod-ctrl-bar"><div className="prod-ctrl-progress" /></div>
                <span className="prod-ctrl-icons">◀◀ ▶▶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="prod-section prod-faq">
        <div className="shell prod-faq-layout">
          <div className="prod-faq-head">
            <h2 className="prod-section-title">
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTIONS.
            </h2>
            <div className="prod-title-rule" />
          </div>
          <div className="prod-faq-items">
            <div className="accordion" id="prodFaq">
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                    aria-expanded="false"
                    aria-controls="faq1"
                  >
                    Can I record both audio and video in the studio?
                  </button>
                </h3>
                <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#prodFaq">
                  <div className="accordion-body">
                    Yes. Our Oakbrook Terrace studio is equipped for both audio-only
                    and multi-camera video recording. We handle the technical setup
                    so you can focus on your conversation.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                    aria-expanded="false"
                    aria-controls="faq2"
                  >
                    Do you work with remote guests?
                  </button>
                </h3>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#prodFaq">
                  <div className="accordion-body">
                    Absolutely. We provide remote guest support with supplied
                    planning and high-quality recording guidance so your remote
                    participants sound and look professional.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                    aria-expanded="false"
                    aria-controls="faq3"
                  >
                    What&apos;s included in post-production?
                  </button>
                </h3>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#prodFaq">
                  <div className="accordion-body">
                    Post-production includes audio editing, cleanup, mixing,
                    mastering, and — depending on your package — video editing,
                    color grading, and social-ready clips.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="prod-cta">
        <div className="prod-cta-bg" aria-hidden="true">
          <img src="/images/prod-mic-cta.webp" alt="" />
        </div>
        <div className="shell prod-cta-inner">
          <div className="prod-cta-copy">
            <h2 className="prod-cta-title">
              READY TO
              <br />
              MAKE YOURSELF
              <br />
              HEARD<span className="prod-blue">?</span>
            </h2>
          </div>
          <div className="prod-cta-divider" aria-hidden="true">/</div>
          <div className="prod-cta-action">
            <p className="prod-cta-lead">LET&apos;S PLAN YOUR NEXT EPISODE.</p>
            <Link className="prod-cta-btn" href="/booking">
              BOOK A PRODUCTION CALL
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
