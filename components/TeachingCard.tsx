import type { Course } from "@/data/teaching";

export function TeachingCard({ course }: { course: Course }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-ink">{course.title}</h2>
      <p className="mt-3 leading-7 text-slate-700">{course.description}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-sm">
        <span className="rounded-md bg-slate-100 px-3 py-1 font-semibold text-slate-700">{course.level}</span>
        <span className="rounded-md bg-navy-50 px-3 py-1 font-semibold text-navy-800">{course.semester}</span>
      </div>
    </article>
  );
}
