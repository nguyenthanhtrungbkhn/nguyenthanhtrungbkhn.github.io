"use client";

import { useMemo, useState } from "react";
import { PublicationCard } from "@/components/PublicationCard";
import { publicationTypes, publications, type PublicationType } from "@/data/publications";

type FilterType = "All" | PublicationType;

export function PublicationsClient() {
  const [filter, setFilter] = useState<FilterType>("All");
  const filtered = useMemo(
    () => publications.filter((publication) => filter === "All" || publication.type === filter),
    [filter]
  );

  const grouped = useMemo(() => {
    return filtered.reduce<Record<number, typeof publications>>((acc, publication) => {
      acc[publication.year] = acc[publication.year] ?? [];
      acc[publication.year].push(publication);
      return acc;
    }, {});
  }, [filtered]);

  const years = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {publicationTypes.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFilter(type)}
            className={`rounded-md border px-4 py-2 text-sm font-bold transition ${
              filter === type
                ? "border-navy-800 bg-navy-800 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-navy-600 hover:text-navy-800"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="space-y-10">
        {years.map((year) => (
          <section key={year}>
            <h2 className="mb-4 text-2xl font-bold text-ink">{year}</h2>
            <div className="grid gap-5">
              {grouped[year].map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
