import type { Metadata } from "next";
import ResourcesMain from "@/components/ResourcesMain";

export const metadata: Metadata = {
  title: "Podcast Resources",
};

export default function ResourcesPage() {
  return <ResourcesMain />;
}
