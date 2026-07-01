import type { NewsItem } from "@/data/news";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <time className="rounded-md bg-navy-50 px-3 py-1 text-sm font-bold text-navy-800">{item.date}</time>
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{item.category}</span>
      </div>
      <h2 className="mt-4 text-lg font-bold leading-snug text-ink">{item.title}</h2>
      <p className="mt-3 leading-7 text-slate-700">{item.description}</p>
    </article>
  );
}
