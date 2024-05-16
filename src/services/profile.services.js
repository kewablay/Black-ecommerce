import API from "./api";

export const getUserProfile = async () => {
  try {
    const response = await API.get("/customer/profile");
    localStorage.setItem("USER_PROFILE", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAdminProfile = async () => {
  try {
    const response = await API.get("/admin/profile");
    localStorage.setItem("ADMIN_PROFILE", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
