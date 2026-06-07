import { FileText } from "lucide-react";
import portfolio from "@/data/portfolio.json";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const { name, resume_url } = portfolio.personal_info;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {name.split(" ")[0]}
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <ul className="flex items-center gap-4 sm:gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                <FileText className="hidden h-4 w-4 sm:block" strokeWidth={1.5} />
                Resume
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
