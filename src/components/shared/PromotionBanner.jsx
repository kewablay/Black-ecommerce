import React from "react";
import hero from "../../assets/images/flexible-payment-hero.png";
import { BgPath } from "../../assets/icons/svgIcons";
import BgSoftText from "./BgSoftText";

function PromotionBanner() {
  const BannerHeights =
    "h-[30rem] sm:h-[22rem] md:h-[22rem] lg:h-[28rem] xl:h-32rem]";

  return (
    <div
      className={`section-contained relative z-10 grid items-center gap-10 pt-20 overflow-hidden rounded-xl bg-secondaryLight sm:pt-0 sm:grid-cols-2 ${BannerHeights}`}
    >
      {/* intro text  */}
      <div className="text-center sm:text-left sm:pl-10 lg:pl-20 ">
        <small className="flex items-center justify-center gap-2 font-normal sm:justify-start text-textGray">
          <span>
            <div className="h-[3.5px] bg-gray-400 w-7"></div>
          </span>
          Flexible Payment
        </small>
        <h2 className="large-text ">Enjoy Flexible Payment</h2>
        <p className="pr-4 mt-4 text-300 lg:text-400">
          Buy now, pay later—no interest! on purchases above $1000. Shop
          stress-free.
        </p>
        {/* <button className="px-8 py-4 mt-8 font-bold text-gray-300 bg-black rounded-md text-400">Explore products</button> */}
      </div>

      {/* hero image  */}
      <div className="mt-auto">
        <img src={hero} alt="flexible-payment" />
      </div>

      {/* bg patern */}
      <div className="absolute -right-5 -top-10">
        <BgPath />
      </div>

      {/* background soft text  */}
      <BgSoftText text="Flexible Payment" />
    </div>
  );
}

export default PromotionBanner;
