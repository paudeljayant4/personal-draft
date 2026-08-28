interface SectionMarkProps {
  number: string;
  label?: string;
  className?: string;
}

export const SectionMark = ({ number, label, className = "" }: SectionMarkProps) => {
  return (
    <div className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground ${className}`}>
      <span className="font-mono text-vermilion">{number}</span>
      <span className="h-px w-8 bg-border" />
      {label && <span>{label}</span>}
    </div>
  );
};