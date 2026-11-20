import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import { Check, I, Lines } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const Title = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((t, i) => (
      <span key={t}>
        {i > 0 && <br />}
        {t}
      </span>
    ))}
  </>
);

const why = [
  { icon: I.people, title: ["REACH NEW", "AUDIENCES"], text: "Get discovered on YouTube and other video platforms where your audience is already watching.", image: "audiences" },
  { icon: I.film, title: ["CREATE", "SOCIAL CLIPS"], text: "Turn each episode into engaging short-form videos for Instagram, TikTok, LinkedIn, and more.", image: "social-clips" },
  { icon: I.checkCircle, title: ["BUILD TRUST", "ON CAMERA"], text: "Put a face to your voice, showcase your expertise, and build deeper credibility with your audience.", image: "trust" },
];

const included = [
  { key: "multicamera", icon: I.video, title: ["MULTI-CAMERA", "RECORDING"], text: ["Professional, studio-quality", "video capture from multiple", "angles."] },
  { key: "audio", icon: I.wave, title: ["AUDIO", "PRODUCTION"], text: ["Clean, professional audio", "with mixing, leveling, and", "noise reduction."] },
  { key: "editing", icon: I.play, title: ["VIDEO", "EDITING"], text: ["A polished, engaging final", "episode with a professional", "story flow."] },
  { key: "color-correction", icon: I.layers, title: ["COLOR", "CORRECTION"], text: ["Cinematic color, consistent", "look, and a premium,", "broadcast-ready finish."] },
  { key: "lower-thirds", icon: I.layers, title: ["GRAPHICS &", "LOWER THIRDS"], text: ["Custom titles, name tags,", "branding elements, and", "on-screen graphics."] },
  { key: "short-clips", icon: I.play, title: ["SOCIAL", "CLIPS"], text: ["Short, high-impact clips", "cut from your episode and", "optimized for social platforms."] },
  { key: "trailer", icon: I.film, title: ["TRAILER /", "TEASER CONTENT"], text: ["Create buzz and drive", "viewership with a branded", "episode trailer or teaser."] },
  { key: "remote-guests", icon: I.people, title: ["REMOTE", "GUEST SUPPORT"], text: ["Bring in remote guests", "with a professional, high-quality", "video and audio experience."] },
];

const steps = [
  { n: "01", title: "PLAN", text: "Align on your goals, format, visual style, and episode details." },
  { n: "02", title: "RECORD OR UPLOAD", text: "Record in our studio with a multi-camera setup or send us your own footage." },
  { n: "03", title: "EDIT & POLISH", text: "We edit, mix, add graphics, color correct, and create a screen-ready episode." },
  { n: "04", title: "REVIEW", text: "Watch a private draft, share feedback, and request revisions." },
  { n: "05", title: "PUBLISH", text: "Receive final, platform-ready files for YouTube, your website, and social media." },
];

const packageItems = [
  { image: "full-episode", title: "Full Episode Edit", text: "A complete, polished episode ready to publish." },
  { image: "branded-trailer", title: "Branded Trailer", text: "A short, high-impact teaser to promote your episode." },
  { image: "package-clips", title: "Short-Form Clips", text: "Multiple social-ready clips (vertical or horizontal)." },
  { image: "youtube-export", title: "YouTube / Platform-Ready Exports", text: "Properly formatted, high-quality files for YouTube and other platforms." },
];

const plans = [
  {
    icon: I.film,
    title: "VIDEO EDITING",
    ideal: "Creators who already have footage and need a professional edit.",
    features: ["Professional video editing & assembly", "Audio cleanup & mixing", "Color correction & visual polish", "Graphics, titles & lower thirds"],
  },
  {
    icon: I.video,
    title: "STUDIO VIDEO PRODUCTION",
    ideal: "Podcasters who want a full, studio-recorded video episode with a premium look.",
    features: ["In-studio, multi-camera recording", "Professional audio production", "Video editing & color correction", "Graphics, lower thirds & branded look"],
  },
  {
    icon: I.target,
    title: "FULL-SERVICE VIDEO PODCAST",
    ideal: "Brands and creators who want a complete video podcast solution from recording to distribution.",
    features: ["Everything in Studio Video Production", "Social clips & teaser / trailer content", "YouTube-ready exports & platform formatting", "Ongoing production support & strategy guidance"],
    featured: true,
  },
];

const more = [
  { icon: I.mic, title: ["PODCAST", "MANAGEMENT"], text: "Ongoing production, editing, and episode delivery.", href: "/podcast-management" },
  { icon: I.bars, title: ["PODCAST", "MARKETING"], text: "Grow your audience with strategy, content, and promotion.", href: "/podcast-marketing" },
  { icon: I.cloud, title: ["HOSTING"], text: "Get your episodes live on all major podcast and video platforms.", href: "/podcast-hosting" },
  { icon: I.layers, title: ["ADDITIONAL", "PRODUCTION SUPPORT"], text: "Trailers, custom videos, brand content, and more.", href: "/production" },
];

