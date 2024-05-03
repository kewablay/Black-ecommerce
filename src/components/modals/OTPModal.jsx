import React from "react";
import Skeleton from "react-loading-skeleton";

function OTPModal({ closeModal, orderOTP }) {
  

  return (
    <div className="p-5 space-y-3 text-center">
      {/* heading */}
      <h2 className="text-700">OTP</h2>
      <p className="text-900">
        {(orderOTP && orderOTP[0]?.otp) || <Skeleton width={100} />}
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

export default OTPModal;
