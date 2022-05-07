import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Modal, CrossIcon, Loading } from "@components";
import { useGetLocation } from "@src/services";
import { AddEditLocation } from "./AddEditLocation";

export const EditLocation: FC<{ modalView?: boolean }> = ({
  modalView = false,
}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: location, isFetching } = useGetLocation(id as string);

  if (isFetching) {
    return (
      <div className="full-page-loading">
        <Loading />
      </div>
    );
  } else if (!modalView) {
    return (
      <AddEditLocation editing modalView={modalView} location={location} />
    );
  } else {
    return (
      <Modal
        isOpen
        onClose={() => {
          navigate(-1);
        }}
        containerClassName="max-width"
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
        <AddEditLocation editing modalView={modalView} location={location} />
      </Modal>
    );
  }
};
