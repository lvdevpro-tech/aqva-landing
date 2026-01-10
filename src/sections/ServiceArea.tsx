import { MapPin } from "lucide-react";

export function ServiceArea() {
  return (
    <div id="service" className="mb-20 scroll-mt-8">
      <div className="text-center mb-10">
        <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
        <h2 className="text-white text-4xl mb-4">
          Service Area
        </h2>
        <p className="text-slate-400 text-lg">
          Currently delivering in Johannesburg
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-slate-800/30 border border-cyan-500/30 rounded-2xl p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-white text-xl">Sandton</h3>
            <p className="text-cyan-300 text-sm mt-2">
              20 min delivery
            </p>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-white text-xl">Bryanston</h3>
            <p className="text-cyan-300 text-sm mt-2">
              20 min delivery
            </p>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/50 rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-white text-xl">Randburg</h3>
            <p className="text-cyan-300 text-sm mt-2">
              20 min delivery
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-400 mb-4">
            Launching in Johannesburg. More regions soon.
          </p>
          <div className="inline-block bg-cyan-500/10 px-6 py-3 rounded-full border border-cyan-500/30">
            <span className="text-cyan-400">
              🇿🇦 Proudly South African
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;