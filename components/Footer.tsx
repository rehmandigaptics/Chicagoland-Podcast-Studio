import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import FooterYear from "@/components/FooterYear";

export default function Footer() {
  return (
    <footer className="footer dark-section">
      <div className="shell">
        <div className="footer-head">
          <h2>PRESS RECORD.</h2>
          <Link aria-label="Plan a recording session" href="/booking">
            <svg
              aria-hidden="true"
              className="icon-arrow"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 12h16M13 5l7 7-7 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.65}
              />
            </svg>
          </Link>
        </div>
        <p>Podcast &amp; video production • Chicagoland, Illinois</p>
        <div className="footer-columns">
          <div className="brand footer-brand">
            <strong>
              CHICAGO<span>LAND</span>
            </strong>
            <small>PODCAST + VIDEO STUDIO</small>
          </div>
          <div className="footer-nav">
            <span>[ NAVIGATION ]</span>
            <div className="footer-nav-grid">
              <div className="footer-nav-col">
                <Link href="/studio">The Studio</Link>
                <Link href="/services">Services</Link>
                <Link href="/pricing">Pricing</Link>
              </div>
              <div className="footer-nav-col">
                <Link href="/team">Team</Link>
                <Link href="/build">Build</Link>
                <Link href="/booking#faq">Questions</Link>
              </div>
            </div>
          </div>
          <div className="footer-start">
            <span>[ GET STARTED ]</span>
            <div className="footer-start-links">
              <Link href="/booking">Plan a Session</Link>
              <Link href="/build">Studio Builds</Link>
              <a href="mailto:grow@workspacejunction.com">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <span>
            © <FooterYear /> CHICAGOLAND PODCAST STUDIO
          </span>
          <a
            className="footer-powered"
            href="https://360growthlab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span>360 Growth Lab</span>
          </a>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
