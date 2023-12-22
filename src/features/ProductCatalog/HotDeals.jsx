import React from "react";
import ProductCard from "./components/ProductCard";

function HotDeals() {
  const products = [
    {
      title: "IPhone 12 pro - 32GB",
      price: "1200",
      image: "/src/assets/images/iphone12.png",
    },
    {
      title: "iPhone 13 pro unlocked - 128 GB",
      price: "1200",
      image: "/src/assets/images/iphone13pro.png",
    },
    {
      title: "Samsung Galaxy S21  -128GB",
      price: "1200",
      image: "/src/assets/images/samsungS21.png",
    },
    {
      title: "IPhone 15 pro max - 256GB",
      price: "1200",
      image: "/src/assets/images/iphone15pro.png",
    },
  ];

  return (
    <div className="container px-4 mx-auto mb-20">
      {/* section title  */}
      <div className="mb-5 flex-between">
        <h3 className="section-title">Hot Deals</h3>
        <div className="flex gap-4">
          <button>Left</button>
          <button>Right</button>
        </div>
      </div>
      {/* section title end */}

      {/* Product List */}
      <div className="grid grid-cols-2 gap-4 gap-y-8 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      {/* Product List end*/}
    </div>
  );
}

export default HotDeals;
