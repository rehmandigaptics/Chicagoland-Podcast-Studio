import Link from "next/link";
import PremiumCta from "@/components/PremiumCta";

export default function PricingMain() {
  return (
    <>
<section className="inner-hero dark-hero">
  <div className="shell inner-hero-grid">
    <div className="inner-hero-copy">
      <p className="eyebrow">[ OAKBROOK TERRACE / ILLINOIS ]</p>
      <h1 className="inner-display">
        GOOD
        <br />
        CONTENT.
        <br />
        CLEAR
        <br />
        <em>OPTIONS.</em>
      </h1>
      <p className="inner-lead">
        Choose your studio format and recording duration. Package details and
        rates below are drawn from the published Workspace Junction studio
        offerings.
      </p>
      <Link className="solid-btn" href="/booking">
        PLAN YOUR SESSION{" "}
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
      </Link>
    </div>
    <div className="inner-hero-media">
      <img
        alt="Chicagoland Podcast Studio recording environment"
        src="/images/studio-room-d.jpg"
      />
      <span className="hero-media-stamp">CHICAGOLAND / STUDIO</span>
      <span aria-hidden="true" className="media-corner media-tl" />
      <span aria-hidden="true" className="media-corner media-br" />
    </div>
  </div>
  <div className="shell">
    <div className="hero-baseline">
      <span>CREATED TO BE HEARD.</span>
      <span>OAKBROOK TERRACE · ILLINOIS</span>
    </div>
  </div>
</section><section className="inner-section cream"><div className="shell"><div className="section-kicker">[ STUDIO RATES ]</div><h2 className="display-title">FIND YOUR<br/>SESSION.</h2><p className="lead-note">Compare solo, interview, panel and premium video formats. All prices shown in USD.</p><div aria-label="Session duration" className="package-tabs" role="tablist"><button aria-selected="true" className="package-tab active" data-package="0" role="tab" type="button">Starter · 1 hour</button><button aria-selected="false" className="package-tab" data-package="1" role="tab" type="button">Standard · 2 hours</button><button aria-selected="false" className="package-tab" data-package="2" role="tab" type="button">Premium · 3 hours</button></div><div className="package-views"><div className="package-view active" data-view="0"><div className="price-grid"><article className="price-card"><span className="eyebrow">STARTER · 1 HOUR</span><h3>Solo Creator</h3><p>1–2 people</p><div className="price-number">$75<small> / session</small></div><div className="price-detail">1 camera · 1 microphone</div><Link className="outline-dark-btn" href="/booking?package=0&amp;format=solo-creator">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">STARTER · 1 HOUR</span><h3>Interview</h3><p>2–3 people</p><div className="price-number">$95<small> / session</small></div><div className="price-detail">2-camera setup</div><Link className="outline-dark-btn" href="/booking?package=0&amp;format=interview">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">STARTER · 1 HOUR</span><h3>Panel Podcast</h3><p>Up to 4 people</p><div className="price-number">$120<small> / session</small></div><div className="price-detail">Multi-camera setup</div><Link className="outline-dark-btn" href="/booking?package=0&amp;format=panel-podcast">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">STARTER · 1 HOUR</span><h3>Premium Video</h3><p>Up to 5 people</p><div className="price-number">$150<small> / session</small></div><div className="price-detail">3-camera setup</div><Link className="outline-dark-btn" href="/booking?package=0&amp;format=premium-video">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article></div></div><div className="package-view" data-view="1"><div className="price-grid"><article className="price-card"><span className="eyebrow">STANDARD · 2 HOURS</span><h3>Solo Creator</h3><p>1–2 people</p><div className="price-number">$140<small> / session</small></div><div className="price-detail">1 camera · raw files</div><Link className="outline-dark-btn" href="/booking?package=1&amp;format=solo-creator">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">STANDARD · 2 HOURS</span><h3>Interview</h3><p>2–3 people</p><div className="price-number">$180<small> / session</small></div><div className="price-detail">Multi-camera · raw files</div><Link className="outline-dark-btn" href="/booking?package=1&amp;format=interview">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">STANDARD · 2 HOURS</span><h3>Panel Podcast</h3><p>Up to 4 people</p><div className="price-number">$220<small> / session</small></div><div className="price-detail">Multi-camera · mixing</div><Link className="outline-dark-btn" href="/booking?package=1&amp;format=panel-podcast">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">STANDARD · 2 HOURS</span><h3>Premium Video</h3><p>Up to 5 people</p><div className="price-number">$280<small> / session</small></div><div className="price-detail">Multi-camera · mixing</div><Link className="outline-dark-btn" href="/booking?package=1&amp;format=premium-video">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article></div></div><div className="package-view" data-view="2"><div className="price-grid"><article className="price-card"><span className="eyebrow">PREMIUM · 3 HOURS</span><h3>Solo Creator</h3><p>1–2 people</p><div className="price-number">$260<small> / session</small></div><div className="price-detail">Edited video · 1 clip</div><Link className="outline-dark-btn" href="/booking?package=2&amp;format=solo-creator">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">PREMIUM · 3 HOURS</span><h3>Interview</h3><p>2–3 people</p><div className="price-number">$320<small> / session</small></div><div className="price-detail">Edited episode · 1 clip</div><Link className="outline-dark-btn" href="/booking?package=2&amp;format=interview">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">PREMIUM · 3 HOURS</span><h3>Panel Podcast</h3><p>Up to 4 people</p><div className="price-number">$380<small> / session</small></div><div className="price-detail">Edited episode · 2 clips</div><Link className="outline-dark-btn" href="/booking?package=2&amp;format=panel-podcast">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article><article className="price-card"><span className="eyebrow">PREMIUM · 3 HOURS</span><h3>Premium Video</h3><p>Up to 5 people</p><div className="price-number">$480<small> / session</small></div><div className="price-detail">Full edit · 3 clips · operator</div><Link className="outline-dark-btn" href="/booking?package=2&amp;format=premium-video">ENQUIRE ABOUT THIS <svg aria-hidden="true" className="editorial-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 19 19 5M8 5h11v11"></path></svg></Link></article></div></div></div><p className="rate-note">Rates and inclusions are based on published offerings and may change. Confirm exact deliverables, availability and any additional editing before booking.</p></div></section><PremiumCta
        eyebrow="[ READY WHEN YOU ARE ]"
        title={<>READY TO<br/>BOOK YOUR<br/><em>SPACE?</em></>}
        description="Tell us your format, guest count and preferred dates. We will help you choose a suitable session."
        image={"/images/studio-room-d.jpg"}
        actionKicker="BOOK THE ROOM"
        buttonLabel="BOOK YOUR SESSION"
        baselineLeft="CLEAR OPTIONS. CONFIDENT BOOKING."
      />
    </>
  );
}
