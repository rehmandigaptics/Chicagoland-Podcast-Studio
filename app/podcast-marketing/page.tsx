import type { Metadata } from "next";
import PodcastMarketingMain from "@/components/PodcastMarketingMain";

export const metadata: Metadata = {
  title: "Podcast Marketing",
};

export default function PodcastMarketingPage() {
  return <PodcastMarketingMain />;
}
