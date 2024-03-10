import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function ProductDetailSkeleton() {
  return (
    <div className="grid gap-8 mt-5 lg:mt-10 section-contained lg:grid-cols-2">
      {/* image  */}
      <div className="animate-pulse product-lg rounded-xl bg-bgGray flex-center"></div>

      {/* product details */}
      <div className="space-y-6">
        <div>
          <h2 className="text-700">
            <Skeleton /> {/* Product Name  */}
          </h2>
          <h4 className="mt-3 font-bold text-600 text-primary">
            <Skeleton width={60} /> {/* Price  */}
          </h4>
        </div>
        <p className="text-textGray text-400">
          <Skeleton count={5.5} /> {/* Product Description  */}
        </p>
        <div className="mt-5 ">
          <Link className="block text-center bg-gray-200 btn-lg">
            <Skeleton width={100} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailSkeleton;
