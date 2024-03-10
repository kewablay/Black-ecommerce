import React from "react";
import Skeleton from "react-loading-skeleton";

function CategoryPill({ CategoryName, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-normal bg-white border rounded-full text-200 sm:text-300 hover:border-primary whitespace-nowrap transition-all duration-150 ${
        active && "bg-[#030303] font-bold text-white"
      }`}
    >
      {CategoryName || <Skeleton width={80} />}
    </button>
  );
}

export default CategoryPill;
