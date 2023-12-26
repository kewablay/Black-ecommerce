import React from "react";
import { TickIcon } from "../../assets/icons/svgIcons";

function ConfirmPaymentDetailModal({ cardInfo, billingInfo, closeModal }) {
  return (
    <div className="p-5 rounded-xl font-plusJakartaSans">
      <h2 className="mb-5 text-center text-600">Confirm Payment Information</h2>

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
              <p className=" text-textGray">{billingInfo.name}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">Telephone</p>
              <p className=" text-textGray">{billingInfo.telephone}</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Address 1</p>
              <p className=" text-textGray">{billingInfo.address1}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">City</p>
              <p className=" text-textGray">{billingInfo.city}</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Address 2</p>
              <p className=" text-textGray">{billingInfo.address2}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">Zip Code</p>
              <p className=" text-textGray">{billingInfo.zipCode}</p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Email</p>
              <p className=" text-textGray">{billingInfo.email}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">Country</p>
              <p className=" text-textGray">{billingInfo.country}</p>
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
              <p className=" text-textGray">{cardInfo.name}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">CVV</p>
              <p className=" text-textGray">{cardInfo.cvv}</p>
            </div>
          </div>
          {/* ---------- */}
          <div className="grid grid-cols-12">
            <div className="items-center col-span-8 text-100 sm:text-200">
              <p className="font-semibold">Card Number</p>
              <p className=" text-textGray">{cardInfo.cardNumber}</p>
            </div>
            {/*  */}
            <div className="items-center col-span-4 text-100 sm:text-200">
              <p className="font-semibold">Expr Date</p>
              <p className=" text-textGray">{cardInfo.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="grid grid-cols-2 gap-4 mt-5">
        <button className="rounded-md btn-primary btn-lg">Confirm</button>
        <button onClick={() => closeModal()} className="text-primary">
          Continue Editing
        </button>
      </div>
    </div>
  );
}

export default ConfirmPaymentDetailModal;
