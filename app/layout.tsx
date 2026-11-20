import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Barlow_Semi_Condensed, Inter } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";
import SiteEffects from "@/components/SiteEffects";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const barlow = Barlow_Condensed({
  weight: ["500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowSemi = Barlow_Semi_Condensed({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-semi",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chicagoland Podcast Studio",
    template: "%s | Chicagoland Podcast Studio",
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport = {
  themeColor: "#f0f0ed",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${barlow.variable} ${barlowSemi.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){var b="/Chicagoland-Podcast-Studio";function fix(root){var nodes=root&&root.querySelectorAll?root.querySelectorAll("img[src^=\'/\'],source[src^=\'/\']"):[];for(var i=0;i<nodes.length;i++){var n=nodes[i],s=n.getAttribute("src");if(s&&s.indexOf(b+"/")!==0)n.setAttribute("src",b+s)}if(root&&root.nodeType===1&&root.matches&&root.matches("img[src^=\'/\'],source[src^=\'/\']")){var v=root.getAttribute("src");if(v&&v.indexOf(b+"/")!==0)root.setAttribute("src",b+v)}};fix(document);new MutationObserver(function(m){for(var i=0;i<m.length;i++){for(var j=0;j<m[i].addedNodes.length;j++)fix(m[i].addedNodes[j]);if(m[i].type==="attributes")fix(m[i].target)}}).observe(document,{subtree:true,childList:true,attributes:true,attributeFilter:["src"]});})();',
          }}
        />
      </head>
      <body className="premium-rebuild" id="top" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <SmoothScroll />
        <SiteEffects />
        <BootstrapClient />
      </body>
    </html>
  );
}
