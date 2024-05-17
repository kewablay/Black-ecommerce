import React, { useEffect, useRef, useState } from "react";
import { MoreIcon, ViewIcon } from "assets/icons/svgIcons";
import UserDetailModal from "components/modals/UserDetailModal";
import OTPModal from "components/modals/OTPModal";
import useCustomModal from "hooks/useCustomModal";
import useOutsideClick from "hooks/useOutsideClick";
import {
  useDeleteOrder,
  useUpdateOrderStatus,
  useViewOrderOTP,
  useViewTransactionId,
} from "hooks/useOrders";
import toast from "react-hot-toast";
import OrderDetailModal from "components/modals/OrderDetailModal";
import TransactionIdModal from "components/modals/TransactionIdModal";

function CryptoOrderItem({ order }) {
  const [showPopUpMenu, setShowPopUpMenu] = useState(false);
  const popupMenuRef = useRef();
  const [orderStatus, setorderStatus] = useState(order?.status);

  useEffect(() => {
    setorderStatus(order?.status);
  }, [order?.status]);

  const closePopup = () => setShowPopUpMenu(false);
  const openPopupMenu = () => setShowPopUpMenu(!showPopUpMenu);

  const { ModalComponent, openModal, closeModal } = useCustomModal();

  const {
    mutateAsync: UpdateOrderStatusMutation,
    isSuccess: OrderStatusUpdateSuccessful,
  } = useUpdateOrderStatus();

  const handleStatusChange = (e) => {
    const statusData = {
      orderId: order?._id,
      status: {
        status: e.target.value,
      },
    };
    toast.promise(UpdateOrderStatusMutation(statusData), {
      loading: "Updating status...",
      success: "Status Updated successfully!",
      error: (error) => `Error: ${error.response.data.error}`,
    });
    if (OrderStatusUpdateSuccessful) {
      console.log("Order status updated successfully .....");
      setorderStatus(e.target.value);
    }
  };

  const getTimeFromDateTime = (dateTime) =>
    new Date(dateTime).toLocaleTimeString("en-US");

  useOutsideClick(popupMenuRef, closePopup);

  // get transaction id
  const { data: transactionIds, isLoading: transactionIdLoading } =
    useViewTransactionId(order?._id);

  // delete crypto order
  const { data, mutateAsync: deleteOrderMutation } = useDeleteOrder();

  const handleDelete = () => {
    toast.promise(deleteOrderMutation(order?._id), {
      loading: "Deleting order...",
      success: "Order deleted successfully!",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <div className="relative grid items-center grid-cols-12 gap-5 p-2 py-4 bg-white rounded-md shadow-sm text-300">
      {/* modal  */}
      {ModalComponent()}
      {/* order id  */}
      <div className="col-span-2 line-clamp-1">
        <p>#{order?._id}</p>
      </div>
      {/* Name  */}
      <div className="col-span-3">
        <p>{order?.fullName || "Crypto Order"}</p>
      </div>
      {/* Time  */}
      <div className="col-span-2 ">
        <p className="line-clamp-1">{getTimeFromDateTime(order?.orderDate)}</p>
      </div>
      {/* Status  */}
      <div className="col-span-2">
        <select
          name="status"
          id="status"
          value={orderStatus}
          onChange={handleStatusChange}
          className="p-2 rounded-md bg-slate-100 focus-within:outline-secondary"
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
        </select>
        {/* <p>{status}</p> */}
      </div>

      {/* Actions  */}
      <div className="relative col-span-3 flex-between">
        <button
          onClick={() =>
            openModal(
              <TransactionIdModal
                closeModal={closeModal}
                transactionIds={transactionIds}
                isLoading={transactionIdLoading}
              />
            )
          }
          className="flex gap-1"
        >
          <span>
            <ViewIcon />
          </span>
          Transaction ID
        </button>

        {/* 3 dots overflow menu */}
        <div
          ref={popupMenuRef}
          onClick={openPopupMenu}
          className="p-4 mr-2 cursor-pointer text-200 text-textGray flex-center"
        >
          <MoreIcon />

          {/* popup menu */}
          <div
            className={`${
              showPopUpMenu ? "shown" : ""
            } flex-col flex gap-1 menu-popup -bottom-[4.5rem] `}
          >
            <button
              onClick={handleDelete}
              className="w-full p-2 text-left text-red-500 hover:bg-bgGray"
            >
              Delete Order
            </button>
          </div>
          {/* popup menu ends*/}
        </div>
      </div>
    </div>
  );
}

export default CryptoOrderItem;
