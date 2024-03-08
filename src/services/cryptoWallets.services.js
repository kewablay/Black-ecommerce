import API from "./api";

export const createWallet = async (newWallet) => {
  console.log("recieved Wallet data: ", newWallet);
  console.log("Creating wallet........");
  try {
    const response = await API.post("/admin/wallets", newWallet);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWallets = async () => {
  console.log("Getting Wallets.... ");
  try {
    const response = await API.get("/admin/wallets");
    return response.data.wallets;
  } catch (error) {
    throw error;
  }
};

export const deleteWallet = async (walletId) => {
  console.log("Recieved Id: ", walletId);
  try {
    const response = await API.delete(`admin/wallets/${walletId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
// export const updateWallet = async (walletId) => {
//   console.log("Recieved Id: ", walletId);
//   try {
//     const response = await API.update(`admin/wallets/${walletId}`);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

export const updateWallet = async ({ walletId, updatedWallet }) => {
  console.log("recieved wallet  data: ", updatedWallet, walletId);
  console.log("Updating wallet......");
  try {
    const response = await API.put(`admin/wallets/${walletId}`, updatedWallet);
    return response;
  } catch (error) {
    throw error;
  }
};
