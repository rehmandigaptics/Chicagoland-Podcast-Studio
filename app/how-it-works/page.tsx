import type { Metadata } from "next";
import HowItWorksMain from "@/components/HowItWorksMain";

export const metadata: Metadata = {
  title: "How It Works",
};

export default function HowItWorksPage() {
  return <HowItWorksMain />;
}
