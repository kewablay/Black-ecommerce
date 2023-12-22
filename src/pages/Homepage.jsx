import React from "react";
import Header from "../components/layout/Header";
import MainLayout from "../components/layout/MainLayout";
import Categories from "../features/ProductCatalog/Categories";
import OurLatestProducts from "../features/ProductCatalog/OurLatestProducts";
import PromotionBanner from "../components/shared/PromotionBanner";
import HotDeals from "../features/ProductCatalog/HotDeals";
import CustomerReviews from "../features/CustomerReviews/CustomerReviews";

function Homepage() {
  return (
    <div className="text-xl font-bold font-plusJakartaSans">
      <MainLayout>
        <Header />
        <Categories />
        <OurLatestProducts />
        <PromotionBanner />
        <HotDeals />
        <CustomerReviews />
      </MainLayout>
    </div>
  );
}

export default Homepage;
