import API from "./api";

export const getAllUsers = async () => {
  try {
    const response = await API.get("/admin/customers");
    return response.data.customers;
  } catch (error) {
    throw error;
  }
};


export const deleteUser = async (userId) => {
  try {
    const response = await API.delete(`/admin/customers/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
