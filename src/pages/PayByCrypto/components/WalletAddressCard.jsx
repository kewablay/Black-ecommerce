import React from "react";

function WalletAddressCard({ address }) {
  return (
    <div className="border w-full p-5 mt-10 rounded-lg top-[100%] bg-bgGray">
      <h4 className="font-bold ">Wallet Address</h4>
      <div className="flex flex-col w-full gap-4 mt-3 md:flex-row ">
        <div className="w-full p-3 bg-white rounded-lg text-200 line-clamp-1">
          {address}
        </div>
        <button className="w-full p-3 px-4 text-white rounded-md md:w-auto text-200 bg-primary">
          Copy
        </button>
      </div>
    </div>
  );
}

export default WalletAddressCard;
