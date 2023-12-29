import React from "react";
import { Chat, ManageOrdersIcon, ManageProductIcon } from "../../../assets/icons/svgIcons";

function Sidebar() {
  return (
    <div className="w-full h-screen p-5 bg-white lg:col-span-3">
      <div className="px-5 text-500">Logo</div>

      {/* tabs  */}
      <div className="mt-20 space-y-2">
        <button className="flex p-3 px-5 rounded-md hover:bg-bgGray">
          <span className="w-5 mr-3 flex-center">
            <ManageProductIcon />
          </span>
          Manage Products
        </button>
        <button className="flex p-3 px-5 rounded-md hover:bg-bgGray">
          <span className="w-5 mr-3 flex-center">
            <ManageOrdersIcon />
          </span>
          Manage Orders
        </button>
        <button className="flex p-3 px-5 rounded-md hover:bg-bgGray">
          <span className="w-5 mr-3 flex-center">
            <Chat />
          </span>
          Chat
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
