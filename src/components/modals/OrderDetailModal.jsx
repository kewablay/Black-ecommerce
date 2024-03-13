import { TickIcon } from "assets/icons/svgIcons";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getApiImage, getPriceWithInterest } from "utils/getApiImage";

function OrderDetailModal({ product, paymentPackage }) {
  return (
    <div className="lg:max-h-[60vh] overflow-y-auto pr-2 mt-8 font-plusJakartaSans">
      {/* heading  */}
      <h2 className="text-center text-700 mb-4">Order Detail</h2>

      {/* PRODUCT */}
      <div className="reciept mb-4">
        <h4 className="mb-3 flex items-center gap-2 font-bold">
          <span>
            <TickIcon />
          </span>
          Product
        </h4>

        <div className="flex gap-6 items-center">
          {/* product image  */}
          <div className="h-[6em] product w-[6em] rounded-md bg-bgGray overflow-hidden">
            <LazyLoadImage
              alt={getApiImage(product?.images[0])}
              effect="opacity"
              className="object-contain"
              src={getApiImage(product?.images[0])}
            />
          </div>

          {/* product content  */}
          <div>
            <p className="font-semibold">{product?.name}</p>
            <p className=" text-textGray">{product?.price}</p>
          </div>
        </div>
      </div>

      {/* PACKAGE */}
      <div className="reciept ">
        <h4 className="mb-3 flex items-center gap-2 font-bold">
          <span>
            <TickIcon />
          </span>
          Package
        </h4>

        <div className="flex gap-6 items-center">
          {/* package image  */}
          <div className="h-[6em] product w-[6em] rounded-md bg-bgGray overflow-hidden">
            <LazyLoadImage
              alt={getApiImage(product?.images[0])}
              effect="opacity"
              className="object-contain"
              src={getApiImage(product?.images[0])}
            />
          </div>

          {/* product content  */}
          <div>
            <p className="font-semibold">{paymentPackage?.name}</p>
            <p className=" text-textGray">
              {getPriceWithInterest(product?.price, paymentPackage?.interest)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailModal;
