import React from "react";
import Skeleton from "react-loading-skeleton";

function TransactionIdModal({ closeModal, transactionIds, isLoading }) {
  return (
    <div className="p-5 space-y-3 text-center">
      {/* heading */}
      <h2 className="text-700">Transaction ID</h2>
      <p className="text-gray-500 text-850">
        {(transactionIds && transactionIds[0]?.transactionId) ||  (isLoading  ? <Skeleton width={100} /> : <small className=" text-500">Awaiting Transaction ID from user.</small>)}
      </p>
      <button
        onClick={() => closeModal()}
        className="p-4 px-10 font-bold rounded-full btn-primary"
      >
        Close
      </button>
    </div>
  );
}

export default TransactionIdModal;
