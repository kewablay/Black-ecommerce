import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createProduct,
  customerGetCategoryProducts,
  customerGetProductById,
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
      // console.log("updatedProduct: ", data);
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

export const useGetCustomerProductById = (productId) => {
  return useQuery(
    ["customerSingleProduct", productId],
    () => customerGetProductById(productId),
    {
      onSuccess: (data) => {
        // console.log("customerSingleProduct: ", data);
      },
    }
  );
};

export const useCustomerGetCategoryProducts = (categoryId) => {
  return useQuery(
    ["customerCategoryProducts", categoryId],
    () => customerGetCategoryProducts(categoryId),
    {
      onSuccess: (data) => {
        // console.log("customerCategoryProducts: ", data);
      },
    }
  );
};
