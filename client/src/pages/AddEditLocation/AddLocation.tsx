import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, CrossIcon } from "@components";
import { AddEditLocation } from "./AddEditLocation";

export const AddLocation: FC<{ modalView?: boolean }> = ({
  modalView = false,
}) => {
  const navigate = useNavigate();

  if (!modalView) {
    return <AddEditLocation editing modalView={modalView} />;
  } else {
    return (
      <Modal
        isOpen
        onClose={() => {
          navigate(-1);
        }}
      >
        <div className="close-modal">
          <CrossIcon
            width={36}
            height={36}
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <AddEditLocation editing modalView={modalView} />
      </Modal>
    );
  }
};
