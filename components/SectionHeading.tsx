type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-navy-700">{eyebrow}</p>
      ) : null}
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
      {description ? <p className="mt-3 text-base leading-7 text-slate-700">{description}</p> : null}
    </div>
  );
}
