import type { Publication } from "@/data/publications";
import { Tag } from "@/components/Tag";

const linkLabels: Array<keyof Publication["links"]> = ["pdf", "doi", "code", "slides", "bibtex"];

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold leading-snug text-ink">{publication.title}</h2>
          <p className="mt-2 text-sm font-semibold text-slate-700">{publication.authors}</p>
          <p className="mt-1 text-sm text-slate-600">
            {publication.venue}, {publication.year}
          </p>
          {typeof publication.citations === "number" ? (
            <p className="mt-2 text-sm font-semibold text-navy-700">Cited by {publication.citations}</p>
          ) : null}
        </div>
        <span className="w-fit rounded-md bg-navy-50 px-3 py-1 text-xs font-bold text-navy-800">
          {publication.type}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {publication.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
        {linkLabels.map((key) =>
          publication.links[key] ? (
            <a key={key} href={publication.links[key]} className="text-navy-700 hover:text-navy-900">
              {key === "bibtex" ? "BibTeX" : key.toUpperCase()}
            </a>
          ) : null
        )}
      </div>
    </article>
  );
}
