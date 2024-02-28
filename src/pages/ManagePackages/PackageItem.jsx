import { DeleteIcon, EditIcon } from "assets/icons/svgIcons";
import EditPackageModal from "components/modals/EditPackageModal";
import useCustomModal from "hooks/useCustomModal";
import React from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { deletePackage } from "services/packages.services";

function PackageItem({ number, paymentPackage }) {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const queryClient = useQueryClient();
  const { mutateAsync: deleteCategoryAsync } = useMutation(deletePackage, {
    onSuccess: () => {
      queryClient.invalidateQueries("packages");
    },
  });

  const handleDelete = (paymentPackage) => {
    toast.promise(deleteCategoryAsync(paymentPackage?._id), {
      loading: `Deleting  Package...`,
      success: "Package deleted successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <div className="p-5 bg-white rounded-md shadow-sm flex-between text-300">
      {ModalComponent()}
      <p>
        {number}. {paymentPackage?.name}
      </p>
      <div className="flex items-center gap-5">
        <button
          className="flex items-center gap-1"
          onClick={() =>
            openModal(
              <EditPackageModal
                paymentPackage={paymentPackage}
                closeModal={closeModal}
              />,
              "customModal"
            )
          }
        >
          <span>
            <EditIcon />
          </span>
          Edit
        </button>
        <button
          onClick={() => handleDelete(paymentPackage)}
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

export default PackageItem;
