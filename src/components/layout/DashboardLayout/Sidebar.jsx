import React from "react";
import {
  Chat,
  ManageOrdersIcon,
  ManageProductIcon,
} from "assets/icons/svgIcons";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Sidebar() {
  const tabActive = "bg-hilitePrimary";
  return (
    <div className="w-full h-screen p-5 bg-white lg:col-span-3">
      <div className="px-5 text-500">
        <Link to={"/"} className="font-bold">
          Logo
        </Link>
      </div>

      {/* tabs  */}
      <div className="mt-20 space-y-2">
        <Menu
          icon={<ManageProductIcon />}
          link={"/admin/manage-products"}
          text={"Manage Products"}
        />
        <Menu
          icon={<ManageOrdersIcon />}
          link={"/admin/manage-orders"}
          text={"Manage Orders"}
        />
        <Menu icon={<Chat />} link={"/admin/chats"} text={"Chats"} />
      </div>
    </div>
  );
}

export default Sidebar;
