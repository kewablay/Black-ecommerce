import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Homepage,
  Login,
  Shop,
  ProductDetail,
  SelectPayment,
  Orders,
  PaymentInfo,
  Dashboard,
  ManageProducts,
  Chats,
  ManageOrders,
  Signup,
} from "./pages";

function App() {
  return (
    <div className="w-full h-full font-plusJakartaSans">
      <Router>
        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/shop" Component={Shop} />
          <Route path="/product/:id" Component={ProductDetail} />
          <Route path="/select-payment" Component={SelectPayment} />
          <Route path="/orders" Component={Orders} />
          <Route path="/payment-info" Component={PaymentInfo} />
          <Route path="/admin" Component={Dashboard} />
          <Route path="/admin/manage-products" Component={ManageProducts} />
          <Route path="/admin/manage-orders" Component={ManageOrders} />
          <Route path="/admin/chats" Component={Chats} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
