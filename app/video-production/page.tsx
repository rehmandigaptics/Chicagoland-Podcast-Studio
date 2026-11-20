import type { Metadata } from "next";
import VideoProductionMain from "@/components/VideoProductionMain";

export const metadata: Metadata = {
  title: "Video Podcast Production",
};

export default function VideoProductionPage() {
  return <VideoProductionMain />;
}
