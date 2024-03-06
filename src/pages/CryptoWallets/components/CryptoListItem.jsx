import { DeleteIcon, EditIcon } from "assets/icons/svgIcons";
import EditCryptoModal from "components/modals/EditCryptoModal";
import useCustomModal from "hooks/useCustomModal";
import React from "react";

function CryptoListItem({ crypto }) {
  const { openModal, closeModal, ModalComponent } = useCustomModal();
  return (
    <div className="grid items-center grid-cols-12 gap-5 p-5 bg-white rounded-md shadow-sm flex-between text-300">
      {ModalComponent()}
      <p className="col-span-3">{crypto.name}</p>
      <p className="col-span-6">{crypto.address}</p>
      <div className="flex items-center col-span-3 gap-5">
        <button
          className="flex items-center gap-1"
          onClick={() => openModal(<EditCryptoModal />, "customModal")}
        >
          <span>
            <EditIcon />
          </span>
          Edit
        </button>
        <button
          //   onClick={() => handleDelete(category)}
          className="flex items-center gap-1"
        >
          <span>
            <DeleteIcon />
          </span>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CryptoListItem;
