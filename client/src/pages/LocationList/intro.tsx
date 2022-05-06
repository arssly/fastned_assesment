import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AddIcon,
  Heading,
  HeadingTypes,
  Button,
  ButtonTheme,
} from "@components";

export const Intro: FC = () => {
  const location = useLocation();

  return (
    <div className="location-header">
      <Heading type={HeadingTypes.h1}>Locations</Heading>
      <Link to="/locations/add" state={{ backgroundLocation: location }}>
        <Button
          theme={ButtonTheme.PRIMARY}
          title="Add Location"
          icon={<AddIcon />}
        />
      </Link>
    </div>
  );
};
