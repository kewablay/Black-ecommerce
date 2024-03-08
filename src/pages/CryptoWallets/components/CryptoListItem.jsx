import { DeleteIcon, EditIcon } from "assets/icons/svgIcons";
import EditCryptoModal from "components/modals/EditCryptoModal";
import { useDeletWallet } from "hooks/useCryptoWallets";
import useCustomModal from "hooks/useCustomModal";
import React from "react";
import toast from "react-hot-toast";

function CryptoListItem({ crypto }) {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const { mutateAsync: deleteWalletMutation } = useDeletWallet();
  const handleDelete = (walletId) => {
    toast.promise(deleteWalletMutation(walletId), {
      loading: "Deleting Wallet...",
      success: "Wallet deleted successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };
  return (
    <div className="grid items-center grid-cols-12 gap-5 p-5 bg-white rounded-md shadow-sm flex-between text-300">
      {ModalComponent()}
      <p className="col-span-3">{crypto?.category}</p>
      <p className="col-span-6 line-clamp-1">{crypto?.walletAddress}</p>
      <div className="flex items-center col-span-3 gap-5">
        <button
          className="flex items-center gap-1"
          onClick={() =>
            openModal(<EditCryptoModal closeModal={closeModal} crypto={crypto} />, "customModal")
          }
        >
          <span>
            <EditIcon />
          </span>
          Edit
        </button>
        <button
          onClick={() => handleDelete(crypto?._id)}
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
