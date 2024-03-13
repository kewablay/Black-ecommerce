import React, { useEffect } from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import useCustomModal from "hooks/useCustomModal";
import CryptoOrderStatus from "components/modals/CryptoOrderStatus";
import { useMakeOrder } from "hooks/useOrders";
import { useCardPaymentStore } from "state/cardPaymentStore";
import toast from "react-hot-toast";

function WalletAddressCard({ address }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);
  const { openModal, closeModal, ModalComponent } = useCustomModal();

  const productIdFromState = useCardPaymentStore((state) => state.productId);
  const packageId = useCardPaymentStore((state) => state.packageId);

  const {
    mutateAsync: makeOrderMutation,
    isSuccess: orderSuccess,
    data: order,
    reset,
  } = useMakeOrder(closeModal);

  useEffect(() => {
    if (orderSuccess) {
      openModal(<CryptoOrderStatus orderId={order?._id} />, "customModalSmall");
      reset();
    }
  }, [orderSuccess, openModal, reset]);

  const handleCopyClicked = () => {
    copyToClipboard(address);

    const OrderData = {
      productId: productIdFromState,
      packageId: packageId,
      isCrypto: true,
    };
    toast.promise(makeOrderMutation(OrderData), {
      loading: "Placing Order...",
      success: "Order submited successfully",
      error: (error) => `Error: ${error.response.data.error}`,
    });

    console.log("Order data : ", OrderData);
  };

  return (
    <div className="border w-full p-5 mt-10 rounded-lg top-[100%] bg-bgGray">
      {ModalComponent()}
      <h4 className="font-bold ">Wallet Address</h4>
      <div className="flex flex-col w-full gap-4 mt-3 md:flex-row ">
        <div className="w-full p-3 bg-white rounded-lg text-200 line-clamp-1">
          {address}
        </div>
        <button
          disabled={hasCopiedText}
          onClick={handleCopyClicked}
          className="w-full p-3 px-4 text-white rounded-md md:w-auto text-200 bg-primary disabled:cursor-not-allowed disabled:bg-gray-500"
        >
          {hasCopiedText ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default WalletAddressCard;
