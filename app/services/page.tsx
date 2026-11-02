import type { Metadata } from "next";
import { Suspense } from "react";
import InnerEffects from "@/components/InnerEffects";
import ServicesMain from "@/components/ServicesMain";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <ServicesMain />
      <Suspense fallback={null}>
        <InnerEffects />
      </Suspense>
    </>
  );
}
