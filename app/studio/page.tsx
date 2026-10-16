import type { Metadata } from "next";
import { Suspense } from "react";
import InnerEffects from "@/components/InnerEffects";
import StudioMain from "@/components/StudioMain";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Explore Chicagoland Podcast Studio at Workspace Junction in Oakbrook Terrace: professional microphones, multi-camera recording, sound-treated studio, flexible sets and recording formats.",
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
