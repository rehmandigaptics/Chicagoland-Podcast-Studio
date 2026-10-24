import type { Metadata } from "next";
import { Suspense } from "react";
import HowItWorksMain from "@/components/HowItWorksMain";
import InnerEffects from "@/components/InnerEffects";

export const metadata: Metadata = {
  title: "How It Works"
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
