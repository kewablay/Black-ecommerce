import MainLayout from "components/layout/MainLayout";
import React from "react";
import PaymentCard from "./components/PaymentCard";
import { useGetCustomerProductById } from "hooks/useProducts";
import { useParams } from "react-router-dom";
import { useCardPaymentStore } from "state/cardPaymentStore";

function SelectPayment() {
  console.log("PAYMENT PLAN PAGE..............");
  const { id } = useParams();

  // SET SELECTED PRODUCT ID IN STATE
  const setProductId = useCardPaymentStore((state) => state.setProductId);
  setProductId(id);

  const { data: product, isLoading } = useGetCustomerProductById(id);

  const packages = product?.packages;

  return (
    <div>
      <MainLayout>
        <div className="mt-10 space-y-4 text-center section-contained">
          <h2 className="text-800">Select Payment Plan </h2>
          <p className="text-textGray text-400">
            Explore our range of 0% financing options tailored to fit your
            budget
          </p>
        </div>

        {/* Payment plan list  */}
        <div className="grid gap-8 section-contained md:grid-cols-2 lg:grid-cols-3">
          {packages?.map((paymentPlan, index) => (
            <PaymentCard
              key={index}
              plan={paymentPlan.name}
              desc={paymentPlan.description}
              duration={paymentPlan.duration}
              price={product?.price}
              frequency={paymentPlan.paymentFrequency}
              interest={paymentPlan.interest}
              id={paymentPlan._id}
            />
          ))}
        </div>
      </MainLayout>
    </div>
  );
}

export default SelectPayment;
