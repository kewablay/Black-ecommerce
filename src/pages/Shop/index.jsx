import PromotionBanner from "components/shared/PromotionBanner";
import React from "react";
import ShopCategoriesNav from "./components/ShopCategoriesNav";
import ShopProductsList from "./components/ShopProductsList";
import MainLayout from "components/layout/MainLayout";

function Shop() {
  return (
    <div>
      <MainLayout>
        <PromotionBanner />
        <ShopCategoriesNav />
        <ShopProductsList />
      </MainLayout>
    </div>
  );
}

export default Shop;