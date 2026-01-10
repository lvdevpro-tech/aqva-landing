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
  const [showComingSoonModal, setShowComingSoonModal] =
    useState(false);
  const downloadSectionRef = useRef<HTMLDivElement>(null);
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToDownload = () => {
    downloadSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <HeroSection onScrollToDownload={scrollToDownload} />
        <TrustSection />
        <OfferSection />
        <HowItWorksSA />
        <DownloadAppSection
          ref={downloadSectionRef}
          onOpenModal={() => setShowComingSoonModal(true)}
        />
        <ServiceArea />
        <FAQSA />
        <FooterSA
          onScrollToId={scrollToId}
          onOpenModal={() => setShowComingSoonModal(true)}
        />
      </div>

      <ComingSoonModal
        isOpen={showComingSoonModal}
        onClose={() => setShowComingSoonModal(false)}
      />
    </div>
  );
}

export default AqvaSouthAfrica;