import { FC } from "react";
import {
  ChargeIcon,
  Heading,
  HeadingTypes,
  Button,
  AddIcon,
  ButtonTheme,
} from "@components";

export const ChargerHeader: FC<{ setModalOpen: () => void }> = ({
  setModalOpen,
}) => {
  return (
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
        onClick={setModalOpen}
        type="button"
      />
    </div>
  );
};
