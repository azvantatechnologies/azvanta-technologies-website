import { FiCheckCircle, FiCode, FiMessageSquare, FiPenTool } from "react-icons/fi";

const processSteps = [
  {
    number: "01",
    title: "Discuss",
    description: "We clarify your goals, audience, scope, and delivery expectations.",
    icon: FiMessageSquare,
  },
  {
    number: "02",
    title: "Design",
    description: "We shape the layout, visual direction, and responsive experience.",
    icon: FiPenTool,
  },
  {
    number: "03",
    title: "Develop",
    description: "We build clean, maintainable code and test every important screen.",
    icon: FiCode,
  },
  {
    number: "04",
    title: "Deliver",
    description: "We polish the final details, hand over the project, and help you launch.",
    icon: FiCheckCircle,
  },
];

// Explains the simple four-step workflow clients follow with Azvanta.
function Process() {
  return (
    <section id="process" className="section-spacing bg-slate-950 text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-400">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A clear process from idea to launch.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end lg:text-lg">
            You always know what comes next. We keep each stage focused, collaborative,
            and easy to understand.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 lg:block"
            aria-hidden="true"
          />

          {processSteps.map(({ number, title, description, icon: Icon }) => (
            <article
              key={title}
              className={[
                "group relative rounded-3xl border border-white/10 bg-white/5 p-6",
                "transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60",
                "hover:bg-white/[0.08]",
              ].join(" ")}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className={[
                    "grid size-16 place-items-center rounded-2xl border border-violet-400/40",
                    "bg-slate-950 text-violet-400 shadow-xl shadow-black/20",
                    "transition-colors duration-300 group-hover:border-blue-400 group-hover:text-blue-400",
                  ].join(" ")}
                >
                  <Icon size={25} aria-hidden="true" />
                </span>
                <span className="text-sm font-black text-white/25">{number}</span>
              </div>
              <h3 className="mt-7 text-xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
