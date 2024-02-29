import React from "react";
import { AddIcon } from "assets/icons/svgIcons";

import useCustomModal from "hooks/useCustomModal";
import DashboardLayout from "components/layout/DashboardLayout";
import AddCategoryModal from "components/modals/AddCategoryModal";
import CategoryItem from "./CategoryItem";

import { useGetCategories } from "hooks/useCategories";

function ManageCategories() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const { data: categories, isLoading } = useGetCategories();

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
