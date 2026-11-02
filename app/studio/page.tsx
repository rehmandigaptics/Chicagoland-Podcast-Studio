import type { Metadata } from "next";
import { Suspense } from "react";
import InnerEffects from "@/components/InnerEffects";
import StudioMain from "@/components/StudioMain";

export const metadata: Metadata = {
  title: "The Studio"
};

export default function StudioPage() {
  return (
    <>
      <StudioMain />
      <Suspense fallback={null}>
        <InnerEffects />
      </Suspense>
    </>
  );
}
