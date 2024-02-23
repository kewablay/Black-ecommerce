import {
  ClearIcon,
  CloseIcon,
  DropImageIcon,
  ImagesIcon,
} from "assets/icons/svgIcons";
import ImagePreview from "components/shared/ImagePreview";
import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

function AddProductModal() {
  const productNameRef = useRef();
  const productPriceRef = useRef();
  // const productImageRef = useRef();
  const productCategoryRef = useRef();
  const productDescRef = useRef();
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
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

  return (
    <div className="lg:max-h-[60vh] overflow-y-scroll pr-2 mt-8 font-plusJakartaSans">
      {/* heading  */}
      <h2 className="text-center text-700">Add New Product</h2>

      {/* input group  */}
      <form className="flex flex-col gap-3 mt-5 ">
        <input
          type="text"
          name="product-name"
          id="product-name"
          placeholder="Product Name"
          className="input-style"
          ref={productNameRef}
        />
        <input
          type="text"
          name="product-price"
          id="product-price"
          placeholder="Product Price"
          className="input-style"
          ref={productPriceRef}
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

        <select
          ref={productCategoryRef}
          name="category"
          id="category"
          className="input-style"
        >
          <option value="Iphone Collection">Iphone Collection</option>
          <option value="Samsung Collection">Samsung Collection</option>
          <option value="Airpods and More">Airopds and More</option>
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
          type="button"
          value="Add Product"
          className="rounded-md btn-primary btn-lg"
        />
      </form>
    </div>
  );
}

export default AddProductModal;
