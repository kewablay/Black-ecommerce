import { ApprovedIcon } from "assets/icons/svgIcons";
import Loader from "components/shared/Loader";
import { usegetOrderDetail } from "hooks/useOrders";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function OrderStatusModal({ orderId }) {
  const { data: orderDetail } = usegetOrderDetail(orderId);

  const orderStatus = orderDetail?.status;
  const isOrderApproved = orderDetail?.status === "Approved";
  useEffect(() => {
    console.log("Order status: ", orderStatus);
  }, [orderStatus]);

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

          <div className="mt-4">
            <Link
              to={"/orders"}
              className="p-2 px-3 text-white rounded-full btn bg-primary text-200 arounded-full"
            >
              View Orders
            </Link>
            <Link to={"/"} className="p-2 text-primary text-200">
              Continue Shoping
            </Link>
          </div>
        </>
      ) : (
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

          <form>
            <input
              type="text"
              name="OTP"
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
      )}
    </div>
  );
}

export default OrderStatusModal;
