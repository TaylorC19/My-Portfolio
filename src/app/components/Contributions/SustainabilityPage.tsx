import { poppins } from "@/app/fonts";

interface SustainabilityPageProps {
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  href: string;
  linkLabel: string;
}

const SustainabilityPage = ({
  title,
  role,
  period,
  description,
  highlights,
  technologies,
  href,
  linkLabel,
}: SustainabilityPageProps) => {
  return (
    <article className="my-5 rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className={`${poppins.className} text-2xl text-white`}>{title}</p>
          <p className="text-base text-slate-200">{role}</p>
        </div>
        <p className="text-sm text-slate-400">{period}</p>
      </div>
      <a
        className="mt-4 inline-flex text-sm text-cyan-300 underline"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {linkLabel}
      </a>

      <p className="mt-5 text-sm leading-6 text-slate-200">{description}</p>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-2xl border border-slate-700 bg-slate-950/40 p-4 text-sm leading-6 text-slate-200"
          >
            {highlight}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SustainabilityPage;