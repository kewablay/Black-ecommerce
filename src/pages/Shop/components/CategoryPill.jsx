import React from "react";

function CategoryPill({ CategoryName, onClick }) {
  return <button onClick={onClick} className="px-6 py-3 font-normal bg-white border rounded-full text-200 sm:text-300 hover:border-primary whitespace-nowrap">{CategoryName}</button>;
}

export default CategoryPill;
