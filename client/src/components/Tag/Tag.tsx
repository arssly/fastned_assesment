import { FC, ReactNode } from "react";
import cn from "classnames";

import "./tag.scss";

export enum TagStatus {
  green = "green",
  yellow = "yellow",
  red = "red",
}
type Props = {
  children: ReactNode;
  status: TagStatus;
  className?: string;
};

export const Tag: FC<Props> = ({ children, status, className }) => {
  return <span className={cn("tag", status, className)}>{children}</span>;
};
