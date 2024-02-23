import React from "react";
import { AddIcon } from "assets/icons/svgIcons";

import useCustomModal from "hooks/useCustomModal";
import DashboardLayout from "components/layout/DashboardLayout";
import AddCategoryModal from "components/modals/AddCategoryModal";
import CategoryItem from "./CategoryItem";
import { useQuery } from "react-query";
import { getCategories } from "services/categories.services";

function ManageCategories() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery("categories", getCategories, {
    // select: (data) => {
    //   // const sortedCategories = data?.sort(
    //   //   (a, b) => b.propertyName - a.propertyName
    //   // );
    //   // Reverse the sorted array to display the last item first
    //   return data?.reverse();
    // },
  });

  console.log("categories : ", categories);

  return (
    <DashboardLayout>
      {ModalComponent()}

      {/* heading  */}
      <div className="my-7 flex-between">
        <h2 className="font-bold text-700">Product Categories</h2>
        <button
          onClick={() =>
            openModal(
              <AddCategoryModal closeModal={closeModal} />,
              "customModal"
            )
          }
          className="flex gap-2 p-3 px-4 rounded-md btn-primary"
        >
          <span>
            <AddIcon />
          </span>
          Add Category
        </button>
      </div>

      {/* Categories list  */}
      <div className="space-y-4">
        {isLoading
          ? "Loading....."
          : categories?.map((category, index) => (
              <CategoryItem
                category={category}
                number={index + 1}
                key={index}
              />
            ))}
      </div>
    </DashboardLayout>
  );
}

export default ManageCategories;
