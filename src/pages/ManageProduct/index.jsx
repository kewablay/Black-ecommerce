import React from "react";
import { AddIcon } from "assets/icons/svgIcons";

import useCustomModal from "hooks/useCustomModal";
import AddProductModal from "components/modals/AddProductModal";
import DashboardLayout from "components/layout/DashboardLayout";
import ListItem from "./components/ListItem";
import { useGetAllProducts } from "hooks/useProducts";
import EmptyList from "components/shared/EmptyList";
import Loader from "components/shared/Loader";

function ManageProducts() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const { data: products, isLoading } = useGetAllProducts();
  console.log("products: ", products);

  const isProductsEmpty = !isLoading && products?.length === 0;

  return (
    <DashboardLayout>
      {ModalComponent()}

      {/* heading  */}
      <div className="my-7 flex-between">
        <h2 className="font-bold text-700">Shop Products</h2>
        <button
          onClick={() =>
            openModal(
              <AddProductModal closeModal={closeModal} />,
              "customModal"
            )
          }
          className="flex gap-2 p-3 px-4 rounded-md btn-primary"
        >
          <span>
            <AddIcon />
          </span>
          Add Product
        </button>
      </div>

      {/* Product list  */}
      <div className="space-y-4">
        {/* list header  */}
        <div className="grid items-center grid-cols-12 gap-5 p-3 font-bold text-white rounded-md bg-secondaryDark">
          <p className="col-span-4">Product Title</p>
          <p className="col-span-2">Price</p>
          <p className="col-span-3">Category</p>
          <p className="col-span-3">Actions</p>
        </div>

        {/* list */}
        {isProductsEmpty ? (
          <div className="pt-32">
            <EmptyList
              title="No Products Found"
              description="Looks like you haven't added any products!"
            />
          </div>
        ) : (
          <div className="space-y-4">
            {isLoading ? (
              <div className="mt-32">
                <Loader text={"Loading Products..."} />
              </div>
            ) : (
              products?.map((product, index) => (
                <ListItem
                  key={index}
                  name={product.name}
                  image={product.images}
                  price={product.price}
                  categoryId={product.categories}
                  productId={product._id}
                  product={product}
                />
              ))
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default ManageProducts;
