import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createProduct,
  customerGetProducts,
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
    onSuccess: (data) => {
      queryClient.invalidateQueries("allProducts");
      console.log("updatedProduct: ", data);
      closeModal();
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

// CUSTOMER
export const useCustomerGetProducts = () => {
  return useQuery("customerProducts", customerGetProducts);
};
