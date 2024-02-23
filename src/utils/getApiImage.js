const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getApiImage = (imageURL) => {
  // console.log("new url : ", `${BASE_URL}/${imageURL}`);
  return `${BASE_URL}/${imageURL}`;
};
