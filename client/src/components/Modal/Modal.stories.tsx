import React, { useState } from "react";

import { Modal } from "./Modal";
import { Button } from "../Button";

export default {
  component: Modal,
  title: "Modal",
};

export const Default = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenSecondModal = () => {
    setSecondModalOpen(true);
  };

  const handleCloseModalSecondModal = () => {
    setSecondModalOpen(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button onClick={handleOpenModal} title="Show Modal" />
      <div style={{ marginTop: "20px" }} />
      <Button onClick={handleOpenSecondModal} title="Show second modal" />
      <Modal onClose={handleCloseModal} isOpen={modalOpen}>
        <div
          style={{
            width: 400,
            height: 200,
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          This is a first Modal
        </div>
      </Modal>
      <Modal onClose={handleCloseModalSecondModal} isOpen={secondModalOpen}>
        this is the second modal
      </Modal>
    </div>
  );
};
