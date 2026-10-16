import fs from "fs";

const files = [
  "components/HowItWorksMain.tsx",
  "components/ServicesMain.tsx",
  "components/TeamMain.tsx",
  "components/BuildMain.tsx",
];

for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  const next = s.replace(
    /image="(\/images\/[^"\n]+\.jpg)(?!")/g,
    'image="$1"'
  );
  if (next !== s) {
    fs.writeFileSync(file, next);
    console.log("fixed", file);
  } else {
    console.log("unchanged", file);
  }
  const line = next.split(/\n/).find((x) => x.includes("image="));
  console.log("  ", JSON.stringify(line));
}
