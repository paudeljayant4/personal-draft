interface SectionMarkProps {
  number: string;
  label?: string;
  className?: string;
}

export const SectionMark = ({ number, label, className = "" }: SectionMarkProps) => {
  return (
    <div className={`flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-kuro/50 dark:text-shiro/50 ${className}`}>
      <span className="font-mono text-beni/90 text-[10px]">{number}</span>
      <div className="flex items-center gap-3">
        <div className="w-8 h-px bg-gradient-to-r from-beni/70 to-transparent" />
        {label && <span className="font-jp text-[12px] tracking-wider">{label}</span>}
      </div>
    </div>
  );
};