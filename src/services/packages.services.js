import API from "./api";

export const createPackage = async (newPackage) => {
  console.log("recieved Package: ", newPackage);
  console.log("Creating package........");
  try {
    const response = await API.post("/admin/packages", newPackage);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPackages = async () => {
  console.log("Getting Packages.... ");
  try {
    const response = await API.get("/admin/packages");
    return response.data.packages;
  } catch (error) {
    throw error;
  }
};

export const deletePackage = async (packageId) => {
  console.log("Recieved Id: ", packageId);
  console.log("Deleting Package..........");
  try {
    const response = await API.delete(`admin/packages/${packageId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const editPackage = async ({ packageId, updatedPackage }) => {
  console.log("recieved package  data: ", updatedPackage, packageId);
  console.log("Updating package......");
  try {
    const response = await API.put(
      `admin/packages/${packageId}`,
      updatedPackage
    );
    return response;
  } catch (error) {
    throw error;
  }
};
