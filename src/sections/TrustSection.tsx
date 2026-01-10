import { Shield, Clock, CheckCircle } from 'lucide-react';

export function TrustSection() {
  return (
    <div className="mb-20 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border-2 border-emerald-500/50 rounded-3xl p-10">
      <div className="text-center mb-10">
        <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h2 className="text-white text-4xl mb-4">Only Sealed Bottled Water</h2>
        <p className="text-emerald-300 text-xl">Sourced from trusted suppliers. Stored securely. Delivered fast.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 border border-emerald-500/30 rounded-xl p-6 text-center">
          <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-white text-lg mb-2">Certified Suppliers</h3>
          <p className="text-slate-300 text-sm">Only from trusted, certified water brands</p>
        </div>

        <div className="bg-slate-800/50 border border-emerald-500/30 rounded-xl p-6 text-center">
          <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-white text-lg mb-2">Always Sealed</h3>
          <p className="text-slate-300 text-sm">Every bottle delivered with original seal intact</p>
        </div>

        <div className="bg-slate-800/50 border border-emerald-500/30 rounded-xl p-6 text-center">
          <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-white text-lg mb-2">Secure Storage</h3>
          <p className="text-slate-300 text-sm">Stored in climate-controlled facilities</p>
        </div>
      </div>
    </div>
  );
}

export default TrustSection;
