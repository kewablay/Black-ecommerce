import { AddIcon } from "assets/icons/svgIcons";
import DashboardLayout from "components/layout/DashboardLayout";
import AddPackageModal from "components/modals/AddPackageModal";
import useCustomModal from "hooks/useCustomModal";
import React from "react";

function ManagePackages() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();
  return (
    <DashboardLayout>
      {ModalComponent()}
      {/* heading  */}
      <div className="my-7 flex-between">
        <h2 className="font-bold text-700">Payment Packages</h2>
        <button
          onClick={() =>
            openModal(
              <AddPackageModal closeModal={closeModal} />,
              "customModal"
            )
          }
          className="flex gap-2 p-3 px-4 rounded-md btn-primary"
        >
          <span>
            <AddIcon />
          </span>
          Add Package
        </button>
      </div>

      {/* Packages list */}
    </DashboardLayout>
  );
}

export default ManagePackages;
