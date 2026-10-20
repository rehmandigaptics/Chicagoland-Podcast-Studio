"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/studio", label: "The Studio" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/team", label: "Team" },
  { href: "/build", label: "Build" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <nav className="navbar navbar-expand-lg py-0">
        <div className="container-fluid shell">
          <Link
            aria-label="Chicagoland Podcast Studio home"
            className="brand"
            href="/"
          >
            <strong>
              CHICAGO<span>LAND</span>
            </strong>
            <small>PODCAST + VIDEO STUDIO</small>
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
              {nav.map((item, index) => (
                <li key={item.href}>
                  <Link
                    className="nav-link"
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    <span className="nav-link-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="nav-link-label">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="solid-btn nav-btn" href="/booking">
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
