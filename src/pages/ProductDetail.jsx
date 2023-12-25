import React from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/shared/Button";

function ProductDetail() {
  const { id } = useParams();

  const product = {
    id: 6,
    title: "iPhone 13 pro unlocked - 128 GB",
    price: "1200",
    image: "/src/assets/images/iphone13pro.png",
    desc: "Meet the iPhone 13: a technological marvel merging elegance with power. Featuring a vibrant Super Retina XDR display and an A15 Bionic chip for seamless performance, it's your gateway to extraordinary experiences. With advanced camera capabilities, top-notch security through Face ID, and seamless integration within the Apple ecosystem, the iPhone 13 redefines sophistication and innovation in the palm of your hand.",
  };

  return (
    <div>
      <MainLayout>
        <div className="grid gap-8 mt-5 lg:mt-10 section-contained lg:grid-cols-2">
          {/* image  */}
          <div className="rounded-xl bg-bgGray flex-center">
            <img src={product.image} alt="" className="w-[80%] sm:w-[60%]" />
          </div>

          {/* product details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-700">{product.title}</h2>
              <h4 className="mt-3 font-bold text-600 text-primary">
                ${product.price}
              </h4>
            </div>
            <p className="text-textGray text-400">{product.desc}</p>
            <div className="mt-5 ">
              <Link to={"/select-payment"} className="block text-center btn-primary btn-lg">
                Proceed to Payment
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default ProductDetail;
