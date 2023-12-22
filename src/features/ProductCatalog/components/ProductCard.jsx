import React from "react";

function ProductCard({ title, image, price }) {
  return (
    <div>
      {/* image */}
      <div className="h-[13rem] p-4 bg-bgGray rounded-xl flex-center">
        <img src={image} alt="." className="w-[80%] sm:w-[60%]" />
      </div>

      {/* product detail */}
      <div className="mt-3 space-y-1">
        <h4 className="text-300">{title}</h4>
        <p className="text-400 text-primary">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
