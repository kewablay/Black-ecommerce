import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import {
  createWallet,
  customerGetWallets,
  deleteWallet,
  getWallets,
  updateWallet,
} from "services/cryptoWallets.services";

export const useCreateWallet = (closeModal) => {
  const queryClient = useQueryClient();
  return useMutation(createWallet, {
    onSuccess: (data) => {
      //   console.log("Wallet created Successfully: ", data);
      queryClient.invalidateQueries("wallets");
      closeModal();
    },
  });
};

export const useGetWallets = () => {
  return useQuery("wallets", getWallets, {
    onSuccess: (data) => {
      //   console.log("Wallets fetched successful: ", data);
    },
  });
};
export const useCustomerGetWallets = () => {
  return useQuery("wallets", customerGetWallets, {
    onSuccess: (data) => {
      //   console.log("Wallets fetched successful: ", data);
    },
  });
};


export const useDeletWallet = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteWallet, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("wallets");
    },
  });
};

export const useUpdateWallet = (closeModal) => {
  const queryClient = useQueryClient();
  return useMutation(updateWallet, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("wallets");
      //   console.log("Wallet updated successfully: ", data);
      closeModal();
    },
  });
};
