import { FC, ReactNode } from "react";
import "./container.scss";

export const Container: FC<{ children?: ReactNode }> = ({ children }) => {
  return <div className="container">{children}</div>;
};
