import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, X, Mail, CheckCircle, MapPin } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type LocationOption = {
  label: string;
  value: string; // "zone|neighbourhood"
};

type LocationGroup = {
  group: string; // Zone label
  options: LocationOption[];
};

const LOCATION_GROUPS: LocationGroup[] = [
  {
    group: "Randburg",
    options: [
      { label: "Ferndale", value: "randburg|ferndale" },
      { label: "Blairgowrie", value: "randburg|blairgowrie" },
      { label: "Linden", value: "randburg|linden" },
      { label: "Bordeaux", value: "randburg|bordeaux" },
      { label: "Northcliff", value: "randburg|northcliff" },
      { label: "Cresta", value: "randburg|cresta" },
      { label: "Bryanston", value: "randburg|bryanston" },
    ],
  },
  {
    group: "Sandton",
    options: [
      { label: "Sandton Central", value: "sandton|sandton-central" },
      { label: "Morningside", value: "sandton|morningside" },
      { label: "Benmore Gardens", value: "sandton|benmore-gardens" },
      { label: "Rivonia", value: "sandton|rivonia" },
      { label: "Illovo", value: "sandton|illovo" },
    ],
  },
  {
    group: "Fourways",
    options: [
      { label: "Fourways", value: "fourways|fourways" },
      { label: "Lonehill", value: "fourways|lonehill" },
      { label: "Douglasdale", value: "fourways|douglasdale" },
    ],
  },
  {
    group: "Johannesburg CBD",
    options: [
      { label: "Braamfontein", value: "johannesburg-cbd|braamfontein" },
      { label: "Newtown", value: "johannesburg-cbd|newtown" },
      { label: "Hillbrow", value: "johannesburg-cbd|hillbrow" },
      { label: "Jeppestown", value: "johannesburg-cbd|jeppestown" },
    ],
  },
  {
    group: "Soweto",
    options: [
      { label: "Orlando", value: "soweto|orlando" },
      { label: "Diepkloof", value: "soweto|diepkloof" },
      { label: "Pimville", value: "soweto|pimville" },
    ],
  },
];

// Toujours en fin de liste (anti-blocage)
const LOCATION_FALLBACKS: LocationOption[] = [
  { label: "Other area in Johannesburg", value: "other|other" },
  { label: "I don't know yet / to confirm", value: "unknown|unknown" },
];

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const [email, setEmail] = useState("");
  const [locationValue, setLocationValue] = useState(""); // NEW
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const getParam = (key: string) => {
    const url = new URL(window.location.href);
    return (url.searchParams.get(key) || "").trim();
  };

  const normalize = (s: string) =>
    s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    const cleanedEmail = email.trim().toLowerCase();
    const source = normalize(getParam("src")) || "unknown";
    const areaParam = normalize(getParam("area")) || "unknown"; // ton ancien param URL si tu veux le garder

    // Parse location "zone|neighbourhood"
    const [zone, neighbourhood] = (locationValue || "unknown|unknown").split("|");

    try {
      const payload = {
        email: cleanedEmail,
        source,
        area: areaParam, // tu peux le garder si tu veux comparer "area URL" vs "select"
        location_value: locationValue, // NEW
        zone: zone || "unknown", // NEW
        neighbourhood: neighbourhood || "unknown", // NEW
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      };

      const { error } = await supabase.from("leads").insert([payload]);

      if (error) {
        const msg = (error as any)?.message ?? "";
        const code = (error as any)?.code ?? "";
        const isDuplicate = code === "23505" || msg.toLowerCase().includes("duplicate");

        if (isDuplicate) {
          setEmailSubmitted(true);
        } else {
          setSubmitError("Sorry, we couldn't save your details. Please try again.");
        }
      } else {
        setEmailSubmitted(true);
      }

      setTimeout(() => {
        onClose();
        setEmailSubmitted(false);
        setEmail("");
        setLocationValue("");
      }, 2000);
    } catch (err) {
      console.error(err);
      setSubmitError("Sorry, we couldn't save your details. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-cyan-500/50 rounded-3xl p-8 md:p-12 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!emailSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h2 className="text-white text-3xl mb-3">AQVA is launching soon</h2>
                  <h3 className="text-cyan-400 text-xl mb-4">in Johannesburg</h3>
                </div>

                <p className="text-slate-300 text-center mb-8">
                  We're preparing the app for launch.
                  <br />
                  Leave your email and location to be notified on day one.
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Location (NEW) */}
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      required
                      value={locationValue}
                      onChange={(e) => setLocationValue(e.target.value)}
                      className="w-full appearance-none bg-slate-800/50 border border-slate-600 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="" disabled>
                        Select your area in Johannesburg
                      </option>

                      {LOCATION_GROUPS.map((g) => (
                        <optgroup key={g.group} label={g.group}>
                          {g.options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}

                      <optgroup label="Other">
                        {LOCATION_FALLBACKS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {submitError && (
                    <div className="text-red-300 text-sm text-center">{submitError}</div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                  >
                    {submitting ? "Submitting…" : "Notify Me"}
                  </button>
                </form>

                <p className="text-slate-500 text-xs text-center mt-6">
                  We'll only contact you about the AQVA launch. No spam.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-white text-2xl mb-3">You're on the list!</h2>
                <p className="text-slate-300">We'll notify you as soon as AQVA launches in Johannesburg.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ComingSoonModal;
