"use client";

import { useEffect, useState, type MouseEvent } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <a
      className={`back-to-top${visible ? " is-visible" : ""}`}
      href="#top"
      onClick={onClick}
      aria-label="Back to top"
    >
      BACK TO TOP ↑
    </a>
  );
}
