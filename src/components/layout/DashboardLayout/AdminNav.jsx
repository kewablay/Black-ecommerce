import React from "react";
import { SearchIcon } from "assets/icons/svgIcons";
import { getSuperAdmin } from "utils/getSuperAdmin";

function AdminNav() {
  const admin = getSuperAdmin();
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
        <div className="w-12 h-12 rounded-full bg-bgGray overflow-hidden">
          <img
            src={`https://ui-avatars.com/api/?name=${admin?.username}?&background=random&?bold=true`}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        {/* Admin Details */}
        <div>
          <small className="text-textGray">Hello👋</small>
          <p className="font-bold">{admin?.username}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
