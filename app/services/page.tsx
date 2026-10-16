import type { Metadata } from "next";
import { Suspense } from "react";
import InnerEffects from "@/components/InnerEffects";
import ServicesMain from "@/components/ServicesMain";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Coworking, dedicated desks, meeting rooms, event space, virtual offices, mailbox, community, and a professional podcast studio at Workspace Junction.",
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
