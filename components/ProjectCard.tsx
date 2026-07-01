import type { Project } from "@/data/projects";
import { Tag } from "@/components/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="text-xl font-bold text-ink">{project.title}</h2>
        <span className="text-sm font-bold text-navy-700">{project.time}</span>
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-600">{project.role}</p>
      <p className="mt-4 leading-7 text-slate-700">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.keywords.map((keyword) => (
          <Tag key={keyword}>{keyword}</Tag>
        ))}
      </div>
      <div className="mt-5">
        <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-500">Outcomes</p>
        <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="rounded-md bg-slate-50 px-3 py-2">
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
