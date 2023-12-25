import React from "react";
import ProductCard from "../../components/shared/ProductCard";

function HotDeals() {
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
    <div className="section-contained">
      {/* section title */}
      <div className="mb-10 text-center">
        <small className="text-textGray text-200">FLASH SALES</small>
        <h3 className="section-title">Hot Deals</h3>
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
            id={product.id}
          />
        ))}
      </div>
      {/* Product List end*/}
    </div>
  );
}

export default HotDeals;
