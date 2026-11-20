import type { Metadata } from "next";
import PodcastManagementMain from "@/components/PodcastManagementMain";

export const metadata: Metadata = {
  title: "Podcast Management",
};

export default function PodcastManagementPage() {
  return <PodcastManagementMain />;
}
