import type { Metadata } from "next";
import { Suspense } from "react";
import BookingMain from "@/components/BookingMain";
import InnerEffects from "@/components/InnerEffects";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Contact Chicagoland Podcast Studio to enquire about bookings in Oakbrook Terrace.",
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
