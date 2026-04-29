"use client";

import { useState } from "react";
import Footer from "./components/footer";
import ExperienceSection from "./components/Experience/ExperienceSection";
import MediaLibraryManager from "./components/Projects/MediaLibraryManager";
import SustainabilityPage from "./components/Contributions/SustainabilityPage";
import { getLocalization, type Locale } from "./locale";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const localization = getLocalization(locale);

  const changeLang = () => {
    setLocale((currentLocale) => (currentLocale === "en" ? "ja" : "en"));
  };

  return (
    <div className="mx-auto mb-8 max-w-6xl px-6 pt-6 text-white">
      <div className="flex justify-end">
        <button
          onClick={changeLang}
          className="rounded-xl border-2 bg-slate-600 p-4 text-lg font-bold hover:bg-slate-700"
        >
          {localization.top.languageToggle}
        </button>
      </div>

      <main className="space-y-16">
        <section className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 md:p-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-center text-4xl font-bold sm:text-5xl">
                {localization.top.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mx-auto max-w-3xl text-center text-lg text-slate-200">
                {localization.top.subtitle}
              </p>
              <p className="mx-auto max-w-4xl text-center text-base leading-7 text-slate-300">
                {localization.top.summary}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <a
                href="https://www.linkedin.com/in/taylor-crouch/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-500 px-4 py-2 hover:border-cyan-300 hover:text-cyan-200"
              >
                {localization.top.primaryLinks.linkedin}
              </a>
              <a
                href="https://github.com/TaylorC19"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-500 px-4 py-2 hover:border-cyan-300 hover:text-cyan-200"
              >
                {localization.top.primaryLinks.github}
              </a>
              <a
                href="mailto:tcrouch1996@gmail.com"
                className="rounded-full border border-slate-500 px-4 py-2 hover:border-cyan-300 hover:text-cyan-200"
              >
                {localization.top.primaryLinks.email}
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-center text-sm uppercase tracking-[0.25em] text-slate-400">
                {localization.top.coreStackLabel}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {localization.top.coreStack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-600 px-3 py-1 text-sm text-slate-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection
          title={localization.top.experience}
          intro={localization.experience.intro}
          roles={localization.experience.roles}
        />

        <section className="space-y-6">
          <h2 className="text-center text-4xl font-bold underline underline-offset-8">
            {localization.top.projects}
          </h2>
          <MediaLibraryManager {...localization.projects.mediaLibraryManager} />
        </section>

        <section className="space-y-6">
          <h2 className="text-center text-4xl font-bold underline underline-offset-8">
            {localization.top.contributions}
          </h2>
          <SustainabilityPage {...localization.contributions.sustainabilityPage} />
        </section>
      </main>

      <Footer text={localization.footer.poweredBy} />
    </div>
  );
}
