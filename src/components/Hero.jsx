import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import portfolio from "@/data/portfolio.json";

const socialLinks = [
  {
    href: portfolio.personal_info.github,
    label: "GitHub",
    icon: GithubIcon,
  },
  {
    href: portfolio.personal_info.linkedin,
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    href: `mailto:${portfolio.personal_info.email}`,
    label: "Email",
    icon: Mail,
  },
];

export default function Hero() {
  const { name, tagline, resume_url } = portfolio.personal_info;
  const { institution, degree, graduation_date, gpa } = portfolio.education;

  return (
    <section className="relative overflow-hidden border-b border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium tracking-wide text-accent">
          Software × Biomedical × ML
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:text-[#1a0f2e]"
          >
            View resume
          </a>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface/70 px-5 py-4 backdrop-blur-sm">
          <p className="text-sm font-medium text-foreground">{institution}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted">{degree}</p>
          <p className="mt-2 text-xs text-accent">
            GPA {gpa} · {graduation_date}
          </p>
        </div>
      </div>
    </section>
  );
}
