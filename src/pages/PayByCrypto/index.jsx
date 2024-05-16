import MainLayout from "components/layout/MainLayout";
import React, { useState } from "react";
import CryptoCard from "./components/CryptoCard";
import bitcoinIcon from "assets/icons/bitcoin-icon.png";
import usdtIcon from "assets/icons/usdt-icon.png";
import ethereumIcon from "assets/icons/ethereum-icon.png";
import WalletAddressCard from "./components/WalletAddressCard";
import { useCustomerGetWallets } from "hooks/useCryptoWallets";

function PayByCrypto() {
  const { data: cryptos, isLoading } = useCustomerGetWallets();

  const [currentAddress, setcurrentAddress] = useState("");
  const [showWalletAddress, setshowWalletAddress] = useState(false);

  const handleClick = (address) => {
    const clickedForTheSecondTime = address === currentAddress; // if address is the same as the current address then we clicked the second time
    if (clickedForTheSecondTime) {
      setshowWalletAddress((prev) => !prev);
    } else setshowWalletAddress(true);

    setcurrentAddress(address);
  };

  // get crypto icon
  const getIcon = (category) => {
    if (category === "BitCoin") {
      return bitcoinIcon;
    } else if (category === "Ethereum") {
      return ethereumIcon;
    } else if (category === "USDT") {
      return usdtIcon;
    }
  };


  return (
    <MainLayout>
      <div className="mt-20 section-contained md:h-[50vh]">
        <div className="mt-10 space-y-4 text-center ">
          <h2 className="text-800">Select your prefered crypto currency </h2>
          <p className="text-textGray text-400">
            Explore our range of 0% financing options tailored to fit your
            budget
          </p>
        </div>

        {/* Crypto currency  List  */}
        <div className="relative mx-auto max-w-[70%] sm:max-w-[50%] md:max-w-[90%] lg:max-w-[70%] xl:max-w-[50%]">
          <div className="grid gap-8 mt-20 md:grid-cols-3">
            {isLoading
              ? [...Array(3)].map((_, index) => <CryptoCard key={index} />)
              : cryptos?.map((crypto, index) => (
                  <CryptoCard
                    onClick={() => handleClick(crypto?.walletAddress)}
                    key={index}
                    name={crypto?.category}
                    icon={getIcon(crypto?.category)}
                  />
                ))}
          </div>
          {showWalletAddress && <WalletAddressCard address={currentAddress} />}
        </div>
      </div>
    </MainLayout>
  );
}

export default PayByCrypto;
