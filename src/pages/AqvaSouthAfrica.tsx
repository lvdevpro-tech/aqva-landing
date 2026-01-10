import { useRef, useState } from "react";
import HeroSection from "../sections/HeroSection";
import TrustSection from "../sections/TrustSection";
import OfferSection from "../sections/OfferSection";
import HowItWorksSA from "../sections/HowItWorksSA";
import DownloadAppSection from "../sections/DownloadAppSection";
import FAQSA from "../sections/FAQSA";
import FooterSA from "../sections/FooterSA";
import ComingSoonModal from "../components/ComingSoonModal";

export function AqvaSouthAfrica() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const downloadRef = useRef<HTMLDivElement>(null);

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen">
      <HeroSection onScrollToDownload={scrollToDownload} />
      <TrustSection />
      <OfferSection />
      <HowItWorksSA />

      <DownloadAppSection ref={downloadRef} onOpenModal={openModal} />

      <FAQSA />

      <FooterSA onScrollToDownload={scrollToDownload} onOpenModal={openModal} />

      <ComingSoonModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default AqvaSouthAfrica;
