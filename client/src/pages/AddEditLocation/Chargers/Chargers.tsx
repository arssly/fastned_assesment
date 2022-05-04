import { FC, useState, ReactNode } from "react";
import { Charger, LocalCharger, ChargerStatus } from "@models";
import {
  DataTable,
  Modal,
  Tag,
  TagStatus,
  Button,
  ButtonTheme,
  EditIcon,
  DeleteIcon,
} from "@components";

import { ChargerHeader } from "./ChargerHeader";
import { ChargerModal } from "./ChargerModal";

function transformChargers(
  chargers: Charger[],
  addEditCallback: (charger: Charger) => void,
  deleteCallback: (charger: Charger) => void
) {
  return chargers.map((c) => {
    let status = TagStatus.green;
    if (
      c.status === ChargerStatus.NOT_CONNECTED ||
      c.status === ChargerStatus.REMOVED
    ) {
      status = TagStatus.red;
    }

    const chargerButtons = (
      <span>
        <Button
          theme={ButtonTheme.OUTLINE}
          icon={<EditIcon width={36} height={36} />}
          onClick={() => {
            addEditCallback(c);
          }}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          icon={<DeleteIcon width={36} height={36} />}
          onClick={() => {
            deleteCallback(c);
          }}
        />
      </span>
    );

    return [
      c.id || null,
      c.type,
      c.serialNumber,
      <Tag status={status} key={c.id}>
        {c.status}
      </Tag>,
      chargerButtons,
    ] as ReactNode[];
  });
}

type Props = {
  chargers: Charger[];
  onAddEditCharger: (charger: LocalCharger) => void;
  onDeleteCharger: (charger: LocalCharger) => void;
};
export const Chargers: FC<Props> = ({
  chargers,
  onAddEditCharger,
  onDeleteCharger,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const transformedChargers = transformChargers(
    chargers,
    onAddEditCharger,
    onDeleteCharger
  );
  return (
    <>
      <ChargerHeader
        setModalOpen={() => {
          setModalOpen(true);
        }}
      />
      <DataTable
        headers={[
          "ID",
          "Type",
          "Serial Number",
          "status",
          "Last Updated",
          "Actions",
        ]}
        data={transformedChargers}
        emptyMessage="no Charger has been added to this location yet"
      />
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <ChargerModal onClose={closeModal} onSave={onAddEditCharger} />
      </Modal>
    </>
  );
};
