import MainLayout from "components/layout/MainLayout";
import ProductCard from "components/shared/ProductCard";
import {
  useCustomerGetCategoryProducts,
  useGetCustomerProductById,
} from "hooks/useProducts";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getApiImage } from "utils/getApiImage";

function ProductDetail() {
  const { id } = useParams();

  const { data: product, isLoading } = useGetCustomerProductById(id);

  const categoryId = product?.categories[0]._id;

  const { data: relatedProducts, isLoading: relatedProductsLoading } =
    useCustomerGetCategoryProducts(categoryId);

  // console.log("Category id : ", categoryId);

  // const product = {
  //   id: 6,
  //   title: "iPhone 13 pro unlocked - 128 GB",
  //   price: "1200",
  //   image: "/src/assets/images/iphone13pro.png",
  //   desc: "Meet the iPhone 13: a technological marvel merging elegance with power. Featuring a vibrant Super Retina XDR display and an A15 Bionic chip for seamless performance, it's your gateway to extraordinary experiences. With advanced camera capabilities, top-notch security through Face ID, and seamless integration within the Apple ecosystem, the iPhone 13 redefines sophistication and innovation in the palm of your hand.",
  // };

  const products = [
    {
      id: 1,
      title: "IPhone 12 pro - 32GB",
      price: "1200",
      image: "/src/assets/images/iphone12.png",
    },
    {
      id: 2,
      title: "iPhone 13 pro unlocked - 128 GB",
      price: "1200",
      image: "/src/assets/images/iphone13pro.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21  -128GB",
      price: "1200",
      image: "/src/assets/images/samsungS21.png",
    },
    {
      id: 4,
      title: "IPhone 15 pro max - 256GB",
      price: "1200",
      image: "/src/assets/images/iphone15pro.png",
    },
  ];

  return (
    <MainLayout>
      <div className="grid gap-8 mt-5 lg:mt-10 section-contained lg:grid-cols-2">
        {/* image  */}
        <div className="rounded-xl bg-bgGray flex-center">
          <img
            src={getApiImage(product?.images[0])}
            alt=""
            className="w-[80%] sm:w-[60%]"
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
          {relatedProducts?.map((product, index) => (
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
