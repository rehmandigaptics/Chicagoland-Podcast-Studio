import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "..", "chicagoland-podcast-studio-premium-arrows");
const outDir = path.join(root, "_converted");

function htmlToJsx(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;
  content = content.replace(/<script[\s\S]*?<\/script>/gi, "");
  content = content.replace(/<header[\s\S]*?<\/header>/i, "");
  content = content.replace(/<footer[\s\S]*?<\/footer>/i, "");
  const mainMatch = content.match(/<main[^>]*>([\s\S]*)<\/main>/i);
  content = mainMatch ? mainMatch[1] : content;

  content = content
    .replace(/\bclass=/g, "className=")
    .replace(/\bfor=/g, "htmlFor=")
    .replace(/\bviewbox=/gi, "viewBox=")
    .replace(/\bstroke-width=/gi, "strokeWidth=")
    .replace(/\bstroke-linecap=/gi, "strokeLinecap=")
    .replace(/\bstroke-linejoin=/gi, "strokeLinejoin=")
    .replace(/\bstroke-dasharray=/gi, "strokeDasharray=")
    .replace(/\bfill-rule=/gi, "fillRule=")
    .replace(/\bclip-rule=/gi, "clipRule=")
    .replace(/\bclip-path=/gi, "clipPath=")
    .replace(/\bfont-size=/gi, "fontSize=")
    .replace(/\bfont-family=/gi, "fontFamily=")
    .replace(/\bfont-weight=/gi, "fontWeight=")
    .replace(/\btext-anchor=/gi, "textAnchor=")
    .replace(/\bstop-color=/gi, "stopColor=")
    .replace(/\bstop-opacity=/gi, "stopOpacity=")
    .replace(/\bxlink:href=/gi, "xlinkHref=")
    .replace(/\btabindex=/gi, "tabIndex=")
    .replace(/\bautocomplete=/gi, "autoComplete=")
    .replace(/\bcrossorigin=/gi, "crossOrigin=")
    .replace(/\brequired=""/gi, "required")
    .replace(/\brequired="required"/gi, "required");

  content = content
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="studio\.html"/g, 'href="/studio"')
    .replace(/href="services\.html"/g, 'href="/services"')
    .replace(/href="how-it-works\.html"/g, 'href="/how-it-works"')
    .replace(/href="pricing\.html"/g, 'href="/pricing"')
    .replace(/href="booking\.html/g, 'href="/booking')
    .replace(/src="images\//g, 'src="/images/');

  // Convert <a href=...> to <Link href=...> for internal routes
  content = content.replace(
    /<a(\s+)([^>]*href="(\/[^"]*)"[^>]*)>([\s\S]*?)<\/a>/g,
    (match, sp, attrs, href, inner) => {
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
        return match;
      }
      return `<Link${sp}${attrs}>${inner}</Link>`;
    }
  );

  return content.trim();
}

const pages = [
  { file: "index.html", out: "home-main.jsx", component: "HomeMain" },
  { file: "studio.html", out: "studio-main.jsx", component: "StudioMain" },
  { file: "services.html", out: "services-main.jsx", component: "ServicesMain" },
  { file: "how-it-works.html", out: "how-it-works-main.jsx", component: "HowItWorksMain" },
  { file: "pricing.html", out: "pricing-main.jsx", component: "PricingMain" },
  { file: "booking.html", out: "booking-main.jsx", component: "BookingMain" },
];

fs.mkdirSync(outDir, { recursive: true });

for (const p of pages) {
  const html = fs.readFileSync(path.join(srcDir, p.file), "utf8");
  const jsx = htmlToJsx(html);
  const wrapped = `import Link from "next/link";\n\nexport default function ${p.component}() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(outDir, p.out), wrapped);
  console.log("Wrote", p.out, wrapped.length);
}
