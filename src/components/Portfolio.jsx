import { FiArrowUpRight } from "react-icons/fi";
import portfolioPlaceholder from "../assets/images/project-1-img.png";

const project = {
  title: "SaaS Product Landing Page",
  category: "React Development · Responsive UI",
  description:
    "A modern, conversion-focused product page translated from design into a clean responsive experience.",
  technologies: ["React", "Tailwind CSS", "Responsive Design"],
};

// Showcases featured work and is structured so more project cards can be added later.
function Portfolio() {

  return (
    <section id="work" className="section-spacing bg-white">
      <div className="section-shell">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title">A growing portfolio of thoughtful digital experiences.</h2>
        <p className="section-copy">
          This first project shows the standard we bring to layout accuracy,
          responsive behavior, and implementation quality.
        </p>

        <article className="surface-card mt-12 grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-72 overflow-hidden bg-slate-950 p-5 sm:p-8 lg:min-h-[30rem]">
            <div
              className="absolute -left-10 -top-10 size-44 rounded-full bg-violet-600/40 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-16 right-0 size-52 rounded-full bg-blue-600/35 blur-3xl"
              aria-hidden="true"
            />

            {/* TODO: replace with actual project screenshot */}
            <img
              src={portfolioPlaceholder.src ?? portfolioPlaceholder}
              alt="Placeholder dashboard preview for the SaaS landing page project"
              className="relative h-full w-full rounded-2xl border border-white/10 object-cover shadow-2xl"
            />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
              {project.category}
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">{project.description}</p>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Project technologies">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700"
                >
                  {technology}
                </li>
              ))}
            </ul>

            {/* TODO: replace with actual project URL */}
            <a
              href="https://ntfx-landing-page.netlify.app"
              className={[
                "focus-ring group mt-9 inline-flex w-fit items-center gap-2 rounded-xl",
                "font-extrabold text-violet-700 transition-colors hover:text-blue-600",
              ].join(" ")}
              aria-label="View SaaS Product Landing Page project placeholder"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <FiArrowUpRight
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
