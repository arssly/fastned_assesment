import { FC } from "react";
import { TextInput, SelectBox } from "@components";

import { Location } from "@models";

import "./addEdit.scss";
import { AddEditHeading } from "./AddEditHeader";

type Props = {
  isEdit?: boolean;
  location?: Location;
};

export const AddEditFields: FC<Props> = ({ isEdit = false, location }) => {
  if (isEdit && !location) {
    throw new Error("component is set to editing but no location is passed");
  }
  return (
    <>
      <AddEditHeading isEdit={isEdit} location={location} />
      <span className="row">
        <TextInput name="name" />
        <TextInput name="Location No" />
      </span>

      <span className="row">
        <TextInput name="city" />
        <TextInput name="Postal Code" />
        <SelectBox
          options={[
            { label: "IRAN", value: "IRN" },
            { label: "NETHERLANDS", value: "NLD" },
            { label: "US", value: "US" },
          ]}
          name="country"
        />
      </span>
    </>
  );
};
