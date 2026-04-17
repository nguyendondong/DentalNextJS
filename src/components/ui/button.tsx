import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "default" | "outline" | "highlighted";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantStyles = {
  default:
    "bg-accent text-white hover:bg-primary",
  outline:
    "border-2 border-accent text-accent hover:bg-accent hover:text-white",
  highlighted:
    "bg-primary text-white hover:bg-accent",
} as const;

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-sm uppercase tracking-wide transition-all duration-300";

export function Button({
  href,
  variant = "default",
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className ?? ""}`;

  const arrow = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M1 7h12m0 0L8 2m5 5L8 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
      {arrow}
    </button>
  );
}
