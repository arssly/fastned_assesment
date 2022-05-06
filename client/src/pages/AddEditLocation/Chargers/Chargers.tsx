import { FC, useState, ReactNode } from "react";
import { LocalCharger, ChargerStatus } from "@models";
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
  chargers: LocalCharger[],
  openEditModal: (charger: LocalCharger) => void,
  deleteCallback: (charger: LocalCharger) => void
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
      <span className="charger-buttons">
        <Button
          theme={ButtonTheme.OUTLINE}
          type="button"
          icon={<EditIcon width={24} height={24} />}
          onClick={() => {
            openEditModal(c);
          }}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          type="button"
          icon={<DeleteIcon width={24} height={24} />}
          onClick={() => {
            deleteCallback(c);
          }}
        />
      </span>
    );

    return [
      c.id || "---",
      c.type,
      c.serialNumber,
      <Tag status={status} key={c.id}>
        {c.status}
      </Tag>,
      c.lastUpdated || "Not yet added",
      chargerButtons,
    ] as ReactNode[];
  });
}

type Props = {
  chargers: LocalCharger[];
  onAddEditCharger: (charger: LocalCharger) => void;
  onDeleteCharger: (charger: LocalCharger) => void;
};
export const Chargers: FC<Props> = ({
  chargers,
  onAddEditCharger,
  onDeleteCharger,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editingCharger, setEditingCharger] = useState<LocalCharger | null>(
    null
  );

  const closeModal = () => {
    setModalOpen(false);
  };

  const openEditModal = (c: LocalCharger) => {
    setEditingCharger(c);
    setModalOpen(true);
  };

  const onChargerSave = (c: LocalCharger) => {
    onAddEditCharger(c);
    setEditingCharger(null);
  };

  const transformedChargers = transformChargers(
    chargers,
    openEditModal,
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
        <ChargerModal
          onClose={closeModal}
          onSave={onChargerSave}
          charger={editingCharger}
        />
      </Modal>
    </>
  );
};
