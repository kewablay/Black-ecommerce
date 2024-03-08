import { AddIcon } from "assets/icons/svgIcons";
import DashboardLayout from "components/layout/DashboardLayout";
import AddPackageModal from "components/modals/AddPackageModal";
import useCustomModal from "hooks/useCustomModal";
import React from "react";
import PackageItem from "./PackageItem";
import { useGetPackages } from "hooks/usePackages";
import Loader from "components/shared/Loader";
import EmptyList from "components/shared/EmptyList";

function ManagePackages() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const { isLoading, data: paymentPackages } = useGetPackages();
  const isPaymentPackagesEmpty = !isLoading && paymentPackages?.length === 0;

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
      {isPaymentPackagesEmpty ? (
        <div className="mt-32">
          <EmptyList
            title={"No Packages Found"}
            description={"Looks like you haven't added any packages!"}
          />
        </div>
      ) : (
        <div className="space-y-4">
          {isLoading ? (
            <div className="mt-32">
              <Loader text={"Loading Packages..."} />
            </div>
          ) : (
            paymentPackages?.map((paymentPackage, index) => (
              <PackageItem
                paymentPackage={paymentPackage}
                number={index + 1}
                key={index}
              />
            ))
          )}
        </div>
      )}
    </DashboardLayout>
  );
}

export default ManagePackages;
