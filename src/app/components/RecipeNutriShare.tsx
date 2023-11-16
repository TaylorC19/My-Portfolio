import React from "react";
import Image from "next/image";
import { recipenutrishare } from "../layout";

interface RecipeNutriShareProps {
  lang: string;
}

const RecipeNutriShare: React.FC<RecipeNutriShareProps> = ({ lang }) => {
  return (
    <div className="text-5xl border-solid border-2 border-blue-600 text-center rounded-xl p-4 flex flex-col items-center">
      <p className="h-20">
        <span className={recipenutrishare.className}>Recipe NutriShare</span>
      </p>
      <p className="text-sm p-5 flex-grow flex items-center justify-center">
        {lang === "English"
          ? "RecipeNutriShare is a recipe-sharing app that allows users to create and upload recipes while using a nutrition API to automatically gather and present nutrition information of the recipe."
          : "RecipeNutriShareは、ユーザーがレシピを作成しアップロードできるレシピ共有アプリで、栄養情報APIを使用して、レシピの栄養情報を自動的に収集し表示することができます。"}
      </p>
      <p className="text-sm p-5 flex-grow flex items-center justify-center">
        <a
          className="text-blue-500 underline"
          href="https://recipenutrishare.vercel.app/"
        >
          https://recipenutrishare.vercel.app/
        </a>
      </p>
      <div className="flex items-center justify-center">
        <Image
          src="/images/RecipeNutriShare-fullscreen.png"
          width={600}
          height={600}
          alt="GamerTalk screenshot"
        />
      </div>
      <div className="flex flex-wrap pt-5">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width={50}
          height={50}
          alt="React logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          width={50}
          height={50}
          alt="TypeScript logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          width={50}
          height={50}
          alt="nodejs logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
        <Image
          src="/images/express-white-icon.png"
          width={50}
          height={40}
          alt="Express logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          width={50}
          height={50}
          alt="firebase logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
        {/* <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              width={50}
              height={50}
              alt="jest logo"
              style={{ margin: "0 10px", marginBottom: "10px" }}
            /> */}
        <Image
          src="/images/cypress-icon.png"
          width={50}
          height={50}
          alt="cypress logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />

        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          width={50}
          height={50}
          alt="Postgres logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
      </div>

      <a href="https://github.com/TaylorC19/RecipeNutriShare-Frontend">
        <div className=" border-2 border-solid flex justify-center items-center rounded-xl mx-auto w-17 m-10 p-3 hover:bg-slate-700 bg-slate-600">
          <Image
            src="/images/github-logo-white.png"
            width={100}
            height={100}
            alt="GitHub logo"
          />
        </div>
      </a>
    </div>
  );
};

export default RecipeNutriShare;
