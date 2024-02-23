import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const API = axios.create({
  baseURL,
});

const authInterceptor = (config) => {
  //  We'll change it later
  const token =
    localStorage.getItem("TOKEN") || localStorage.getItem("ADMIN_TOKEN");
  // console.log("TOKEN FROM INTERCEPTOR: ", token);

  const multipart = localStorage.getItem("MULTIPART");

  if (token) {
    config.headers.Authorization = `${token}`;
  }

  if (multipart) {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  return config;
};

API.interceptors.request.use(authInterceptor);

export default API;
