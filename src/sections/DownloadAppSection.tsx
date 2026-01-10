import { forwardRef } from "react";
import { Smartphone } from "lucide-react";

interface DownloadAppSectionProps {
  onOpenModal: () => void;
}

export const DownloadAppSection = forwardRef<
  HTMLDivElement,
  DownloadAppSectionProps
>(({ onOpenModal }, ref) => {
  return (
    <div id="download" ref={ref} className="mb-20 scroll-mt-8">
      <div className="text-center mb-12">
        <Smartphone className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
        <h2 className="text-white text-4xl mb-4">
          Download the App
        </h2>
        <p className="text-slate-400 text-lg">
          Get ready for launch day
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-cyan-500/30 rounded-3xl p-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* QR Code Side */}
          <div className="text-center">
            <div
              onClick={onOpenModal}
              className="bg-white p-6 rounded-2xl inline-block cursor-pointer hover:scale-105 transition-transform shadow-xl"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              Scan to get notified at launch
            </p>
          </div>

          {/* App Store Buttons Side */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl mb-6">
              Coming Soon
            </h3>

            {/* App Store Button - Disabled */}
            <div className="relative">
              <button
                disabled
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-6 py-4 flex items-center gap-4 opacity-50 cursor-not-allowed"
              >
                <div className="text-3xl">🍎</div>
                <div className="text-left">
                  <div className="text-slate-500 text-xs">
                    Download on the
                  </div>
                  <div className="text-white text-lg font-semibold">
                    App Store
                  </div>
                </div>
              </button>
              <p className="text-slate-500 text-xs mt-2 text-center">
                Available at launch
              </p>
            </div>

            {/* Google Play Button - Disabled */}
            <div className="relative">
              <button
                disabled
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-6 py-4 flex items-center gap-4 opacity-50 cursor-not-allowed"
              >
                <div className="text-3xl">▶️</div>
                <div className="text-left">
                  <div className="text-slate-500 text-xs">
                    GET IT ON
                  </div>
                  <div className="text-white text-lg font-semibold">
                    Google Play
                  </div>
                </div>
              </button>
              <p className="text-slate-500 text-xs mt-2 text-center">
                Available at launch
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition-all mt-6"
            >
              Notify Me at Launch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

DownloadAppSection.displayName = "DownloadAppSection";

export default DownloadAppSection;