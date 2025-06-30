import React from "react";
import PortfolioCard from "./PortfolioCard";
import { projects } from "../../data/projects";

function PortfolioList() {
  return (
    <div className="bg-gray-100 w-full px-2 md:px-10 grid place-items-center py-20 grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <PortfolioCard key={index} project={project} />
      ))}
    </div>
  );
}

export default PortfolioList;
