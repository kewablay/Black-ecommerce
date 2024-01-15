import React from "react";
import { AddIcon } from "assets/icons/svgIcons";

import useCustomModal from "hooks/useCustomModal";
import AddProductModal from "components/modals/AddProductModal";
import DashboardLayout from "components/layout/DashboardLayout";
import ListItem from "./components/listItem";

function ManageProducts() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const products = [
    {
      id: 1,
      title: "IPhone 12 pro - 32GB",
      price: "1200",
      image: "/src/assets/images/iphone12.png",
      category: "Iphone Collection",
    },
    {
      id: 2,
      title: "iPhone 13 pro unlocked - 128 GB",
      price: "1200",
      image: "/src/assets/images/iphone13pro.png",
      category: "Iphone Collection",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21  -128GB",
      price: "1200",
      image: "/src/assets/images/samsungS21.png",
      category: "Samsung Collection",
    },
    {
      id: 4,
      title: "IPhone 15 pro max - 256GB",
      price: "1200",
      image: "/src/assets/images/iphone15pro.png",
      category: "Iphone Collection",
    },
  ];

  return (
    <DashboardLayout>
      {ModalComponent()}

      {/* heading  */}
      <div className="my-7 flex-between">
        <h2 className="font-bold text-700">Shop Products</h2>
        <button
          onClick={() => openModal(<AddProductModal closeModal={closeModal} />,  "customModal")}
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
        <div className="space-y-4">
          {products.map((product, index) => (
            <ListItem
              key={index}
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ManageProducts;
