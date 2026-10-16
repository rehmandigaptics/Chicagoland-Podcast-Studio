"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      gsap.fromTo(
        ".hero-title span",
        { y: 95 },
        {
          y: 0,
          stagger: 0.12,
          duration: 1,
          delay: 0.15,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
      gsap.fromTo(
        ".hero-description,.hero-actions,.hero .micro-label,.hero .location-tag",
        { y: 25 },
        {
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          delay: 0.35,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
      gsap.fromTo(
        ".hero-mic",
        { x: 90, y: 50, rotation: 4 },
        {
          x: 0,
          y: 0,
          rotation: -17,
          duration: 1.35,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".inset-frame",
        { scale: 0.92 },
        {
          scale: 1,
          duration: 1,
          delay: 0.45,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
      gsap.to(".blue-rings", {
        rotation: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.fromTo(
        ".hero-baseline",
        { y: 14 },
        {
          y: 0,
          duration: 0.65,
          delay: 0.7,
          ease: "power2.out",
          clearProps: "transform",
        }
      );

      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 48 },
          {
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
            clearProps: "transform",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      gsap.utils
        .toArray<HTMLElement>(
          ".service-item,.set-card,.step,.pricing-card,.accordion-item,.outline-btn"
        )
        .forEach((el, i) => {
          gsap.fromTo(
            el,
            { y: 28 },
            {
              y: 0,
              duration: 0.65,
              delay: (i % 4) * 0.06,
              ease: "power2.out",
              immediateRender: false,
              clearProps: "transform",
              scrollTrigger: {
                trigger: el,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });

      gsap.fromTo(
        ".studio-image>img",
        { scale: 1 },
        {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".studio-image",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".studio-bottom h2, .studio-bottom .watch-btn, .studio-top, .image-counter",
        { y: 28 },
        {
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          immediateRender: false,
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".studio-image",
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".set-card img",
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".sets",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 100);

    const links = document.querySelectorAll(".navbar-nav a");
    const hideMenu = () => {
      const menu = document.getElementById("navigation");
      if (!menu?.classList.contains("show")) return;
      const bootstrap = (
        window as Window & {
          bootstrap?: {
            Collapse: {
              getOrCreateInstance: (el: Element) => { hide: () => void };
            };
          };
        }
      ).bootstrap;
      bootstrap?.Collapse.getOrCreateInstance(menu).hide();
    };
    links.forEach((a) => a.addEventListener("click", hideMenu));

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      links.forEach((a) => a.removeEventListener("click", hideMenu));
      ctx.revert();
    };
  }, []);

  return null;
}
