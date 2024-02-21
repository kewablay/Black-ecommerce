import MainLayout from "components/layout/MainLayout";
import React from "react";
import PaymentCard from "./components/PaymentCard";

function SelectPayment() {
  console.log("PAYMENT PLAN PAGE..............")
  const paymentPlans = [
    {
      plan: "3 Months Plan ",
      desc: "With this plan,  your payment is divided into 3 Equal Parts which is paid across a 3 months span.",
      price: "1400",
      duration: "3 months",
    },
    {
      plan: "6 Months Plan  ",
      desc: "With this plan we divide your payment into 6 Equal Parts which is paid across a 6 months span.",
      price: "1500",
      duration: "6 months",
    },
    {
      plan: "1 Year Plan  ",
      desc: "With this plan we divide your payment into 12 Equal Parts which is paid across a 12 months span.",
      price: "1600",
      duration: "12 months",
    },
  ];
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
          {paymentPlans.map((paymentPlan, index) => (
            <PaymentCard
              key={index}
              plan={paymentPlan.plan}
              desc={paymentPlan.desc}
              duration={paymentPlan.duration}
              price={paymentPlan.price}
            />
          ))}
        </div>
      </MainLayout>
    </div>
  );
}

export default SelectPayment;
