import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

function ProductCard({ title, image, price, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="cursor-pointer group"
    >
      {/* image */}
      {image ? (
        <div className="product h-[13rem] p-4 bg-bgGray rounded-xl flex-center">
          {/* <img
            src={image}
            alt="."
            className="w-auto h-full transition-all duration-150 ease-in-out group-hover:scale-95"
          /> */}
          <LazyLoadImage alt={image} effect="opacity" src={image} />
        </div>
      ) : (
        <div className="animate-pulse h-[13rem] p-4 bg-gray-200 rounded-xl flex-center"></div>
      )}

      {/* product detail */}
      <div className="mt-3 space-y-1">
        <h4 className="font-medium text-300">{title || <Skeleton />}</h4>
        <p className="text-500 text-primary">
          {price && "$"}
          {price || <Skeleton width={50} />}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
