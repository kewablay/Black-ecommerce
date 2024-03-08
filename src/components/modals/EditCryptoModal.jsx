import { useUpdateWallet } from "hooks/useCryptoWallets";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

function EditCryptoModal({ crypto, closeModal }) {
  const [cryptoName, setcryptoName] = useState(crypto?.category);
  const [walletAddress, setWalletAddress] = useState(crypto?.walletAddress);

  const { mutateAsync: updateWalletMutation } = useUpdateWallet(closeModal);

  const handleUpdateWallet = (e) => {
    e.preventDefault();
    const updatedWallet = {
      category: cryptoName,
      walletAddress: walletAddress,
    };

    const updateData = {
      walletId: crypto?._id,
      updatedWallet,
    };

    toast.promise(updateWalletMutation(updateData), {
      loading: "Updating Wallet...",
      success: "Wallet updated successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <>
      <h2 className="text-center text-700">Edit New Crypto Details</h2>

      <form className="flex flex-col gap-3 mt-12">
        <input
          type="text"
          className="input-style"
          name="cryptoName"
          id="cryptoName"
          value={cryptoName}
          onChange={(e) => setcryptoName(e.target.value)}
          placeholder="Crypto Name."
        />
        <input
          type="text"
          className="input-style"
          name="walletAddress"
          id="walletAddress"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="Wallet Address."
        />

        <button
          onClick={handleUpdateWallet}
          type="submit"
          className="rounded-md btn-primary btn-lg"
          // disabled={isLoading}
        >
          Update Crypto
        </button>
      </form>
    </>
  );
}

export default EditCryptoModal;
