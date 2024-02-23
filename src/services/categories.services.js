import API from "./api";

export const createCategory = async (category) => {
  console.log("recieved category: ", category);
  console.log("Creating category .......");
  try {
    const response = await API.post("/admin/category", category);
    return response;
  } catch (error) {
    throw error;
  }
};
