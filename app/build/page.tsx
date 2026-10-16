import type { Metadata } from "next";
import { Suspense } from "react";
import BuildMain from "@/components/BuildMain";
import InnerEffects from "@/components/InnerEffects";

export const metadata: Metadata = {
  title: "Build Program",
  description:
    "Custom podcast studio builds with expert gear selection, on-site installation, and setup. Build programs start at $35,000.",
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
