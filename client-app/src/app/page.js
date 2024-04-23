"use client";

import dynamic from "next/dynamic";

const Header = dynamic(
  () => import("./containers/Header"),

  { ssr: false },
);
const Slideshow = dynamic(
  () => import("./containers/Slideshow"),

  { ssr: false },
);
const ProfileBooking = dynamic(
  () => import("./containers/ProfileBooking"),

  { ssr: false },
);
const PopularDestination = dynamic(
  () => import("./containers/PopularDestination"),

  { ssr: false },
);
const SpecialOffers = dynamic(
  () => import("./containers/SpecialOffers"),

  { ssr: false },
);
const Footer = dynamic(
  () => import("./containers/Footer"),

  { ssr: false },
);

export default function Home() {
  return (
    <div id="wrapper">
      <Header />
      <Slideshow />
      <ProfileBooking />
      <PopularDestination />
      <SpecialOffers />
      <Footer />
    </div>
  );
}
