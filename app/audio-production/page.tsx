import type { Metadata } from "next";
import AudioProductionMain from "@/components/AudioProductionMain";

export const metadata: Metadata = {
  title: "Audio Production",
};

export default function AudioProductionPage() {
  return <AudioProductionMain />;
}
