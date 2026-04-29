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
    <article className="rounded-3xl border border-emerald-700/60 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
          {status}
        </p>
        <h3 className="text-3xl font-semibold text-white">{name}</h3>
        <p className="max-w-3xl text-sm leading-6 text-slate-200">
          {description}
        </p>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-sm text-cyan-300 underline"
        >
          {repoLabel}
        </a>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
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
            className="rounded-full border border-emerald-600/50 px-3 py-1 text-xs text-emerald-100"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
