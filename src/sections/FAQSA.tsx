export function FAQSA() {
  return (
    <div id="faq" className="mb-20 scroll-mt-8">
      <div className="text-center mb-10">
        <h2 className="text-white text-4xl mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-lg">
          Everything you need to know
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* FAQ 1 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white text-xl mb-3">
            Is this safe to drink?
          </h3>
          <p className="text-slate-300">
            <strong className="text-emerald-400">
              Yes, absolutely.
            </strong>{" "}
            AQVA only delivers sealed bottled water from
            certified suppliers. Every bottle is checked for
            intact seals before delivery. We work exclusively
            with trusted South African water brands that meet
            all safety standards.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white text-xl mb-3">
            Where do you deliver?
          </h3>
          <p className="text-slate-300">
            Currently, we deliver in{" "}
            <strong className="text-cyan-400">
              Sandton, Bryanston, and Randburg
            </strong>{" "}
            within 20 minutes. We're launching our pilot phase
            in these areas and will expand to more Johannesburg
            suburbs soon.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white text-xl mb-3">
            How do I pay?
          </h3>
          <p className="text-slate-300">
            You can pay directly with{" "}
            <strong className="text-cyan-400">
              WhatsApp Pay, SnapScan, or cash on delivery
            </strong>{" "}
            (optional). Payment is simple and secure. Our riders
            carry card machines for your convenience.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white text-xl mb-3">
            How fast is delivery really?
          </h3>
          <p className="text-slate-300">
            Our average delivery time is{" "}
            <strong className="text-cyan-400">
              20 minutes
            </strong>{" "}
            from order confirmation. During peak water shortage
            times, it may take up to 30 minutes, but we always
            keep you updated via WhatsApp.
          </p>
        </div>

        {/* FAQ 5 */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
          <h3 className="text-white text-xl mb-3">
            What brands do you deliver?
          </h3>
          <p className="text-slate-300">
            We deliver premium South African bottled water
            brands, all with{" "}
            <strong className="text-emerald-400">
              original factory seals intact
            </strong>
            . Brands include trusted names you know and
            recognize from major retailers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQSA;