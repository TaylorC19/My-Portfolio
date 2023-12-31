import React from "react";
import { offside } from "../../layout";
import Image from "next/image";

interface GamertalkProps {
  lang: string;
}

const GamerTalk: React.FC<GamertalkProps> = ({ lang }) => {
  return (
    <div className="text-5xl border-solid border-2 border-purple-600 text-center rounded-xl p-4 flex flex-col items-center">
      <p className=" h-20">
        <span className={offside.className}>GamerTalk</span>{" "}
      </p>
      <p className="text-sm p-5 flex-grow flex items-center justify-center">
        {lang === "English"
          ? "An application that allows gamers to connect with each other with the goal of building connections."
          : "ゲーマーをつないで語学を学ぶソーシャル・ネットワーキング・アプリ。"}
      </p>
      <p className="text-sm p-5 flex-grow flex items-center justify-center ">
        <a
          className="text-blue-500 underline"
          href="https://gamertalk.onrender.com/"
        >
          https://gamertalk.onrender.com/
        </a>
      </p>

      <div className="flex items-center justify-center">
        <Image
          src="/images/Gamertalk-fullscreen.png"
          width={600}
          height={600}
          alt="GamerTalk screenshot"
        />
      </div>

      <div className="flex flex-wrap pt-5">
        <Image
          src="/images/nextjs_white_icon.png"
          width={50}
          height={50}
          alt="Next JS logo"
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
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          width={50}
          height={50}
          alt="Python logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
        <Image
          src="/images/django-logo.png"
          width={40}
          height={30}
          alt="django logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
        <Image
          src="/images/cypress-icon.png"
          width={50}
          height={50}
          alt="cypress logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
          width={50}
          height={50}
          alt="firebase logo"
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

      <a href="https://github.com/GamerTalk">
        <div className="border-2 border-solid flex justify-center items-center rounded-xl mx-auto  m-10 p-3 hover:bg-slate-700 bg-slate-600">
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

export default GamerTalk;
