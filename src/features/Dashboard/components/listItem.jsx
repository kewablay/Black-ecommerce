import React from "react";
import { DeleteIcon, EditIcon } from "../../../assets/icons/svgIcons";

function listItem({ title, image, price, category }) {
  return (
    <div className="grid items-center grid-cols-12 gap-5 p-2 bg-white rounded-md shadow-sm text-300">
      {/* image and item name  */}
      <div className="grid items-center grid-cols-8 col-span-4 gap-2">
        {/* image */}
        <div className="col-span-3 p-3 rounded-md bg-bgGray flex-center">
          <img src={image} alt="." className="w-[90%] sm:w-[70%]" />
        </div>

        {/* item name  */}
        <p className="col-span-5 line-clamp-1 text-ellipsis ">{title}</p>
      </div>

      {/* price  */}
      <div className="col-span-2">
        <p>${price}</p>
      </div>

      {/* category */}
      <div className="col-span-3">{category}</div>

      {/* user actions delete and edit  */}
      <div className="flex items-center col-span-2 gap-5">
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

export default listItem;
