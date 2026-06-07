import portfolio from "@/data/portfolio.json";

export default function Footer() {
  const { name, email } = portfolio.personal_info;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {name}</p>
        <a
          href={`mailto:${email}`}
          className="transition-colors hover:text-accent"
        >
          {email}
        </a>
      </div>
    </footer>
  );
}
