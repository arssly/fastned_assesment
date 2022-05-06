import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";
import * as yup from "yup";

import {
  Card,
  Form,
  Button,
  ButtonTheme,
  SaveIcon,
  Modal,
  CrossIcon,
} from "@components";
import { generateID } from "@src/utils";
import { Location, LocalCharger } from "@models";
import { useAddLocation } from "@src/services";
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
  const [listedChargers, setListedChargers] = useState<LocalCharger[]>(
    location?.chargers || []
  );

  const navigate = useNavigate();

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
    if (!charger.id && !charger.localId) {
      charger.localId = generateID();
      setListedChargers([...listedChargers, charger]);
    } else if (charger.localId && !charger.id) {
      setListedChargers(
        listedChargers.map((c) => (c.localId === charger.localId ? charger : c))
      );
    }
  };

  const deleteCharger = (charger: LocalCharger) => {
    if (!charger.id) {
      setListedChargers(
        listedChargers.filter((c) => c.localId !== charger.localId)
      );
    }
  };

  const submitLocation: SubmitHandler<LocationFormValues> = (l) => {
    const newLocation = {
      name: l.name,
      location: l["Location No"],
      postalCode: l["Postal Code"],
      city: l.city,
      country: l.country,
      chargers: listedChargers.map((c) => ({
        type: c.type,
        status: c.status,
        serialNumber: c.serialNumber,
      })),
    };
    addLocation.mutate(newLocation);
    navigate(-1);
  };

  return (
    <div className="add-edit-location">
      <Form<LocationFormValues>
        formName="add-location"
        onSubmit={submitLocation}
        schema={schema}
      >
        <Card className={cn("card-spacing", { modalView })}>
          <AddEditFields isEdit={editing} location={location} />
        </Card>
        <Card className={cn("card-spacing", { modalView })}>
          <Chargers
            chargers={listedChargers}
            onAddEditCharger={addEditCharger}
            onDeleteCharger={deleteCharger}
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

export const AddEditLocationModal: FC<Props> = (props) => {
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
      <AddEditLocation {...props} modalView />
    </Modal>
  );
};
