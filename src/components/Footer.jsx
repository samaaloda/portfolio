import portfolio from "@/data/portfolio.json";

export default function Footer() {
  const { name, email } = portfolio.personal_info;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-3xl text-center sm:text-left">
        <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
          Let&apos;s build something sharp.
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {name}
          </p>
          <a href={`mailto:${email}`} className="transition-colors hover:text-accent">
            {email}
          </a>
        </div>
      </div>
    </footer>
  );
}
