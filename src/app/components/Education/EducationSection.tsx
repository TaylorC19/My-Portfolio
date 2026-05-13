import SectionHeading from "../SectionHeading";

interface EducationEntry {
  credential: string;
  institution: string;
  period: string;
  location: string;
}

interface EducationSectionProps {
  title: string;
  entries: EducationEntry[];
}

export default function EducationSection({
  title,
  entries,
}: EducationSectionProps) {
  return (
    <section className="space-y-5 md:space-y-8">
      <SectionHeading title={title} accent="violet" />

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {entries.map((entry) => (
          <article
            key={`${entry.institution}-${entry.period}`}
            className="rounded-2xl border border-violet-500/20 bg-slate-900/80 p-5 shadow-xl shadow-black/20 ring-1 ring-violet-400/10 sm:rounded-3xl sm:p-6"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                {entry.credential}
              </h3>
              <p className="text-base text-violet-200/90">{entry.institution}</p>
            </div>
            <div className="mt-4 border-t border-slate-600/35 pt-4 text-sm text-slate-400">
              <p>{entry.period}</p>
              <p>{entry.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
