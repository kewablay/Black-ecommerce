import API from "./api";

export const createProduct = async (newProduct) => {
  console.log("recieved Product: ", newProduct);
  console.log("Creating product........");
  localStorage.setItem("MULTIPART", "true");
  try {
    const response = await API.post("/admin/product", newProduct);
    // ON SUCCESS REMOVE MULTIPART
    localStorage.removeItem("MULTIPART");
    return response.data;
  } catch (error) {
    throw error;
  }
};
