interface SectionMarkProps {
  number: string;
  label?: string;
  className?: string;
}

export const SectionMark = ({ number, label, className = "" }: SectionMarkProps) => {
  return (
    <div className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-kuro/50 dark:text-shiro/50 ${className}`}>
      <span className="font-mono text-beni/80 text-[10px]">{number}</span>
      <div className="flex items-center gap-2">
        <div className="w-6 h-px bg-gradient-to-r from-beni/60 to-transparent" />
        {label && <span className="font-jp text-[11px]">{label}</span>}
      </div>
    </div>
  );
};