import TechTag from "./TechTag";
import portfolio from "@/data/portfolio.json";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Skills
        </h2>

        <div className="mt-10 space-y-8">
          {Object.entries(portfolio.skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-foreground">{category}</h3>
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
