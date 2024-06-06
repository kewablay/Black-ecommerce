import MainLayout from "components/layout/MainLayout";
import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import OurLatestProducts from "./components/OurLatestProducts";
import PromotionBanner from "components/shared/PromotionBanner";
import HotDeals from "./components/HotDeals";
import CustomerReviews from "./components/CustomerReviews";
import { useCustomerGetProducts, useGetAllProducts } from "hooks/useProducts";
import ChatButton from "components/shared/ChatButton";

function Homepage() {
  const { data: products, isLoading } = useCustomerGetProducts();

  const latestProducts = products?.slice()?.reverse()?.slice(0, 6);
  const hotDeals = products?.slice(0, 6);

  return (
    <MainLayout>
      <Header />
      <Categories />
      <OurLatestProducts products={latestProducts} isLoading={isLoading} />
      <PromotionBanner />
      <HotDeals products={hotDeals} isLoading={isLoading} />
      <CustomerReviews />
    </MainLayout>
  );
}

export default Homepage;
