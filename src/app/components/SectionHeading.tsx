type SectionAccent = "cyan" | "emerald" | "sky" | "violet";

const accentBar: Record<SectionAccent, string> = {
  cyan: "from-cyan-400 via-teal-400 to-teal-600",
  emerald: "from-emerald-400 via-emerald-500 to-teal-600",
  sky: "from-sky-400 via-blue-400 to-indigo-500",
  violet: "from-violet-400 via-purple-400 to-fuchsia-600",
};

const accentGlow: Record<SectionAccent, string> = {
  cyan: "shadow-[0_0_40px_-8px_rgba(34,211,238,0.25)]",
  emerald: "shadow-[0_0_40px_-8px_rgba(52,211,153,0.22)]",
  sky: "shadow-[0_0_40px_-8px_rgba(56,189,248,0.22)]",
  violet: "shadow-[0_0_40px_-8px_rgba(167,139,250,0.22)]",
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent: SectionAccent;
}

export default function SectionHeading({
  title,
  subtitle,
  accent,
}: SectionHeadingProps) {
  const bar = accentBar[accent];
  const glow = accentGlow[accent];

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-500/25 bg-gradient-to-br from-slate-800 via-slate-800/95 to-slate-900/90 ${glow}`}
    >
      <div className={`h-1 bg-gradient-to-r ${bar} sm:hidden`} aria-hidden />
      <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-stretch sm:gap-0 sm:px-0 sm:py-0">
        <div
          className={`hidden w-1.5 shrink-0 bg-gradient-to-b sm:block sm:rounded-l-2xl ${bar}`}
          aria-hidden
        />
        <div className="min-w-0 flex-1 space-y-2 px-1 text-center sm:py-5 sm:pl-5 sm:pr-6 sm:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
