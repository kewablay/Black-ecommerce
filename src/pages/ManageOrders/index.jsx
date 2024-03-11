import DashboardLayout from "components/layout/DashboardLayout";
import React from "react";
import OrderItem from "./OrderItem";
import { useGetOrders } from "hooks/useOrders";

function ManageOrders() {
  const { data: orders, isLoading } = useGetOrders();

  return (
    <DashboardLayout>
      {/* heading  */}
      <div className="my-7 flex-between">
        <h2 className="font-bold text-700">Live Orders</h2>
      </div>

      {/* Order list  */}
      <div className="space-y-4">
        {/* list header  */}
        <div className="grid items-center grid-cols-12 gap-5 p-3 font-bold text-white rounded-md bg-secondaryDark">
          <p className="col-span-2">Order Id</p>
          <p className="col-span-3">Name</p>
          <p className="col-span-2">Time Placed</p>
          <p className="col-span-2">Status</p>
          <p className="col-span-3">Actions</p>
        </div>

        {/* list */}
        <div className="space-y-4">
          {orders?.map((order, index) => (
            <OrderItem key={index} order={order} />
          ))}
        </div>
        {/* list end*/}
      </div>
    </DashboardLayout>
  );
}

export default ManageOrders;
