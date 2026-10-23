import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Inter } from "next/font/google";
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

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chicagoland Podcast Studio | Make Yourself Heard",
    template: "%s | Chicagoland Podcast Studio",
  },
  description:
    "Chicagoland Podcast Studio offers podcast recording and video production experiences for Illinois creators, founders, and brands.",
  icons: {
    icon: "/images/logo-chicagoland.png",
    apple: "/images/logo-chicagoland.png",
  },
};

export const viewport = {
  themeColor: "#f0f0ed",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${barlow.variable} ${inter.variable}`}
    >
      <body className="premium-rebuild" id="top">
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
