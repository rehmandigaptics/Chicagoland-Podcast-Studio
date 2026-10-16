import type { Metadata } from "next";
import { Suspense } from "react";
import HowItWorksMain from "@/components/HowItWorksMain";
import InnerEffects from "@/components/InnerEffects";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how to plan, book and record at Chicagoland Podcast Studio.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksMain />
      <Suspense fallback={null}>
        <InnerEffects />
      </Suspense>
    </>
  );
}
