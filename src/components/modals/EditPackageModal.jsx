import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { editPackage } from "services/packages.services";

function EditPackageModal({ paymentPackage, closeModal }) {
  const queryClient = useQueryClient();

  const [packageName, setPackageName] = useState(paymentPackage?.name);
  const [duration, setDuration] = useState(paymentPackage?.duration);
  const [paymentFrequency, setPaymentFrequency] = useState(
    paymentPackage?.paymentFrequency
  );
  const [description, setDescription] = useState(paymentPackage?.description);
  const [interest, setInterest] = useState(paymentPackage?.interest);

  const { mutateAsync: editPackageMutation } = useMutation(editPackage, {
    onSuccess: () => {
      queryClient.invalidateQueries("packages");
      closeModal();
    },
  });

  const handleEditPackage = (e) => {
    e.preventDefault();
    const EditData = {
      packageId: paymentPackage?._id,
      updatedPackage: {
        name: packageName,
        description: description,
        duration: duration,
        paymentFrequency: paymentFrequency,
        interest: interest,
      },
    };

    // console.log("Update Package: ", updatedPackage);
    toast.promise(editPackageMutation(EditData), {
      loading: `Updating Package...`,
      success: "Package updated successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });
  };

  return (
    <div>
      {/* heading  */}
      <h2 className="text-center text-700">Edit Package</h2>

      {/* input group  */}
      <form onSubmit={handleEditPackage} className="flex flex-col gap-3 mt-5 ">
        <input
          type="text"
          name="package-name"
          id="package-name"
          placeholder="Package Name"
          className="input-style"
          value={packageName}
          onChange={(e) => {
            setPackageName(e.target.value);
          }}
        />
        <input
          type="text"
          name="duration"
          id="duration"
          placeholder="Duration Eg. 3 months, 6 months"
          className="input-style"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <input
          type="text"
          name="interest"
          id="interest"
          placeholder="Interest Eg. 10, 15, 30"
          className="input-style"
          value={interest}
          onChange={(e) => {
            setInterest(e.target.value);
          }}
        />
        <input
          type="text"
          name="payment-frequency"
          id="payment-frequency"
          placeholder="Payment Frequency Eg. monthly , annually, weekly"
          className="input-style"
          value={paymentFrequency}
          onChange={(e) => {
            paymentFrequency(e.target.value);
          }}
        />

        <textarea
          name="package-desc"
          id="package-desc"
          cols="30"
          rows="7"
          placeholder="Package Description"
          className="input-style"
          value={description}
          onChange={(e) => {
            description(e.target.value);
          }}
        ></textarea>

        <input
          type="submit"
          value="Update Package"
          className="rounded-md btn-primary btn-lg"
        />
      </form>
    </div>
  );
}

export default EditPackageModal;
