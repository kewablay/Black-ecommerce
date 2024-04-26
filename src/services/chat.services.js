import API from "./api";

export const createConversation = async (data) => {
  console.log("Creating Conversations.... ");
  try {
    const response = await API.post(`/conversations/`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getConversations = async (userId) => {
  console.log("Getting Conversations.... ");
  try {
    const response = await API.get(`/conversations/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getMessages = async (conversationId) => {
  console.log("Getting messages.... ");
  try {
    const response = await API.get(`/messages/${conversationId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendMessage = async (message) => {
  console.log("Sending Message.... ");
  try {
    const response = await API.post(`/messages/`, message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getConversationByUserId = async (userId) => {
  console.log("Getting conversation by user Id.... ");
  try {
    const response = await API.get(`/conversations/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
