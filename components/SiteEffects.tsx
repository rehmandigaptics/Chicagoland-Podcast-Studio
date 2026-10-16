"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function reveal(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars,
  from: gsap.TweenVars = { y: 28 }
) {
  return gsap.fromTo(targets, from, {
    y: 0,
    duration: 0.75,
    ease: "power2.out",
    immediateRender: false,
    clearProps: "transform",
    ...vars,
  });
}

export default function SiteEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      gsap.fromTo(
        ".topbar .brand, .topbar .navbar-nav .nav-link, .topbar .nav-btn",
        { y: -14 },
        {
          y: 0,
          stagger: 0.05,
          duration: 0.7,
          delay: 0.05,
          ease: "power2.out",
          clearProps: "transform",
        }
      );

      reveal(
        ".footer-head h2",
        {
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-head",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        },
        { y: 48 }
      );

      gsap.fromTo(
        ".footer-head > a",
        { scale: 0.88 },
        {
          scale: 1,
          duration: 0.7,
          delay: 0.12,
          ease: "back.out(1.5)",
          immediateRender: false,
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".footer-head",
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      reveal(".footer > .shell > p", {
        scrollTrigger: {
          trigger: ".footer > .shell > p",
          start: "top 94%",
          toggleActions: "play none none none",
          once: true,
        },
      }, { y: 18 });

      gsap.utils
        .toArray<HTMLElement>(
          ".footer-brand, .footer-nav, .footer-start, .footer-end"
        )
        .forEach((el, i) => {
          reveal(el, {
            delay: i * 0.06,
            scrollTrigger: {
              trigger: el,
              start: "top 94%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 120);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return null;
}
