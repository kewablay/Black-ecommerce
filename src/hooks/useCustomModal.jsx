import React, { useCallback, useState } from "react";

import Modal from "react-responsive-modal";

const useCustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalStyle, setModalStyle] = useState("");

  const openModal = (content, style = "") => {
    setIsModalOpen(true);
    setModalContent(content);
    setModalStyle(style);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setModalStyle("");
  };

  const ModalComponent = () => {
    if (!isModalOpen || !modalContent) return null;

    return (
      <Modal
        open={isModalOpen}
        onOverlayClick={closeModal}
        blockScroll={true}
        onClose={closeModal}
        center
        showCloseIcon={false}
        classNames={{
          modal: ` ${modalStyle ? modalStyle : "customModal"}`,
        }}
      >
        {modalContent}
      </Modal>
    );
  };

  return {
    openModal,
    closeModal,
    ModalComponent,
  };
};

export default useCustomModal;
