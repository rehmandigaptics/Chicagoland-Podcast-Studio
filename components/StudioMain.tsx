import Link from "next/link";
import PremiumCta from "@/components/PremiumCta";
import StudioExperiences from "@/components/StudioExperiences";

export default function StudioMain() {
  return (
    <>
<section className="inner-hero"><div className="shell inner-hero-grid"><div className="inner-hero-copy"><p className="eyebrow">[ OAKBROOK TERRACE / ILLINOIS ]</p><h1 className="inner-display">CREATE.<br/><em>RECORD.</em><br/>BE HEARD.</h1><p className="inner-lead">Chicagoland Podcast Studio at Workspace Junction is a fully equipped recording environment for podcasters, entrepreneurs, creators and business leaders. Professional audio, multi-camera video and studio lighting—without the complexity of recording at home.</p><Link className="solid-btn" href="/booking">BOOK A SESSION <svg className="premium-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"/></svg></Link></div><div className="inner-hero-media"><img alt="Professional podcast recording environment at Chicagoland Podcast Studio" src="/images/studio-room-b.jpg"/><span className="hero-media-stamp">THE STUDIO / OAKBROOK TERRACE</span></div></div><div className="shell"><div className="hero-baseline"><span>CREATE. RECORD. AMPLIFY YOUR VOICE.</span><span>SCROLL TO EXPLORE ↓</span></div></div></section>
<section className="inner-section cream"><div className="shell"><p className="section-kicker">[ 01 / WHY RECORD HERE ]</p><div className="studio-section-head"><h2 className="display-title">ALL THE TOOLS.<br/>NONE OF THE<br/><span className="studio-blue">FRICTION.</span></h2><p className="lead-note">A professional setup that removes the technical barriers, so you can focus on the story and the people in front of you.</p></div><div className="studio-benefits">
<article><span>01 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><rect height="12" rx="2" width="13" x="3" y="6"></rect><path d="m16 10 5-3v10l-5-3"></path><circle cx="9.5" cy="12" r="2.5"></circle></svg></span><h3>SMART AUTO-TRACKING VIDEO</h3><p>Intelligent camera tracking helps keep the focus on the speaker for dynamic video podcasts.</p></article>
<article><span>02 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M3 12h2l2-6 4 12 3-9 2 3h5"></path></svg></span><h3>SOUND-TREATED RECORDING</h3><p>Professional acoustic treatment supports clean, clear sound with fewer background distractions.</p></article>
<article><span>03 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M2 9a15 15 0 0 1 20 0M5 13a10 10 0 0 1 14 0M9 17a5 5 0 0 1 6 0"></path><circle cx="12" cy="21" r="1"></circle></svg></span><h3>STREAMING-READY WIFI</h3><p>High-speed connectivity supports livestreaming, uploading and remote collaboration.</p></article>
<article><span>04 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M4 8h13v7a6.5 6.5 0 0 1-13 0V8ZM17 9h2a3 3 0 1 1 0 6h-2M3 21h16"></path></svg></span><h3>COMFORT BUILT IN</h3><p>Ergonomic seating, complimentary gourmet coffee and an environment designed for creative work.</p></article>
</div></div></section>
<section className="inner-section charcoal equipment-section">
  <div className="shell">
    <div className="studio-section-head equipment-head">
      <div>
        <p className="section-kicker equipment-kicker">[ 02 / PROFESSIONAL EQUIPMENT ]</p>
        <h2 className="display-title equipment-title">
          READY WHEN
          <br />
          YOU <span className="studio-blue">WALK IN.</span>
        </h2>
      </div>
      <p className="lead-note equipment-lead">
        Studio technology and flexible configurations for high-quality podcast
        audio and video. Exact equipment and camera counts depend on the booked
        package.
      </p>
    </div>
    <div className="equipment-grid">
      <article className="equipment-item">
        <span aria-hidden="true" className="studio-premium-icon equipment-icon">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
            <rect height="13" rx="3" width="6" x="9" y="2" />
            <path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" />
          </svg>
        </span>
        <span className="equipment-num">01</span>
        <h3>Broadcast microphones</h3>
      </article>
      <article className="equipment-item">
        <span aria-hidden="true" className="studio-premium-icon equipment-icon">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
            <rect height="14" rx="2" width="14" x="2" y="5" />
            <path d="m16 10 6-4v12l-6-4" />
          </svg>
        </span>
        <span className="equipment-num">02</span>
        <h3>Multi-camera video recording</h3>
      </article>
      <article className="equipment-item">
        <span aria-hidden="true" className="studio-premium-icon equipment-icon">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M9 18h6M10 22h4M8 15a7 7 0 1 1 8 0l-1 3H9l-1-3Z" />
          </svg>
        </span>
        <span className="equipment-num">03</span>
        <h3>Studio lighting</h3>
      </article>
      <article className="equipment-item">
        <span aria-hidden="true" className="studio-premium-icon equipment-icon">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M4 4v16M10 8v12M16 2v18M22 10v10" />
            <path d="M2 15h4M8 11h4M14 7h4M20 14h4" />
          </svg>
        </span>
        <span className="equipment-num">04</span>
        <h3>Audio recording &amp; mixing</h3>
      </article>
      <article className="equipment-item">
        <span aria-hidden="true" className="studio-premium-icon equipment-icon">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M5 12V7a4 4 0 0 1 8 0v5M4 12h12v6H4zM3 18v3M17 18v3M16 14h4v4h-4" />
          </svg>
        </span>
        <span className="equipment-num">05</span>
        <h3>Comfortable seating &amp; layouts</h3>
      </article>
      <article className="equipment-item">
        <span aria-hidden="true" className="studio-premium-icon equipment-icon">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M3 12h2l2-6 4 12 3-9 2 3h5" />
          </svg>
        </span>
        <span className="equipment-num">06</span>
        <h3>Sound-treated acoustic environment</h3>
      </article>
      <article className="equipment-item">
        <span aria-hidden="true" className="studio-premium-icon equipment-icon">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c-5 5-5 13 0 18M12 3c5 5 5 13 0 18" />
          </svg>
        </span>
        <span className="equipment-num">07</span>
        <h3>High-speed internet</h3>
      </article>
    </div>
    <div className="equipment-photo">
      <img
        alt="Microphones and seating in a recording setup"
        src="/images/studio-room-c.jpg"
        loading="lazy"
      />
      <span className="equipment-stamp">PROFESSIONAL AUDIO &amp; VIDEO PRODUCTION</span>
      <span aria-hidden="true" className="equipment-corner equipment-tl" />
      <span aria-hidden="true" className="equipment-corner equipment-br" />
    </div>
  </div>
</section>
<section className="inner-section cream"><div className="shell"><p className="section-kicker">[ 03 / RECORDING FORMATS ]</p><h2 className="display-title">YOUR FORMAT.<br/>YOUR <span className="studio-blue">VOICE.</span></h2><div className="studio-format-grid">
<article><img alt="SOLO PODCAST studio format" className="studio-format-photo" loading="lazy" src="/images/studio-room-f.jpg"/><span>01 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M4 22v-3a8 8 0 0 1 16 0v3"></path></svg></span><h3>SOLO PODCAST</h3><p>Personal podcasts, coaching content, commentary and solo storytelling.</p></article>
<article><img alt="INTERVIEW PODCAST studio format" className="studio-format-photo" loading="lazy" src="/images/session-duo.jpg"/><span>02 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"></circle><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v2"></path></svg></span><h3>INTERVIEW PODCAST</h3><p>Host-and-guest discussions, expert interviews and conversations.</p></article>
<article><img alt="PANEL PODCAST studio format" className="studio-format-photo" loading="lazy" src="/images/session-panel.jpg"/><span>03 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"></circle><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v2"></path></svg></span><h3>PANEL PODCAST</h3><p>Group discussions featuring multiple hosts or guests.</p></article>
<article><img alt="VIDEO PODCAST studio format" className="studio-format-photo" loading="lazy" src="/images/studio-room-d.jpg"/><span>04 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><rect height="14" rx="2" width="14" x="2" y="5"></rect><path d="m16 10 6-4v12l-6-4"></path></svg></span><h3>VIDEO PODCAST</h3><p>Multi-camera productions for YouTube, social media and other platforms.</p></article>
</div><Link className="outline-dark-btn" href="/pricing">VIEW RECORDING PACKAGES <svg className="premium-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"/></svg></Link></div></section>
<StudioExperiences />
<section className="inner-section cream"><div className="shell"><p className="section-kicker">[ 05 / PRODUCTION SUPPORT ]</p><h2 className="display-title">FROM THE ROOM<br/>TO THE <span className="studio-blue">FEED.</span></h2><div className="studio-benefits">
<article><span>01 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><rect height="13" rx="2" width="18" x="3" y="8"></rect><path d="M3 8V4l18-2v6M8 3l4 5M15 2l4 6"></path></svg></span><h3>PREPARED PRODUCTION SETUP</h3><p>Microphones, cameras, lighting and optional production configurations help you get recording efficiently.</p></article>
<article><span>02 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><path d="m4 20 5-.8L21 7a3 3 0 0 0-4-4L5 15l-1 5ZM14 6l4 4"></path></svg></span><h3>EDITING OPTIONS</h3><p>Selected packages and optional services may include audio cleanup, video editing, branding and social clips.</p></article>
<article><span>03 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><rect height="16" rx="2" width="18" x="3" y="5"></rect><path d="M7 2v6M17 2v6M3 11h18"></path></svg></span><h3>FLEXIBLE BOOKINGS</h3><p>Hourly studio sessions and recurring arrangements support occasional and consistent creators.</p></article>
<article><span>04 /</span><span aria-hidden="true" className="studio-premium-icon"><svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24"><circle cx="12" cy="4" r="2"></circle><circle cx="5" cy="19" r="2"></circle><circle cx="19" cy="19" r="2"></circle><path d="m11 6-5 11M13 6l5 11M7 19h10"></path></svg></span><h3>CONNECTED CREATIVE COMMUNITY</h3><p>Record within Workspace Junction's coworking environment, alongside other founders and professionals.</p></article>
</div><p className="studio-small-note">Edited episodes, raw files, social clips and operator support vary by package. Review the selected session's deliverables before booking.</p></div></section>
<section className="inner-section charcoal audience-section">
  <div className="shell">
    <div className="studio-section-head audience-head">
      <div>
        <p className="section-kicker audience-kicker">[ 06 / WHO IT&apos;S FOR ]</p>
        <h2 className="display-title audience-title">
          MADE FOR
          <br />
          PEOPLE WITH
          <br />
          SOMETHING TO <span className="studio-blue">SAY.</span>
        </h2>
      </div>
      <p className="lead-note audience-lead">
        From your first episode to a recurring series, the studio supports
        independent creators and teams with ambitious ideas.
      </p>
    </div>
    <div className="audience-grid">
      <article className="audience-item">
        <div className="audience-top">
          <span className="audience-num">01</span>
          <span aria-hidden="true" className="studio-premium-icon audience-icon">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
              <rect height="13" rx="3" width="6" x="9" y="2" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" />
            </svg>
          </span>
        </div>
        <h3>Independent podcasters</h3>
        <p>Solo hosts and growing shows ready for a professional room without building one at home.</p>
      </article>
      <article className="audience-item">
        <div className="audience-top">
          <span className="audience-num">02</span>
          <span aria-hidden="true" className="studio-premium-icon audience-icon">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
              <circle cx="9" cy="8" r="3" />
              <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v2" />
            </svg>
          </span>
        </div>
        <h3>Business owners &amp; thought leaders</h3>
        <p>Founders and executives who want interviews, explainers, and brand stories that look intentional.</p>
      </article>
      <article className="audience-item">
        <div className="audience-top">
          <span className="audience-num">03</span>
          <span aria-hidden="true" className="studio-premium-icon audience-icon">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
              <rect height="13" rx="2" width="18" x="3" y="8" />
              <path d="M3 8V4l18-2v6M8 3l4 5M15 2l4 6" />
            </svg>
          </span>
        </div>
        <h3>Content creators &amp; media professionals</h3>
        <p>Creators who need reliable multi-camera capture, clean audio, and a space built for output.</p>
      </article>
      <article className="audience-item">
        <div className="audience-top">
          <span className="audience-num">04</span>
          <span aria-hidden="true" className="studio-premium-icon audience-icon">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
              <circle cx="12" cy="4" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
              <path d="m11 6-5 11M13 6l5 11M7 19h10" />
            </svg>
          </span>
        </div>
        <h3>Teams &amp; creative groups</h3>
        <p>Panels, roundtables, and collaborative formats that need room for people and production.</p>
      </article>
    </div>
  </div>
</section>
<section className="inner-section cream gallery-section">
  <div className="shell">
    <div className="studio-section-head gallery-head">
      <div>
        <p className="section-kicker gallery-kicker">[ 07 / STUDIO GALLERY ]</p>
        <h2 className="display-title gallery-title">
          SEE THE SPACE.
          <br />
          PICTURE YOUR <span className="studio-blue">SHOW.</span>
        </h2>
      </div>
      <p className="lead-note gallery-lead">
        Walk the room before you book — from the recording set to the coworking
        floor just outside the studio door.
      </p>
    </div>
    <div className="studio-photo-grid gallery-mosaic">
      <figure className="gallery-shot gallery-shot-lead">
        <img
          alt="Podcast recording session"
          src="/images/studio-room-a.jpg"
          loading="lazy"
        />
        <figcaption>
          <span className="gallery-shot-num">01</span>
          <span className="gallery-shot-label">Recording set</span>
        </figcaption>
        <span aria-hidden="true" className="gallery-shot-corner gallery-shot-tl" />
        <span aria-hidden="true" className="gallery-shot-corner gallery-shot-br" />
      </figure>
      <figure className="gallery-shot">
        <img
          alt="Studio lounge and coworking floor"
          src="/images/workspace-open.jpg"
          loading="lazy"
        />
        <figcaption>
          <span className="gallery-shot-num">02</span>
          <span className="gallery-shot-label">Workspace floor</span>
        </figcaption>
        <span aria-hidden="true" className="gallery-shot-corner gallery-shot-tl" />
        <span aria-hidden="true" className="gallery-shot-corner gallery-shot-br" />
      </figure>
      <figure className="gallery-shot">
        <img
          alt="Podcast conversation setup"
          src="/images/session-open.jpg"
          loading="lazy"
        />
        <figcaption>
          <span className="gallery-shot-num">03</span>
          <span className="gallery-shot-label">In session</span>
        </figcaption>
        <span aria-hidden="true" className="gallery-shot-corner gallery-shot-tl" />
        <span aria-hidden="true" className="gallery-shot-corner gallery-shot-br" />
      </figure>
    </div>
  </div>
</section>
<PremiumCta
        eyebrow="[ OAKBROOK TERRACE · CHICAGOLAND ]"
        title={
          <>
            YOUR NEXT
            <br />
            EPISODE STARTS
            <br />
            <em>HERE.</em>
          </>
        }
        metaLabel="LOCATION"
        meta={
          <>
            Workspace Junction
            <br />
            1S280 Summit Ave, Unit E2, Suite 1
            <br />
            Oakbrook Terrace, IL 60181
          </>
        }
        metaServe="Serving Oak Brook, Lombard, Villa Park, Downers Grove, and greater Chicagoland."
        image={"/images/studio-room-a.jpg"}
        actionKicker="BOOK THE ROOM"
        buttonLabel="PLAN YOUR RECORDING"
      />
    </>
  );
}
