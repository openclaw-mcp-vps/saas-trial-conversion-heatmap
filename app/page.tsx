export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          SaaS Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          See exactly which features<br />
          <span className="text-[#58a6ff]">convert trial users</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Visual heatmaps of trial user feature usage. Predict who will convert before the trial ends — and act on it.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required. Cancel anytime.</p>

        {/* Heatmap mockup */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left">
          <p className="text-xs text-[#6e7681] mb-4 uppercase tracking-widest font-semibold">Feature Usage Heatmap — Last 30 Days</p>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 49 }).map((_, i) => {
              const intensity = Math.random();
              const bg =
                intensity > 0.8 ? "bg-[#58a6ff]" :
                intensity > 0.6 ? "bg-[#1f6feb]" :
                intensity > 0.4 ? "bg-[#388bfd33]" :
                intensity > 0.2 ? "bg-[#21262d]" : "bg-[#161b22]";
              return <div key={i} className={`h-8 rounded ${bg}`} />;
            })}
          </div>
          <div className="mt-4 flex gap-6 text-xs text-[#8b949e]">
            <span><span className="inline-block w-3 h-3 rounded bg-[#58a6ff] mr-1 align-middle"></span>High engagement</span>
            <span><span className="inline-block w-3 h-3 rounded bg-[#1f6feb] mr-1 align-middle"></span>Medium</span>
            <span><span className="inline-block w-3 h-3 rounded bg-[#21262d] mr-1 align-middle"></span>Low</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-xs text-[#58a6ff] uppercase tracking-widest font-semibold mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to reduce churn</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> JS SDK for event tracking</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time feature heatmaps</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Conversion likelihood scores</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 50,000 events/mo</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email alerts for at-risk trials</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">How does the JavaScript SDK work?</p>
            <p className="text-sm text-[#8b949e]">Add a single script tag to your app and call <code className="text-[#58a6ff]">heatmap.track('feature_name')</code> wherever users interact. Events are batched and sent to our API in real time.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">How is conversion likelihood calculated?</p>
            <p className="text-sm text-[#8b949e]">We analyze engagement depth, feature breadth, and session frequency against historical conversion patterns from anonymized data to produce a 0–100 score per trial user.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">Can I cancel anytime?</p>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your dashboard at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} HeatMap.saas — Built for SaaS founders
      </footer>
    </main>
  );
}
