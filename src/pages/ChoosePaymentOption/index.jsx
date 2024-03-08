import MainLayout from "components/layout/MainLayout";
import React from "react";
import PaymentOptionCard from "./components/PaymentOptionCard";
import creditCardImg from "assets/images/credit-card-image.jpeg";
import cryptoImg from "assets/images/crypto-image.jpeg";
import * as path from "router/Constants";

function ChoosePaymentOption() {
  return (
    <MainLayout>
      <div className="section-contained">
        <div className="mt-10 space-y-4 text-center ">
          <h2 className="text-800">Select Payment Option </h2>
          <p className="text-textGray text-400">
            Explore our range of 0% financing options tailored to fit your
            budget
          </p>
        </div>

        {/* Options List  */}
        <div className="flex flex-col items-center justify-center gap-8 mt-16 ">
          <PaymentOptionCard
            option={"Pay via Card"}
            image={creditCardImg}
            link={path.PAYMENT_INFO}
          />
          <PaymentOptionCard
            option={"Pay via Crypto"}
            image={cryptoImg}
            link={path.PAY_BY_CRYPTO}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default ChoosePaymentOption;
