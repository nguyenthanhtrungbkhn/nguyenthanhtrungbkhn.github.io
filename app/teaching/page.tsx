import { SectionHeading } from "@/components/SectionHeading";
import { TeachingCard } from "@/components/TeachingCard";
import { Tag } from "@/components/Tag";
import { courses, studentProjectTopics } from "@/data/teaching";

export default function TeachingPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Teaching"
          title="Courses and Student Projects"
          description="Teaching activities emphasize practical systems, research thinking, and hands-on computing foundations."
        />

        <section>
          <h2 className="mb-5 text-2xl font-bold text-ink">Current Courses</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <TeachingCard key={course.title} course={course} />
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-ink">Student Projects</h2>
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
