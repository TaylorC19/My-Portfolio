interface PortfolioHeaderProps {
  brandName: string;
  brandContext: string;
  languageLabel: string;
  onToggleLanguage: () => void;
}

export default function PortfolioHeader({
  brandName,
  brandContext,
  languageLabel,
  onToggleLanguage,
}: PortfolioHeaderProps) {
  return (
    <header className="sticky top-0 z-40 -mx-4 mb-6 border-b border-slate-600/40 bg-zinc-950/85 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:mb-8 sm:rounded-b-2xl sm:border-x sm:border-t-0 sm:px-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <p className="min-w-0 truncate text-sm text-slate-400">
          <span className="font-semibold text-white">{brandName}</span>
          <span className="hidden text-slate-500 sm:inline"> · </span>
          <span className="hidden text-slate-400 sm:inline">{brandContext}</span>
        </p>
        <button
          type="button"
          onClick={onToggleLanguage}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-slate-700 to-slate-800 px-4 py-2.5 text-sm font-semibold text-white shadow-md ring-1 ring-white/10 transition hover:from-slate-600 hover:to-slate-700 hover:ring-cyan-400/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/80 active:scale-[0.98]"
          aria-label={languageLabel}
        >
          <svg
            className="h-4 w-4 text-cyan-300 transition group-hover:text-cyan-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span className="tabular-nums">{languageLabel}</span>
        </button>
      </div>
    </header>
  );
}
