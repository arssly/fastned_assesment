import { FC, useRef } from "react";
import * as yup from "yup";

import {
  Heading,
  HeadingTypes,
  Button,
  CrossIcon,
  ButtonTheme,
  Form,
  SelectBox,
  TextInput,
} from "@components";
import { Charger, LocalCharger, ChargerStatus, ChargerTypes } from "@models";

const selectStatusOptions = (
  Object.keys(ChargerStatus) as Array<keyof typeof ChargerStatus>
).map((key) => ({ value: key, label: key }));

const selectChargerTypeOptions = (
  Object.keys(ChargerTypes) as Array<keyof typeof ChargerTypes>
).map((key) => ({ value: key, label: key }));

type Props = {
  charger?: Charger;
  onClose: () => void;
  onSave: (charger: LocalCharger) => void;
};

type ChargerFormValue = {
  Status: string;
  "Serial Number": number;
  "Charger Type": string;
};

export const ChargerModal: FC<Props> = ({ onSave, onClose, charger }) => {
  const subButtonRef = useRef<HTMLInputElement>(null);
  const schema = yup.object().shape({
    Status: yup.string().required(),
    "Serial Number": yup.number().required(),
    "Charger Type": yup.string().required(),
  });
  const defaultValues = {
    Status: charger?.status,
    "Charger Type": charger?.type,
    "Serial Number": charger?.serialNumber,
  };
  return (
    <div className="add-charger">
      <div className="header">
        <Heading type={HeadingTypes.h3}>Add Charger</Heading>
        <CrossIcon width={36} height={36} onClick={onClose} />
      </div>
      <div className="divider" />
      <Form<ChargerFormValue>
        onSubmit={(d) => {
          console.log("this is onSubmit");
          const formData = {
            type: d["Charger Type"],
            status: d.Status,
            serialNumber: d["Serial Number"],
          };
          const c = charger ? { ...charger, ...formData } : formData;
          onSave(c as LocalCharger);
        }}
        formName="addEditCharger"
        defaultValues={defaultValues}
        schema={schema}
      >
        <div className="form-inputs">
          <SelectBox name="Status" options={selectStatusOptions} />
          <SelectBox name="Charger Type" options={selectChargerTypeOptions} />
          <TextInput name="Serial Number" />
        </div>
        <div className="divider" />
        <div className="submit">
          <Button
            theme={ButtonTheme.PRIMARY}
            title="Save"
            type="submit"
            form="addEditCharger"
            onClick={() => {
              subButtonRef?.current?.click();
            }}
          />
          <input
            ref={subButtonRef}
            type="submit"
            id="submit-it"
            style={{ display: "none" }}
          />
          <Button
            theme={ButtonTheme.DARK_PRIMARY}
            title="Cancel"
            onClick={onClose}
            type="button"
          />
        </div>
      </Form>
    </div>
  );
};
