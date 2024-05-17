import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategories,
  getCategoryById,
} from "services/categories.services";

export const useGetCategories = (enabled) => {
  return useQuery("categories", getCategories, {
    enabled,
  });
};

export const useGetCategoryById = (categoryId) => {
  return useQuery(
    ["categoryById", categoryId],
    () => getCategoryById(categoryId),
    {
      onSuccess: (data) => {
        // console.log("Category by id : ", data);
      },
    }
  );
};

export const useCreateCategory = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation(createCategory, {
    onSuccess: () => {
      // console.log("Category Created Successfully...");
      queryClient.invalidateQueries("categories");
      closeModal();
    },
  });
};

export const useEditCategory = (onEditSuccess) => {
  const queryClient = useQueryClient();

  return useMutation(editCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
      onEditSuccess();
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categories");
    },
  });
};
