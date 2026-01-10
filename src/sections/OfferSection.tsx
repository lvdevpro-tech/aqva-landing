import { CheckCircle } from 'lucide-react';

export function OfferSection() {
  return (
    <div className="mb-20">
      <h2 className="text-white text-4xl text-center mb-10">Our Offer</h2>
      
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border-2 border-cyan-500/50 rounded-3xl p-8 hover:border-cyan-400 transition-all">
        <div className="text-center mb-6">
          <div className="inline-block bg-cyan-500/20 px-6 py-2 rounded-full mb-4">
            <span className="text-cyan-300 font-semibold">AQVA Pack</span>
          </div>
          <h3 className="text-white text-3xl mb-2">6 × 1.5L Sealed Bottles</h3>
          <p className="text-slate-300 text-lg">Delivery in 20 minutes</p>
          <p className="text-cyan-400 text-sm mt-2">Sandton • Bryanston • Randburg</p>
        </div>

        <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-200">Original factory-sealed bottles</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-200">Premium South African brands</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-200">Delivered by verified riders</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-200">Track your delivery in real-time</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
