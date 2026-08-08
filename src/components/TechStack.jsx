import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, iconClass: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, iconClass: "text-slate-950" },
  { name: "Node.js", icon: SiNodedotjs, iconClass: "text-green-600" },
  { name: "MongoDB", icon: SiMongodb, iconClass: "text-emerald-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, iconClass: "text-cyan-500" },
];

// Displays the core technologies Azvanta uses to build modern web projects.
function TechStack() {
  return (
    <section id="tech-stack" className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="section-shell">
        <div className="text-center">
          <p className="section-kicker">Tools we trust</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            A modern stack for fast, scalable experiences.
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map(({ name, icon: Icon, iconClass }) => (
            <li
              key={name}
              className={[
                "group flex min-h-32 flex-col items-center justify-center gap-4 rounded-2xl",
                "border border-slate-200 bg-white px-4 py-6 shadow-sm",
                "transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg",
              ].join(" ")}
            >
              <Icon
                size={34}
                className={`${iconClass} transition-transform duration-300 group-hover:scale-110`}
                aria-hidden="true"
              />
              <span className="text-center text-sm font-extrabold text-slate-800">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechStack;
