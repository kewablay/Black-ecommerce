import PromotionBanner from "components/shared/PromotionBanner";
import React, { useState } from "react";
import ShopProductsList from "./components/ShopProductsList";
import MainLayout from "components/layout/MainLayout";
import CategoryPill from "./components/CategoryPill";
import { useGetCategories } from "hooks/useCategories";
import { useCustomerGetCategoryProducts } from "hooks/useProducts";

function Shop() {
  const { data: shopCategories, isLoading } = useGetCategories();

  const [activeCategory, setActiveCategory] = useState("IPhone Collections");
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const { data: categoryProducts, refetch: refetchCategoryProducts } =
    useCustomerGetCategoryProducts(activeCategoryId);

  console.log("Category products: ", categoryProducts);

  const handleCategoryClick = (categoryName, categoryId) => {
    setActiveCategory(categoryName);
    refetchCategoryProducts();
    console.log("Selected CAtegory: ", categoryId);
  };
  return (
    <div>
      <MainLayout>
        <PromotionBanner />

        <div className="container p-4 mx-auto mb-10 bg-bgGray">
          {/* category list container  */}
          <div className="flex gap-4 overflow-x-scroll scroll-hidden">
            {shopCategories?.map((category, index) => (
              <CategoryPill
                key={index}
                CategoryName={category?.name}
                active={activeCategory === category?.name}
                onClick={() =>
                  handleCategoryClick(category?.name, category?._id)
                }
              />
            ))}
          </div>
        </div>

        <ShopProductsList products={categoryProducts} />
      </MainLayout>
    </div>
  );
}

export default Shop;
