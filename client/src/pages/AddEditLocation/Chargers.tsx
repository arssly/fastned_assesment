import { FC } from "react";
import { Charger } from "@models";
import {
  ChargeIcon,
  Heading,
  HeadingTypes,
  Button,
  ButtonTheme,
  AddIcon,
  DataTable,
} from "@components";

export const Chargers: FC<{ chargers: Charger[] }> = ({ chargers }) => {
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
    </>
  );
};
