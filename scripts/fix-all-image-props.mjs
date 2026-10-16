import fs from "fs";

const files = [
  "components/StudioMain.tsx",
  "components/ServicesMain.tsx",
  "components/TeamMain.tsx",
  "components/BuildMain.tsx",
  "components/HowItWorksMain.tsx",
  "components/PricingMain.tsx",
];

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  // Normalize broken or string image props into JSX expression form
  s = s.replace(
    /image=("?)(\/images\/[A-Za-z0-9._/-]+\.jpg)\1?/g,
    'image={"$2"}'
  );
  // Also catch already-expression forms and leave them
  s = s.replace(/image=\{\s*"(\/images\/[^"]+\.jpg)"\s*\}/g, 'image={"$1"}');
  fs.writeFileSync(file, s);
  const line = s.split(/\n/).find((l) => l.includes("image="));
  console.log(file, JSON.stringify(line));
}
