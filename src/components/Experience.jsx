import TechTag from "./TechTag";
import portfolio from "@/data/portfolio.json";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-foreground">
          Experience
        </h2>
        <p className="mt-2 text-sm text-muted">
          Internships where I owned real systems — from kernel telemetry to cloud ML.
        </p>

        <div className="mt-10 space-y-8">
          {portfolio.experience.map((job) => (
            <article
              key={`${job.company}-${job.dates}`}
              className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <time className="text-xs font-medium uppercase tracking-wider text-accent">
                  {job.dates}
                </time>
                <span className="text-xs text-muted">{job.location}</span>
              </div>

              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-foreground">
                {job.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-muted">{job.company}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>

              <ul className="mt-6 space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 48)}
                    className="relative pl-4 text-[15px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-soft"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
