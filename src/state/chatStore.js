import { create } from "zustand";

export const useChatStore = create((set) => ({
  newMessage: {},
  setNewMessage: (newMessage) => set({ newMessage }),
}));
