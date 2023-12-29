import React from "react";
import { SearchIcon } from "../../../assets/icons/svgIcons";

function AdminNav() {
  return (
    <div className="grid grid-cols-4 gap-10 p-3 bg-white rounded-lg">
      <form action="#" className="relative col-span-3">
        <input
          type="search"
          id="search"
          className="w-full p-3 pl-10 rounded-lg bg-bgGray"
          placeholder="Search ..."
        />
        <span className="absolute top-1/3 left-3">
          <SearchIcon />
        </span>
      </form>
      <div className="flex justify-end col-span-1 gap-2">
        {/* admin profile  */}
        <div className="w-12 h-12 rounded-full bg-bgGray"></div>
        {/* Admin Details */}
        <div>
          <small className="text-textGray">Hello👋</small>
          <p className="font-bold">Admin</p>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
