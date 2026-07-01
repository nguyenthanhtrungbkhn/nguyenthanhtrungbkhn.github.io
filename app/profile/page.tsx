import { ProfileCard } from "@/components/ProfileCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Tag } from "@/components/Tag";
import { profile } from "@/data/profile";

export default function ProfilePage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profile"
          title="Academic Profile"
          description="A concise overview of Dr. Trung's roles, training, and research interests."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Short Bio</h2>
            <p className="mt-4 leading-8 text-slate-700">{profile.bio}</p>
          </section>
          <div className="grid gap-6">
            <ProfileCard title="Positions" items={profile.positions} />
            <ProfileCard title="Education" items={profile.education} />
          </div>
        </div>
        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-ink">Research Interests</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.extendedInterests.map((interest) => (
              <Tag key={interest}>{interest}</Tag>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
