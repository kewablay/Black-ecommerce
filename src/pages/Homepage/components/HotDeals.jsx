import ProductCard from "components/shared/ProductCard";
import React from "react";
import { getApiImage } from "utils/getApiImage";

function HotDeals({ products, isLoading }) {
  return (
    <div className="section-contained">
      {/* section title */}
      <div className="mb-10 text-center">
        <small className="text-textGray text-200">FLASH SALES</small>
        <h3 className="section-title">Hot Deals</h3>
      </div>
      {/* section title end */}

      {/* Product List */}
      <div className="grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? [...Array(6).map((_, index) => <ProductCard key={index} />)]
          : products?.map((product, index) => (
              <ProductCard
                key={index}
                title={product.name}
                image={getApiImage(product.images[0])}
                price={product.price}
                id={product._id}
              />
            ))}
      </div>
      {/* Product List end*/}
    </div>
  );
}

export default HotDeals;
