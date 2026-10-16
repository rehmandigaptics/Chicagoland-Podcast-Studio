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
            className="navbar-toggler"
            data-bs-target="#navigation"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav mx-auto">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="nav-link"
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
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
