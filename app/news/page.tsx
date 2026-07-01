import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="News"
          title="News Archive"
          description="Research updates, collaboration notes, teaching activities, and student achievements."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {news.map((item) => (
            <NewsCard key={`${item.date}-${item.title}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
