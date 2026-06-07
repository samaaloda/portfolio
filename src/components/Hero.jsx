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
  const { name, tagline } = portfolio.personal_info;
  const { institution, degree, graduation_date, gpa } = portfolio.education;

  return (
    <section className="border-b border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {tagline}
        </p>

        <div className="mt-8 flex items-center gap-5">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-neutral-500 transition-colors hover:text-accent dark:text-neutral-400"
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted">
          {institution} · {degree} · GPA {gpa} · {graduation_date}
        </p>
      </div>
    </section>
  );
}
