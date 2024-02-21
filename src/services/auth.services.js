import API from "./api";

export const signUpUser = async (credentials) => {
  console.log("Signing up user ...... ");
  console.log("recieved data: ", credentials);
};

export const signInUser = async (credentials) => {
  console.log("Login in user ...... ");
  console.log("recieved data: ", credentials);
  try {
    const response = await API.post("/customer/signin", credentials);
    // console.log("response: ", response);
    localStorage.setItem("TOKEN", response.data.token);
    return response.data;
  } catch (error) {
    // console.log("ERror: ", error.response.data.error);
    throw error;
  }
};
