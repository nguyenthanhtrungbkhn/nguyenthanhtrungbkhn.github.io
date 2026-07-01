import { SectionHeading } from "@/components/SectionHeading";
import { TimelineItem } from "@/components/TimelineItem";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Academic and Professional Service"
          description="Academic service activities across reviewing, committees, seminars, collaborations, and university service."
        />
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          {services.map((service) => (
            <TimelineItem
              key={`${service.year}-${service.title}`}
              year={service.year}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
