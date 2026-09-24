import TechTag from "./TechTag";
import portfolio from "@/data/portfolio.json";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-foreground">
          Technical skills
        </h2>
        <p className="mt-2 text-sm text-muted">
          The stack I reach for across ML, cloud, mobile, and infra.
        </p>

        <div className="mt-10 space-y-7">
          {Object.entries(portfolio.skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
