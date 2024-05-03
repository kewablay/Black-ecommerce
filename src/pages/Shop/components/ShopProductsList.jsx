import ProductCard from "components/shared/ProductCard";
import React from "react";
import { getApiImage } from "utils/getApiImage";

function ShopProductsList({ products, isLoading }) {
  // console.log("SHOP PRODUCTS LIST RENDERED ...................");

  return (
    <div className="container px-4 mx-auto mb-20">
      {/* products list */}
      <div className="grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? [...Array(4)].map((_, index) => <ProductCard key={index} />)
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
    </div>
  );
}

export default ShopProductsList;
