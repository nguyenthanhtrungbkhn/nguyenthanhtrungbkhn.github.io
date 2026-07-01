type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <article className="relative border-l border-navy-100 pb-8 pl-6 last:pb-0">
      <span className="absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-white bg-navy-700 shadow" />
      <p className="text-sm font-bold text-navy-700">{year}</p>
      <h2 className="mt-1 text-lg font-bold text-ink">{title}</h2>
      <p className="mt-2 leading-7 text-slate-700">{description}</p>
    </article>
  );
}
