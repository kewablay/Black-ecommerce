import { useCreateCategory } from "hooks/useCategories";
import React, { useRef } from "react";
import toast from "react-hot-toast";

function AddCategoryModal({ closeModal }) {
  const categoryRef = useRef();

  const { mutateAsync, isLoading } = useCreateCategory(closeModal);

  const handleCreateCategory = (e) => {
    e.preventDefault();
    const category = {
      name: categoryRef.current.value,
    };

    toast.promise(mutateAsync(category), {
      loading: "Creating Category...",
      success: "Category created successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <>
      <h2 className="text-center text-700">Add New Category</h2>

      <form className="flex flex-col gap-3 mt-12">
        <input
          type="text"
          className="input-style"
          name="category"
          id="category"
          ref={categoryRef}
          placeholder="Enter category. Eg.Iphones"
        />

        <button
          onClick={handleCreateCategory}
          type="submit"
          className="rounded-md btn-primary btn-lg"
          disabled={isLoading}
        >
          Add Category
        </button>
      </form>
    </>
  );
}

export default AddCategoryModal;
