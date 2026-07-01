type ProfileCardProps = {
  title: string;
  items: string[];
};

export function ProfileCard({ title, items }: ProfileCardProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-navy-700" />
            <span className="leading-7">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
