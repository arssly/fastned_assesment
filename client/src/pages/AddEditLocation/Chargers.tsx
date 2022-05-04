import { FC, useState } from "react";
import { Charger, ChargerStatus, ChargerTypes } from "@models";
import {
  ChargeIcon,
  Heading,
  HeadingTypes,
  Button,
  ButtonTheme,
  AddIcon,
  DataTable,
  Modal,
  CrossIcon,
  SelectBox,
  Form,
  TextInput,
} from "@components";

const selectStatusOptions = (
  Object.keys(ChargerStatus) as Array<keyof typeof ChargerStatus>
).map((key) => ({ value: key, label: key }));

const selectChargerTypeOptions = (
  Object.keys(ChargerTypes) as Array<keyof typeof ChargerTypes>
).map((key) => ({ value: key, label: key }));

export const Chargers: FC<{ chargers: Charger[] }> = ({ chargers }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="charger-heading">
        <span>
          <ChargeIcon width={24} height={24} />
          <Heading type={HeadingTypes.h3} className="no-margin">
            Chargers
          </Heading>
        </span>
        <Button
          theme={ButtonTheme.PRIMARY}
          title="Add Charger"
          icon={<AddIcon width={16} height={16} />}
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </div>
      <DataTable
        headers={[
          "ID",
          "Type",
          "Serial Number",
          "status",
          "Last Updated",
          "Actions",
        ]}
        data={[]}
        emptyMessage="no Charger has been added to this location yet"
      />
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="add-charger">
          <div className="header">
            <Heading type={HeadingTypes.h3}>Add Charger</Heading>
            <CrossIcon width={36} height={36} onClick={closeModal} />
          </div>
          <div className="divider" />
          <Form
            onSubmit={(data) => {
              console.log("submit the fin form", data);
            }}
            formName="addEditCharger"
          >
            <SelectBox name="Status" options={selectStatusOptions} />
            <SelectBox name="Charger Type" options={selectChargerTypeOptions} />
            <TextInput name="Serial Number" />
          </Form>
          <div className="divider" />
          <div className="submit">
            <Button theme={ButtonTheme.PRIMARY} title="Save" />
            <Button
              theme={ButtonTheme.DARK_PRIMARY}
              title="Cancel"
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
