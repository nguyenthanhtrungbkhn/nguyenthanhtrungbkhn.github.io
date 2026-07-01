import { ResearchCard } from "@/components/ResearchCard";
import { SectionHeading } from "@/components/SectionHeading";
import { researchDirections } from "@/data/research";

export default function ResearchPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research"
          title="Research Directions"
          description="Dr. Trung's research connects transport protocols, adaptive networked systems, applied AI, and digital infrastructure."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {researchDirections.map((direction) => (
            <ResearchCard key={direction.title} {...direction} />
          ))}
        </div>
      </div>
    </section>
  );
}
