import ProductCard from "components/shared/ProductCard";
import React, { useEffect } from "react";

import { useQuery, useQueryClient, useMutation } from "react-query";
import { signInUser, signUpUser } from "services/auth.services";
import { getApiImage } from "utils/getApiImage";

function OurLatestProducts({ products, isLoading }) {
  return (
    <div className="section-contained">
      {/* section title */}
      <div className="mb-10 text-center">
        <small className="text-textGray text-200">NEW ARRIVALS</small>
        <h3 className="section-title">Our latest Products</h3>
      </div>

      {/* products list */}

      <div className="grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
        {products?.map((product, index) => (
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

export default OurLatestProducts;
