import Link from "next/link";
import StudioCta from "@/components/StudioCta";
import WorkPortfolio from "@/components/WorkPortfolio";
import { Check, I, Lines } from "@/components/LineIcons";

const Dot = ({ c = "." }: { c?: string }) => <span className="hw-blue">{c}</span>;

const behind = [
  { key: "multi-camera", icon: I.video, title: ["MULTI-CAMERA", "RECORDING"], text: ["Cinematic, broadcast-quality", "video with flexible setups."] },
  { key: "audio-mixing", icon: I.wave, title: ["AUDIO CLEANUP", "& MIXING"], text: ["Clear, balanced, and", "professional sound."] },
  { key: "video-editing", icon: I.monitor, title: ["VIDEO EDITING", "& COLOR CORRECTION"], text: ["Polished edits, crisp visuals,", "and a consistent look."] },
  { key: "social-clips", icon: I.cc, title: ["SUBTITLES, GRAPHICS", "& SOCIAL CLIPS"], text: ["Captions, branded graphics,", "and platform-ready clips."] },
];

const featured = [
  {
    image: "/images/work/featured-studio-1.webp",
    challenge: "Launch a professional podcast with a consistent, high-quality format.",
    approach: "Studio recording, multi-camera video, editing, and platform-ready assets.",
    deliverables: "Full episode (video + audio), short clips, show notes, and promotional graphics.",
  },
  {
    image: "/images/work/featured-studio-2.webp",
    challenge: "Produce a thought-leadership series with multiple guests.",
    approach: "Multi-guest studio setup, professional audio, and video production, and editing.",
    deliverables: "Edited episodes, social clips, captions, and branded show assets.",
  },
];

const feed = [
  { icon: I.video, title: "RECORD", text: "Cinematic your conversation in our professional studio." },
  { icon: I.monitor, title: "EDIT", text: "Polish audio and video for a great final cut." },
  { icon: I.scissors, title: "CLIP", text: "Create short, engaging highlights for social media." },
  { icon: I.cloud, title: "PUBLISH", text: "Distribute to your podcast and social platforms." },
];

const services = [
  { icon: I.mic, title: "RECORD A NEW SHOW", features: ["Use our studio and equipment", "Expert production support", "Video and/or audio recording"], cta: "GET STARTED" },
  { icon: I.edit, title: "EDIT EXISTING FOOTAGE", features: ["Professional audio and video edits", "Cleanup, enhancements, and graphics", "Show notes and captions (optional)"], cta: "GET A QUOTE" },
  { icon: I.layers, title: "FULL PODCAST PRODUCTION", features: ["End-to-end: record, edit, and publish", "Multi-platform content (video, audio, clips)", "Ongoing production and support"], cta: "PLAN YOUR PROJECT", featured: true },
];

