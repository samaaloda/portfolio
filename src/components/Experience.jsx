import TechTag from "./TechTag";
import portfolio from "@/data/portfolio.json";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Experience
        </h2>

        <div className="mt-10 divide-y divide-border">
          {portfolio.experience.map((job) => (
            <article key={`${job.company}-${job.dates}`} className="py-10 first:pt-0">
              <time className="text-sm font-mono text-muted">{job.dates}</time>

              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                {job.title}
              </h3>

              <p className="mt-1 text-sm text-muted">
                {job.company} · {job.location}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>

              <ul className="mt-6 space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-300"
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
