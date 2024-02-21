import API from "./api";

export const signUpUser = async (credentials) => {
  // Logic to send login request to the server
  console.log("Signing up user ...... ");
  console.log("recieved data: ", credentials);
};

export const signInUser = async (credentials) => {
  // Logic to send login request to the server
  console.log("Login in user ...... ");
  console.log("recieved data: ", credentials);
  try {
    const response = await API.post("/customer/signin", credentials);
    // console.log("response: ", response);
    return response;
  } catch (error) {
    // console.log("ERror: ", error.response.data.error);
    throw error;
  }
};

export const logoutUser = async () => {
  // Logic to send logout request to the server
};
