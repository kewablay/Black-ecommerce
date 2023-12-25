import React from "react";
import MainLayout from "../components/layout/MainLayout";
import OrderList from "../features/Orders/OrdersList";

function Orders() {
  return (
    <div>
      <MainLayout>
        <div className="mt-10 section-contained">
          <h2 className="text-700">Order History</h2>

          {/* orders list  */}
          <div>
            <OrderList />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Orders;
