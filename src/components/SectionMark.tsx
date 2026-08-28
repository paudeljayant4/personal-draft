interface SectionMarkProps {
  number: string;
  label?: string;
  className?: string;
}

export const SectionMark = ({ number, label, className = "" }: SectionMarkProps) => {
  return (
    <div className={`flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-kuro/45 dark:text-shiro/45 ${className}`}>
      <span className="font-mono text-gold/80 text-[10px] transition-colors duration-500">{number}</span>
      <div className="flex items-center gap-3">
        <div className="w-6 h-px bg-gradient-to-r from-gold/60 to-transparent" />
        {label && <span className="font-jp text-[11px] tracking-[0.2em]">{label}</span>}
      </div>
    </div>
  );
};