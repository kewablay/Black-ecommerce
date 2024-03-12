import { ApprovedIcon } from "assets/icons/svgIcons";
import Loader from "components/shared/Loader";
import { useSendOrderOTP, usegetOrderDetail } from "hooks/useOrders";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function OrderStatusModal({ orderId }) {
  const otpRef = useRef();

  const { data: orderDetail } = usegetOrderDetail(orderId);
  const { mutateAsync: sendOTPMutation, isError: sendOTPError } =
    useSendOrderOTP();
  const [isPendingApproval, setIsPendingApproval] = useState(false);

  const isOrderApproved = orderDetail?.status === "Approved";
  const showOTPForm = (!isOrderApproved && !isPendingApproval) || sendOTPError;

  useEffect(() => {
    if (sendOTPError) {
      setIsPendingApproval(false);
    }
  }, [sendOTPError]);

  const handleOTPSubmit = (e) => {
    setIsPendingApproval(true);
    e.preventDefault();
    const OTPData = {
      orderId: orderId,
      otp: otpRef.current.value,
    };
    console.log("OTP Data: ", OTPData);
    toast.promise(sendOTPMutation(OTPData), {
      loading: "Sending OTP...",
      success: "OTP sent successfully!",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <div className="flex-col p-5 flex-center sm:p-0">
      {isOrderApproved ? (
        <>
          <div className="flex items-center gap-2 mb-1 font-bold">
            <span>
              <ApprovedIcon />
            </span>
            <p className="font-bold text-400">Order Approved</p>
          </div>
          <p className="text-center text-100 text-textGray">
            Order has been successfuly approved.
          </p>

          <div className="mt-6 ">
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
        showOTPForm && (
          <>
            <div className="flex items-center gap-2 mb-1 font-bold">
              <span className="mb-1">
                <Loader small />
              </span>
              <p>Order being proccessed</p>
            </div>
            <p className="text-center text-100 text-textGray">
              You'll recieve a verfication code upon completion. Kindly wait and
              enter verification OTP
            </p>

            <form onSubmit={handleOTPSubmit}>
              <input
                type="text"
                name="OTP"
                ref={otpRef}
                placeholder="Enter Verification OTP"
                className="p-2 mt-8 border rounded-md text-200 focus-within:outline-secondary"
              />
              <input
                className="p-2 text-white rounded-tr-md rounded-br-md text-200 bg-primary"
                type="submit"
                value="Send"
              />
            </form>
          </>
        )
      )}
    </div>
  );
}

export default OrderStatusModal;
