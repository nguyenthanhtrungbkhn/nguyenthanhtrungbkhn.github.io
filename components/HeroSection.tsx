import Link from "next/link";
import { profile } from "@/data/profile";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";

const profileLinks = [
  { label: "Google Scholar", href: profile.links.scholar },
  { label: "ORCID", href: profile.links.orcid },
  { label: "ResearchGate", href: profile.links.researchGate },
  { label: "GitHub", href: profile.links.github },
  { label: "Download CV", href: profile.links.cv }
].filter((link): link is { label: string; href: string } => Boolean(link.href));

export function HeroSection() {
  return (
    <section className="academic-pattern border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_0.8fr] lg:px-8 lg:py-20">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-navy-700">
            Academic researcher and lecturer
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <div className="mt-5 space-y-1 text-lg font-semibold text-navy-800">
            {profile.role ? <p>{profile.role}</p> : null}
            <p>{profile.school}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={profile.links.email} variant="primary">
              Email
            </Button>
            {profileLinks.map((link) => (
              <Button key={link.label} href={link.href}>
                {link.label}
              </Button>
            ))}
            <Button href="/publications">Publications</Button>
          </div>
        </div>

        <aside className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
            <img
              src="/images/drNguyenThanhTrung.jpg"
              alt="Nguyen Thanh Trung"
              className="mx-auto aspect-square w-full max-w-64 rounded-lg object-cover object-center"
            />
            <div className="mt-6 text-center">
              <p className="text-xl font-bold text-ink">{profile.shortName}</p>
              {profile.role ? <p className="mt-2 text-sm leading-6 text-slate-600">{profile.role}</p> : null}
              <Link href={profile.links.email} className="mt-4 inline-block text-sm font-semibold text-navy-700">
                {profile.email}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
