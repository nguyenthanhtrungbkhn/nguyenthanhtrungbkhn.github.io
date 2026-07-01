import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "secondary" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-navy-800 text-white hover:bg-navy-700"
      : "border border-navy-100 bg-white text-navy-800 hover:border-navy-600 hover:bg-navy-50";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </Link>
  );
}
