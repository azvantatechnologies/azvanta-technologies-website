import { FiCode, FiFigma, FiLayout } from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    number: "01",
    title: "Web Development",
    description:
      "Responsive, maintainable websites built with modern React practices and clean, scalable code.",
  },
  {
    icon: FiFigma,
    number: "02",
    title: "Figma to Code",
    description:
      "Accurate Figma designs transformed into polished interfaces that work smoothly across devices.",
  },
  {
    icon: FiLayout,
    number: "03",
    title: "Landing Pages",
    description:
      "Focused, high-impact pages designed to communicate your offer clearly and turn visitors into leads.",
  },
];

// Summarizes Azvanta's three core client services in editable data-driven cards.
function Services() {
  return (
    <section id="services" className="section-spacing bg-slate-50">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker">What we do</p>
            <h2 className="section-title">Digital services built around real business goals.</h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-slate-600 lg:text-right">
            From the first screen to the final launch, every detail is shaped for clarity,
            performance, and growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, number, title, description }) => (
            <article
              key={title}
              className={[
                "surface-card group relative overflow-hidden p-7 sm:p-8",
                "transition-all duration-300 hover:-translate-y-2 hover:border-violet-200",
                "hover:shadow-[0_26px_70px_-34px_rgba(124,58,237,0.55)]",
              ].join(" ")}
            >
              <span className="absolute right-6 top-5 text-sm font-black text-slate-200 transition-colors group-hover:text-violet-200">
                {number}
              </span>
              <span
                className={[
                  "grid size-14 place-items-center rounded-2xl",
                  "bg-violet-100 text-violet-700",
                  "transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white",
                ].join(" ")}
              >
                <Icon size={25} aria-hidden="true" />
              </span>
              <h3 className="mt-7 text-xl font-extrabold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              <div className="mt-7 h-1 w-12 rounded-full bg-violet-600 transition-all duration-300 group-hover:w-20 group-hover:bg-blue-600" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
