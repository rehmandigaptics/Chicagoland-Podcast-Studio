import Link from "next/link";

type StudioCtaProps = {
  buttonLabel: string;
  href?: string;
  title?: [string, string];
  image?: string;
  mark?: string;
};

export default function StudioCta({
  buttonLabel,
  href = "/booking",
  title = ["READY TO", "MAKE YOURSELF HEARD"],
  image,
  mark = "?",
}: StudioCtaProps) {
  return (
    <section className={`hp-cta${image ? " hp-cta--photo" : ""}`}>
      <img className="hp-cta-img" src={image ?? "/images/home/cta-mic.webp"} alt="" loading="lazy" />
      <div className="hp-cta-shade" aria-hidden="true" />
      <div className="hp-in hp-cta-row">
        <h2 className="hp-title hp-cta-title">
          {title[0]}
          <br />
          {title[1]}
          <span className="hp-blue">{mark}</span>
        </h2>
        <span className="hp-cta-slash" aria-hidden="true" />
        <div className="hp-cta-action">
          <p>LET&rsquo;S PLAN YOUR NEXT EPISODE.</p>
          <Link className="hp-btn hp-btn-blue hp-cta-btn" href={href}>
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
