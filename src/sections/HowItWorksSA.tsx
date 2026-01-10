export function HowItWorksSA() {
  return (
    <div id="how" className="mb-20 scroll-mt-8">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl mb-4">
          How It Works
        </h2>
        <p className="text-slate-400 text-lg">
          Four simple steps to safe water
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            1
          </div>
          <h3 className="text-white text-lg mb-3">
            Open the AQVA App
          </h3>
          <p className="text-slate-400 text-sm">
            Quick and easy ordering in-app
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            2
          </div>
          <h3 className="text-white text-lg mb-3">
            Choose Your Water
          </h3>
          <p className="text-slate-400 text-sm">
            Select from verified suppliers
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            3
          </div>
          <h3 className="text-white text-lg mb-3">
            Track Your Rider
          </h3>
          <p className="text-slate-400 text-sm">
            Real-time delivery tracking
          </p>
        </div>

        {/* Step 4 */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            ✓
          </div>
          <h3 className="text-white text-lg mb-3">
            Delivered in 20 Min
          </h3>
          <p className="text-slate-400 text-sm">
            Fresh, sealed water at your door
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSA;