import type { Metadata } from "next";
import { Suspense } from "react";
import InnerEffects from "@/components/InnerEffects";
import PricingMain from "@/components/PricingMain";

export const metadata: Metadata = {
  title: "Podcast Studio Pricing"
};

export default function PricingPage() {
  return (
    <>
      <PricingMain />
      <Suspense fallback={null}>
        <InnerEffects enablePackageTabs />
      </Suspense>
    </>
  );
}
