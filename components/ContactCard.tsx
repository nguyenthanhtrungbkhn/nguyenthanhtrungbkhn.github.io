import { Button } from "@/components/Button";
import { profile } from "@/data/profile";

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
        <Button href={profile.links.scholar}>Google Scholar</Button>
        <Button href={profile.links.orcid}>ORCID</Button>
        <Button href={profile.links.researchGate}>ResearchGate</Button>
        <Button href={profile.links.linkedin}>LinkedIn</Button>
        <Button href={profile.links.github}>GitHub</Button>
        <Button href={profile.links.phenikaa}>Phenikaa Profile</Button>
      </div>
    </section>
  );
}
