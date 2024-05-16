import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteUser, getAllUsers } from "services/users.services";

export const useGetAllUsers = () => {
  return useQuery("users", getAllUsers, {
    onSuccess: (data) => {
      //   console.log("Wallets fetched successful: ", data);
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: (data) => {
      //   console.log("Wallet created Successfully: ", data);
      queryClient.invalidateQueries("users");
    },
  });
};
