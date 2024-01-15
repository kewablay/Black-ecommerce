import React from "react";
import { Route, Routes } from "react-router-dom";
import * as path from "./Constants";
import {
  Chats,
  Homepage,
  Login,
  ManageOrders,
  ManageProducts,
  Orders,
  PaymentInfo,
  ProductDetail,
  SelectPayment,
  Shop,
  SignUp,
} from "../src/pages";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route exact path={path.HOMEPAGE} Component={Homepage} />
      <Route path={path.LOGIN} Component={Login} />
      <Route path={path.SIGNUP} Component={SignUp} />
      <Route path={path.SHOP} Component={Shop} />
      <Route path={path.SELECT_PAYMENT} Component={SelectPayment} />
      <Route path={path.PAYMENT_INFO} Component={PaymentInfo} />
      <Route path={path.MANAGE_RODUCTS} Component={ManageProducts} />
      <Route path={path.MANAGE_ORDERS} Component={ManageOrders} />
      <Route path={path.ORDERS} Component={Orders} />
      <Route path={path.CHATS} Component={Chats} />

      {/* RELATIVE ROUTES */}
      <Route path="/product/:id" Component={ProductDetail} />
    </Routes>
  );
};

export default RouterConfig;
