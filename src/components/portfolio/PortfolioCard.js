import React from "react";
import Link from "next/link";

function PortfolioCard({ project }) {
  return (
    <div className="bg-white mx-4 w-fit p-8 h-full flex flex-col justify-between">
      <div>
        <h2 className="font-semibold text-[24px] mb-2">{project.title}</h2>

        <p className="mb-4 ">{project.shortDescription}</p>

        <div className="flex mb-5 flex-wrap">
          {project.tags.map((tag, index) => (
            <p
              key={index}
              className="mr-4 mb-2 font-semibold bg-black text-white px-2 rounded-md truncate"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <Link href={`/projecten/${project.slug}`}>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Bekijk project
        </button>
      </Link>
    </div>
  );
}

export default PortfolioCard;
