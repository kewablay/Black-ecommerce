import React from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      title: "IPhone Collection",
      bg: "#E6BBB7",
      image: "/src/assets/images/iphones-collection.png",
    },
    {
      title: "Samsung Phones",
      bg: "#B9E6B7",
      image: "/src/assets/images/samsung-phones.png",
    },
    {
      title: "Airpod Collection",
      bg: "#C1B7E6",
      image: "/src/assets/images/airpods-collection.png",
    },
  ];
  return (
    <section className="section-contained">
      {/* section title */}
      <div className="mb-10 text-center">
        <small className="text-textGray text-200">SHOP BY CATEGORIES</small>
        <h3 className="section-title">Categories</h3>
      </div>

      {/* Category list */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            bg={category.bg}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;
