import React from "react";
import cn from "classnames";

import "./svgIcon.scss";

export type SVGIconProps = {
  width?: number | string;
  height?: number | string;
  display?: string;
  viewBox?: string;
  className?: string;
  children: React.ReactNode;
  stroke?: string;
} & React.SVGProps<SVGSVGElement>;

export const SvgIcon: React.FC<SVGIconProps> = (props) => {
  const {
    children = null,
    width = 16,
    height = 16,
    className = "",
    display,
    viewBox = "0 0 48 48",
    ...rest
  } = props;
  return (
    <svg
      className={cn("svgIcon", className)}
      width={width}
      height={height}
      focusable={false}
      display={display}
      viewBox={viewBox}
      style={{
        width,
        height,
      }}
      {...rest}
    >
      {children}
    </svg>
  );
};
