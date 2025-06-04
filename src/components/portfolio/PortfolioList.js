import React from "react";
import PortfolioCard from "./PortfolioCard";

function PortfolioList() {
  return (
    <div className="bg-gray-100 w-full px-10 grid place-items-center py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <PortfolioCard />
    </div>
  );
}

export default PortfolioList;
