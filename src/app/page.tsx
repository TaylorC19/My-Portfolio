"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "./components/footer";
import GamerTalk from "./components/Projects/Gamertalk";
import RecipeNutriShare from "./components/Projects/RecipeNutriShare";
import SustainabilityPage from "./components/Contributions/SustainabilityPage";
import { poppins } from "./layout";

export default function Home() {
  const [lang, setLang] = useState<string>("English");
  const jpHeading = `クラウチ テイラー ポートフォリオ`;

  const changeLang = () => {
    return lang === "English" ? setLang("Japanese") : setLang("English");
  };

  return (
    <div className="text-white mx-8 mb-8">
      <button
        onClick={changeLang}
        className="text-2xl font-bold  p-4 border-2  rounded-xl absolute top-0 right-0 m-4 hover:bg-slate-700 bg-slate-600"
      >
        {lang === "English" ? "日本語" : "English"}
      </button>

      <h1 className="text-5xl text-center font-bold mb-8 my-20 pt-10">
        {lang === "Japanese" ? (
          <span>
            クラウチ テイラー <br /> ポートフォリオ
          </span>
        ) : (
          "Taylor Crouch Portfolio"
        )}
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
        {lang === "English" ? "Projects" : "プロジェクト"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-4xl">
        <RecipeNutriShare lang={lang} />

        <GamerTalk lang={lang} />
      </div>

      <div>
        <h2 className="text-4xl pt-10 flex flex-col items-center justify-center underline">
          {lang === "English" ? "Contributions" : "フリーランスの仕事"}
        </h2>

        <SustainabilityPage lang={lang} />
      </div>
      <Footer
        text={
          lang === "English"
            ? "Powered by Tailwind CSS & Next.JS"
            : "Tailwind CSSとNext JSによって動作します"
        }
      />
    </div>
  );
}
