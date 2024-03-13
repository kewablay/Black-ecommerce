import React from "react";
import OrderCard from "./OrderCard";
import { useGetCustomerOrders } from "hooks/useOrders";
import { getApiImage } from "utils/getApiImage";

function OrdersList() {
  const { data: orders, isLoading } = useGetCustomerOrders();

  return (
    <div className="flex flex-col gap-5 mt-5">
      {isLoading
        ? [...Array(3)].map((_, index) => <OrderCard key={index} />)
        : orders?.map((order, index) => (
            <OrderCard
              date={order?.orderDate}
              id={order?._id}
              image={getApiImage(order?.product?.images[0])}
              price={order?.product?.price}
              status={order?.status}
              title={order?.product?.name}
              key={index}
            />
          ))}
    </div>
  );
}

export default OrdersList;
