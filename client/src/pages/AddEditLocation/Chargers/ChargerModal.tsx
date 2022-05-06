import { FC, useState } from "react";
import { SubmitHandler } from "react-hook-form";
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
  SubmitButton,
} from "@components";
import { LocalCharger, ChargerStatus, ChargerTypes } from "@models";

const selectStatusOptions = (
  Object.keys(ChargerStatus) as Array<keyof typeof ChargerStatus>
).map((key) => ({ value: key, label: key }));

const selectChargerTypeOptions = (
  Object.keys(ChargerTypes) as Array<keyof typeof ChargerTypes>
).map((key) => ({ value: key, label: key }));

type Props = {
  charger?: LocalCharger | null;
  onClose: () => void;
  onSave: (charger: LocalCharger) => void;
};

type ChargerFormValue = {
  Status: string;
  "Serial Number": number;
  "Charger Type": string;
};

export const ChargerModal: FC<Props> = ({ onSave, onClose, charger }) => {
  const [disabled, setDisabled] = useState<boolean>(false);
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

  const submit: SubmitHandler<ChargerFormValue> = (d) => {
    console.log("charger submit handler", d);
    const formData = {
      type: d["Charger Type"],
      status: d.Status,
      serialNumber: d["Serial Number"],
    };
    const c = charger ? { ...charger, ...formData } : formData;
    setDisabled(true);
    onSave(c as LocalCharger);
    onClose();
  };
  return (
    <div className="add-charger">
      <div className="header">
        <Heading type={HeadingTypes.h3}>Add Charger</Heading>
        <CrossIcon width={36} height={36} onClick={onClose} />
      </div>
      <div className="divider" />
      <Form<ChargerFormValue>
        onSubmit={submit}
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
          <SubmitButton
            theme={ButtonTheme.PRIMARY}
            title="Save"
            type="submit"
            form="addEditCharger"
            submit={submit}
            disabled={disabled}
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
