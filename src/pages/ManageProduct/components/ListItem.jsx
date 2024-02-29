import React from "react";
import { DeleteIcon, EditIcon } from "assets/icons/svgIcons";

import useCustomModal from "hooks/useCustomModal";
import EditProductModal from "components/modals/EditProductModal";
import { getApiImage } from "utils/getApiImage";
import { useDeleteProduct } from "hooks/useProducts";
import toast from "react-hot-toast";
import { useGetCategoryById } from "hooks/useCategories";

function ListItem({ product }) {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  // FETCH CATEGORY BY ID
  const { isLoading, data: category } = useGetCategoryById(product?.categories);

  const { mutateAsync: DeleteProductMutation } = useDeleteProduct();

  const handleDeleteProduct = () => {
    console.log("product Id: ", product?._id);
    toast.promise(DeleteProductMutation(product?._id), {
      loading: "Deleting Product...",
      success: "Deleted Product successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <div className="grid items-center grid-cols-12 gap-5 p-2 bg-white rounded-md shadow-sm text-300">
      {/* modal */}
      {ModalComponent()}
      {/* image and item name  */}
      <div className="relative grid items-center grid-cols-8 col-span-4 gap-2">
        {/* image */}
        <div className="col-span-3 p-3 rounded-md bg-bgGray flex-center">
          <img
            src={getApiImage(product?.images[0])}
            alt="."
            className="w-[90%] sm:w-[70%]"
          />
        </div>

        {/* item name  */}

        <p className="col-span-5 cursor-default has-tooltip line-clamp-1 text-ellipsis">
          {product?.name}
          {/* tooltip */}
          <span className="p-1 px-2 -mt-10 bg-white rounded shadow-lg text-200 tooltip text-textGray">
            {product?.name}
          </span>
          {/* tooltip ends */}
        </p>
      </div>

      {/* price  */}
      <div className="col-span-2">
        <p>${product?.price}</p>
      </div>

      {/* category */}
      <div className="col-span-3">{category?.name}</div>

      {/* user actions delete and edit  */}
      <div className="flex items-center col-span-2 gap-5">
        <button
          onClick={() =>
            openModal(
              <EditProductModal product={product} closeModal={closeModal} />,
              "customModal"
            )
          }
          className="flex items-center gap-1"
        >
          <span>
            <EditIcon />
          </span>
          Edit
        </button>
        <button
          onClick={handleDeleteProduct}
          className="flex items-center gap-1"
        >
          <span>
            <DeleteIcon />
          </span>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;
