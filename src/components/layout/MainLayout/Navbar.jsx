import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../../../assets/icons/svgIcons";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  // console.log("NAVBAR RENDERED .....................");

  const handleLogout = () => {
    console.log("loging out ......");
    localStorage.removeItem("TOKEN");
    console.log(localStorage);
    navigate("/login");
  };

  return (
    <nav className="mb-3 shadow-md ">
      <div className="container p-5 mx-auto wrapper flex-between">
        <div>
          <Link to={"/"} className="font-bold">
          <img src="/src/assets/logo.png" className="h-9" alt="" />
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
          } absolute z-50  flex flex-col delay-75 gap-4 p-10 shadow-md bg-slate-100 top-0 w-[90%] h-screen justify-center text-800 font-normal transition-200 lg:static lg:p-0 lg:text-300 lg:flex-row lg:w-fit lg:bg-white lg:shadow-none lg:h-auto`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Categories</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/orders"}>Orders</Link>
          <button
            onClick={handleLogout}
            className="text-red-600 text-start lg:hidden"
          >
            Logout
          </button>

          <button
            className="absolute top-4 right-4 lg:hidden"
            onClick={() => setShowMenu(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-x-4 text-300">
          {/* <Link to={"#"}>Logout</Link> */}
          <button className="lg:hidden" onClick={() => setShowMenu(true)}>
            <MenuIcon />
          </button>

          <button
            onClick={handleLogout}
            className="hidden text-red-600 text-start lg:flex"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
