"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { I } from "@/components/LineIcons";

const shield = (
  <svg className="hw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.5 4 5.5v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10v-6z" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);

const globe = (
  <svg className="hw-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
  </svg>
);

const services = [
  { href: "/podcast-launch", label: "Podcast Launch", icon: I.rocket },
  { href: "/audio-production", label: "Audio Production", icon: I.headset },
  { href: "/video-production", label: "Video Production", icon: I.video },
  { href: "/podcast-management", label: "Podcast Management", icon: I.layers },
  { href: "/podcast-marketing", label: "Podcast Marketing", icon: I.bars },
  { href: "/podcast-hosting", label: "Podcast Hosting", icon: I.broadcast },
  { href: "/podcast-hosting", label: "Private Hosting", icon: shield },
  { href: "/internal-communications-podcasts", label: "Internal Podcast", icon: globe },
];

const nav = [
  { href: "/why-chicagoland-podcast-studio", label: "The Studio" },
  { href: "#services", label: "Services", dropdown: true },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/our-work", label: "Our Work" },
  { href: "/resources", label: "Resources" },
];

function closeMobileMenu() {
  const menu = document.getElementById("navigation");
  if (!menu?.classList.contains("show")) return;

  const toggle = document.querySelector<HTMLButtonElement>(
    ".menu-toggle[data-bs-toggle='collapse']"
  );
  const bootstrap = (
    window as Window & {
      bootstrap?: {
        Collapse: {
          getOrCreateInstance: (
            el: Element,
            options?: { toggle?: boolean }
          ) => { hide: () => void };
        };
      };
    }
  ).bootstrap;

  if (bootstrap?.Collapse) {
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
  } else {
    menu.classList.remove("show");
  }

  toggle?.setAttribute("aria-expanded", "false");
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);
  const servicesActive = services.some((s) => s.href === pathname);

  useEffect(() => {
    closeMobileMenu();
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!dropRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    closeMobileMenu();
  };

  return (
    <header className="topbar">
      <nav className="navbar navbar-expand-lg py-0">
        <div className="container-fluid shell">
          <Link
            aria-label="Chicagoland Podcast Studio home"
            className="brand brand--logo"
            href="/"
            onClick={closeAll}
          >
            <img
              className="brand-logo brand-logo--black"
              src="/images/logo-chicagoland-black.png"
              alt="Chicagoland Podcast Studio"
              width={220}
              height={56}
            />
          </Link>
          <button
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle menu"
            className="navbar-toggler menu-toggle"
            data-bs-target="#navigation"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="menu-toggle-copy" aria-hidden="true">
              <span className="menu-toggle-open">MENU</span>
              <span className="menu-toggle-close">CLOSE</span>
            </span>
            <span className="menu-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <p className="mobile-menu-label">[ MENU ]</p>
            <ul className="navbar-nav mx-auto">
              {nav.map((item, index) =>
                item.dropdown ? (
                  <li
                    key={item.label}
                    ref={dropRef}
                    className={`nav-drop${open ? " is-open" : ""}`}
                    onMouseEnter={() => window.matchMedia("(hover: hover) and (min-width: 992px)").matches && setOpen(true)}
                    onMouseLeave={() => window.matchMedia("(hover: hover) and (min-width: 992px)").matches && setOpen(false)}
                  >
                    <button
                      type="button"
                      className="nav-link nav-drop-toggle"
                      aria-expanded={open}
                      aria-controls="services-menu"
                      aria-current={servicesActive ? "page" : undefined}
                      onClick={() => setOpen((o) => !o)}
                    >
                      <span className="nav-link-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="nav-link-label">{item.label}</span>
                      <svg className="nav-drop-caret" viewBox="0 0 12 12" aria-hidden="true">
                        <path d="m2.5 4.5 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="nav-drop-panel" id="services-menu">
                      <ul>
                        {services.map((s) => (
                          <li key={s.label}>
                            <Link href={s.href} onClick={closeAll} aria-current={pathname === s.href ? "page" : undefined}>
                              {s.icon}
                              <span>{s.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      className="nav-link"
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onClick={closeAll}
                    >
                      <span className="nav-link-index">{String(index + 1).padStart(2, "0")}</span>
                      <span className="nav-link-label">{item.label}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Link className="solid-btn nav-btn" href="/booking" onClick={closeAll}>
              BOOK A SESSION{" "}
              <svg
                aria-hidden="true"
                className="icon-diag"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 19 19 5M8 5h11v11"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.65}
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
