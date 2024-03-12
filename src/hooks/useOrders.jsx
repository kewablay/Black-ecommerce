import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getOrderDetail,
  getOrders,
  makeOrder,
  updateOrderStatus,
} from "services/orders.services";

export const useGetOrders = () => {
  return useQuery("liveOrders", getOrders, {
    select: (data) => data.reverse(),
    onSuccess: (data) => {
      console.log("get orders successful: ", data);
    },
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation(updateOrderStatus, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["orderDetail", data?.order?.order?._id]);
      queryClient.invalidateQueries("liveOrders");
      console.log("update order status successful: ", data);
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

export const usegetOrderDetail = (orderId) => {
  return useQuery(["orderDetail", orderId], () => getOrderDetail(orderId), {
    onSuccess: (data) => {
      console.log("get order detail successful: ", data);
    },
  });
};
