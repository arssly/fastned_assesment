import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Modal, CrossIcon } from "@components";
import { useGetLocation } from "@src/services";
import { AddEditLocation } from "./AddEditLocation";

export const EditLocation: FC<{ modalView?: boolean }> = ({
  modalView = false,
}) => {
  const { id } = useParams();
  const { data: location, isFetching } = useGetLocation(id as string);

  if (isFetching) return <div>loading...</div>;
  return <AddEditLocation editing modalView={modalView} location={location} />;
};

export const EditLocationModal: FC = () => {
  const navigate = useNavigate();
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
      <EditLocation modalView />
    </Modal>
  );
};
