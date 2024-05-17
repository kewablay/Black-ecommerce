import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  deletePackage,
  editPackage,
  getPackages,
} from "services/packages.services";

export const useGetPackages = (enabled) => {
  return useQuery("packages", getPackages, {
    enabled,
    onSuccess: (data) => {
      // console.log("Packages : ", data);
    },
  });
};

export const useEditPackage = (closeModal) => {
  const queryClient = useQueryClient();

  return useMutation(editPackage, {
    onSuccess: () => {
      queryClient.invalidateQueries("packages");
      closeModal();
    },
  });
};

export const useDeletePackage = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePackage, {
    onSuccess: () => {
      queryClient.invalidateQueries("packages");
    },
  });
};
