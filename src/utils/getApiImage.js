const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getApiImage = (imageURL) => {
  // console.log("new url : ", `${BASE_URL}/${imageURL}`);
  // return `${BASE_URL}/${imageURL}`;
  return `${imageURL}`;
};

export const getPriceWithInterest = (price, interest, packageDuration) => {
  // Calculate the total price with interest
  const totalPriceWithInterest =
    (Math.ceil(price * (1 + interest / 100) * 100) / 100) << 0;

  // Extract the number of months from the packageDuration string
  const months = parseInt(packageDuration?.split(" ")[0]);

  // Calculate the price per month
  const pricePerMonth = Math.round(totalPriceWithInterest / months);

  // Return both the total price with interest and the price per month
  return {
    totalPriceWithInterest,
    pricePerMonth,
  };
};
