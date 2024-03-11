import Loader from "components/shared/Loader";
import React from "react";

function OrderStatusModal() {
  return (
    <div className="flex-col flex-center">
      <div className="flex items-center gap-2 mb-1 font-bold">
        <span className="mb-1">
          <Loader small />
        </span>
        <p>Order being proccessed</p>
      </div>
      <p className="text-100 text-textGray">
        Kindly wait and enter verification OTP
      </p>
    </div>
  );
}

export default OrderStatusModal;
