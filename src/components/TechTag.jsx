export default function TechTag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-neutral-700 transition-colors hover:border-accent hover:text-accent dark:text-neutral-300">
      {children}
    </span>
  );
}
