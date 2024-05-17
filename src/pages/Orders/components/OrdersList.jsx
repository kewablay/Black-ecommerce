import React from "react";
import OrderCard from "./OrderCard";
import { useGetCustomerOrders } from "hooks/useOrders";
import { getApiImage } from "utils/getApiImage";
import EmptyList from "components/shared/EmptyList";

function OrdersList() {
  const { data: orders, isLoading } = useGetCustomerOrders();
  const isOrdersEmpty = !isLoading && orders?.length === 0;

  return (
    <div className="flex flex-col gap-5 mt-5 lg:min-h-[25rem]">
      {isLoading ? (
        [...Array(3)].map((_, index) => <OrderCard key={index} />)
      ) : isOrdersEmpty ? (
        <div className="mt-32">
          <EmptyList
            title={"No Orders Found"}
            description={"Looks like there are no orders yet!"}
          />
        </div>
      ) : (
        orders?.map((order, index) => (
          <OrderCard
            date={order?.orderDate}
            id={order?._id}
            image={getApiImage(order?.product?.images[0])}
            price={order?.product?.price}
            status={order?.status}
            title={order?.product?.name}
            key={index}
          />
        ))
      )}
    </div>
  );
}

export default OrdersList;
