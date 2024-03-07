import { AddIcon } from "assets/icons/svgIcons";
import DashboardLayout from "components/layout/DashboardLayout";
import React from "react";
import CryptoListItem from "./components/CryptoListItem";
import useCustomModal from "hooks/useCustomModal";
import EditCryptoModal from "components/modals/EditCryptoModal";
import AddCryptoModal from "components/modals/AddCryptoModal";

function index() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const cryptos = [
    { name: "Bitcoin(BTC)", address: "WERWER2342354H3ETY4GSDF3Q134E1234G...." },
    {
      name: "USDT (TRC 20)",
      address: "WERWER2342354H3ETY4GSDF3Q134E1234G....",
    },
    { name: "Ethereum", address: "WERWER2342354H3ETY4GSDF3Q134E1234G...." },
  ];

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
      <div className="space-y-4">
        {/* list header  */}
        <div className="grid items-center grid-cols-12 gap-5 p-3 font-bold text-white rounded-md bg-secondaryDark">
          <p className="col-span-3">Crypto</p>
          <p className="col-span-6">Wallet Address</p>
          <p className="col-span-3">Actions</p>
        </div>

        {/* list */}
        <div className="space-y-4">
          {cryptos.map((crypto, index) => (
            <CryptoListItem key={index} crypto={crypto} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default index;
