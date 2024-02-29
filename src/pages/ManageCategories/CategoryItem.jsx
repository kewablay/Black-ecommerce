import {
  CancelIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
} from "assets/icons/svgIcons";
import { useDeleteCategory, useEditCategory } from "hooks/useCategories";
import React, { useState } from "react";
import toast from "react-hot-toast";

function CategoryItem({ number, category }) {
  const [editing, setEditing] = useState(false);
  const [editedCategoryName, setEditedCategoryName] = useState(category.name);

  const { mutateAsync: deleteCategoryAsync } = useDeleteCategory();

  const onEditSuccess = () => {
    setEditing(false);
    setEditedCategoryName(editedCategoryName);
  };

  const { mutateAsync: editCategoryMutation } = useEditCategory(onEditSuccess);

  const handleDelete = (category) => {
    toast.promise(deleteCategoryAsync(category?._id), {
      loading: `Deleting ${category?.name} Category...`,
      success: "Category deleted successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  const handleEdit = () => {
    const EditData = {
      updatedCategory: {
        name: editedCategoryName,
      },
      categoryId: category?._id,
    };

    toast.promise(editCategoryMutation(EditData), {
      loading: `Updating Category...`,
      success: "Category updated successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <div className="p-5 bg-white rounded-md shadow-sm flex-between text-300">
      {!editing ? (
        <>
          <p>
            {number}. {category?.name}
          </p>
          <div className="flex items-center gap-5">
            <button
              className="flex items-center gap-1"
              onClick={() => setEditing(true)}
            >
              <span>
                <EditIcon />
              </span>
              Edit
            </button>
            <button
              onClick={() => handleDelete(category)}
              className="flex items-center gap-1"
            >
              <span>
                <DeleteIcon />
              </span>
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={editedCategoryName}
            onChange={(e) => setEditedCategoryName(e.target.value)}
            className="w-full input-style-secondary "
          />
          <div className="flex items-center gap-5 ml-4">
            <button className="flex items-center gap-1" onClick={handleEdit}>
              <span>
                <SaveIcon />
              </span>
              Save
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setEditedCategoryName(category.name);
              }}
              className="flex items-center gap-1"
            >
              <span>
                <CancelIcon />
              </span>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CategoryItem;
