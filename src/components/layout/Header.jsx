import React from "react";
import iphoneHero from "../../assets/images/iphone-hero.png";
import bgPath from "../../assets/images/bgPath.png";

function Header() {
  return (
    <header>
      <div className="rounded-lg relative z-10 bg-[#B7E2E6] flex flex-col items-center gap-10 px-5 pt-20 overflow-hidden lg:flex-row lg:pt-5  lg:pl-20">
        {/* intro text  */}
        <div className="text-center lg:text-left ">
          <small className="font-normal text-textGray">Mobile Phones</small>
          <h1 className="text-800 lg:text-2xl">
            Explore the Latest iPhone Models.
          </h1>
          {/* <button className="p-4 mt-6 text-white bg-black rounded-md text-300">Explore products</button> */}
        </div>

        {/* hero image  */}
        <div>
          <img src={iphoneHero} alt="iphone" />
        </div>

        {/* bg patern */}
        <div className="absolute -right-5 -top-10">
          <img src={bgPath} alt="" />
        </div>

        {/* background soft text  */}

        <p className="absolute text-2xl font-bold rotate-90 -left-20 -z-10 bottom-20 opacity-5 lg:rotate-0 lg:left-[40%] lg:bottom-5">
          Iphone 15
        </p>
      </div>
    </header>
  );
}

export default Header;
