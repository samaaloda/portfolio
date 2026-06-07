import ProjectImage from "./ProjectImage";
import TechTag from "./TechTag";
import portfolio from "@/data/portfolio.json";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Projects
        </h2>

        <div className="mt-10 grid gap-10">
          {portfolio.projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-border bg-surface"
            >
              <ProjectImage filename={project.image} alt={project.name} />

              <div className="p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  {project.awards && (
                    <span className="text-xs font-medium text-accent">
                      {project.awards}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
