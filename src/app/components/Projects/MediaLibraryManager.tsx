interface MediaLibraryManagerProps {
  name: string;
  status: string;
  description: string;
  highlights: string[];
  technologies: string[];
  repoUrl: string;
  repoLabel: string;
}

export default function MediaLibraryManager({
  name,
  status,
  description,
  highlights,
  technologies,
  repoUrl,
  repoLabel,
}: MediaLibraryManagerProps) {
  return (
    <article className="rounded-2xl border border-emerald-500/35 bg-slate-900/85 p-5 shadow-xl shadow-emerald-950/30 ring-1 ring-emerald-400/15 backdrop-blur-sm sm:rounded-3xl sm:p-6 md:p-7">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/95 sm:text-sm sm:tracking-[0.25em]">
          {status}
        </p>
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">
          {name}
        </h3>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-200">
          {description}
        </p>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 transition hover:text-cyan-200 hover:decoration-cyan-300/60"
        >
          {repoLabel}
        </a>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-2.5 sm:mt-6 sm:gap-3 md:grid-cols-2">
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
            className="rounded-full border border-emerald-500/35 bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-100"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
