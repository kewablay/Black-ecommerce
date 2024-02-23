import React from "react";
import { AddIcon } from "assets/icons/svgIcons";

import useCustomModal from "hooks/useCustomModal";
import DashboardLayout from "components/layout/DashboardLayout";
import AddCategoryModal from "components/modals/AddCategoryModal";
import CategoryItem from "./CategoryItem";

function ManageCategories() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const categories = [
    { _id: "65d7cfcfc0d10abd10991afe", name: "Iphone Collection", __v: 0 },
    { _id: "65d7cfe9c0d10abd10991b01", name: "Samsung Collection", __v: 0 },
  ];

  


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
        {categories.map((category, index) => (
          <CategoryItem category={category} number={index + 1} key={index} />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default ManageCategories;
