import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "services/products.services";

export const useGetAllProducts = () => {
  return useQuery("allProducts", getProducts);
};

export const useCreateProduct = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("allProducts");
      closeModal();
    },
  });
};

export const useEditProduct = (closeModal) => {
  const queryClient = useQueryClient();
  
  return useMutation(editProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("allProducts");
      closeModal()
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("allProducts");
    },
  });
};
