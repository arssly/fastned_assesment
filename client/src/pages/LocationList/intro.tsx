import { FC } from "react";
import {
  AddIcon,
  Heading,
  HeadingTypes,
  Button,
  ButtonTheme,
} from "@components";

export const Intro: FC = () => {
  return (
    <div className="location-header">
      <Heading type={HeadingTypes.h1}>Locations</Heading>
      <Button
        theme={ButtonTheme.PRIMARY}
        title="Add Location"
        icon={<AddIcon />}
        onClick={() => {
          console.log("change location");
        }}
      />
    </div>
  );
};
