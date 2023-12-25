import React from "react";
import PlanInfo from "./PlanInfo";
import { Link } from "react-router-dom";

function PaymentCard({ plan, price, desc, duration }) {
  return (
    <div className="p-10 space-y-10 bg-white border rounded-lg shadow-lg hover:border-primary transition-100">
      {/* plan and description  */}

      <div className="text-center">
        <h4 className="font-bold text-600">{plan}</h4>
        <p className="mt-3 text-textGray">{desc}</p>
      </div>

      {/* price */}
      <h2 className="text-center text-700">${price}</h2>

      {/* other info  */}
      <div className="space-y-2">
        <PlanInfo title={"Duration"} content={duration} />
        <PlanInfo title={"Payment Frequency"} content={"Monthly"} />
        <PlanInfo title={"No interest"} />
      </div>

      {/* button */}
      <div>
        <Link
          to={"/payment-info"}
          className="block text-center rounded-full btn-primary btn-lg"
        >
          Select Plan
        </Link>
      </div>
    </div>
  );
}

export default PaymentCard;
