import React, { useEffect, useRef, useState } from "react";
import { MoreIcon, ViewIcon } from "assets/icons/svgIcons";
import UserDetailModal from "components/modals/UserDetailModal";
import OTPModal from "components/modals/OTPModal";
import useCustomModal from "hooks/useCustomModal";
import useOutsideClick from "hooks/useOutsideClick";
import { useUpdateOrderStatus } from "hooks/useOrders";
import toast from "react-hot-toast";
import OrderDetailModal from "components/modals/OrderDetailModal";

function OrderItem({ order }) {
  const [showPopUpMenu, setShowPopUpMenu] = useState(false);
  const popupMenuRef = useRef();
  const [orderStatus, setorderStatus] = useState(order?.status);

  useEffect(() => {
    setorderStatus(order?.status);
  }, [order?.status]);

  const closePopup = () => setShowPopUpMenu(false);
  const openPopupMenu = () => setShowPopUpMenu(!showPopUpMenu);

  const { ModalComponent, openModal, closeModal } = useCustomModal();

  const userData = {
    fullName: order?.fullName,
    telephone: order?.telephone,
    address1: order?.address1,
    address2: order?.address2,
    city: order?.city,
    zipCode: order?.zipCode,
    email: order?.email,
    country: order?.country,
    cardName: order?.paymentDetail?.nameOnCard,
    cvv: order?.paymentDetail?.cvv,
    expDate: order?.paymentDetail?.expDate,
    cardNumber: order?.paymentDetail?.cardNumber,
  };

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
              <UserDetailModal
                userData={userData}
                isAdmin
                closeModal={closeModal}
              />
            )
          }
          className="flex gap-1"
        >
          <span>
            <ViewIcon />
          </span>
          View Info
        </button>

        {/* 3 dots overflow menu */}
        <div
          ref={popupMenuRef}
          onClick={openPopupMenu}
          className="p-4 mr-2 text-200 text-textGray cursor-pointer flex-center"
        >
          <MoreIcon />

          {/* popup menu */}
          <div
            className={`${
              showPopUpMenu ? "shown" : ""
            } flex-col flex gap-1 menu-popup `}
          >
            <button
              onClick={() =>
                openModal(
                  <OrderDetailModal
                    closeModal={closeModal}
                    product={order?.product}
                    paymentPackage={order?.package}
                  />
                )
              }
              className="w-full p-2 text-left hover:bg-bgGray"
            >
              View Order Detail
            </button>
            <button
              onClick={() => openModal(<OTPModal closeModal={closeModal} />)}
              className="w-full p-2 text-left hover:bg-bgGray"
            >
              View Verification OTP
            </button>

            <button className="w-full p-2 text-left hover:bg-bgGray">
              Message
            </button>
          </div>
          {/* popup menu ends*/}
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
