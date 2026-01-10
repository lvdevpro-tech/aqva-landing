import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone } from 'lucide-react';
import imgImageAqva from "../assets/aqva_logo.png";

interface HeroSectionProps {
  onScrollToDownload: () => void;
}

export function HeroSection({ onScrollToDownload }: HeroSectionProps) {
  const reasons = [
    "when the water cuts",
    "during load shedding",
    "for safe drinking water",
    "when taps run dry",
    "for clean bottled water",
    "during water shortages",
    "for your family's safety",
    "when you need it most",
    "for emergency supply",
    "for peace of mind",
  ];

  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReasonIndex((prev) => (prev + 1) % reasons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reasons.length]);

  return (
    <div className="text-center mb-20 mt-12">
      {/* Logo */}
      <div className="inline-flex items-center justify-center mb-12">
        <img src={imgImageAqva} alt="AQVA" className="h-40 md:h-48 drop-shadow-2xl" />
      </div>

      {/* Hero Message */}
      <h1 className="text-white text-5xl md:text-6xl mb-6 leading-tight">
        Safe Water Delivered Fast.
      </h1>
      <div className="text-cyan-400 text-3xl md:text-4xl mb-8">
        20 Minutes. Johannesburg Only.
      </div>

      {/* Dynamic reason with liquid animation */}
      <div className="mb-8">
        <div className="text-white text-2xl md:text-3xl mb-4 flex flex-col items-center gap-3">
          <div className="relative h-16 md:h-20 w-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReasonIndex}
                initial={{ 
                  y: 30, 
                  opacity: 0, 
                  scale: 0.8,
                  filter: "blur(10px)"
                }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  scale: 1,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  y: -30, 
                  opacity: 0, 
                  scale: 0.8,
                  filter: "blur(10px)"
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.6 },
                  filter: { duration: 0.5 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-cyan-300 px-4 py-2 rounded-lg">
                  {reasons[currentReasonIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
        When the water cuts, we deliver <span className="text-cyan-400 font-semibold">sealed water</span> to your door.
      </p>

      {/* Main CTA - Get the App */}
      <button 
        onClick={onScrollToDownload}
        className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center gap-3 mx-auto"
      >
        <Smartphone className="w-6 h-6" />
        Get the AQVA App
      </button>

      <p className="text-slate-400 text-sm mt-4">Launching soon in Johannesburg</p>
    </div>
  );
}

export default HeroSection;
