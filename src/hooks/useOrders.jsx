import { useMutation, useQuery } from "react-query";
import { getOrders, makeOrder } from "services/orders.services";

export const useGetOrders = () => {
  return useQuery("orders", getOrders, {
    onSuccess: (data) => {
      console.log("get orders successful: ", data);
    },
  });
};

// CUSTOMER
export const useMakeOrder = (closeModal) => {
  return useMutation(makeOrder, {
    onSuccess: (data) => {
      console.log("Order placed successfully: ", data);
      // closeModal();
    },
  });
};
