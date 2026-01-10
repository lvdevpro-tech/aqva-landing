import { Smartphone } from 'lucide-react';

interface FooterSAProps {
  onScrollToDownload: () => void;
  onOpenModal: () => void;
}

export function FooterSA({ onScrollToDownload, onOpenModal }: FooterSAProps) {
  return (
    <>
      {/* Final CTA */}
      <div className="mb-16 text-center bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border-2 border-cyan-500/50 rounded-3xl p-12">
        <h2 className="text-white text-4xl mb-4">Ready for Safe Water?</h2>
        <p className="text-slate-300 text-xl mb-8">Get notified when we launch</p>
        <button 
          onClick={onOpenModal}
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-12 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center gap-3 mx-auto"
        >
          <Smartphone className="w-6 h-6" />
          Get the AQVA App
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 pt-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-white text-xl mb-4">AQVA</h3>
            <p className="text-slate-400 text-sm">Safe water delivered fast.</p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer" onClick={onScrollToDownload}>Download App</li>
              <li className="hover:text-cyan-400 cursor-pointer">Service Area</li>
              <li className="hover:text-cyan-400 cursor-pointer">How It Works</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-cyan-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-cyan-400 cursor-pointer">Refund Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>✉️ support@aqva.co.za</li>
              <li>📍 Johannesburg, SA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
          <p>© 2025 AQVA South Africa</p>
          <p className="mt-2">Pilot phase — Johannesburg only</p>
        </div>
      </footer>
    </>
  );
}

export default FooterSA;
