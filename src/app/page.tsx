"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "./components/footer";
import GamerTalk from "./components/Projects/Gamertalk";
import RecipeNutriShare from "./components/Projects/RecipeNutriShare";
import SustainabilityPage from "./components/Contributions/SustainabilityPage";
import { getLocalization, type Locale } from "./locale";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const localization = getLocalization(locale);

  const changeLang = () => {
    setLocale((currentLocale) => (currentLocale === "en" ? "ja" : "en"));
  };

  return (
    <div className="text-white mx-8 mb-8">
      <button
        onClick={changeLang}
        className="text-2xl font-bold  p-4 border-2  rounded-xl absolute top-0 right-0 m-4 hover:bg-slate-700 bg-slate-600"
      >
        {localization.top.languageToggle}
      </button>

      <h1 className="text-5xl text-center font-bold mb-8 my-20 pt-10">
        {localization.top.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <div className="flex justify-center items-center pb-10">
        <a href="https://www.linkedin.com/in/taylor-crouch/">
          <Image
            src="/images/LI-Logo.png"
            width={100}
            height={200}
            alt="link to LinkedIn"
          />
        </a>
        <a href="https://github.com/TaylorC19">
          <Image
            src="/images/github-logo-white.png"
            width={100}
            height={200}
            alt="link to Github"
          />
        </a>
      </div>

      <h2 className="text-4xl pt-10 flex flex-col items-center justify-center underline mb-5">
        {localization.top.projects}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-4xl">
        <RecipeNutriShare
          description={localization.projects.recipeNutriShare.description}
        />

        <GamerTalk description={localization.projects.gamerTalk.description} />
      </div>

      <div>
        <h2 className="text-4xl pt-10 flex flex-col items-center justify-center underline">
          {localization.top.contributions}
        </h2>

        <SustainabilityPage
          description={localization.contributions.sustainabilityPage.description}
        />
      </div>
      <Footer text={localization.footer.poweredBy} />
    </div>
  );
}
