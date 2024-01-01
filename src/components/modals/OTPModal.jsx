import React from "react";

function OTPModal({ closeModal }) {
  return (
    <div className="p-5 space-y-3 text-center">
      {/* heading */}
      <h2 className="text-700">OTP</h2>
      <p className="text-900">12345</p>
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
