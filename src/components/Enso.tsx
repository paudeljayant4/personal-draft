interface EnsoProps {
  className?: string;
  size?: number;
}

export const Enso = ({ className = "", size = 60 }: EnsoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="220 16"
        transform="rotate(-30 50 50)"
        opacity="0.85"
      />
    </svg>
  );
};