export default function OurWorkMain() {
  return (
    <div className="hw ap wk">
      <div className="hp">
        <section className="hp-hero hp-hero--page ap-hero">
          <img className="hp-hero-img" src="/images/home/hero.webp" alt="Two podcast hosts recording in the Chicagoland studio" />
          <div className="hp-hero-shade" aria-hidden="true" />
          <div className="hp-in hp-hero-copy">
            <p className="hp-hero-loc">
              OUR WORK <span>/</span>
            </p>
            <h1 className="hp-hero-title">
              WORK THAT SPEAKS
              <br />
              FOR ITSELF<span className="hp-blue">.</span>
            </h1>
            <p className="hp-hero-desc">
              Explore the video, audio, and content{" "}
              <br />
              formats we can create together.
            </p>
            <div className="hp-hero-btns">
              <Link className="hp-btn hp-btn-blue" href="/booking">
                START YOUR PROJECT
              </Link>
              <Link className="hp-btn hp-btn-ghost" href="#explore">
                EXPLORE OUR WORK
              </Link>
            </div>
            <p className="hp-hero-pin">
              {I.pin}
              OAKBROOK TERRACE, ILLINOIS
            </p>
          </div>
        </section>
      </div>

      <section className="wk-intro">
        <div className="hw-in wk-intro-grid">
          <div>
            <h2 className="hw-title wk-intro-title">
              EVERY STORY<Dot />
              <br />
              A DIFFERENT
              <br />
              FORMAT<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <span className="hw-vline" aria-hidden="true" />
          <p className="wk-intro-text">
            <Lines
              lines={[
                "We help creators, founders, and brands",
                "transform conversations into polished",
                "podcast episodes, engaging video content,",
                "short-form clips, and audio for every",
                "platform—produced right here in our",
                "Oakbrook Terrace studio.",
              ]}
            />
          </p>
          <div className="wk-intro-media">
            <img src="/images/work/intro.webp" alt="Podcast video editing on a laptop beside a camera, phone clip and headphones" />
          </div>
        </div>
      </section>

      <section className="wk-explore" id="explore">
        <div className="hw-in">
          <div className="wk-explore-head">
            <div>
              <h2 className="hw-title wk-explore-title">
                EXPLORE
                <br />
                OUR WORK<Dot />
              </h2>
              <span className="hw-rule" aria-hidden="true" />
            </div>
          </div>
          <WorkPortfolio />
        </div>
      </section>

      <section className="wk-deliver">
        <div className="hw-in wk-deliver-grid">
          <div>
            <h2 className="hw-title wk-deliver-title">
              ONE
              <br />
              RECORDING<Dot />
              <br />
              MANY
              <br />
              DELIVERABLES<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <ol className="wk-flow">
            <li>
              <div className="wk-thumb wk-thumb--episode">
                <img src="/images/work/multi-camera-interview.webp" alt="" loading="lazy" />
                <span className="wk-mini-play" aria-hidden="true" />
              </div>
              <h3>FULL EPISODE</h3>
              <p>(16:9 Video)</p>
            </li>
            <li>
              <div className="wk-thumb wk-thumb--vertical">
                <img src="/images/work/multi-camera-interview.webp" alt="" loading="lazy" />
              </div>
              <h3>VERTICAL CLIP</h3>
              <p>(9:16 Social)</p>
            </li>
            <li>
              <div className="wk-thumb wk-thumb--art">
                <img src="/images/work/deliver-audiogram.webp" alt="" loading="lazy" />
              </div>
              <h3>AUDIOGRAM</h3>
              <p>(Audio + Visual)</p>
            </li>
            <li>
              <div className="wk-thumb wk-thumb--art">
                <img src="/images/work/deliver-social-promo.webp" alt="" loading="lazy" />
              </div>
              <h3>SOCIAL PROMO</h3>
              <p>(Graphics &amp; Assets)</p>
            </li>
            <li>
              <div className="wk-thumb wk-thumb--art">
                <img src="/images/work/deliver-audio-file.webp" alt="" loading="lazy" />
              </div>
              <h3>AUDIO FILE</h3>
              <p>(MP3 / WAV)</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="wk-behind">
        <div className="hw-in wk-behind-grid">
          <div>
            <h2 className="hw-title wk-behind-title">
              BEHIND THE
              <br />
              PRODUCTION<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          <div className="wk-behind-cards">
            {behind.map((b) => (
              <article className={`wk-behind-card wk-behind-card--${b.key}`} key={b.key}>
                <img src={`/images/work/behind-${b.key}.webp`} alt="" loading="lazy" />
                <div className="wk-behind-body">
                  <h3>
                    {b.icon}
                    <span>
                      {b.title[0]}
                      <br />
                      {b.title[1]}
                    </span>
                  </h3>
                  <p>
                    <Lines lines={b.text} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wk-featured">
        <div className="hw-in wk-featured-grid">
          <div>
            <h2 className="hw-title wk-featured-title">
              FEATURED
              <br />
              PROJECT
              <br />
              BREAKDOWN<Dot />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {featured.map((f) => (
            <article className="wk-project" key={f.image}>
              <div className="wk-project-media">
                <img src={f.image} alt="" loading="lazy" />
                <span>
                  SAMPLE FORMAT /
                  <br />
                  CONTENT PLACEHOLDER
                </span>
              </div>
              <dl>
                <div>
                  {I.target}
                  <dt>CHALLENGE</dt>
                  <dd>{f.challenge}</dd>
                </div>
                <div>
                  {I.gear}
                  <dt>OUR APPROACH</dt>
                  <dd>{f.approach}</dd>
                </div>
                <div>
                  {I.layers}
                  <dt>DELIVERABLES</dt>
                  <dd>{f.deliverables}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="wk-feed">
        <div className="hw-in wk-feed-grid">
          <h2 className="hw-title wk-feed-title">
            FROM THE
            <br />
            STUDIO TO
            <br />
            YOUR FEED<Dot />
          </h2>
          <ol className="wk-feed-steps">
            {feed.map((s) => (
              <li key={s.title}>
                {s.icon}
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wk-start">
        <div className="hw-in ap-plans-grid wk-start-grid">
          <div>
            <h2 className="hw-title ap-plans-title">
              HAVE A
              <br />
              PROJECT
              <br />
              IN MIND<Dot c="?" />
            </h2>
            <span className="hw-rule" aria-hidden="true" />
          </div>
          {services.map((s) => (
            <article className={`ap-plan wk-service${s.featured ? " ap-plan--featured" : ""}`} key={s.title}>
              <h3>
                {s.icon}
                {s.title}
              </h3>
              <ul>
                {s.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link className="ap-plan-btn" href="/booking">
                {s.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="hp">
        <StudioCta
          title={["YOUR SHOW", "COULD BE NEXT"]}
          mark="."
          buttonLabel="BOOK A PRODUCTION CONSULTATION"
          image="/images/audio/cta-mic.webp"
        />
      </div>
    </div>
  );
}
