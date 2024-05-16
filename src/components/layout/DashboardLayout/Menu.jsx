import React from "react";
import { Link } from "react-router-dom";

import { NavLink, useLocation } from "react-router-dom";

function Menu({ link, icon, text }) {
  const location = useLocation();
  const isActive = link === location.pathname;
  // console.log(location.pathname);

  return (
    <Link
      to={`${link}`}
      className={`${
        isActive ? " menu-active hover:brightness-110" : "hover:bg-bgGray"
      } flex p-3 px-5 rounded-md truncate`}
    >
      <span className="w-5 mr-3 flex-center">{icon}</span>
      {text}
    </Link>
  );
}

export default Menu;
