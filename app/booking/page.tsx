import type { Metadata } from "next";
import { Suspense } from "react";
import BookingMain from "@/components/BookingMain";
import InnerEffects from "@/components/InnerEffects";

export const metadata: Metadata = {
  title: "Book a Session"
};

export default function BookingPage() {
  return (
    <>
      <BookingMain />
      <Suspense fallback={null}>
        <InnerEffects />
      </Suspense>
    </>
  );
}
