import React, { useRef } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { createCategory } from "services/categories.services";

function AddCategoryModal({ closeModal }) {
  const categoryRef = useRef();
  const {
    mutate: createCategoryMutation,
    mutateAsync,
    isLoading,
  } = useMutation(createCategory, {
    onSuccess: () => {
      console.log("Category Created Successfully...");
    },
  });

  const handleCreateCategory = (e) => {
    e.preventDefault();
    // create category
    // close modal
    // update categories list
    const category = {
      name: categoryRef.current.value,
    };

    // createCategoryMutation.mutate(category);

    toast.promise(mutateAsync(category), {
      loading: "Creating Category...",
      success: "Category created successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });

    // closeModal();
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
        >
          Add Category
        </button>
      </form>
    </>
  );
}

export default AddCategoryModal;
