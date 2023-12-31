import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ title, image, price, id }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/product/${id}`)} className="cursor-pointer group">
      {/* image */}
      <div className="h-[13rem] p-4 bg-bgGray rounded-xl flex-center">
        <img src={image} alt="." className="group-hover:scale-95 w-[80%] sm:w-[60%] transition-all duration-150 ease-in-out" />
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
