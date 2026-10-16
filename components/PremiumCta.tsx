import Link from "next/link";
import type { ReactNode } from "react";

type PremiumCtaProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  metaLabel?: string;
  meta?: ReactNode;
  metaServe?: string;
  image: string;
  actionKicker?: string;
  buttonLabel: string;
  buttonHref?: string;
  actionNote?: string;
  baselineLeft?: string;
  baselineRight?: string;
};

export default function PremiumCta({
  eyebrow,
  title,
  description,
  metaLabel,
  meta,
  metaServe,
  image,
  actionKicker = "NEXT STEP",
  buttonLabel,
  buttonHref = "/booking",
  actionNote = "Sessions by appointment · Oakbrook Terrace",
  baselineLeft = "CREATE. RECORD. AMPLIFY YOUR VOICE.",
  baselineRight = "CHICAGOLAND PODCAST STUDIO",
}: PremiumCtaProps) {
  return (
    <section className="inner-cta inner-cta--premium">
      <div className="cta-backdrop" aria-hidden="true">
        <img alt="" src={image} />
      </div>
      <div className="shell cta-premium-grid">
        <div className="cta-premium-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-title">{title}</h2>
          {description ? (
            <p className="cta-premium-lead">{description}</p>
          ) : null}
          {meta ? (
            <div className="cta-premium-meta">
              {metaLabel ? (
                <span className="cta-meta-label">{metaLabel}</span>
              ) : null}
              <p>{meta}</p>
              {metaServe ? (
                <p className="cta-meta-serve">{metaServe}</p>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="cta-premium-action">
          <span aria-hidden="true" className="cta-corner cta-tl" />
          <span aria-hidden="true" className="cta-corner cta-br" />
          <p className="cta-action-kicker">{actionKicker}</p>
          <Link className="solid-btn cta-btn-light" href={buttonHref}>
            {buttonLabel}{" "}
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
          </Link>
          <p className="cta-action-note">{actionNote}</p>
        </div>
      </div>
      <div className="shell">
        <div className="cta-premium-baseline">
          <span>{baselineLeft}</span>
          <span>{baselineRight}</span>
        </div>
      </div>
    </section>
  );
}
