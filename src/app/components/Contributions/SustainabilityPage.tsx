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
    <article className="rounded-2xl border border-sky-500/30 bg-slate-900/85 p-5 shadow-xl shadow-sky-950/25 ring-1 ring-sky-400/15 backdrop-blur-sm sm:rounded-3xl sm:p-6 md:p-7">
      <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className={`${poppins.className} text-xl text-white sm:text-2xl`}>
            {title}
          </p>
          <p className="mt-1 text-base text-sky-100/85">{role}</p>
        </div>
        <p className="text-xs font-medium text-sky-200/70 sm:text-sm md:text-right">
          {period}
        </p>
      </div>
      <a
        className="mt-4 inline-flex text-sm font-medium text-cyan-300 underline decoration-sky-500/40 underline-offset-4 transition hover:text-cyan-200"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {linkLabel}
      </a>

      <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:mt-5">
        {description}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5 sm:gap-3 md:grid-cols-2">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="rounded-xl border border-slate-600/35 bg-slate-950/55 p-3.5 text-sm leading-relaxed text-slate-200 sm:rounded-2xl sm:p-4"
          >
            {highlight}
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-sky-500/35 bg-sky-950/40 px-3 py-1 text-xs font-medium text-sky-100"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SustainabilityPage;
