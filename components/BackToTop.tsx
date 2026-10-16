"use client";

import type { MouseEvent } from "react";

export default function BackToTop() {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = (
      window as Window & {
        __lenis?: { scrollTo: (v: number, o?: { duration?: number }) => void };
      }
    ).__lenis;

    if (lenis && !reduceMotion) {
      lenis.scrollTo(0, { duration: 1.2 });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <a className="footer-back-top" href="#top" onClick={onClick}>
      BACK TO TOP ↑
    </a>
  );
}
