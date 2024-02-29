import { DropImageIcon, ImagesIcon } from "assets/icons/svgIcons";
import ImagePreview from "components/shared/ImagePreview";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import Select from "react-select";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { getCategories } from "services/categories.services";
import { getPackages } from "services/packages.services";
import { createProduct } from "services/products.services";
import { useCreateProduct } from "hooks/useProducts";
import { useGetCategories } from "hooks/useCategories";
import { useGetPackages } from "hooks/usePackages";

function AddProductModal({ closeModal }) {
  const productNameRef = useRef();
  const productPriceRef = useRef();
  const productCategoryRef = useRef();
  const productDescRef = useRef();
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedPackages, setSelectedPackages] = useState([]);

  console.log("ADD PRODUCT MODAL RENDERED....................");

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(acceptedFiles);
    console.log("files : ", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"],
    },
  });

  const clearSelectedImages = (e) => {
    e.preventDefault();
    setSelectedImages([]);
  };

  const enabled = false;

  const {
    data: categories,
    isLoading,
    refetch: refetchCategories,
  } = useGetCategories(enabled);
  const {
    data: packages,
    isLoading: loadingPackages,
    refetch: refetchPackages,
  } = useGetPackages(enabled);

  const { mutateAsync: createProductMutation } = useCreateProduct(closeModal);

  useEffect(() => {
    refetchCategories();
    refetchPackages();
  }, []);

  // console.log("fetched categories: ", categories);

  const handleCreateProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productNameRef.current.value);
    formData.append("price", productPriceRef.current.value);
    formData.append("categories", productCategoryRef.current.value);
    formData.append("description", productDescRef.current.value);
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append("images", selectedImages[i]);
    }
    // Extract package values and join them with comma
    const packageValues = selectedPackages
      .map((paymentPackage) => paymentPackage.value)
      .join(",");
    formData.append("packages", packageValues);

    console.log("name:", formData.get("name"));
    console.log("price:", formData.get("price"));
    console.log("categories:", formData.get("categories"));
    console.log("description:", formData.get("description"));
    console.log("images:", formData.getAll("images"));
    console.log("Packages:", formData.getAll("packages"));

    toast.promise(createProductMutation(formData), {
      loading: "Creating Product...",
      success: "Product created successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  const handlePackageChange = (selectedOptions) => {
    setSelectedPackages(selectedOptions);
  };

  return (
    <div className="lg:max-h-[60vh] overflow-y-scroll pr-2 mt-8 font-plusJakartaSans">
      {/* heading  */}
      <h2 className="text-center text-700">Add New Product</h2>

      {/* input group  */}
      <form
        onSubmit={handleCreateProduct}
        className="flex flex-col gap-3 mt-5 "
      >
        <input
          type="text"
          name="product-name"
          id="product-name"
          placeholder="Product Name"
          className="input-style"
          ref={productNameRef}
          required
        />
        <input
          type="text"
          name="product-price"
          id="product-price"
          placeholder="Product Price"
          className="input-style"
          ref={productPriceRef}
          required
        />

        <div
          className="min-h-[12rem] w-full p-4 border border-dashed cursor-pointer border-primary rounded-md "
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="flex-col w-full h-[10rem] gap-2 flex-center">
              <DropImageIcon />
              <p>Drop images here ..</p>
            </div>
          ) : (
            <div className="flex-col w-full h-[10rem] gap-2 flex-center">
              <ImagesIcon />
              <p>Drag 'n' drop images here, or browse</p>
            </div>
          )}
          {/* SELECTED IMAGES PREVIEW */}
          <ImagePreview
            selectedImages={selectedImages}
            clearSelectedImages={clearSelectedImages}
          />
        </div>

        <Select
          options={packages?.map((paymentPackage) => ({
            value: paymentPackage?._id,
            label: paymentPackage?.name,
          }))}
          isMulti
          isLoading={isLoading}
          onChange={handlePackageChange}
          value={selectedPackages}
          placeholder="Select Packages..."
        />

        <select
          ref={productCategoryRef}
          name="category"
          id="category"
          className="input-style"
          required
        >
          {isLoading ? (
            <option>Loading...</option>
          ) : (
            categories?.map((category, index) => (
              <option key={index} value={category?._id}>
                {category?.name}
              </option>
            ))
          )}
        </select>

        <textarea
          name="product-desc"
          id="product-desc"
          cols="30"
          rows="7"
          placeholder="Product Description"
          ref={productDescRef}
          className="input-style"
        ></textarea>

        <input
          type="submit"
          value="Add Product"
          className="rounded-md btn-primary btn-lg"
        />
      </form>
    </div>
  );
}

export default AddProductModal;
