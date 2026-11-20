import type { ReactNode } from "react";

export const Svg = ({ children, className = "hw-ico", viewBox = "0 0 24 24" }: { children: ReactNode; className?: string; viewBox?: string }) => (
  <svg
    className={className}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const I = {
  rocket: (
    <Svg>
      <path d="M14 4c3.5-1.5 6-1 6-1s.5 2.5-1 6l-6.5 6.5-5-5z" />
      <path d="M8 11 4 12l3-4h4M13 16l-1 4 4-3v-4M6 18l-2 2" />
    </Svg>
  ),
  rss: (
    <Svg>
      <circle cx="5.5" cy="18.5" r="1.8" fill="currentColor" />
      <path d="M4 11a9 9 0 0 1 9 9M4 4.5a15.5 15.5 0 0 1 15.5 15.5" />
    </Svg>
  ),
  code: (
    <Svg>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </Svg>
  ),
  lock: (
    <Svg>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </Svg>
  ),
  headset: (
    <Svg>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="2.5" y="13.5" width="4.5" height="6.5" rx="1.5" fill="currentColor" />
      <rect x="17" y="13.5" width="4.5" height="6.5" rx="1.5" fill="currentColor" />
    </Svg>
  ),
  camera: (
    <Svg>
      <path d="M3 8a2 2 0 0 1 2-2h2.5l1.5-2h6l1.5 2H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13" r="3.6" fill="#12141a" stroke="none" />
    </Svg>
  ),
  cc: (
    <Svg>
      <rect x="2" y="4.5" width="20" height="15" rx="2.5" />
      <path d="M10.5 10a2.5 2.5 0 1 0 0 4M17.5 10a2.5 2.5 0 1 0 0 4" />
    </Svg>
  ),
  target: (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </Svg>
  ),
  arrow: (
    <Svg>
      <path d="M3 12h17M14 6l6 6-6 6" />
    </Svg>
  ),
  scissors: (
    <Svg>
      <circle cx="6" cy="6.5" r="3" />
      <circle cx="6" cy="17.5" r="3" />
      <path d="M8.4 8.3 20 18.5M8.4 15.7 20 5.5" />
    </Svg>
  ),
  bars: (
    <Svg>
      <rect x="3" y="12" width="4.5" height="9" fill="currentColor" />
      <rect x="9.75" y="7" width="4.5" height="14" fill="currentColor" />
      <rect x="16.5" y="3" width="4.5" height="18" fill="currentColor" />
    </Svg>
  ),
  search: (
    <Svg>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
    </Svg>
  ),
  calendar: (
    <Svg>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M7.5 13.5h1M11.5 13.5h1M15.5 13.5h1M7.5 17h1M11.5 17h1M15.5 17h1" strokeWidth={2.2} />
    </Svg>
  ),
  video: (
    <Svg>
      <rect x="2" y="6.5" width="13" height="11" rx="2" fill="currentColor" />
      <path d="M15 10.5 21.5 7v10L15 13.5z" fill="currentColor" />
    </Svg>
  ),
  sliders: (
    <Svg>
      <path d="M6 3v18M12 3v18M18 3v18" />
      <circle cx="6" cy="15" r="2.2" fill="#fff" />
      <circle cx="12" cy="8" r="2.2" fill="#fff" />
      <circle cx="18" cy="13" r="2.2" fill="#fff" />
    </Svg>
  ),
  checkCircle: (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.2 2.8 2.8L16.5 9" />
    </Svg>
  ),
  broadcast: (
    <Svg>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.2 5.2a9.6 9.6 0 0 0 0 13.6M18.8 5.2a9.6 9.6 0 0 1 0 13.6" />
    </Svg>
  ),
  mic: (
    <Svg>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v4M8.5 21.5h7" />
    </Svg>
  ),
  film: (
    <Svg>
      <rect x="2.5" y="4" width="19" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M2.5 8.5H7M2.5 12H7M2.5 15.5H7M17 8.5h4.5M17 12h4.5M17 15.5h4.5" />
    </Svg>
  ),
  layers: (
    <Svg>
      <path d="M12 3 2.5 8 12 13l9.5-5z" />
      <path d="m2.5 12 9.5 5 9.5-5M2.5 16l9.5 5 9.5-5" />
    </Svg>
  ),
  folder: (
    <Svg>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M3 10h18" />
    </Svg>
  ),
  wave: (
    <Svg>
      <path d="M2 10v4M5 7v10M8 4v16M11 8v8M14 5v14M17 9v6M20 7v10M23 11v2" />
    </Svg>
  ),
  edit: (
    <Svg>
      <path d="M20 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
      <path d="M18 2.5 21.5 6 12 15.5H8.5V12z" />
    </Svg>
  ),
  cloud: (
    <Svg>
      <path d="M7 18H6.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.6 8.1 4.5 4.5 0 0 1 17.5 18H17" />
      <path d="M12 21v-9M8.8 15.2 12 12l3.2 3.2" />
    </Svg>
  ),
  people: (
    <Svg>
      <circle cx="12" cy="7" r="3.2" fill="currentColor" />
      <circle cx="5" cy="8.5" r="2.5" fill="currentColor" />
      <circle cx="19" cy="8.5" r="2.5" fill="currentColor" />
      <path d="M6.5 20v-2.5a5.5 5.5 0 0 1 11 0V20z" fill="currentColor" />
      <path d="M1 20v-1.6A4 4 0 0 1 6.2 14.6M23 20v-1.6a4 4 0 0 0-5.2-3.8" fill="currentColor" />
    </Svg>
  ),
  gear: (
    <Svg>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3" />
      <circle cx="12" cy="12" r="6.6" />
    </Svg>
  ),
  timer: (
    <Svg>
      <circle cx="14" cy="13" r="7.5" />
      <path d="M14 9v4l2.5 2M12 3h4M2 10h4M1 13.5h5M2.5 17h4" />
    </Svg>
  ),
  refresh: (
    <Svg>
      <path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5" />
      <path d="M4 3.5v5h5" />
      <path d="M4 13a8 8 0 0 0 14.3 4.6L20 15.5" />
      <path d="M20 20.5v-5h-5" />
    </Svg>
  ),
  studio: (
    <Svg>
      <rect x="2" y="3" width="13" height="10" rx="1.5" fill="currentColor" />
      <path d="M17.5 3v10M21 3v10M1.5 16.5h21M5 16.5V21M19 16.5V21" />
    </Svg>
  ),
  monitor: (
    <Svg>
      <rect x="2" y="3.5" width="20" height="13" rx="2" />
      <path d="M8.5 21h7M12 16.5V21" />
    </Svg>
  ),
  play: (
    <Svg>
      <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
      <path d="M10 8.5v7l5.5-3.5z" fill="currentColor" />
    </Svg>
  ),
  clips: (
    <Svg>
      <rect x="2.5" y="6.5" width="15" height="14" rx="1.5" />
      <path d="M6.5 3.5h14a1 1 0 0 1 1 1v12" />
      <path d="M8.5 10.5v6l5-3z" fill="currentColor" />
    </Svg>
  ),
  doc: (
    <Svg>
      <path d="M5 2.5h10l4 4V21a.5.5 0 0 1-.5.5h-13A.5.5 0 0 1 5 21z" />
      <path d="M8.5 9h7M8.5 12.5h7M8.5 16h7" />
    </Svg>
  ),
  pin: (
    <Svg>
      <path d="M12 21.5s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12z" fill="currentColor" stroke="none" />
      <circle cx="12" cy="9.5" r="2.6" fill="#0b0d12" stroke="none" />
    </Svg>
  ),
};

export const Check = () => (
  <svg className="hw-check" viewBox="0 0 12 10" aria-hidden="true">
    <path d="M1.2 5.4l3.2 3.1L10.8 1.4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Lines = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((l) => (
      <span className="hw-l" key={l}>
        {l}
      </span>
    ))}
  </>
);

