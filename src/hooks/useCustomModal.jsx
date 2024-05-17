import React, { useState } from "react";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";

const useCustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalStyle, setModalStyle] = useState("");
  const [modalOptions, setModalOptions] = useState({
    closeOnOverlayClick: true,
    showCloseIcon: true,
  });

  const openModal = (content, style = "", options = {}) => {
    setIsModalOpen(true);
    setModalContent(content);
    setModalStyle(style);
    setModalOptions({
      closeOnOverlayClick: options.closeOnOverlayClick ?? true,
      showCloseIcon: options.showCloseIcon ?? true,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setModalStyle("");
    setModalOptions({
      closeOnOverlayClick: true,
      showCloseIcon: true,
    });
  };

  const ModalComponent = () => {
    if (!isModalOpen || !modalContent) return null;

    const { closeOnOverlayClick, showCloseIcon } = modalOptions;

    return (
      <Modal
        open={isModalOpen}
        closeOnOverlayClick={closeOnOverlayClick}
        blockScroll={true}
        onClose={closeModal}
        center
        showCloseIcon={showCloseIcon}
        classNames={{
          modal: modalStyle ? modalStyle : "customModal",
        }}
        focusTrapped
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
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

useCustomModal.propTypes = {
  modalContent: PropTypes.node,
  modalStyle: PropTypes.string,
  modalOptions: PropTypes.shape({
    closeOnOverlayClick: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
  }),
};

export default useCustomModal;
