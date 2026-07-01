import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { alumni, currentStudents } from "@/data/students";
import { studentProjectTopics } from "@/data/teaching";

function PersonList({
  title,
  people
}: {
  title: string;
  people: Array<{ name: string; topic: string; note: string }>;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <div className="mt-5 grid gap-4">
        {people.map((person) => (
          <article key={person.name} className="rounded-md bg-slate-50 p-4">
            <h3 className="font-bold text-ink">{person.name}</h3>
            <p className="mt-1 text-sm font-semibold text-navy-700">{person.topic}</p>
            <p className="mt-2 text-sm text-slate-600">{person.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function StudentsPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Students"
          title="Students and Open Topics"
          description="Placeholder student lists are included so the page can be updated with real names and topics later."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <PersonList title="Current Students" people={currentStudents} />
          <PersonList title="Alumni" people={alumni} />
        </div>
        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-ink">Open Topics</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {studentProjectTopics.map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
