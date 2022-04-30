import { FC } from "react";
import { Card, Form, Button, ButtonTheme, SaveIcon } from "@components";
import { Location } from "@models";

import { AddEditFields } from "./AddEditFields";
import { Chargers } from "./Chargers";
import "./addEdit.scss";

type Props = {
  isEdit?: boolean;
  location?: Location;
};

type LocationFormValues = Omit<Location, "chargers">;

export const AddEditLocation: FC<Props> = ({ isEdit = false, location }) => {
  return (
    <div className="add-edit-location">
      <Form<LocationFormValues>
        formName="add-location"
        onSubmit={(d) => {
          console.log("submit data", d);
        }}
      >
        <Card className="card-spacing">
          <AddEditFields isEdit={isEdit} location={location} />
        </Card>
        <Card className="card-spacing">
          <Chargers chargers={location?.chargers ?? []} />
        </Card>
        <Button
          theme={ButtonTheme.PRIMARY}
          title="SaveLocation"
          icon={<SaveIcon width={16} height={16} />}
        />
      </Form>
    </div>
  );
};
