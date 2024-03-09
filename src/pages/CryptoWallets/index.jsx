import { AddIcon } from "assets/icons/svgIcons";
import DashboardLayout from "components/layout/DashboardLayout";
import React from "react";
import CryptoListItem from "./components/CryptoListItem";
import useCustomModal from "hooks/useCustomModal";
import EditCryptoModal from "components/modals/EditCryptoModal";
import AddCryptoModal from "components/modals/AddCryptoModal";
import { useGetWallets } from "hooks/useCryptoWallets";
import Loader from "components/shared/Loader";
import EmptyList from "components/shared/EmptyList";

function index() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const { data: cryptos, isLoading } = useGetWallets();
  const isCryptosEmpty = !isLoading && cryptos?.length === 0;

  return (
    <DashboardLayout>
      {/* heading  */}
      <div className="my-7 flex-between">
        {ModalComponent()}
        <h2 className="font-bold text-700">Crypto Wallets</h2>
        <button
          onClick={() =>
            openModal(<AddCryptoModal closeModal={closeModal} />, "customModal")
          }
          className="flex gap-2 p-3 px-4 rounded-md btn-primary"
        >
          <span>
            <AddIcon />
          </span>
          Add Wallet
        </button>
      </div>

      {/* Crypto list  */}
      <div>
        {/* list header  */}
        <div className="grid items-center grid-cols-12 gap-5 p-3 mb-4 font-bold text-white rounded-md bg-secondaryDark">
          <p className="col-span-3">Crypto</p>
          <p className="col-span-6">Wallet Address</p>
          <p className="col-span-3">Actions</p>
        </div>

        {/* list */}
        {isCryptosEmpty ? (
          <div className="mt-32">
            <EmptyList
              title="No Crypto Wallets Found"
              description="Looks like you haven't added any crypto wallets!"
            />
          </div>
        ) : (
          <div className="space-y-4">
            {isLoading ? (
              <div className="mt-32">
                <Loader text={"Loading Wallets..."} />
              </div>
            ) : (
              cryptos.map((crypto, index) => (
                <CryptoListItem key={index} crypto={crypto} />
              ))
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default index;
