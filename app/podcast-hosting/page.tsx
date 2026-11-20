import type { Metadata } from "next";
import PodcastHostingMain from "@/components/PodcastHostingMain";

export const metadata: Metadata = {
  title: "Podcast Hosting & Distribution",
};

export default function PodcastHostingPage() {
  return <PodcastHostingMain />;
}
