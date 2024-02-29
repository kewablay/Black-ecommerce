import { DropImageIcon, EditIcon, ImagesIcon } from "assets/icons/svgIcons";
import ImagePreview from "components/shared/ImagePreview";
import { useGetCategories } from "hooks/useCategories";
import { useGetPackages } from "hooks/usePackages";
import { useEditProduct } from "hooks/useProducts";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import Select from "react-select";
import { getApiImage } from "utils/getApiImage";

function EditProductModal({ product, closeModal }) {
  const [productName, setProductName] = useState(product?.name);
  const [productPrice, setProductPrice] = useState(product?.price);
  const [productCategory, setProductCategory] = useState(product?.categories);
  const [productDesc, setProductDesc] = useState(product?.description);

  const [selectedImages, setSelectedImages] = useState();
  const [selectedPackages, setSelectedPackages] = useState([]);

  const [showImageSelector, setShowImageSelector] = useState(false);

  console.log("Product packages : ", product?.packages);

  const clearSelectedImages = (e) => {
    e.preventDefault();
    setSelectedImages([]);
  };

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

  useEffect(() => {
    refetchCategories();
    refetchPackages();
  }, []);

  const handlePackageChange = (selectedOptions) => {
    setSelectedPackages(selectedOptions);
  };

  const { mutateAsync: editProductMutation } = useEditProduct(closeModal);

  const handleEditProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("categories", productCategory);
    formData.append("description", productDesc);
    if (selectedImages) {
      for (let i = 0; i < selectedImages.length; i++) {
        formData.append("images", selectedImages[i]);
      }
    }
    // Extract package values and join them with comma
    if (selectedPackages.length) {
      const packageValues = selectedPackages
        .map((paymentPackage) => paymentPackage.value)
        .join(",");
      formData.append("packages", packageValues);
    } else {
      formData.append("packages", product?.packages);
    }

    console.log("name:", formData.get("name"));
    console.log("price:", formData.get("price"));
    console.log("categories:", formData.get("categories"));
    console.log("description:", formData.get("description"));
    console.log("images:", formData.getAll("images"));
    console.log("Packages:", formData.getAll("packages"));

    const EditData = {
      productId: product?._id,
      updatedProduct: formData,
    };

    toast.promise(editProductMutation(EditData), {
      loading: `Updating Product...`,
      success: "Product updated successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <div className="lg:max-h-[60vh] overflow-y-scroll pr-2 mt-8 font-plusJakartaSans">
      {/* heading  */}
      <h2 className="text-center text-700">Edit Product</h2>

      {/* input group  */}
      <form onSubmit={handleEditProduct} className="flex flex-col gap-3 mt-5 ">
        <input
          type="text"
          name="product-name"
          id="product-name"
          placeholder="Product Name"
          className="input-style"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="product-price"
          id="product-price"
          placeholder="Product Price"
          className="input-style"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
          required
        />

        {/* PRODUCT IMAGE IF ANY  */}
        {product?.images.length ? (
          <div className="relative grid grid-cols-3 gap-1 p-3 border rounded-md">
            {product?.images?.map((image, index) => (
              <div key={index} className="h-40 bg-bgGray">
                <img src={getApiImage(image)} alt={image} />
              </div>
            ))}

            <button
              onClick={(e) => {
                e.preventDefault();
                setShowImageSelector(!showImageSelector);
              }}
              className="absolute w-10 h-10 rounded-full top-1 right-1 bg-primaryLight flex-center"
            >
              <EditIcon />
            </button>
          </div>
        ) : (
          <div className="p-3 text-center border rounded-md">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowImageSelector(!showImageSelector);
              }}
              className="w-full h-full text-primary"
            >
              Add Product Image
            </button>
          </div>
        )}

        {showImageSelector ? (
          <>
            <small className="text-textGray">
              NB: newly selected images will replace existing ones
            </small>

            <div
              className=" min-h-[12rem] w-full p-4 border border-dashed cursor-pointer border-primary rounded-md "
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
          </>
        ) : (
          ""
        )}

        <Select
          options={packages?.map((paymentPackage) => ({
            value: paymentPackage?._id,
            label: paymentPackage?.name,
          }))}
          isMulti
          isLoading={isLoading}
          onChange={handlePackageChange}
          value={selectedPackages}
          placeholder="Re-select Packages or leave blank to maintain it..."
        />

        <select
          value={productCategory}
          onChange={(e) => {
            setProductCategory(e.target.value);
          }}
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
          className="input-style"
          value={productDesc}
          onChange={(e) => {
            setProductDesc(e.target.value);
          }}
        ></textarea>

        <input
          type="submit"
          value="Update Product"
          className="rounded-md btn-primary btn-lg"
        />
      </form>
    </div>
  );
}

export default EditProductModal;
