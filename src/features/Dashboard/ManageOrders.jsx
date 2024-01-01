import React from "react";
import DashboardLayout from "./DashboardLayout";

import OrderItem from "./components/OrderItem";

function ManageOrders() {
  const orders = [
    {
      id: 1234,
      name: "Kingsley Jackson",
      time: "1200",
      status: "pending",
      OTP: 24564,
      userData: {
        nameOnCard: "Raymond Jackson",
        cardNumber: "123456789067",
        cvv: "1234",
        date: "12/12/2023",
        name: "Raymond Jackson",
        email: "raymond@gmail.com",
        city: "Texas",
        telephone: "023213564576",
        address1: " address1Ref.current.value",
        address2: "address2Ref.current.value",
        country: "USA",
        zipCode: "123",
      },
    },
    {
      id: 1234,
      name: "Kingsley Jackson",
      time: "1200",
      status: "pending",
      OTP: 24564,
      userData: {
        nameOnCard: "Raymond Jackson",
        cardNumber: "123456789067",
        cvv: "1234",
        date: "12/12/2023",
        name: "Raymond Jackson",
        email: "raymond@gmail.com",
        city: "Texas",
        telephone: "023213564576",
        address1: " address1Ref.current.value",
        address2: "address2Ref.current.value",
        country: "USA",
        zipCode: "123",
      },
    },
  ];

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
          {orders.map((order, index) => (
            <OrderItem
              key={index}
              id={order.id}
              name={order.name}
              time={order.time}
              status={order.status}
            />
          ))}
        </div>
        {/* list end*/}
      </div>
    </DashboardLayout>
  );
}

export default ManageOrders;
