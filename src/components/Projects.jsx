import ProjectImage from "./ProjectImage";
import TechTag from "./TechTag";
import portfolio from "@/data/portfolio.json";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-foreground">
          Projects & hackathons
        </h2>
        <p className="mt-2 text-sm text-muted">
          Award-winning builds — from multimodal AI to on-device disaster detection.
        </p>

        <div className="mt-10 grid gap-8">
          {portfolio.projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-border bg-surface/70 backdrop-blur-sm transition-colors hover:border-accent/40"
            >
              <ProjectImage filename={project.image} alt={project.name} />

              <div className="p-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  {project.awards && (
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {project.awards}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-muted">
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
