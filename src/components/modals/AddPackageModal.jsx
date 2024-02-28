import React from "react";

function AddPackageModal() {
  return (
    <div>
      {/* heading  */}
      <h2 className="text-center text-700">Add New Package</h2>

      {/* input group  */}
      <form
        // onSubmit={handleCreatePackage}
        className="flex flex-col gap-3 mt-5 "
      >
        <input
          type="text"
          name="package-name"
          id="package-name"
          placeholder="Package Name"
          className="input-style"
          ref={packageNameRef}
        />
        <input
          type="text"
          name="duration"
          id="duration"
          placeholder="Duration Eg. 3 months, 6 months"
          className="input-style"
          ref={DurationRef}
        />
        <input
          type="text"
          name="payment-frequency"
          id="payment-frequency"
          placeholder="Payment Frequency Eg. monthly , annually, weekly"
          className="input-style"
          ref={paymentFrequencyRef}
        />

        <textarea
          name="package-desc"
          id="package-desc"
          cols="30"
          rows="7"
          placeholder="Package Description"
          ref={packageDescRef}
          className="input-style"
        ></textarea>

        <input
          type="submit"
          value="Add Package"
          className="rounded-md btn-primary btn-lg"
        />
      </form>
    </div>
  );
}

export default AddPackageModal;
