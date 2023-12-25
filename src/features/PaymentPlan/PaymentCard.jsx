import React from "react";
import { TickIcon } from "../../assets/icons/svgIcons";

function PaymentCard({ plan, price, desc, duration }) {
  return (
    <div className="p-5 space-y-5 bg-white rounded-lg shadow-md">
      {/* plan and description  */}
      <div>
        <h4 className="font-bold text-600">{plan}</h4>
        <p className="mt-3 text-textGray">{desc}</p>
      </div>

      {/* price */}
      <h2 className="text-700">${price}</h2>

      {/* other info  */}
      <div>
        <div className="flex gap-2">
          <div>
            <TickIcon />
          </div>

          <p>Duration</p>
          <span className="text-textGray">{duration}</span>
        </div>
      </div>

      {/* button */}
      <div>
        <button className="rounded-full btn-primary btn-lg">Select Plan</button>
      </div>
    </div>
  );
}

export default PaymentCard;
