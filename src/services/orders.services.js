import API from "./api";

// ADMIN
export const getOrders = async () => {
  try {
    const response = await API.get("/admin/orders");
    return response.data.orders;
  } catch (error) {
    throw error;
  }
};

export const updateOrderStatus = async ({ orderId, status }) => {
  try {
    const response = await API.put(`/admin/orders/${orderId}/status`, status);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// CUSTOMER

export const makeOrder = async (orderData) => {
  try {
    const response = await API.post("/customer/orders", orderData);
    return response.data.order;
  } catch (error) {
    throw error;
  }
};

export const deleteOrder = async (orderId) => {
  try {
    const response = await API.delete(`/admin/orders/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendOrderOTP = async (OTPData) => {
  try {
    const response = await API.post(`/customer/orderOTP`, OTPData);
    return response.data.OrderOTP;
  } catch (error) {
    throw error;
  }
};
export const viewOrderOTP = async (orderId) => {
  try {
    const response = await API.get(`/admin/orders/${orderId}/orderotps`);
    return response.data.orderOTPs;
  } catch (error) {
    throw error;
  }
};



export const getOrderDetail = async (orderId) => {
  try {
    const response = await API.get(`/customer/orders/${orderId}`);
    return response.data.order;
  } catch (error) {
    throw error;
  }
};


export const getCustomerOrders = async () => {
  try {
    const response = await API.get("/customer/orders");
    return response.data.orders;
  } catch (error) {
    throw error;
  }
}

export const sendTransactionId = async (data) => {
  try {
    const response = await API.post(`/customer/crypto/transaction/`, data);
    return response.data.transaction;
  } catch (error) {
    throw error;
  }
};


export const viewTransactionId = async (orderId) => {
  
  try {
    const response = await API.get(`/admin/crypto/transaction/order/${orderId}`);
    return response.data.transactions;
  } catch (error) {
    throw error;
  }
};
