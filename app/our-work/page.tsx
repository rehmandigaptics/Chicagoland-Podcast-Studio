import type { Metadata } from "next";
import OurWorkMain from "@/components/OurWorkMain";

export const metadata: Metadata = {
  title: "Our Work",
};

export default function OurWorkPage() {
  return <OurWorkMain />;
}
