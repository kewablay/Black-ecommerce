import { createStore } from "zustand";


export const useOrder = create((set) => ({
    orderStatus: "",
    setOrderId: (orderId) => set({ orderId }),
}))