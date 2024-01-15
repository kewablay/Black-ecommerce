import MainLayout from "components/layout/MainLayout";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import OurLatestProducts from "./components/OurLatestProducts";
import PromotionBanner from "components/shared/PromotionBanner";
import HotDeals from "./components/HotDeals";
import CustomerReviews from "./components/CustomerReviews";

function Homepage() {
  return (
    <MainLayout>
      <Header />
      <Categories />
      <OurLatestProducts />
      <PromotionBanner />
      <HotDeals />
      <CustomerReviews />
    </MainLayout>
  );
}

export default Homepage;
