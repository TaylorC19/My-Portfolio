import SectionHeading from "../SectionHeading";

interface ExperienceRole {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

interface ExperienceSectionProps {
  title: string;
  intro: string;
  roles: ExperienceRole[];
}

export default function ExperienceSection({
  title,
  intro,
  roles,
}: ExperienceSectionProps) {
  return (
    <section className="space-y-5 md:space-y-8">
      <SectionHeading title={title} subtitle={intro} accent="cyan" />

      <div className="grid gap-4 sm:gap-6">
        {roles.map((role) => (
          <article
            key={`${role.company}-${role.period}`}
            className="rounded-2xl border border-slate-600/40 bg-slate-900/80 p-5 shadow-xl shadow-black/20 ring-1 ring-white/[0.04] backdrop-blur-sm sm:rounded-3xl sm:p-6 md:p-7"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {role.title}
                </h3>
                <p className="text-base text-slate-200 sm:text-lg">
                  {role.company}
                </p>
              </div>
              <div className="text-xs text-slate-400 sm:text-sm md:text-right">
                <p className="font-medium text-slate-300">{role.period}</p>
                <p>{role.location}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-200 sm:mt-5 sm:space-y-3 sm:text-[0.9375rem]">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-[0.35em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {role.technologies.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {role.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-500/45 bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-100"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
