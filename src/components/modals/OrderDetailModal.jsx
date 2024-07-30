import { TickIcon } from "assets/icons/svgIcons";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getApiImage, getPriceWithInterest } from "utils/getApiImage";

function OrderDetailModal({ product, paymentPackage }) {
  console.log("payment package: ", paymentPackage);
  return (
    <div className="lg:max-h-[60vh] overflow-y-auto pr-2 mt-8 font-plusJakartaSans">
      {/* heading  */}
      <h2 className="mb-4 text-center text-700">Order Detail</h2>

      {/* PRODUCT */}
      <div className="mb-4 reciept">
        <h4 className="flex items-center gap-2 mb-3 font-bold">
          <span>
            <TickIcon />
          </span>
          Product
        </h4>

        <div className="flex items-center gap-6">
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
        <h4 className="flex items-center gap-2 mb-3 font-bold">
          <span>
            <TickIcon />
          </span>
          Package
        </h4>

        <div className="flex items-center gap-6">
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
              {
                getPriceWithInterest(
                  product?.price,
                  paymentPackage?.interest,
                  paymentPackage?.duration
                ).pricePerMonth
              }
              $ per month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailModal;
