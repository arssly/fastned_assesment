import React from "react";
import cn from "classnames";

import "./heading.scss";
export enum HeadingTypes {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
}
type Props = {
  type?: HeadingTypes;
  className?: string;
  children: React.ReactNode;
};
export const Heading: React.FC<Props> = (props) => {
  const { type = "h1", children, className = "" } = props;
  const headingClasses = cn("heading", className, {
    [`type_${type}`]: true,
  });

  const Element = type;

  return <Element className={headingClasses}>{children}</Element>;
};
