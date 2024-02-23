import React from "react";
import { DeleteIcon, EditIcon } from "assets/icons/svgIcons";

import useCustomModal from "hooks/useCustomModal";
import EditProductModal from "components/modals/EditProductModal";
import { getApiImage } from "utils/getApiImage";

function ListItem({ name, image, price, category }) {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  // console.log("images: ", image);
  return (
    <div className="grid items-center grid-cols-12 gap-5 p-2 bg-white rounded-md shadow-sm text-300">
      {/* modal */}
      {ModalComponent()}
      {/* image and item name  */}
      <div className="relative grid items-center grid-cols-8 col-span-4 gap-2">
        {/* image */}
        <div className="col-span-3 p-3 rounded-md bg-bgGray flex-center">
          <img
            src={getApiImage(image[0])}
            alt="."
            className="w-[90%] sm:w-[70%]"
          />
        </div>

        {/* item name  */}

        <p className="col-span-5 cursor-default has-tooltip line-clamp-1 text-ellipsis">
          {name}
          {/* tooltip */}
          <span className="p-1 px-2 -mt-10 bg-white rounded shadow-lg text-200 tooltip text-textGray">
            {name}
          </span>
          {/* tooltip ends */}
        </p>
      </div>

      {/* price  */}
      <div className="col-span-2">
        <p>${price}</p>
      </div>

      {/* category */}
      <div className="col-span-3">{category}</div>

      {/* user actions delete and edit  */}
      <div className="flex items-center col-span-2 gap-5">
        <button
          onClick={() => openModal(<EditProductModal />, "customModal")}
          className="flex items-center gap-1"
        >
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

export default ListItem;
