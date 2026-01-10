import { useState, useRef } from "react";
import HeroSection from "../sections/HeroSection";
import TrustSection from "../sections/TrustSection";
import OfferSection from "../sections/OfferSection";
import HowItWorksSA from "../sections/HowItWorksSA";
import DownloadAppSection from "../sections/DownloadAppSection";
import ServiceArea from "../sections/ServiceArea";
import FAQSA from "../sections/FAQSA";
import FooterSA from "../sections/FooterSA";
import { ComingSoonModal } from "../components/ComingSoonModal";

export function AqvaSouthAfrica() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <OfferSection />
      <HowItWorksSA />
      <DownloadAppSection />
      <FAQSA />
      <FooterSA />
    </main>
  );
}


export default AqvaSouthAfrica;