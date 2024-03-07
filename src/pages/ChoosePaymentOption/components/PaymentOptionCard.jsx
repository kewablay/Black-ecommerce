import React from "react";
import { Link } from "react-router-dom";

function PaymentOptionCard({ option, image, link }) {
  return (
    <Link to={link}>
      <div className=" flex items-center gap-8 p-4 bg-white border rounded-lg shadow-lg w-full  max-w-[23rem] sm:max-w-none sm:w-[28rem] hover:border-primary transition-100">
        {/* IMAGE DIV */}
        <div className="w-[10rem] overflow-hidden h-[8rem] rounded-lg bg-bgGray">
          <img src={image} alt={image} className="object-cover w-full h-full" />
        </div>
        <p className="font-bold font-300">{option}</p>
      </div>
    </Link>
  );
}

export default PaymentOptionCard;
