import fs from "fs";

const file = "components/PricingMain.tsx";
let s = fs.readFileSync(file, "utf8");

if (!s.includes("import PremiumCta")) {
  s = s.replace(
    'import Link from "next/link";',
    'import Link from "next/link";\nimport PremiumCta from "@/components/PremiumCta";'
  );
}

const start = s.indexOf('<section className="inner-cta">');
const end = s.indexOf("</section>", start) + "</section>".length;
if (start === -1) {
  console.error("CTA not found");
  process.exit(1);
}

const neu = `<PremiumCta
        eyebrow="[ READY WHEN YOU ARE ]"
        title={<>READY TO<br/>BOOK YOUR<br/><em>SPACE?</em></>}
        description="Tell us your format, guest count and preferred dates. We will help you choose a suitable session."
        image={"/images/studio-room-d.jpg"}
        actionKicker="BOOK THE ROOM"
        buttonLabel="BOOK YOUR SESSION"
        baselineLeft="CLEAR OPTIONS. CONFIDENT BOOKING."
      />`;

s = s.slice(0, start) + neu + s.slice(end);
fs.writeFileSync(file, s);
console.log("Pricing CTA updated");
