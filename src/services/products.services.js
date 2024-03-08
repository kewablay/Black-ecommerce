import API from "./api";

export const getProducts = async () => {
  console.log("Getting Products.........");
  try {
    const response = await API.get("/admin/products");
    console.log("products from fetch: ", response.data.products);
    return response.data.products;
  } catch (error) {
    throw error;
  }
};

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

export const editProduct = async ({ productId, updatedProduct }) => {
  console.log("recieved product  data: ", updatedProduct, productId);
  console.log("Updating product......");
  localStorage.setItem("MULTIPART", "true");
  try {
    const response = await API.put(
      `admin/products/${productId}`,
      updatedProduct
    );
    localStorage.removeItem("MULTIPART");
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  console.log("Deleting product: ", productId);
  try {
    const response = await API.delete(`/admin/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// CUSTOMER 
export const customerGetProducts = async () => {
  console.log("Getting Products.........");
  try {
    const response = await API.get("/customer/products");
    console.log("products from fetch: ", response.data.products);
    return response.data.products;
  } catch (error) {
    throw error;
  }
};
