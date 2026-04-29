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
    <section className="space-y-6">
      <div className="space-y-3 text-center">
        <h2 className="text-4xl font-bold underline underline-offset-8">
          {title}
        </h2>
        <p className="mx-auto max-w-3xl text-base text-slate-300">{intro}</p>
      </div>

      <div className="grid gap-6">
        {roles.map((role) => (
          <article
            key={`${role.company}-${role.period}`}
            className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">{role.title}</h3>
                <p className="text-lg text-slate-200">{role.company}</p>
              </div>
              <div className="text-sm text-slate-400 md:text-right">
                <p>{role.period}</p>
                <p>{role.location}</p>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 text-cyan-400">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {role.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
