import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, X, Mail, CheckCircle } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({
  isOpen,
  onClose,
}: ComingSoonModalProps) {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const [submitError, setSubmitError] = useState<string | null>(
    null,
  );
  const [submitting, setSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    const cleanedEmail = email.trim().toLowerCase();

    try {
      const { error } = await supabase
        .from("sa_waitlist")
        .insert({
          email: cleanedEmail,
          source: "landing_modal",
          city: "Johannesburg", // optionnel
        });

      // Si email déjà présent (unique index), Supabase renvoie une erreur 23505
      // On la traite comme "success" (l'utilisateur est déjà sur la liste).
      if (error) {
        const msg = (error as any)?.message ?? "";
        const code = (error as any)?.code ?? "";
        const isDuplicate =
          code === "23505" ||
          msg.toLowerCase().includes("duplicate");

        if (isDuplicate) {
          setEmailSubmitted(true);
        } else {
          setSubmitError(
            "Sorry, we couldn't save your email. Please try again.",
          );
        }
      } else {
        setEmailSubmitted(true);
      }

      if (!submitError) {
        setTimeout(() => {
          onClose();
          setEmailSubmitted(false);
          setEmail("");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setSubmitError(
        "Sorry, we couldn't save your email. Please try again.",
      );
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
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!emailSubmitted ? (
              <>
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h2 className="text-white text-3xl mb-3">
                    AQVA is launching soon
                  </h2>
                  <h3 className="text-cyan-400 text-xl mb-4">
                    in Johannesburg
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-center mb-8">
                  We're preparing the app for launch.
                  <br />
                  Leave your email to be notified on day one.
                </p>

                {/* Email Form */}
                <form
                  onSubmit={handleEmailSubmit}
                  className="space-y-4"
                >
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
                  {submitError && (
                    <div className="text-red-300 text-sm text-center">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                  >
                    {submitting ? "Submitting…" : "Notify Me"}
                  </button>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                  >
                    Notify Me
                  </button>
                </form>

                <p className="text-slate-500 text-xs text-center mt-6">
                  We'll only contact you about the AQVA launch.
                  No spam.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-white text-2xl mb-3">
                  You're on the list!
                </h2>
                <p className="text-slate-300">
                  We'll notify you as soon as AQVA launches in
                  Johannesburg.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}