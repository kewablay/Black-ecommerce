import API from "./api";

export const getCategories = async () => {
  console.log("Getting categories.... ");
  try {
    const response = await API.get("/admin/categories");
    return response.data.categories;
  } catch (error) {
    throw error;
  }
};

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

export const deleteCategory = async (categoryId) => {
  console.log("Recieved Id: ", categoryId);
  console.log("Deleting Category..........");
  try {
    const response = await API.delete(`admin/categories/${categoryId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const editCategory = async ({ categoryId, updatedCategory }) => {
  console.log("recieved category  data: ", updatedCategory, categoryId);
  console.log("Updating category......");
  try {
    const response = await API.put(
      `admin/categories/${categoryId}`,
      updatedCategory
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCategoryById = async (categoryId) => {
  console.log("recieved categoryId : ", categoryId);
  console.log("Getting category by Id");
  try {
    const response = await API.get(`admin/categories/${categoryId}`);
    return response.data.category;
  } catch (error) {
    throw error;
  }
};
