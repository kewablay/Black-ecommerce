import { ApprovedIcon } from "assets/icons/svgIcons";
import Loader from "components/shared/Loader";
import { usegetOrderDetail } from "hooks/useOrders";
import React from "react";
import { Link } from "react-router-dom";

function CryptoOrderStatus({ orderId }) {
  
  const { data: orderDetail } = usegetOrderDetail(orderId);

  const isOrderApproved = orderDetail?.status === "Approved";
  return (
    <>
      {isOrderApproved ? (
        <>
          <div className="flex-center gap-2 mb-1 font-bold">
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
      ) : (
        <>
          <div className="flex gap-2 mb-1 font-bold flex-center">
            <span className="mb-1">
              <Loader small />
            </span>
            <p className="font-bold text-400">Awaiting Transaction</p>
          </div>
          <p className="text-center text-100 text-textGray">
            Kindly complete transaction and await approval.
          </p>
        </>
      )}
    </>
  );
}

export default CryptoOrderStatus;
