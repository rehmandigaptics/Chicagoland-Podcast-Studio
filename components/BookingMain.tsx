import StudioCta from "@/components/StudioCta";
import InquiryEmbed from "@/components/InquiryEmbed";
import { I } from "@/components/LineIcons";

const ico = (d: React.ReactNode) => (
  <svg className="hw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const mail = ico(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </>
);
const phone = ico(<path d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.6 6.6l1.4-2.3 4.5 1.8V19a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.7 2 2 0 0 1 5 3.5z" />);

const strip = [
  { icon: I.studio, label: "PROFESSIONAL STUDIO" },
  { icon: I.video, label: "AUDIO & VIDEO RECORDING" },
  { icon: I.headset, label: "PRODUCTION SUPPORT" },
  { icon: I.pin, label: "OAKBROOK TERRACE, IL" },
];

const steps = [
  { n: "01", title: "SHARE YOUR IDEA", text: "Tell us what you want to record." },
  { n: "02", title: "EXPLORE YOUR OPTIONS", text: "Our team reviews your goals and recording requirements." },
  { n: "03", title: "PLAN YOUR SESSION", text: "Confirm the available options and next steps." },
];

const faqs = [
  { q: "Where are you located?", a: "Inside Workspace Junction, 1S280 Summit Ave, Unit E2, Suite 1, Oakbrook Terrace, Illinois." },
  { q: "Can beginners record here?", a: "Yes. The studio supports first-time podcasters as well as experienced creators." },
  { q: "Is video recording available?", a: "Yes. Camera setups depend on the package selected." },
  { q: "Do you provide edited episodes?", a: "Editing and social clips are included in selected premium packages and may be available as optional services." },
  { q: "Is parking available?", a: "Yes. Convenient parking is available for studio guests and bookings." },
];

export default function BookingMain() {
  return (
    <div className="hw bk">
      <div className="hp">
        <section className="hp-hero hp-hero--page">
          <img className="hp-hero-img" src="/images/home/hero.webp" alt="Podcast hosts recording a session at Chicagoland Podcast Studio" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              CHICAGOLAND PODCAST STUDIO <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              READY TO <span className="hp-blue">PRESS</span>
              <br />
              RECORD<span className="hp-blue">?</span>
            </h1>
            <p className="hp-hero-desc">
              Tell us what you want to create. We&rsquo;ll help you find the right
              <br />
              recording format, production package, and next steps.
            </p>
            <div className="hp-hero-btns">
              <a className="hp-btn hp-btn-blue" href="#booking">
                PLAN YOUR SESSION
              </a>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="bk-strip" aria-label="Studio highlights">
        <ul className="bk-in bk-strip-list">
          {strip.map((s) => (
            <li key={s.label}>
              {s.icon}
              {s.label}
            </li>
          ))}
        </ul>
      </section>

      <section className="bk-contact" id="booking">
        <div className="bk-in bk-contact-grid">
          <div className="bk-contact-info">
            <p className="bk-label">LET&rsquo;S GET STARTED /</p>
            <h2 className="bk-title">
              LET&rsquo;S BUILD
              <br />
              YOUR NEXT
              <br />
              SESSION<span className="hw-blue">.</span>
            </h2>
            <p className="bk-text">
              Share your recording goals and preferred timing. Our team will help you explore availability, production options, and package details.
            </p>
            <ul className="bk-rows">
              <li>
                {mail}
                <span>
                  <small>EMAIL</small>
                  <a href="mailto:grow@workspacejunction.com">grow@workspacejunction.com</a>
                </span>
              </li>
              <li>
                {phone}
                <span>
                  <small>PHONE</small>
                  <a href="tel:+17739861908">+1 (773) 986-1908</a>
                </span>
              </li>
              <li>
                {I.pin}
                <span>
                  <small>VISIT</small>
                  1S280 Summit Ave, Unit E2, Suite 1
                  <br />
                  Oakbrook Terrace, IL 60181
                </span>
              </li>
            </ul>
          </div>
          <div className="bk-form">
            <div className="bk-form-head">
              <p className="bk-label">PREPARE YOUR ENQUIRY /</p>
              <h2 className="bk-form-title">SHARE YOUR PROJECT DETAILS.</h2>
              <p className="bk-text">Tell us about your recording plans. Our team will follow up with package details and next steps.</p>
            </div>
            <InquiryEmbed />
          </div>
        </div>
      </section>

      <section className="bk-steps" aria-label="How the enquiry works">
        <ol className="bk-in bk-steps-list">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="bk-step-num">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bk-faq" id="faq">
        <div className="bk-in bk-faq-grid">
          <div>
            <p className="bk-label">FREQUENT QUESTIONS /</p>
            <h2 className="bk-title">
              BEFORE
              <br />
              YOU BOOK<span className="hw-blue">.</span>
            </h2>
            <p className="bk-text">Answers to common questions about studio sessions.</p>
          </div>
          <div className="bk-faq-list">
            {faqs.map((f, i) => (
              <details name="bk-faq" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta title={["YOUR NEXT GREAT EPISODE", "STARTS HERE"]} mark="." buttonLabel="PLAN YOUR SESSION" href="#booking" />
      </div>
    </div>
  );
}
