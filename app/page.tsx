import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { NewsCard } from "@/components/NewsCard";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionHeading } from "@/components/SectionHeading";
import { news } from "@/data/news";
import { publications } from "@/data/publications";

export default function HomePage() {
  const selectedPublications = publications.filter((publication) => publication.selected).slice(0, 3);

  return (
    <>
      <HeroSection />
      <section className="border-b border-slate-200 bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="max-w-5xl text-lg leading-8 text-white">
            I am open to research collaborations and student projects in AI for networking, MPQUIC/QUIC, wireless
            networks, and smart healthcare systems. Students interested in networking, AI systems, and applied research
            are welcome to contact me.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Updates" title="Recent News" />
            <Link href="/news" className="mb-8 font-semibold text-navy-700 hover:text-navy-900">
              View all news
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {news.slice(0, 4).map((item) => (
              <NewsCard key={`${item.date}-${item.title}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Selected Publications"
              description="Representative papers and manuscripts in MPQUIC, AI for networking, and intelligent digital infrastructure."
            />
            <Link href="/publications" className="mb-8 font-semibold text-navy-700 hover:text-navy-900">
              Browse publications
            </Link>
          </div>
          <div className="grid gap-5">
            {selectedPublications.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
