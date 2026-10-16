import Link from "next/link";
import PremiumCta from "@/components/PremiumCta";

export default function HowItWorksMain() {
  return (
    <>
<section className="inner-hero"><div className="shell inner-hero-grid"><div className="inner-hero-copy"><p className="eyebrow">[ OAKBROOK TERRACE / ILLINOIS ]</p><h1 className="inner-display">LESS SETUP.<br/>MORE<br/><em>STORY.</em></h1><p className="inner-lead">A straightforward path from the first idea to a confident studio recording and polished deliverables.</p><Link className="solid-btn" href="/booking">PLAN YOUR SESSION <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></div><div className="inner-hero-media"><img alt="Chicagoland Podcast Studio recording environment" src="/images/workspace-open.jpg"/><span className="hero-media-stamp">CHICAGOLAND / STUDIO</span><span aria-hidden="true" className="media-corner media-tl"></span><span aria-hidden="true" className="media-corner media-br"></span></div></div><div className="shell"><div className="hero-baseline"><span>CREATED TO BE HEARD.</span><span>OAKBROOK TERRACE · ILLINOIS</span></div></div></section><section className="inner-section cream session-steps">
  <div className="shell">
    <div className="session-steps-head">
      <div>
        <p className="section-kicker session-steps-kicker">[ YOUR SESSION ]</p>
        <h2 className="display-title session-steps-title">
          FIVE STEPS.
          <br />
          ONE GREAT
          <br />
          <span className="studio-blue">RECORDING.</span>
        </h2>
      </div>
      <p className="lead-note session-steps-lead">
        Designed to keep the technical details in the background and the
        conversation in focus.
      </p>
    </div>
    <div className="timeline session-timeline">
      <article className="timeline-item session-step">
        <span className="session-step-num">01 /</span>
        <h3>CHOOSE YOUR FORMAT</h3>
        <p>
          Start with a solo, interview, panel or video podcast format. Compare
          session durations and capacity.
        </p>
        <b aria-hidden="true" className="session-step-arrow">
          <svg className="premium-arrow" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 19 19 5M8 5h11v11"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </b>
      </article>
      <article className="timeline-item session-step">
        <span className="session-step-num">02 /</span>
        <h3>RESERVE A TIME</h3>
        <p>
          Share preferred dates and the number of participants to begin your
          studio booking.
        </p>
        <b aria-hidden="true" className="session-step-arrow">
          <svg className="premium-arrow" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 19 19 5M8 5h11v11"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </b>
      </article>
      <article className="timeline-item session-step">
        <span className="session-step-num">03 /</span>
        <h3>WALK INTO THE STUDIO</h3>
        <p>
          Equipment, microphones and lighting are prepared for the agreed
          recording setup.
        </p>
        <b aria-hidden="true" className="session-step-arrow">
          <svg className="premium-arrow" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 19 19 5M8 5h11v11"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </b>
      </article>
      <article className="timeline-item session-step">
        <span className="session-step-num">04 /</span>
        <h3>RECORD WITH CONFIDENCE</h3>
        <p>
          Focus on your message while the recording workflow follows the chosen
          production plan.
        </p>
        <b aria-hidden="true" className="session-step-arrow">
          <svg className="premium-arrow" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 19 19 5M8 5h11v11"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </b>
      </article>
      <article className="timeline-item session-step">
        <span className="session-step-num">05 /</span>
        <h3>RECEIVE YOUR CONTENT</h3>
        <p>
          Get the raw files, edits and social clips specified in your package.
        </p>
        <b aria-hidden="true" className="session-step-arrow">
          <svg className="premium-arrow" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 19 19 5M8 5h11v11"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </b>
      </article>
    </div>
  </div>
</section><section className="inner-section cream"><div className="shell split-panel"><div className="image-panel"><img alt="PROFESSIONAL PODCAST ENVIRONMENT" src="/images/studio-room-b.jpg"/><span className="image-caption">PROFESSIONAL PODCAST ENVIRONMENT</span></div><div><div className="section-kicker">[ WHEN YOU ARRIVE ]</div><h2 className="display-title">SHOW UP.<br/>SETTLE IN.<br/>START CREATING.</h2><p className="lead-note">Chicagoland Podcast Studio is housed at Workspace Junction in Oakbrook Terrace, with convenient parking, comfortable seating and high-speed internet.</p><Link className="outline-dark-btn" href="/pricing">EXPLORE PACKAGES <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></div></div></section>
      <PremiumCta
        eyebrow="[ READY WHEN YOU ARE ]"
        title={
          <>
            LET&apos;S GET
            <br />
            <em>RECORDING.</em>
          </>
        }
        description="Tell us your format, guest count and preferred dates. We will help you choose a suitable session."
        image={"/images/session-duo.jpg"}
        actionKicker="BOOK THE ROOM"
        buttonLabel="BOOK YOUR SESSION"
        baselineLeft="LESS FRICTION. MORE RECORDING."
      />
    </>
  );
}
