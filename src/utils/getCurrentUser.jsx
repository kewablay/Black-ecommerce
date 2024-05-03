export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("USER_PROFILE"));
};
