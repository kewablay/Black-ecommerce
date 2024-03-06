import React from "react";
import {
  Chat,
  CryptoWalletsIcon,
  LogoutIcon,
  ManageCategoriesIcon,
  ManageOrdersIcon,
  ManageProductIcon,
  PackagesIcon,
} from "assets/icons/svgIcons";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { CryptoWallets } from "pages";

function Sidebar() {
  const tabActive = "bg-hilitePrimary";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("ADMIN_TOKEN");
    navigate("/login");
  };
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
          text={"Products"}
        />
        <Menu
          icon={<ManageOrdersIcon />}
          link={"/admin/manage-orders"}
          text={"Orders"}
        />
        <Menu
          icon={<ManageCategoriesIcon />}
          link={"/admin/manage-categories"}
          text={"Categories"}
        />
        <Menu
          icon={<PackagesIcon />}
          link={"/admin/manage-packages"}
          text={"Packages"}
        />
        <Menu
          icon={<CryptoWalletsIcon />}
          link={"/admin/crypto-wallets"}
          text={"Crypto Wallets"}
        />
        <Menu icon={<Chat />} link={"/admin/chats"} text={"Chats"} />

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="flex w-full text-[#CC8889] items-center gap-3 p-3 px-5 rounded-md hover:bg-bgGray"
        >
          <span>
            <LogoutIcon />
          </span>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
