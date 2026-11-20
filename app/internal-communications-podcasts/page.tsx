import type { Metadata } from "next";
import InternalPodcastsMain from "@/components/InternalPodcastsMain";

export const metadata: Metadata = {
  title: "Internal Communications Podcasts",
};

export default function InternalPodcastsPage() {
  return <InternalPodcastsMain />;
}
