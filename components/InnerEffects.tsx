"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type InnerEffectsProps = {
  enablePackageTabs?: boolean;
};

const SCROLL_REVEAL =
  [
    ".display-title",
    ".section-kicker",
    ".lead-note",
    ".feature-card",
    ".build-step",
    ".service-tile",
    ".gallery-frame",
    ".timeline-item",
    ".session-step",
    ".price-card",
    ".image-panel",
    ".team-card",
    ".testimonial-card",
    ".testimonial-quote",
    ".audience-item",
    ".experience-shot",
    ".equipment-item",
    ".equipment-photo",
    ".gallery-shot",
    ".studio-benefits article",
    ".studio-format-grid article",
    ".studio-equipment-grid > div",
    ".studio-photo-grid > div",
    ".experience-mood",
    ".package-tab",
    ".outline-dark-btn",
    ".hero-baseline",
    ".inquiry-embed",
    ".contact-detail > *",
    ".accordion-item",
    ".mission-media",
    ".mission-copy > *",
    ".studio-section-head > *",
    ".services-catalog-head > *",
    ".build-program-head > *",
    ".session-steps-head > *",
    ".testimonials-head > *",
    ".experiences-head > *",
    ".equipment-head > *",
    ".audience-head > *",
    ".gallery-head > *",
  ].join(",");

export default function InnerEffects({
  enablePackageTabs = false,
}: InnerEffectsProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      gsap.fromTo(
        ".inner-hero-copy > *",
        { y: 28 },
        {
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform",
        }
      );
      gsap.fromTo(
        ".inner-hero-media",
        { x: 40 },
        {
          x: 0,
          duration: 1,
          ease: "power2.out",
          clearProps: "transform",
        }
      );

      const seen = new Set<Element>();
      gsap.utils.toArray<HTMLElement>(SCROLL_REVEAL).forEach((el, i) => {
        if (seen.has(el)) return;
        if (el.closest(".inner-hero-copy, .topbar, .footer, .inner-cta--premium"))
          return;
        seen.add(el);

        gsap.fromTo(
          el,
          { y: 28 },
          {
            y: 0,
            duration: 0.7,
            delay: (i % 4) * 0.045,
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

      gsap.utils
        .toArray<HTMLElement>(
          ".inner-hero-media img, .image-panel img, .equipment-photo img, .gallery-shot img, .mission-media img, .cta-backdrop img"
        )
        .forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 1 },
            {
              scale: 1.08,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

      gsap.utils
        .toArray<HTMLElement>(".inner-cta--premium")
        .forEach((section) => {
          gsap.fromTo(
            section.querySelectorAll(
              ".cta-premium-copy > *, .cta-premium-action, .cta-premium-baseline"
            ),
            { y: 28 },
            {
              y: 0,
              stagger: 0.1,
              duration: 0.85,
              ease: "power3.out",
              immediateRender: false,
              clearProps: "transform",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 100);

    const cleanups: Array<() => void> = [];

    if (enablePackageTabs) {
      const tabs = document.querySelectorAll<HTMLButtonElement>(".package-tab");
      const onTabClick = (btn: HTMLButtonElement) => {
        tabs.forEach((x) => {
          x.classList.remove("active");
          x.setAttribute("aria-selected", "false");
        });
        document
          .querySelectorAll(".package-view")
          .forEach((x) => x.classList.remove("active"));
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        document
          .querySelector(`[data-view="${btn.dataset.package}"]`)
          ?.classList.add("active");
        ScrollTrigger.refresh();
      };
      tabs.forEach((btn) => {
        const handler = () => onTabClick(btn);
        btn.addEventListener("click", handler);
        cleanups.push(() => btn.removeEventListener("click", handler));
      });

      const packageParam = searchParams.get("package");
      if (packageParam) {
        document
          .querySelector<HTMLButtonElement>(
            `.package-tab[data-package="${packageParam}"]`
          )
          ?.click();
      }
    }

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
    cleanups.push(() =>
      links.forEach((a) => a.removeEventListener("click", hideMenu))
    );

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      cleanups.forEach((fn) => fn());
      ctx.revert();
    };
  }, [enablePackageTabs, searchParams]);

  return null;
}
