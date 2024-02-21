import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const API = axios.create({
  baseURL,
});

const authInterceptor = (config) => {
  //  We'll change it later
  const token = localStorage.getItem("TOKEN");
  // console.log("TOKEN FROM INTERCEPTOR: ", token);

  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
};

API.interceptors.request.use(authInterceptor);

export default API;
