import type { Metadata } from "next";
import { Suspense } from "react";
import BuildMain from "@/components/BuildMain";
import InnerEffects from "@/components/InnerEffects";

export const metadata: Metadata = {
  title: "Build Program"
};

export default function BuildPage() {
  return (
    <>
      <BuildMain />
      <Suspense fallback={null}>
        <InnerEffects />
      </Suspense>
    </>
  );
}
