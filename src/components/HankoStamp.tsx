interface HankoStampProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const HankoStamp = ({ className = "", size = "md" }: HankoStampProps) => {
  const sizeMap = {
    sm: "w-10 h-10 text-[9px]",
    md: "w-14 h-14 text-[11px]",
    lg: "w-20 h-20 text-[14px]",
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-sm border-[1.5px] border-beni/80 text-beni font-mincho select-none rotate-[-3deg] shadow-[0_0_12px_hsl(var(--beni)/0.2)] bg-beni/5 backdrop-blur-[1px] ${sizeMap[size]} ${className}`}
      style={{
        maskImage:
          "radial-gradient(circle at 40% 40%, rgba(0,0,0,1) 75%, rgba(0,0,0,0.85) 100%)",
      }}
    >
      <div className="flex flex-col items-center justify-center leading-none font-bold tracking-widest text-center">
        <span>邪</span>
        <span className="mt-0.5">安</span>
      </div>
      {/* Ink bleed border texture */}
      <div className="absolute inset-0 border border-beni/30 rounded-[1px] pointer-events-none scale-105 opacity-60" />
    </div>
  );
};