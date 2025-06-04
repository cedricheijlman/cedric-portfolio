import React from "react";

function PortfolioCard() {
  return (
    <div className="bg-white w-fit p-8">
      <h2 className="font-semibold text-[24px] mb-2">
        Armin AT Portfolio Website{" "}
      </h2>

      <p className="mb-4 ">
        De Nederlandse DJ had een moderne website nodig om zijn muziek te
        presenteren, boekingen te stimuleren en zijn merk online te versterken.
      </p>

      <div className="flex mb-10 flex-wrap">
        <p className="mr-4 mb-2 font-semibold bg-black text-white px-2 rounded-md truncate">
          Web design
        </p>
        <p className="mr-4 mb-2 font-semibold bg-black text-white px-2 rounded-md truncate">
          Web development
        </p>
        <p className="font-semibold mb-2 bg-black text-white px-2 rounded-md truncate">
          UI/UX
        </p>
      </div>

      <a href="https://arminat.com" target="_blank">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md ">
          Ga naar website
        </button>
      </a>
    </div>
  );
}

export default PortfolioCard;
