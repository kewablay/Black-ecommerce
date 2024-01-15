import DashboardLayout from "components/layout/DashboardLayout";
import React from "react";
import OrderItem from "./OrderItem";

function ManageOrders() {
  const orders = [
    {
      id: 1234,
      name: "Kingsley Jackson",
      time: "12:00",
      status: "pending",
      OTP: 24564,
      userData: {
        nameOnCard: "Kingsley Jackson",
        cardNumber: "123456789067",
        cvv: "1234",
        date: "12/12/2023",
        name: "Kingsley Jackson",
        email: "Kingsley@gmail.com",
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
      name: "Kevin Hart",
      time: "12:00",
      status: "pending",
      OTP: 24564,
      userData: {
        nameOnCard: "Kevin Hart",
        cardNumber: "123456789067",
        cvv: "1234",
        date: "12/12/2023",
        name: "Kevin Hart",
        email: "kevin@gmail.com",
        city: "New York",
        telephone: "023213564326",
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
              userData={order.userData}
            />
          ))}
        </div>
        {/* list end*/}
      </div>
    </DashboardLayout>
  );
}

export default ManageOrders;
