import PromotionBanner from "components/shared/PromotionBanner";
import React, { useEffect, useState } from "react";
import ShopProductsList from "./components/ShopProductsList";
import MainLayout from "components/layout/MainLayout";
import CategoryPill from "./components/CategoryPill";
import { useGetCategories } from "hooks/useCategories";
import { useCustomerGetCategoryProducts } from "hooks/useProducts";

function Shop() {
  const { data: shopCategories, isLoading: categoriesLoading } =
    useGetCategories();

  const [activeCategory, setActiveCategory] = useState("IPhone Collections");
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const { data: categoryProducts, isLoading: productsLoading } =
    useCustomerGetCategoryProducts(activeCategoryId);

  useEffect(() => {
    if (shopCategories && activeCategoryId === null) {
      setActiveCategory(shopCategories[0].name);
      setActiveCategoryId(shopCategories[0]._id);
    }
  }, [shopCategories]);

  // console.log("Category products: ", categoryProducts);

  const handleCategoryClick = (categoryName, categoryId) => {
    setActiveCategory(categoryName); // to handle active state for the category navs
    setActiveCategoryId(categoryId); // to fetch products for the selected category
    console.log("Selected CAtegory: ", activeCategory);
  };
  return (
    <div>
      <MainLayout>
        <PromotionBanner />

        <div className="container p-4 mx-auto mb-10 bg-bgGray">
          {/* category list container  */}
          <div className="flex gap-4 overflow-x-scroll scroll-hidden">
            {categoriesLoading
              ? [...Array(4)].map((_, index) => <CategoryPill key={index} />)
              : shopCategories?.map((category, index) => (
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

        <ShopProductsList
          isLoading={productsLoading}
          products={categoryProducts}
        />
      </MainLayout>
    </div>
  );
}

export default Shop;
