export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <p className="text-neutral-500 font-mono text-sm mb-4 tracking-wider uppercase">
            Hi, I&apos;m
          </p>
        </div>

        <h1 className="animate-fade-in-up animation-delay-200 text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Sean Mangin
        </h1>

        <p className="animate-fade-in-up animation-delay-400 text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build fast, modern websites and AI-powered tools for businesses that
          want to stand out online.
        </p>

        <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-white hover:bg-neutral-200 text-black font-semibold rounded-lg transition-colors text-center"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-neutral-800 hover:border-neutral-500 text-neutral-400 hover:text-white font-semibold rounded-lg transition-colors text-center"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-neutral-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
