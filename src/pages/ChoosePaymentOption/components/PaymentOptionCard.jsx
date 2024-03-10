import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function PaymentOptionCard({ option, image, link }) {
  return (
    <Link to={link}>
      <div className=" flex items-center gap-8 p-4 bg-white border rounded-lg shadow-lg w-full  max-w-[23rem] sm:max-w-none sm:w-[28rem] hover:border-primary transition-100">
        {/* IMAGE DIV */}
        <div className="w-[10rem] overflow-hidden h-[8rem] rounded-lg bg-bgGray">
          <LazyLoadImage
            alt={image}
            effect="opacity"
            src={image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <p className="font-bold font-300">{option}</p>
      </div>
    </Link>
  );
}

export default PaymentOptionCard;
