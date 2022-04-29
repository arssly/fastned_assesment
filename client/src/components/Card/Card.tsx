import * as CSS from "csstype";
import { FC, ReactNode } from "react";
import cn from "classnames";

import "./card.scss";

type Props = {
  className?: string;
  styles?: CSS.Properties;
  children: ReactNode;
};

export const Card: FC<Props> = ({ className = "", styles = {}, children }) => {
  return (
    <div className={cn("card", className)} style={styles}>
      {children}
    </div>
  );
};
