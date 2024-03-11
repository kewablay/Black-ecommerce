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

// CUSTOMER

export const makeOrder = async (orderData) => {
  try {
    const response = await API.post("/customer/orders", orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
