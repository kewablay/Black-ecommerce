import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PlanInfo from "./PlanInfo";
import { useCardPaymentStore } from "state/cardPaymentStore";
import {  getPriceWithInterest } from "utils/getApiImage";

function PaymentCard({ id, plan, price, desc, duration, frequency, interest }) {
  
  const priceWithInterest = getPriceWithInterest(price, interest, duration)
  return (
    <div className="p-10 space-y-10 bg-white border rounded-lg shadow-lg hover:border-primary transition-100">
      {/* plan and description  */}

      <div className="text-center">
        <h4 className="font-bold text-600">{plan}</h4>
        <p className="mt-3 text-textGray">{desc}</p>
      </div>

      {/* price */}
      <h2 className="text-center text-700">${priceWithInterest.totalPriceWithInterest}</h2>

      {/* other info  */}
      <div className="space-y-2">
        <PlanInfo title={"Duration"} content={duration} />
        <PlanInfo title={"Payment Frequency"} content={ `$${priceWithInterest.pricePerMonth + " " + frequency}`} />
        <PlanInfo title={"No interest"} />
      </div>

      {/* button */}
      <div>
        <Link
          to={`/choose-payment-option/${id}`}
          className="block text-center rounded-full btn-primary btn-lg"
        >
          Select Plan
        </Link>
      </div>
    </div>
  );
}

export default PaymentCard;
