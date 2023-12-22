import React from "react";
import { LinkArrow } from "../../../assets/icons/svgIcons";
import { Link } from "react-router-dom";

function CategoryCard({ link, title, image, bg }) {
  return (
    <div
      style={{ background: bg }}
      className="h-[15rem] relative grid grid-cols-2 pt-5 pl-5 overflow-hidden rounded-lg bg-tertiary"
    >
      {/* bg text */}
      <p className="absolute font-bold pointer-events-none whitespace-nowrap top-10 left-5 text-800 opacity-5">
        {title}
      </p>
      {/* content */}
      <div className="z-10 flex flex-col justify-end w-20 h-full gap-5 py-5">
        <h4 className="font-bold text-600">{title}</h4>
        <Link to={link}>
          <LinkArrow />
        </Link>
      </div>

      {/* image */}
      <div className="z-10 flex flex-col justify-end h-full">
        <img src={image} alt={"."} className=" h-[13rem]"/>
      </div>
    </div>
  );
}

export default CategoryCard;
