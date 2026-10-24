import type { Metadata } from "next";
import { Suspense } from "react";
import InnerEffects from "@/components/InnerEffects";
import TeamMain from "@/components/TeamMain";

export const metadata: Metadata = {
  title: "Team"
};

export default function TeamPage() {
  return (
    <>
      <TeamMain />
      <Suspense fallback={null}>
        <InnerEffects />
      </Suspense>
    </>
  );
}
