import { DeleteIcon, EditIcon } from "assets/icons/svgIcons";
import React from "react";

function CategoryItem({ number, category }) {
  return (
    <div className="flex-between p-5 bg-white rounded-md shadow-sm text-300">
      <p>
        {number}. {category?.name}
      </p>

      {/* user actions delete and edit  */}
      <div className="flex items-center  gap-5">
        <button className="flex items-center gap-1">
          <span>
            <EditIcon />
          </span>
          Edit
        </button>
        <button className="flex items-center gap-1">
          <span>
            <DeleteIcon />
          </span>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CategoryItem;
