import type { Metadata } from "next";
import PodcastLaunchMain from "@/components/PodcastLaunchMain";

export const metadata: Metadata = {
  title: "Podcast Launch Services",
};

export default function PodcastLaunchPage() {
  return <PodcastLaunchMain />;
}
