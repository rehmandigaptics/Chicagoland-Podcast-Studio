import Link from "next/link";
import InquiryEmbed from "@/components/InquiryEmbed";

export default function BookingMain() {
  return (
    <>
      <section className="inner-hero">
        <div className="shell inner-hero-grid">
          <div className="inner-hero-copy">
            <p className="eyebrow">[ OAKBROOK TERRACE / ILLINOIS ]</p>
            <h1 className="inner-display">
              READY TO
              <br />
              <em>PRESS</em>
              <br />
              RECORD?
            </h1>
            <p className="inner-lead">
              Tell us what you want to make. We’ll help you explore the right
              format, package and next steps.
            </p>
            <Link className="solid-btn" href="#booking">
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 19 19 5M8 5h11v11"></path>
              </svg>
            </Link>
          </div>
          <div className="inner-hero-media">
            <img
              alt="Chicagoland Podcast Studio recording environment"
              src="/images/session-duo.jpg"
            />
            <span className="hero-media-stamp">CHICAGOLAND / STUDIO</span>
            <span aria-hidden="true" className="media-corner media-tl"></span>
            <span aria-hidden="true" className="media-corner media-br"></span>
          </div>
        </div>
        <div className="shell">
          <div className="hero-baseline">
            <span>CREATED TO BE HEARD.</span>
            <span>OAKBROOK TERRACE · ILLINOIS</span>
          </div>
        </div>
      </section>

      <section className="inner-section cream" id="booking">
        <div className="shell booking-layout">
          <div>
            <div className="section-kicker">[ SEND AN ENQUIRY ]</div>
            <h2 className="display-title">
              LET’S BUILD
              <br />
              YOUR NEXT
              <br />
              SESSION.
            </h2>
            <p className="lead-note">
              Contact Chicagoland Podcast Studio at Workspace Junction to confirm
              availability and package details.
            </p>
            <div className="contact-detail">
              <span>EMAIL</span>
              <a href="mailto:grow@workspacejunction.com">
                grow@workspacejunction.com{" "}
                <svg
                  className="premium-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 19 19 5M8 5h11v11"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span>PHONE</span>
              <a href="tel:+17739861908">
                +1 (773) 986-1908{" "}
                <svg
                  className="premium-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 19 19 5M8 5h11v11"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span>VISIT</span>
              <p>
                1S280 Summit Ave, Unit E2, Suite 1
                <br />
                Oakbrook Terrace, IL 60181
              </p>
            </div>
          </div>
          <InquiryEmbed />
        </div>
      </section>

      <section className="inner-section charcoal" id="faq">
        <div className="shell">
          <div className="faq-inner-grid">
            <div>
              <div className="section-kicker">[ FREQUENT QUESTIONS ]</div>
              <h2 className="display-title">
                BEFORE YOU
                <br />
                BOOK.
              </h2>
              <p className="lead-note">
                Answers to common questions about studio sessions.
              </p>
            </div>
            <div className="accordion accordion-flush" id="innerFaq">
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    aria-expanded="true"
                    className="accordion-button"
                    data-bs-target="#q0"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Where are you located?
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse show"
                  data-bs-parent="#innerFaq"
                  id="q0"
                >
                  <div className="accordion-body">
                    Inside Workspace Junction, 1S280 Summit Ave, Unit E2, Suite
                    1, Oakbrook Terrace, Illinois.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#q1"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Can beginners record here?
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#innerFaq"
                  id="q1"
                >
                  <div className="accordion-body">
                    Yes. The studio supports first-time podcasters as well as
                    experienced creators.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#q2"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Is video recording available?
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#innerFaq"
                  id="q2"
                >
                  <div className="accordion-body">
                    Yes. Camera setups depend on the package selected.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#q3"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Do you provide edited episodes?
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#innerFaq"
                  id="q3"
                >
                  <div className="accordion-body">
                    Editing and social clips are included in selected premium
                    packages and may be available as optional services.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    aria-expanded="false"
                    className="accordion-button collapsed"
                    data-bs-target="#q4"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Is parking available?
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  data-bs-parent="#innerFaq"
                  id="q4"
                >
                  <div className="accordion-body">
                    Yes. Convenient parking is available for studio guests and
                    bookings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
