import React from "react";
import { Route, Routes } from "react-router-dom";
import * as path from "./Constants";
import {
  Chats,
  Homepage,
  Login,
  ManageCategories,
  ManageOrders,
  ManageProducts,
  Orders,
  PaymentInfo,
  ProductDetail,
  SelectPayment,
  Shop,
  SignUp,
} from "../src/pages";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./AdminRoutes";

export const RouterConfig = () => {
  return (
    <Routes>
      {/* PROTECTED USER ROUTES  */}
      <Route element={<ProtectedRoutes />}>
        <Route exact path={path.HOMEPAGE} Component={Homepage} />
        <Route path={path.SHOP} Component={Shop} />
        <Route path={path.SELECT_PAYMENT} Component={SelectPayment} />
        <Route path={path.PAYMENT_INFO} Component={PaymentInfo} />
        <Route path={path.ORDERS} Component={Orders} />
        <Route path="/product/:id" Component={ProductDetail} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route element={<AdminRoutes />}>
        <Route path={path.MANAGE_RODUCTS} Component={ManageProducts} />
        <Route path={path.MANAGE_ORDERS} Component={ManageOrders} />
        <Route path={path.MANAGE_CATEGORIES} Component={ManageCategories} />
        <Route path={path.CHATS} Component={Chats} />
      </Route>

      {/* PUBLIC ROUTES */}
      <Route path={path.SIGNUP} Component={SignUp} />
      <Route path={path.LOGIN} Component={Login} />
    </Routes>
  );
};

export default RouterConfig;
