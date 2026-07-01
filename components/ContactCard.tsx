import { Button } from "@/components/Button";
import { profile } from "@/data/profile";

const contactLinks = [
  { label: "Google Scholar", href: profile.links.scholar },
  { label: "ORCID", href: profile.links.orcid },
  { label: "ResearchGate", href: profile.links.researchGate },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Phenikaa Profile", href: profile.links.phenikaa }
].filter((link): link is { label: string; href: string } => Boolean(link.href));

export function ContactCard() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-ink">{profile.name}</h2>
      <div className="mt-4 leading-7 text-slate-700">
        <p>Phenikaa School of Computing</p>
        <p>Phenikaa University</p>
        <p>{profile.location}</p>
      </div>
      <a className="mt-5 inline-block font-semibold text-navy-700" href={profile.links.email}>
        {profile.email}
      </a>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={profile.links.email} variant="primary">
          Email
        </Button>
        {contactLinks.map((link) => (
          <Button key={link.label} href={link.href}>
            {link.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
