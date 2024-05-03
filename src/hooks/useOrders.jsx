import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getCustomerOrders,
  getOrderDetail,
  getOrders,
  makeOrder,
  sendOrderOTP,
  updateOrderStatus,
  viewOrderOTP,
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

export const useSendOrderOTP = () => {
  const queryClient = useQueryClient();
  return useMutation(sendOrderOTP, {
    onSuccess: (data) => {
      console.log("OTP sent successfully: ", data);
      queryClient.invalidateQueries("orderOTPs");
    },
  });
};

export const useViewOrderOTP = (orderId) => {
  return useQuery(["orderOTPs", orderId], () => viewOrderOTP(orderId), {
    onSuccess: (data) => {
      console.log("get order otp successful: ", data);
    },
  });
};

export const useGetCustomerOrders = () => {
  return useQuery("customerOrders", getCustomerOrders, {
    onSuccess: (data) => {
      console.log("get customer orders successful: ", data);
    },
  });
};
