import React from "react";
import { BgPath } from "../../assets/icons/svgIcons";
import BgSoftText from "./BgSoftText";

function Slide({ title, image, subtext, bg }) {
  const headerHeights =
    "h-[35rem] sm:h-[22rem] md:h-[26rem] lg:h-[34rem] xl:h-[41rem]";

  return (
    <div
      className={`relative z-10 grid items-center gap-10 px-5 pt-20 mx-auto mb-20 overflow-hidden rounded-lg bg-secondary sm:pt-0 sm:grid-cols-2 ${bg} ${headerHeights}`}
    >
      {/* intro text  */}
      <div className="text-center sm:text-left sm:pl-20 ">
        <small className="flex items-center justify-center gap-2 font-normal sm:justify-start text-textGray">
          <span>
            <div className="h-[3.5px] bg-gray-400 w-7"></div>
          </span>
          {subtext}
        </small>
        <h1 className="hero-text sm:max-w-[10rem]">{title}</h1>
        {/* <button className="px-8 py-4 mt-8 font-bold text-gray-300 bg-black rounded-md text-400">Explore products</button> */}
      </div>

      {/* hero image  */}
      <div className="mt-auto">
        <img src={image} alt="iphone" />
      </div>

      {/* bg patern */}
      <div className="absolute -right-5 -top-10">
        <BgPath />
      </div>

      {/* background soft text  */}
      <BgSoftText text={title} />
    </div>
  );
}

export default Slide;
