import React from "react";
import { SvgIcon, SVGIconProps } from "../SvgIcon";

const path = (
  /* eslint-disable max-len */
  <path d="M22.5 38V25.5H10V22.5H22.5V10H25.5V22.5H38V25.5H25.5V38Z" />
  /* eslint-enable */
);
export const AddIcon: React.FC<Omit<SVGIconProps, "children">> = (props) => (
  <SvgIcon {...props}>{path}</SvgIcon>
);
