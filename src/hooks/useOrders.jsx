import { useMutation } from "react-query";
import { makeOrder } from "services/orders.services";

export const useMakeOrder = (closeModal) => {
  return useMutation(makeOrder, {
    onSuccess: (data) => {
      console.log("Order placed successfully: ", data);
      closeModal();
    },
  });
};