const faqs = [
  { q: "Can I record in studio or send my own footage?", a: "Both. Record in our Oakbrook Terrace studio with a multi-camera setup, or send us footage you’ve already recorded and we’ll edit it." },
  { q: "Do you edit both audio and video?", a: "Yes. We clean up and mix your audio alongside the video edit, color correction, and graphics." },
  { q: "Can you create clips for social media?", a: "Absolutely. We cut short, high-impact clips from your episode, formatted vertically or horizontally for each platform." },
  { q: "Can you help with YouTube-ready formatting?", a: "Yes. We deliver properly formatted, high-quality exports ready for YouTube and other video platforms." },
];

export default function VideoProductionMain() {
  return (
    <div className="hw ap vp">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero">
          <img className="hp-hero-img" src="/images/home/hero.webp" alt="Two podcast hosts on camera in the Chicagoland studio" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              VIDEO PRODUCTION SERVICES <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              VIDEO PODCAST
              <br />
              PRODUCTION<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              Multi-camera podcast video production, editing,{" "}
              <br />
              YouTube-ready episodes, and social-ready content{" "}
              <br />
              for creators, founders, and brands.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                PLAN YOUR VIDEO PODCAST
              </Link>
              <Link className="hp-btn hp-btn-ghost" href="#included">
                SEE WHAT&rsquo;S INCLUDED
              </Link>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="vp-why">
        <div className="hw-in vp-why-grid">
          <div>
            <h2 className="hw-title pm-title">
              WHY VIDEO
              <br />
              MATTERS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {why.map((w) => (
            <article className="vp-why-item" key={w.image}>
              <div>
                <h3>
                  {w.icon}
                  <span>
                    <Title lines={w.title} />
                    <Dot />
                  </span>
                </h3>
                <p>{w.text}</p>
              </div>
              <img src={`/images/video/${w.image}.webp`} alt="" loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="ap-services pl-services" id="included">
        <div className="hw-in ap-services-grid">
          <div>
            <h2 className="hw-title ap-services-title">
              WHAT&rsquo;S
              <br />
              INCLUDED IN
              <br />
              VIDEO
              <br />
              PRODUCTION<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="ap-cards pl-cards">
            {included.map((s) => (
              <article className="ap-card" key={s.key}>
                <div className="ap-card-media">
                  <img src={`/images/video/${s.key}.webp`} alt="" loading="lazy" />
                </div>
                <div className="ap-card-body">
                  {s.icon}
                  <h3>
                    <Title lines={s.title} />
                  </h3>
                  <p>
                    <Lines lines={s.text} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-process">
        <div className="hw-in ap-process-grid">
          <div>
            <h2 className="hw-title ap-process-title">
              FROM RAW
              <br />
              FOOTAGE TO
              <br />
              FINAL EPISODE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ol className="ap-steps ph-steps">
            {steps.map((s) => (
              <li className="ap-step" key={s.n}>
                <span className="ap-step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mk-kit vp-package">
        <div className="hw-in mk-kit-grid">
          <div>
            <h2 className="hw-title pm-title">
              WHAT YOUR
              <br />
              VIDEO PACKAGE
              <br />
              CAN INCLUDE<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {packageItems.map((k) => (
            <div className="pl-deliver mk-kit-item" key={k.image}>
              <img src={`/images/video/${k.image}.webp`} alt="" loading="lazy" />
              <h3>{k.title}</h3>
              <p>{k.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-plans">
        <div className="hw-in ap-plans-grid">
          <div>
            <h2 className="hw-title ap-plans-title">
              CHOOSE YOUR
              <br />
              VIDEO
              <br />
              PRODUCTION
              <br />
              PATH<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {plans.map((p) => (
            <article className={`ap-plan wk-service${p.featured ? " ap-plan--featured" : ""}`} key={p.title}>
              <h3>
                {p.icon}
                {p.title}
              </h3>
              <p className="pm-plan-lead">
                <strong className="hw-blue">Ideal for:</strong> {p.ideal}
              </p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="ap-related">
        <div className="hw-in ap-related-grid">
          <h2 className="hw-title ap-related-title">
            AFTER THE EPISODE,
            <br />
            KEEP GROWING<Dot />
          </h2>
          {more.map((r) => (
            <Link className="ap-related-item" href={r.href} key={r.title.join(" ")}>
              {r.icon}
              <h3>
                <Title lines={r.title} />
              </h3>
              <p>{r.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="hw-faq ap-faq">
        <div className="hw-in hw-faq-grid">
          <div>
            <h2 className="hw-title hw-faq-title">
              COMMON
              <br />
              QUESTIONS<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="hw-faq-list">
            {faqs.map((f) => (
              <details name="vp-faq" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="hp">
        <StudioCta
          title={["READY TO UPGRADE", "YOUR PODCAST VIDEO"]}
          buttonLabel="BOOK A VIDEO PRODUCTION CALL"
          image="/images/video/audio.webp"
        />
      </div>
    </div>
  );
}
