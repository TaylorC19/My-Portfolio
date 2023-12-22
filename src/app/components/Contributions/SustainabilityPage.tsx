import React from "react";
import Image from "next/image";
import { poppins } from "@/app/layout";

interface SustainabilityPageProps {
  lang: string;
}

const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ lang }) => {
  return (
    <div className="my-5 flex flex-col items-center justify-center rounded-xl">
      <Image
        src="/images/sustainability_page_logo.jpg"
        width={70}
        height={70}
        alt="Sustainability Page Icon"
      />
      <p className={poppins.className}>Sustainability Page</p>
      <a
        className="text-blue-500 underline"
        href="https://sustainabilitypage.com/"
        target="_blank"
      >
        https://sustainabilitypage.com/
      </a>
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
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          width={50}
          height={50}
          alt="Postgres logo"
          style={{ margin: "0 10px", marginBottom: "10px" }}
        />
      </div>
      <p className="p-10">
        {lang === "English"
          ? "Sustainability Page provides a platform for businesses to centralize their sustainability information in an easy to understand and transparent way to increase stakeholder trust and engagement."
          : "サステナビリティ・ページは、企業が持続可能性に関する情報をわかりやすく透明に集約し、ステークホルダーの信頼と関与を向上させるためのプラットフォームを提供します。"}
      </p>
    </div>
  );
}

export default SustainabilityPage;