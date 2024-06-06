import { create } from "zustand";

export const useChatStore = create((set) => ({
  newMessageSenderId: "",
  setNewMessageSenderId: (newMessageSenderId) => set({ newMessageSenderId }),
}));
