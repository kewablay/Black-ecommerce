import { useCreateWallet } from "hooks/useCryptoWallets";
import React, { useRef } from "react";
import toast from "react-hot-toast";

function AddCryptoModal({ closeModal }) {
  const cryptoNameRef = useRef();
  const walletAddressRef = useRef();

  const { mutateAsync: createWalletMutation } = useCreateWallet(closeModal);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWallet = {
      category: cryptoNameRef.current.value,
      walletAddress: walletAddressRef.current.value,
    };
    toast.promise(createWalletMutation(newWallet), {
      loading: "Creating Wallet...",
      success: "Wallet created successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <>
      <h2 className="text-center text-700">Add New Crypto Details</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-12">
        <input
          type="text"
          className="input-style"
          name="cryptoName"
          id="cryptoName"
          ref={cryptoNameRef}
          placeholder="Crypto Name."
        />
        <input
          type="text"
          className="input-style"
          name="walletAddress"
          id="walletAddress"
          ref={walletAddressRef}
          placeholder="Wallet Address."
        />

        <button
          //   onClick={handleCreateCategory}
          type="submit"
          className="rounded-md btn-primary btn-lg"
          // disabled={isLoading}
        >
          Add Crypto
        </button>
      </form>
    </>
  );
}

export default AddCryptoModal;
