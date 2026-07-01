import { PublicationsClient } from "@/app/publications/PublicationsClient";
import { SectionHeading } from "@/components/SectionHeading";

export default function PublicationsPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Publications"
          title="Publication List"
          description="A data-driven archive grouped by year with filters for publication type."
        />
        <PublicationsClient />
      </div>
    </section>
  );
}
