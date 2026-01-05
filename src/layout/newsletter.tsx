import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setEmail("");
    setIsSubmitting(false);

    try {
      fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }).catch((err) => {
        console.error("Submit error:", err);
      });

      toast.success("Subscribed to the newsletter!");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm md:p-12">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left Content */}
            <div className="lg:max-w-lg">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2">
                <Mail className="h-4 w-4 text-red-300" />
                <span className="text-sm font-medium text-red-300">
                  Stay Updated
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Get Exclusive Insights
              </h2>

              <p className="mb-6 text-lg text-white/70">
                Join our newsletter for the latest on Lean Teams, remote work
                strategies, and industry trends. No spam, just valuable content.
              </p>

              {/* <ul className="space-y-3">
                {[
                  "Weekly curated articles",
                  "Team management tips",
                  "Industry reports",
                  "Exclusive case studies",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/80">
                    <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul> */}
            </div>

            {/* Right Form */}
            <div className="w-full lg:max-w-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
                      required
                      disabled={isSubmitting}
                    />
                    <Mail className="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-white/30" />
                  </div>
                  <p className="mt-2 text-xs text-white/40">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="font-medium text-green-300">
                          Thank you for subscribing!
                        </p>
                        <p className="text-sm text-green-400/80">
                          Check your inbox for confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:from-red-500 hover:to-red-600 focus:ring-2 focus:ring-red-500/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                )}

                {/* <div className="text-center">
                  <p className="text-xs text-white/30">
                    Join 5,000+ professionals already receiving our insights
                  </p>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
