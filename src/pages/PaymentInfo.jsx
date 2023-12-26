import React, { useRef } from "react";
import MainLayout from "../components/layout/MainLayout";
import { InfoIcon, MasterCardIcon, VisaIcon } from "../assets/icons/svgIcons";
import useCustomModal from "../hooks/useCustomModal";

import ConfirmPaymentDetailModal from "../features/PaymentInfo/ConfirmPaymentDetailModal";

function PaymentInfo() {
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  // CARD INFO INPUT REFS
  const cardNameRef = useRef();
  const cardNumberRef = useRef();
  const cvvRef = useRef();
  const dateRef = useRef();
  const cardTypeRef = useRef();

  // BILLING IFNO INPUT REFS
  const nameRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const telephoneRef = useRef();
  const address1Ref = useRef();
  const address2Ref = useRef();
  const countryRef = useRef();
  const zipCodeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardInfo = {
      name: cardNameRef.current.value,
      cardNumber: cardNumberRef.current.value,
      cvv: cvvRef.current.value,
      date: dateRef.current.value,
    };
    const billingInfo = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
      telephone: telephoneRef.current.value,
      address1: address1Ref.current.value,
      address2: address2Ref.current.value,
      country: countryRef.current.value,
      zipCode: zipCodeRef.current.value,
    };

    openModal(
      <ConfirmPaymentDetailModal
        cardInfo={cardInfo}
        billingInfo={billingInfo}
        closeModal={closeModal}
      />
    );
  };

  return (
    <div>
      {ModalComponent()}
      <MainLayout>
        <div className="mt-10 section-contained">
          <h2 className="mb-10 text-center text-700">
            Enter Payment Information
          </h2>

          {/* Billing Info */}
          <form
            action="#"
            className="my-5 lg:max-w-[70%] xl:max-w-[60%] mx-auto "
            onSubmit={handleSubmit}
          >
            {/* title  */}
            <p className="flex items-center gap-2 mb-6 font-semibold">
              <span>
                <InfoIcon />
              </span>
              Billing Info
            </p>

            {/*  input group */}
            <div className="flex flex-col gap-3 mb-20">
              <input
                type="text"
                name="address-name"
                id="address-name"
                placeholder="Full Name"
                className="input-style"
                ref={nameRef}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="input-style"
                ref={emailRef}
              />
              <div className="grid grid-cols-2 gap-3 ">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="input-style"
                  ref={cityRef}
                />
                <input
                  type="tel"
                  name="tel-num"
                  id="tel-num"
                  placeholder="Telephone"
                  className="input-style"
                  ref={telephoneRef}
                />
              </div>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address 1"
                className="input-style"
                ref={address1Ref}
              />
              <input
                type="text"
                name="address-2"
                id="address-2"
                placeholder="Address 2"
                className="input-style"
                ref={address2Ref}
              />
              <div className="grid grid-cols-2 gap-3 ">
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  className="input-style"
                  ref={countryRef}
                />
                <input
                  type="text"
                  name="zip-code"
                  id="zip-code"
                  placeholder="Zip Code"
                  className="input-style"
                  ref={zipCodeRef}
                />
              </div>
            </div>

            {/* -------------------- */}
            {/* Card Info */}
            {/* title  */}
            <p className="flex items-center gap-2 mb-6 font-semibold ">
              <span>
                <InfoIcon />
              </span>
              Card Info
            </p>

            {/* input group */}
            <div className="flex flex-col gap-3">
              {/* card type selection */}
              <div className="flex gap-4">
                <label for="master-card" className="flex flex-col-reverse">
                  <input
                    type="radio"
                    id="master-card"
                    name="fav_language"
                    value="Master card"
                    className="mr-2 opacity-0 peer"
                  />
                  <div className="p-5 px-10 border rounded-lg peer-checked:border-primary flex-center">
                    <MasterCardIcon />
                  </div>
                </label>
                <label for="visa" className="flex flex-col-reverse">
                  <input
                    type="radio"
                    id="visa"
                    name="fav_language"
                    value="Visa"
                    className="mr-2 opacity-0 peer"
                  />
                  <div className="p-5 px-6 border rounded-lg flex-center peer-checked:border-primary">
                    <VisaIcon />
                  </div>
                </label>
              </div>
              {/* card type selection ends */}

              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name on card"
                className="input-style"
                ref={cardNameRef}
              />
              <input
                type="text"
                name="card-number"
                id="card-number"
                placeholder="Card number"
                className="input-style"
                ref={cardNumberRef}
              />
              <div className="grid grid-cols-2 gap-3 ">
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="CVV"
                  className="input-style"
                  ref={cvvRef}
                />
                <input
                  type="date"
                  name="exp-date"
                  id="exp-date"
                  className="input-style"
                  ref={dateRef}
                />
              </div>
              <div className="mt-5 ">
                {/* <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full p-5 rounded-md btn-primary"
                >
                  Continue
                </button> */}
                <input
                  type="submit"
                  value="Continue"
                  className="w-full p-5 rounded-md btn-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </MainLayout>
    </div>
  );
}

export default PaymentInfo;
