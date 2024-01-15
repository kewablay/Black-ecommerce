import MainLayout from "components/layout/MainLayout";
import React from "react";
import OrdersList from "./components/OrdersList";


function Orders() {
  return (
    <div>
      <MainLayout>
        <div className="mt-10 section-contained">
          <h2 className="text-700">Order History</h2>

          {/* orders list  */}
          <div>
            <OrdersList />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Orders;
