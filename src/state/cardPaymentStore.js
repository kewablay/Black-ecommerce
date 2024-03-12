import { create } from "zustand";

export const useCardPaymentStore = create((set) => ({
  cardDetails: {},
  productId: "",
  packageId: "",
  setPackageId: (packageId) => set({ packageId }),
  setProductId: (productId) => set({ productId }),
  setCardDetails: (cardDetails) => set({ cardDetails }),
}));
