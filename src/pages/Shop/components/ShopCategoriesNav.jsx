import React from "react";
import CategoryPill from "./CategoryPill";

function ShopCategoriesNav() {
  const shopCategories = [
    "IPhone Collections",
    "Samsung Collections",
    "Airpods and Others",
  ];

  
  return (
    <div className="container p-4 mx-auto mb-10 bg-bgGray">
      {/* category list container  */}
      <div className="flex gap-4 overflow-x-scroll scroll-hidden">
        {shopCategories.map((category, index) => (
          <CategoryPill key={index} CategoryName={category} />
        ))}
      </div>
    </div>
  );
}

export default ShopCategoriesNav;
