import React from "react";
import OrderCard from "./OrderCard";

function OrdersList() {
  const orders = [
    {
      id: 4,
      title: "IPhone 15 pro max - 256GB",
      price: "1200",
      image: "/src/assets/images/iphone15pro.png",
      dateAdded: "21/12/2023",
      status: "approved"
    },
    {
      id: 1,
      title: "IPhone 12 pro - 32GB",
      price: "1200",
      image: "/src/assets/images/iphone12.png",
      dateAdded: "19/12/2023",
      status: "approved"
    },
    {
      id: 2,
      title: "iPhone 13 pro unlocked - 128 GB",
      price: "1200",
      image: "/src/assets/images/iphone13pro.png",
      dateAdded: "14/10/2023",
      status: "approved"
    },
  ];

  return (
    <div className="flex flex-col gap-5 mt-5">
      {orders.map((order) => (
        <OrderCard
          date={order.dateAdded}
          id={order.id}
          image={order.image}
          price={order.price}
          status={order.status}
          title={order.title}
          key={order.id}
        />
      ))}
    </div>
  );
}

export default OrdersList;
