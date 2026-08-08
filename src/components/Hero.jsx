import { FiArrowRight, FiCheckCircle, FiCode, FiLayers } from "react-icons/fi";

const highlights = ["Responsive by default", "Clean React code", "Built for growth"];

// Introduces Azvanta's offer and leads visitors to the contact form.
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-24 top-32 size-64 rounded-full bg-violet-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-20 size-72 rounded-full bg-blue-200/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-shell relative grid min-h-[calc(100vh-4.5rem)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-2 text-xs font-bold text-violet-700 sm:text-sm">
            <span className="size-2 rounded-full bg-violet-600" aria-hidden="true" />
            Web development studio
          </div>

          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.03] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
            Azvanta
            <span className="block">Technologies</span>
          </h1>

          <p className="mt-5 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
            Your Digital Growth Partner
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            We build fast, responsive websites, turn Figma designs into clean code,
            and create landing pages that help brands grow.
          </p>

          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className={[
                "focus-ring group inline-flex items-center gap-3 rounded-2xl px-6 py-4",
                "bg-violet-600 font-bold text-white shadow-xl shadow-violet-200",
                "transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-200",
              ].join(" ")}
            >
              Get a Quote
              <FiArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <p className="text-sm font-medium text-slate-500">
              Clear scope. Honest timelines. Clean delivery.
            </p>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3" aria-label="Service benefits">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <FiCheckCircle className="text-violet-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="hero-orb absolute -right-7 -top-9 size-28 rounded-3xl opacity-90" aria-hidden="true" />
          <div
            className={[
              "relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3",
              "shadow-[0_34px_90px_-32px_rgba(76,29,149,0.45)]",
            ].join(" ")}
          >
            <div className="rounded-[1.4rem] bg-slate-950 p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-rose-400" />
                  <span className="size-2.5 rounded-full bg-amber-300" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                  Building growth
                </span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <FiCode className="text-violet-400" size={24} aria-hidden="true" />
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-white/45">
                    Development
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">Pixel to product</p>
                  <div className="mt-7 space-y-2" aria-hidden="true">
                    <div className="h-2 w-full rounded-full bg-white/10" />
                    <div className="h-2 w-4/5 rounded-full bg-violet-500" />
                    <div className="h-2 w-3/5 rounded-full bg-blue-500" />
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <FiLayers size={24} aria-hidden="true" />
                    <span className="text-xs font-bold">AZVANTA</span>
                  </div>
                  <p className="mt-12 text-sm font-semibold text-white/70">Launch-ready experiences</p>
                  <p className="mt-1 text-3xl font-black">Fast. Clear. Modern.</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3" aria-hidden="true">
                {["01", "02", "03"].map((number) => (
                  <div key={number} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <span className="text-[10px] font-bold text-white/35">{number}</span>
                    <div className="mt-3 h-1.5 rounded-full bg-white/15" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-xl sm:flex sm:items-center sm:gap-3"
            aria-hidden="true"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-violet-100 text-violet-700">
              <FiCheckCircle />
            </span>
            <span>
              <span className="block text-xs font-semibold text-slate-500">Project status</span>
              <span className="block text-sm font-extrabold text-slate-900">Ready to launch</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
