import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Homepage, Login, Shop, ProductDetail, SelectPayment, Orders } from "./pages";

function App() {
  return (
    <div className="font-plusJakartaSans">
      <Router>
        <Routes>
          <Route exact path="/" Component={Homepage} />
          <Route path="/login" Component={Login} />
          <Route path="/shop" Component={Shop} />
          <Route path="/product/:id" Component={ProductDetail} />
          <Route path="/select-payment" Component={SelectPayment} />
          <Route path="/orders" Component={Orders} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
