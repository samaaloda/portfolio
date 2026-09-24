export default function TechTag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-muted/80 px-2.5 py-0.5 text-xs font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent">
      {children}
    </span>
  );
}
