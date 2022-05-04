import { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AddIcon,
  Heading,
  HeadingTypes,
  Button,
  ButtonTheme,
} from "@components";

export const Intro: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="location-header">
      <Heading type={HeadingTypes.h1}>Locations</Heading>
      <Button
        theme={ButtonTheme.PRIMARY}
        title="Add Location"
        icon={<AddIcon />}
        onClick={() => {
          navigate("/locations/add", {
            state: { backgroundLocation: location },
          });
        }}
      />
    </div>
  );
};
