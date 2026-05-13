"use client";

import { useState } from "react";
import Footer from "./components/footer";
import ExperienceSection from "./components/Experience/ExperienceSection";
import MediaLibraryManager from "./components/Projects/MediaLibraryManager";
import SustainabilityPage from "./components/Contributions/SustainabilityPage";
import EducationSection from "./components/Education/EducationSection";
import PortfolioHeader from "./components/PortfolioHeader";
import SectionHeading from "./components/SectionHeading";
import { getLocalization, type Locale } from "./locale";

function SectionDivider() {
  return (
    <div
      className="h-px w-full bg-gradient-to-r from-transparent via-slate-500/35 to-transparent"
      aria-hidden
    />
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const localization = getLocalization(locale);

  const changeLang = () => {
    setLocale((currentLocale) => (currentLocale === "en" ? "ja" : "en"));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-0 text-white sm:px-6 sm:pb-12">
      <PortfolioHeader
        brandName={localization.top.brandName}
        brandContext={localization.top.brandContext}
        languageLabel={localization.top.languageToggle}
        onToggleLanguage={changeLang}
      />

      <main className="flex flex-col">
        <section className="scroll-mt-36">
          <div className="rounded-2xl border border-slate-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/85 to-slate-950/90 p-5 shadow-xl shadow-black/25 ring-1 ring-cyan-400/15 backdrop-blur-sm sm:rounded-3xl sm:p-8 md:p-11">
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-center text-[1.85rem] font-bold leading-tight tracking-tight sm:text-5xl md:text-[3rem]">
                  {localization.top.titleLines.map((line, index) => (
                    <span
                      key={line}
                      className={
                        index === 0 ? "block text-white" : "mt-1 block bg-gradient-to-r from-cyan-100 via-white to-teal-200 bg-clip-text text-transparent sm:mt-2"
                      }
                    >
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="mx-auto max-w-3xl text-center text-[0.95rem] leading-relaxed text-slate-100 sm:text-lg">
                  {localization.top.subtitle}
                </p>
                <p className="mx-auto max-w-4xl text-center text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-7">
                  {localization.top.summary}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <a
                  href="https://www.linkedin.com/in/taylor-crouch/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-500/60 bg-slate-950/40 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/50 hover:bg-slate-800/60 hover:text-cyan-100"
                >
                  {localization.top.primaryLinks.linkedin}
                </a>
                <a
                  href="https://github.com/TaylorC19"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-500/60 bg-slate-950/40 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/50 hover:bg-slate-800/60 hover:text-cyan-100"
                >
                  {localization.top.primaryLinks.github}
                </a>
                <a
                  href="mailto:tcrouch1996@gmail.com"
                  className="rounded-full border border-slate-500/60 bg-slate-950/40 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/50 hover:bg-slate-800/60 hover:text-cyan-100"
                >
                  {localization.top.primaryLinks.email}
                </a>
              </div>

              <div className="space-y-3 border-t border-slate-600/35 pt-5 sm:pt-6">
                <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-sm sm:tracking-[0.25em]">
                  {localization.top.coreStackLabel}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {localization.top.coreStack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-600/50 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-100 sm:px-3 sm:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="my-10 sm:my-14">
          <SectionDivider />
        </div>

        <section className="scroll-mt-36 space-y-5 md:space-y-8">
          <ExperienceSection
            title={localization.top.experience}
            intro={localization.experience.intro}
            roles={localization.experience.roles}
          />
        </section>

        <div className="my-10 sm:my-14">
          <SectionDivider />
        </div>

        <section className="scroll-mt-36 space-y-5 md:space-y-8">
          <SectionHeading title={localization.top.projects} accent="emerald" />
          <MediaLibraryManager
            {...localization.projects.mediaLibraryManager}
          />
        </section>

        <div className="my-10 sm:my-14">
          <SectionDivider />
        </div>

        <section className="scroll-mt-36 space-y-5 md:space-y-8">
          <SectionHeading title={localization.top.contributions} accent="sky" />
          <SustainabilityPage
            {...localization.contributions.sustainabilityPage}
          />
        </section>

        <div className="my-10 sm:my-14">
          <SectionDivider />
        </div>

        <section className="scroll-mt-36">
          <EducationSection
            title={localization.top.education}
            entries={localization.education.entries}
          />
        </section>
      </main>

      <Footer text={localization.footer.poweredBy} />
    </div>
  );
}
