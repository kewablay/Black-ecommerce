import React from "react";
import { Route, Routes } from "react-router-dom";
import * as path from "./Constants";
import {
  Chats,
  ChoosePaymentOption,
  CryptoWallets,
  Homepage,
  Login,
  ManageCategories,
  ManageOrders,
  ManagePackages,
  ManageProducts,
  Orders,
  PayByCrypto,
  PaymentInfo,
  ProductDetail,
  SelectPayment,
  Shop,
  SignUp,
  Users,
} from "../pages";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./AdminRoutes";
import AdminLogin from "pages/AdminLogin/AdminLogin";

export const RouterConfig = () => {
  return (
    <Routes>
      {/* PROTECTED USER ROUTES  */}
      <Route element={<ProtectedRoutes />}>
        <Route exact path={path.HOMEPAGE} Component={Homepage} />
        <Route path={path.SHOP} Component={Shop} />
        {/* <Route path={path.SELECT_PAYMENT} Component={SelectPayment} /> */}
        <Route path={path.PAYMENT_INFO} Component={PaymentInfo} />
        <Route path={path.PAY_BY_CRYPTO} Component={PayByCrypto} />
        <Route path={path.ORDERS} Component={Orders} />
        <Route
          path="/choose-payment-option/:id"
          Component={ChoosePaymentOption}
        />
        <Route path="/select-payment/:id" Component={SelectPayment} />
        <Route path="/product/:id" Component={ProductDetail} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route element={<AdminRoutes />}>
        <Route path={path.MANAGE_RODUCTS} Component={ManageProducts} />
        <Route path={path.MANAGE_ORDERS} Component={ManageOrders} />
        <Route path={path.MANAGE_CATEGORIES} Component={ManageCategories} />
        <Route path={path.MANAGE_PACKAGES} Component={ManagePackages} />
        <Route path={path.CRYPTO_WALLETS} Component={CryptoWallets} />
        <Route path={path.CHATS} Component={Chats} />
        <Route path={path.USERS} Component={Users} />
      </Route>

      {/* PUBLIC ROUTES */}
      <Route path={path.SIGNUP} Component={SignUp} />
      <Route path={path.LOGIN} Component={Login} />
      <Route path={path.ADMIN_LOGIN} Component={AdminLogin} />
    </Routes>
  );
};

export default RouterConfig;
