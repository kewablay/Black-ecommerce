import React, { useRef, useState } from "react";
import { MoreIcon, ViewIcon } from "../../../assets/icons/svgIcons";

import useOutsideClick from "../../../hooks/useOutsideClick";
import useCustomModal from "../../../hooks/useCustomModal";

import UserDetailModal from "../../../components/modals/UserDetailModal";
import OTPModal from "../../../components/modals/OTPModal";

function OrderItem({ id, name, time, status, userData }) {
  const [showPopUpMenu, setShowPopUpMenu] = useState(false);
  const popupMenuRef = useRef();

  const closePopup = () => setShowPopUpMenu(false);
  const openPopupMenu = () => setShowPopUpMenu(!showPopUpMenu);

  const { ModalComponent, openModal, closeModal } = useCustomModal();

  useOutsideClick(popupMenuRef, closePopup);
  return (
    <div className="relative grid items-center grid-cols-12 gap-5 p-2 py-4 bg-white rounded-md shadow-sm text-300">
      {/* modal  */}
      {ModalComponent()}
      {/* order id  */}
      <div className="col-span-2">
        <p>#{id}</p>
      </div>
      {/* Name  */}
      <div className="col-span-3">
        <p>{name}</p>
      </div>
      {/* Time  */}
      <div className="col-span-2">
        <p>{time}</p>
      </div>
      {/* Status  */}
      <div className="col-span-2">
        <select
          name="status"
          id="status"
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
        <button
          ref={popupMenuRef}
          onClick={openPopupMenu}
          className="p-4 mr-2 flex-center"
        >
          <MoreIcon />

          {/* popup menu */}
          <div
            className={`${
              showPopUpMenu ? "shown" : ""
            } flex-col flex gap-1 menu-popup `}
          >
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
        </button>
      </div>
    </div>
  );
}

export default OrderItem;
