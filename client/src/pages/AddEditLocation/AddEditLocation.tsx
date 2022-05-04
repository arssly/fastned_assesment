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
import { Location, Charger, LocalCharger } from "@models";
import { AddEditFields } from "./AddEditFields";
import { Chargers } from "./Chargers/Chargers";
import "./addEdit.scss";

type Props = {
  editing?: boolean;
  location?: Location;
  modalView?: boolean;
};

type LocationFormValues = Omit<Location, "chargers">;

export const AddEditLocation: FC<Props> = ({
  editing = false,
  location,
  modalView = false,
}) => {
  const [listedChargers, setListedChargers] = useState<Charger[]>(
    location?.chargers || []
  );

  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required("name is required"),
    "Location No": yup
      .number()
      .positive()
      .integer("location No must be an integer")
      .required(),
    city: yup.string().min(3).max(50).required("city is required"),
    "Postal Code": yup.number().required("postal code is required"),
    country: yup.string().required("country is required"),
  });

  const addEditCharger = (charger: LocalCharger) => {
    console.log("add or edit this charger", charger);
  };

  const deleteCharger = (charger: LocalCharger) => {
    console.log("delete this charger", charger);
  };

  return (
    <div className="add-edit-location">
      <Form<LocationFormValues>
        formName="add-location"
        onSubmit={(d) => {
          console.log("submit data", d);
        }}
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
