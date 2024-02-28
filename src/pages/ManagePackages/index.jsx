import { AddIcon } from "assets/icons/svgIcons";
import DashboardLayout from "components/layout/DashboardLayout";
import AddPackageModal from "components/modals/AddPackageModal";
import useCustomModal from "hooks/useCustomModal";
import React from "react";
import { useQuery } from "react-query";
import { getPackages } from "services/packages.services";
import PackageItem from "./PackageItem";

function ManagePackages() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const { isLoading, data: paymentPackages } = useQuery(
    "packages",
    getPackages,
    {
      onSuccess: (data) => {
        console.log("Packages : ", data);
      },
    }
  );
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
      <div className="space-y-4">
        {isLoading
          ? "Loading....."
          : paymentPackages?.map((paymentPackage, index) => (
              <PackageItem
                paymentPackage={paymentPackage}
                number={index + 1}
                key={index}
              />
            ))}
      </div>
    </DashboardLayout>
  );
}

export default ManagePackages;
