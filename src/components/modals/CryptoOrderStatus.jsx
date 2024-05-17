import { ApprovedIcon } from "assets/icons/svgIcons";
import Loader from "components/shared/Loader";
import { useSendTransactionId, usegetOrderDetail } from "hooks/useOrders";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function CryptoOrderStatus({ orderId }) {
  const transactionIdRef = useRef();
  const { data: orderDetail } = usegetOrderDetail(orderId);
  const {
    mutateAsync: sendTransactionIdMutation,
    isError: sendTransactionIdError,
  } = useSendTransactionId();

  const isOrderApproved = orderDetail?.status === "Approved";
  const [isPendingApproval, setIsPendingApproval] = useState(false);

  const handleTransactionIdSubmit = (e) => {
    e.preventDefault();
    console.log("handling transactionId submit...");
    setIsPendingApproval(true);
    const data = {
      transactionId: transactionIdRef.current.value,
      orderId: orderId,
    };
    toast.promise(sendTransactionIdMutation(data), {
      loading: "Sending transaction id...",
      success: "Transaction id sent successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  // send transaction id error
  useEffect(() => {
    if (sendTransactionIdError) {
      setIsPendingApproval(false);
    }
  }, [sendTransactionIdError]);
  return (
    <>
      {isOrderApproved ? (
        <>
          <div className="gap-2 mb-1 font-bold flex-center">
            <span>
              <ApprovedIcon />
            </span>
            <p className="font-bold text-400">Order Approved</p>
          </div>
          <p className="text-center text-100 text-textGray">
            Order has been successfuly approved.
          </p>

          <div className="mt-6 flex-center">
            <Link
              to={"/orders"}
              className="p-2 px-4 font-bold text-white rounded-full btn bg-primary text-100 arounded-full"
            >
              View Orders
            </Link>
            <Link to={"/"} className="p-2 font-bold text-primary text-100">
              Continue Shoping
            </Link>
          </div>
        </>
      ) : isPendingApproval ? (
        <div className="flex items-center gap-2 mb-1 font-bold">
          <span>
            <Loader small />
          </span>
          <p className="font-bold text-400">Pending Approval</p>
        </div>
      ) : (
        <>
          <div className="flex gap-2 mb-1 font-bold flex-center">
            <span className="mb-1">
              <Loader small />
            </span>
            <p className="font-bold text-400">Awaiting Transaction</p>
          </div>
          <p className="text-center text-100 text-textGray">
            Kindly enter the transaction id after the crypto transfer.
          </p>

          <form onSubmit={handleTransactionIdSubmit}>
            <input
              type="text"
              name="OTP"
              ref={transactionIdRef}
              placeholder="Enter Transaction ID"
              className="p-2 w-[80%] mt-8 border rounded-md text-200 focus-within:outline-secondary"
            />
            <input
              className="p-2 w-[20%] text-white rounded-tr-md rounded-br-md text-200 bg-primary"
              type="submit"
              value="Send"
            />
          </form>
        </>
      )}
    </>
  );
}

export default CryptoOrderStatus;
