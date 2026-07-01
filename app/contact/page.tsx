import { ContactCard } from "@/components/ContactCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="For research collaborations, student projects, academic service, or teaching-related inquiries."
        />
        <ContactCard />
      </div>
    </section>
  );
}
