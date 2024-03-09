import React from "react";
import { Link } from "react-router-dom";
import PlanInfo from "./PlanInfo";

function PaymentCard({ plan, price, desc, duration, frequency, interest }) {
  const getPriceWithInterest = () =>
    Math.ceil((price * (1 + interest / 100)) * 100) / 100 << 0;

  return (
    <div className="p-10 space-y-10 bg-white border rounded-lg shadow-lg hover:border-primary transition-100">
      {/* plan and description  */}

      <div className="text-center">
        <h4 className="font-bold text-600">{plan}</h4>
        <p className="mt-3 text-textGray">{desc}</p>
      </div>

      {/* price */}
      <h2 className="text-center text-700">${getPriceWithInterest()}</h2>

      {/* other info  */}
      <div className="space-y-2">
        <PlanInfo title={"Duration"} content={duration} />
        <PlanInfo title={"Payment Frequency"} content={frequency} />
        <PlanInfo title={"No interest"} />
      </div>

      {/* button */}
      <div>
        <Link
          to={"/choose-payment-option"}
          className="block text-center rounded-full btn-primary btn-lg"
        >
          Select Plan
        </Link>
      </div>
    </div>
  );
}

export default PaymentCard;
