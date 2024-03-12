import React, { useEffect } from "react";
import { TickIcon } from "assets/icons/svgIcons";
import { useMakeOrder } from "hooks/useOrders";
import toast from "react-hot-toast";
import useCustomModal from "hooks/useCustomModal";
import OrderStatusModal from "./OrderStatusModal";

function UserDetailModal({ userData, closeModal, isAdmin }) {
  const {
    ModalComponent,
    openModal,
    closeModal: closeOrderModal,
  } = useCustomModal();
  const {
    mutateAsync: makeOrderMutation,
    isSuccess: orderSuccess,
    data: order,
    reset,
  } = useMakeOrder(closeModal);

  const handleOrder = (e) => {
    e.preventDefault();
    toast.promise(makeOrderMutation(userData), {
      loading: "Placing Order...",
      success: "Order Placed Successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  useEffect(() => {
    if (orderSuccess) {
      openModal(<OrderStatusModal orderId={order?._id} />, "customModalSmall");
      // Reset orderSuccess after showing the modal
      reset();
    }
  }, [orderSuccess, openModal, reset]);

  return (
    <div className="p-5 rounded-xl font-plusJakartaSans">
      {ModalComponent()}
      {isAdmin ? (
        <h2 className="mb-5 text-center text-600">Payment Information</h2>
      ) : (
        <h2 className="mb-5 text-center text-600">
          Confirm Payment Information
        </h2>
      )}

      <div className="space-y-5">
        {/* Billing info */}
        <div className="flex flex-col gap-2 reciept">
          <h4 className="flex items-center gap-2 font-bold">
            <span>
              <TickIcon />
            </span>
            Delivery Info
          </h4>
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Name</p>
              <p className=" text-textGray">{userData.fullName}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">Telephone</p>
              <p className=" text-textGray">{userData.telephone}</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Address 1</p>
              <p className=" text-textGray">{userData.address1}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">City</p>
              <p className=" text-textGray">{userData.city}</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Address 2</p>
              <p className=" text-textGray">{userData.address2}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">Zip Code</p>
              <p className=" text-textGray">{userData.zipCode}</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Email</p>
              <p className=" text-textGray">{userData.email}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">Country</p>
              <p className=" text-textGray">{userData.country}</p>
            </div>
          </div>
        </div>

        {/* card info  */}
        <div className="flex flex-col gap-2 reciept">
          <h4 className="flex items-center gap-2 font-bold">
            <span>
              <TickIcon />
            </span>
            Card Info
          </h4>
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Name on Card</p>
              <p className=" text-textGray">{userData.cardName}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">CVV</p>
              <p className=" text-textGray">{userData.cvv}</p>
            </div>
          </div>
          {/* ---------- */}
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Card Number</p>
              <p className=" text-textGray">{userData.cardNumber}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">Expr Date</p>
              <p className=" text-textGray">{userData.expDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* buttons */}
      {isAdmin ? (
        <div className="mt-5">
          <button
            onClick={() => closeModal()}
            className="rounded-md btn-primary btn-lg"
          >
            Close
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-5">
          <button
            onClick={handleOrder}
            className="rounded-md btn-primary btn-lg"
          >
            Confirm
          </button>
          <button onClick={() => closeModal()} className="text-primary">
            Continue Editing
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDetailModal;
