import { useQuery } from "react-query";
import { getAdminProfile, getUserProfile } from "services/profile.services";

export const useGetUserProfile = () => {
  return useQuery("userProfile", getUserProfile, {
    select: (data) => {
      return data.admin;
    },
  });
};

export const useGetAdminProfile = () => {
  return useQuery("adminProfile", getAdminProfile, {
    select: (data) => {
      return data.admin;
    },
  });
};
