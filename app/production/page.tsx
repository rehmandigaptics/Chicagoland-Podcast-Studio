import type { Metadata } from "next";
import { Suspense } from "react";
import InnerEffects from "@/components/InnerEffects";
import ProductionMain from "@/components/ProductionMain";

export const metadata: Metadata = {
  title: "Production",
};

export default function ProductionPage() {
  return (
    <>
      <ProductionMain />
      <Suspense fallback={null}>
        <InnerEffects />
      </Suspense>
    </>
  );
}
