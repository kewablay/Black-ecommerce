import React from "react";
import MainLayout from "../components/layout/MainLayout";
import PromotionBanner from "../components/shared/PromotionBanner";
import ShopCategoriesNav from "../features/Shop/ShopCategoriesNav";
import ShopProductsList from "../features/Shop/ShopProductsList";

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
