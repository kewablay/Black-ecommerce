import React, { useRef } from "react";

function EditProductModal() {
  const productNameRef = useRef();
  const productPriceRef = useRef();
  const productImageeRef = useRef();
  const productCategoryRef = useRef();
  const productDescRef = useRef();
  return (
    <div>
      {/* heading  */}
      <h2 className="text-center text-700">Edit Product</h2>

      {/* input group  */}
      <form className="flex flex-col gap-3 mt-5">
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
        <input
          type="file"
          accept="image/*"
          name="product-price"
          id="product-price"
          placeholder="Product Price"
          className="input-style"
          ref={productImageeRef}
        />

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
          type="submit"
          value="Update Product"
          className="rounded-md btn-primary btn-lg"
        />
      </form>
    </div>
  );
}

export default EditProductModal;
