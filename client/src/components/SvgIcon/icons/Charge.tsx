import React from "react";
import { SvgIcon, SVGIconProps } from "../SvgIcon";

const path = (
  <g>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7 2v11h3v9l7-12h-4l3-8z" />
  </g>
);
export const ChargeIcon: React.FC<Omit<SVGIconProps, "children">> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    {path}
  </SvgIcon>
);
