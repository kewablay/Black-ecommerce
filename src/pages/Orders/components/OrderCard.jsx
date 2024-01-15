import React from "react";

function OrderCard({ image, title, price, date, status }) {
  return (
    <div className="relative grid gap-1 p-4 rounded-lg shadow-md sm:grid-cols-4 sm:gap-5 ">
      {/* card image */}
      <div className="relative p-5 rounded-lg image bg-bgGray flex-center">
        <img
          src={image}
          alt="image"
          className="lg:h-[11rem] object-contain w-full "
        />
      </div>

      {/* card content  */}
      <div className="flex flex-col items-start justify-center gap-1 mt-4 sm:mt-0">
        <p className="font-bold font-raleway text-200 sm:text-300 md:text-400 sm:font-bold md:font-bold">
          {title}
        </p>
        <p className="text-textGray text-100 sm:text-200 md:text-300">
          Price: <span className="font-bold text-tertiary">GHC {price}</span>
        </p>
        <p className="text-textGray text-100 sm:text-200 md:text-300">
          By: Kewa Blay
        </p>
      </div>

      {/* order Status */}
      <div className="flex items-center gap-3">
        <div className="hidden line sm:flex "></div>
        <div>
          <small className="capitalize text-textGray ">STATUS</small>
          <h4 className="font-bold uppercase text-primary text-200 md:text-300 lg:text-400 lg:font-bold md:font-bold">
            {status}
          </h4>
        </div>
      </div>

      {/* Date ordered*/}
      <div className="flex items-center gap-3">
        <div className="hidden line sm:flex "></div>
        <div>
          <small className="capitalize text-textGray ">DATE ORDERED</small>
          <h4 className="font-bold text-100 md:text-300 md:font-bold lg:text-400 lg:font-bold ">
            {date}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
