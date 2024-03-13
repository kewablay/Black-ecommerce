const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getApiImage = (imageURL) => {
  // console.log("new url : ", `${BASE_URL}/${imageURL}`);
  return `${BASE_URL}/${imageURL}`;
};

export const getPriceWithInterest = (price, interest) =>
  (Math.ceil(price * (1 + interest / 100) * 100) / 100) << 0;
