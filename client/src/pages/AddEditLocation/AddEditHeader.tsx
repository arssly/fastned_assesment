import { FC } from "react";
import { Heading, HeadingTypes, LocationIcon, AddIcon } from "@components";

import { Location } from "@models";

import "./addEdit.scss";

type Props = {
  isEdit?: boolean;
  location?: Location;
};

export const AddEditHeading: FC<Props> = ({ isEdit = false, location }) => {
  return (
    <div className="heading">
      {isEdit && (
        <span>
          <LocationIcon width={24} height={24} />
          <Heading className="no-margin" type={HeadingTypes.h3}>
            {location?.name}
          </Heading>
        </span>
      )}
      {!isEdit && (
        <span>
          <AddIcon width={24} height={24} />
          <Heading type={HeadingTypes.h3} className="no-margin">
            Add New Location
          </Heading>
        </span>
      )}
    </div>
  );
};
