import { FC, ReactNode, HTMLProps } from "react";
import cn from "classnames";

import "./button.scss";

export enum ButtonTheme {
  PRIMARY = "primary",
  DARK_PRIMARY = "dark-primary",
  OUTLINE = "outline",
}

type Props = {
  type?: "button" | "submit" | "reset";
  theme?: ButtonTheme;
  disabled?: boolean;
  title?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & HTMLProps<HTMLButtonElement>;

export const Button: FC<Props> = ({
  theme = ButtonTheme.PRIMARY,
  disabled = false,
  title,
  icon,
  className,
  onClick,
  type,
  ...rest
}) => {
  let themeClassName: string;
  switch (theme) {
    default:
    case ButtonTheme.PRIMARY:
      themeClassName = "primary";
      break;
    case ButtonTheme.OUTLINE:
      themeClassName = "outline";
      break;
    case ButtonTheme.DARK_PRIMARY:
      themeClassName = "dark-primary";
      break;
  }
  return (
    <button
      role="button"
      className={cn("base-button", { [themeClassName]: true }, className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      {title && <span>{title}</span>}
    </button>
  );
};
