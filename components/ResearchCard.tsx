import type { ResearchDirection } from "@/data/research";
import { Tag } from "@/components/Tag";

export function ResearchCard({ title, description, keywords }: ResearchDirection) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-navy-100 hover:shadow-soft">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <p className="mt-4 leading-7 text-slate-700">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <Tag key={keyword}>{keyword}</Tag>
        ))}
      </div>
    </article>
  );
}
