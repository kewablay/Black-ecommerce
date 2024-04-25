import MainLayout from "components/layout/MainLayout";
import ProductCard from "components/shared/ProductCard";
import {
  useCustomerGetCategoryProducts,
  useGetCustomerProductById,
} from "hooks/useProducts";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import { useParams, Link } from "react-router-dom";
import { getApiImage } from "utils/getApiImage";
import ProductDetailSkeleton from "./components/ProductDetailSkeleton";

function ProductDetail() {
  const { id } = useParams();

  const { data: product, isLoading: productLoading } =
    useGetCustomerProductById(id);

  const categoryId = product?.categories[0]._id;

  const { data: relatedProducts, isLoading: relatedProductsLoading } =
    useCustomerGetCategoryProducts(categoryId);

  // console.log("Category id : ", categoryId);

  return (
    <MainLayout>
      {productLoading ? (
        <ProductDetailSkeleton />
      ) : (
        <div className="grid gap-8 mt-5 lg:mt-10 section-contained lg:grid-cols-2">
          {/* image  */}
          <div className="product-lg rounded-xl bg-bgGray flex-center">
            <LazyLoadImage
              alt=""
              effect="opacity"
              src={getApiImage(product?.images[0])}
            />
          </div>

          {/* product details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-700">{product?.name}</h2>
              <h4 className="mt-3 font-bold text-600 text-primary">
                ${product?.price}
              </h4>
            </div>
            <p className="text-textGray text-400">{product?.description}</p>
            <div className="mt-5 ">
              <Link
                to={`/select-payment/${id}`}
                className="block text-center btn-primary btn-lg"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Other products */}
      <div className="section-contained">
        {/* section title */}
        <div className="mb-10 text-center">
          <small className="text-textGray text-200">OTHER PRODUCTS</small>
          <h3 className="section-title">Related Products</h3>
        </div>
        {/* section title end */}

        {/* Product List */}
        <div className="grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
          {/* {relatedProducts?.map((product, index) => (
            <ProductCard
              key={index}
              title={product.name}
              image={getApiImage(product?.images[0])}
              price={product.price}
              id={product._id}
            />
          ))} */}
          {relatedProductsLoading
            ? [...Array(4)].map((_, index) => <ProductCard key={index} />)
            : relatedProducts?.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.name}
                  image={getApiImage(product?.images[0])}
                  price={product.price}
                  id={product._id}
                />
              ))}
        </div>
        {/* Product List end*/}
      </div>
    </MainLayout>
  );
}

export default ProductDetail;
