import React from "react";

function CategoryPill({ CategoryName, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-normal bg-white border rounded-full text-200 sm:text-300 hover:border-primary whitespace-nowrap transition-all duration-150 ${
        active && "bg-[#4b4f64] font-bold text-white"
      }`}
    >
      {CategoryName}
    </button>
  );
}

export default CategoryPill;
