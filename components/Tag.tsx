type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-800">
      {children}
    </span>
  );
}
