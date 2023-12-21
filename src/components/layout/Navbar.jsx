import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../../assets/icons/svgIcons";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="p-5 shadow-md flex-between">
      <div>
        <Link to={"#"} className="font-bold">
          Logo
        </Link>
      </div>
      {/* menu Backdrop */}
      <div
        className={`${
          showMenu ? "-left-0" : "-left-[100%]"
        } absolute z-50 top-0 w-screen h-screen overflow-hidden bg-black opacity-70 transition-200`}
      ></div>
      {/* menu */}
      <div
        className={`${
          showMenu ? "-left-0" : "-left-[100%]"
        } absolute z-50  flex flex-col delay-75 gap-4 p-10 shadow-md bg-slate-100 top-0 w-[90%] h-screen justify-center text-800 font-normal transition-200 lg:static lg:p-0 lg:text-base lg:flex-row lg:w-fit lg:bg-white lg:shadow-none lg:h-auto`}
      >
        <Link to={"#"}>Home</Link>
        <Link to={"#"}>Categories</Link>
        <Link to={"#"}>Shop</Link>
        <Link to={"#"}>Contact</Link>

        <button
          className="absolute top-4 right-4 lg:hidden"
          onClick={() => setShowMenu(false)}
        >
          <CloseIcon />
        </button>
      </div>

      <div className="space-x-4">
        <Link to={"#"}>Signup</Link>
        <button className="lg:hidden" onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
