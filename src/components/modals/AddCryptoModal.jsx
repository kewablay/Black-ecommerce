import React, { useRef } from "react";

function AddCryptoModal() {
    const cryptoNameRef = useRef()
    const walletAddressRef = useRef()
  return (
    <>
      <h2 className="text-center text-700">Add New Crypto Details</h2>

      <form className="flex flex-col gap-3 mt-12">
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
