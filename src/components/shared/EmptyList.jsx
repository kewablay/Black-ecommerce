import React from "react";
import emptyIcon from "assets/icons/empty-items-icon.png";

function EmptyList({ title, description, icon }) {
  return (
    <div className="flex flex-col gap-4 flex-center">
      {icon ? (
        <img src={icon} alt="" className="w-52 h-52" />
      ) : (
        <img src={emptyIcon} alt="" className="w-52 h-52" />
      )}
      <div className="text-center ">
        <h3 className="font-bold text-400">{title}</h3>
        <p className="text-textGray text-200">{description}</p>
      </div>
    </div>
  );
}

export default EmptyList;
