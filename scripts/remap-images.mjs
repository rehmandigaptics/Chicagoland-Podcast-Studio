import fs from "fs";

function replaceOnce(file, from, to) {
  let s = fs.readFileSync(file, "utf8");
  const i = s.indexOf(from);
  if (i === -1) {
    console.log("MISS", file, from);
    return;
  }
  s = s.slice(0, i) + to + s.slice(i + from.length);
  fs.writeFileSync(file, s);
  console.log("OK", file, "->", to);
}

const studioReps = [
  ['src="/images/inside-studio.jpg"', 'src="/images/studio-room-b.jpg"'],
  ['src="/images/conversation.jpg"', 'src="/images/studio-room-c.jpg"'],
  ['src="/images/hero-mic.jpg"', 'src="/images/studio-room-f.jpg"'],
  ['src="/images/inside-studio.jpg"', 'src="/images/session-duo.jpg"'],
  ['src="/images/conversation.jpg"', 'src="/images/session-panel.jpg"'],
  ['src="/images/hero-inset.jpg"', 'src="/images/studio-room-d.jpg"'],
  ['src="/images/lounge.jpg"', 'src="/images/lounge-session.jpg"'],
  ['src="/images/hero-inset.jpg"', 'src="/images/studio-room-e.jpg"'],
  ['src="/images/inside-studio.jpg"', 'src="/images/studio-room-a.jpg"'],
  ['src="/images/lounge.jpg"', 'src="/images/workspace-open.jpg"'],
  ['src="/images/conversation.jpg"', 'src="/images/session-open.jpg"'],
];

for (const [from, to] of studioReps) {
  replaceOnce("components/StudioMain.tsx", from, to);
}

replaceOnce(
  "components/HowItWorksMain.tsx",
  'src="/images/lounge.jpg"',
  'src="/images/workspace-open.jpg"'
);
replaceOnce(
  "components/HowItWorksMain.tsx",
  'src="/images/conversation.jpg"',
  'src="/images/studio-room-b.jpg"'
);
replaceOnce(
  "components/BookingMain.tsx",
  'src="/images/lounge.jpg"',
  'src="/images/session-duo.jpg"'
);
replaceOnce(
  "components/PricingMain.tsx",
  'src="/images/hero-inset.jpg"',
  'src="/images/studio-room-d.jpg"'
);
replaceOnce(
  "components/HomeMain.tsx",
  'src="/images/lounge.jpg"',
  'src="/images/coworking-tables.jpg"'
);
replaceOnce(
  "components/HomeMain.tsx",
  'src="/images/conversation.jpg"',
  'src="/images/studio-room-a.jpg"'
);
replaceOnce(
  "components/HomeMain.tsx",
  'src="/images/lounge.jpg"',
  'src="/images/lounge-session.jpg"'
);
replaceOnce(
  "components/BuildMain.tsx",
  'src="/images/build/studio-install.jpg"',
  'src="/images/studio-room-d.jpg"'
);
replaceOnce(
  "components/BuildMain.tsx",
  'src="/images/build/gear-setup.jpg"',
  'src="/images/studio-room-c.jpg"'
);
