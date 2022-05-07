import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import * as yup from "yup";

import { Card, Form, Button, ButtonTheme, SaveIcon } from "@components";
import { generateID } from "@src/utils";
import { Location, LocalCharger } from "@models";
import {
  useAddLocation,
  useEditLocation,
  useDeleteCharger,
  useAddCharger,
  useEditCharger,
} from "@src/services";
import { AddEditFields } from "./AddEditFields";
import { Chargers } from "./Chargers/Chargers";
import "./addEdit.scss";
import { SubmitHandler } from "react-hook-form";

type Props = {
  editing?: boolean;
  location?: Location;
  modalView?: boolean;
};

type LocationFormValues = {
  name: string;
  "Location No": number;
  city: string;
  "Postal Code": string;
  country: string;
};

export const AddEditLocation: FC<Props> = ({
  editing = false,
  location,
  modalView = false,
}) => {
  const addLocation = useAddLocation();
  const editLocation = useEditLocation();
  const deleteCharger = useDeleteCharger();
  const addCharger = useAddCharger();
  const editCharger = useEditCharger();
  const [listedChargers, setListedChargers] = useState<LocalCharger[]>(
    location?.chargers || []
  );

  const navigate = useNavigate();

  const defaultValues = location && {
    name: location.name,
    "Location No": location.location,
    city: location.city,
    "Postal Code": location.postalCode,
    country: location.country,
  };

  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required("name is required"),
    "Location No": yup
      .number()
      .positive()
      .integer("location No must be an integer")
      .required(),
    city: yup.string().min(3).max(50).required("city is required"),
    "Postal Code": yup.string().required("postal code is required"),
    country: yup.string().required("country is required"),
  });

  const addEditCharger = async (charger: LocalCharger) => {
    console.log("add edit charger");
    // this means the charger has just been created add it to the list
    if (!charger.id && !charger.localId && !editing) {
      charger.localId = generateID();
      setListedChargers([...listedChargers, charger]);
      // this means the charger has already been added to list but it has nto been added to the server
    } else if (charger.localId && !charger.id && !editing) {
      setListedChargers(
        listedChargers.map((c) => (c.localId === charger.localId ? charger : c))
      );
      // this means the charger has just been added to a location that is already on the server
    } else if (!charger.localId && !charger.id && editing && location) {
      const newCharger = await addCharger.mutateAsync({
        lid: location.id,
        status: charger.status,
        serialNumber: charger.serialNumber,
        type: charger.type,
      });
      setListedChargers([...listedChargers, newCharger]);
    } else if (charger.id && editing && location && !charger.localId) {
      const editedCharger = await editCharger.mutateAsync({
        lid: location.id,
        cid: charger.id,
        status: charger.status,
        serialNumber: charger.serialNumber,
        type: charger.type,
      });
      setListedChargers(
        listedChargers.map((c) => (c.id === charger.id ? editedCharger : c))
      );
    }
  };

  const onDeleteCharger = (charger: LocalCharger) => {
    if (!editing) {
      setListedChargers(
        listedChargers.filter((c) => c.localId !== charger.localId)
      );
    } else if (charger.id && location?.id) {
      deleteCharger.mutate({ cid: charger.id, lid: location.id });
      setListedChargers(listedChargers.filter((c) => c.id !== charger.id));
    }
  };

  const submitLocation: SubmitHandler<LocationFormValues> = (l) => {
    const baseLocation = {
      name: l.name,
      location: l["Location No"],
      postalCode: l["Postal Code"],
      city: l.city,
      country: l.country,
    };
    if (editing && location) {
      const editingLocation = { ...baseLocation, id: location.id };
      editLocation.mutate(editingLocation);
    } else {
      const newLocation = {
        ...baseLocation,
        chargers: listedChargers.map((c) => ({
          type: c.type,
          status: c.status,
          serialNumber: c.serialNumber,
        })),
      };
      addLocation.mutate(newLocation);
    }
    navigate(-1);
  };

  return (
    <div className="add-edit-location">
      <Form<LocationFormValues>
        formName="add-location"
        onSubmit={submitLocation}
        schema={schema}
        defaultValues={defaultValues}
      >
        <Card className={cn("card-spacing", { modalView })}>
          <AddEditFields isEdit={editing} location={location} />
        </Card>
        <Card className={cn("card-spacing", { modalView })}>
          <Chargers
            chargers={listedChargers}
            onAddEditCharger={addEditCharger}
            onDeleteCharger={onDeleteCharger}
          />
        </Card>
        <div className="submit">
          <Button
            theme={ButtonTheme.PRIMARY}
            title="SaveLocation"
            icon={<SaveIcon width={16} height={16} />}
          />
        </div>
      </Form>
    </div>
  );
};
