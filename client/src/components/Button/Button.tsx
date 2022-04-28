import { FC, ReactNode } from "react";
import cn from "classnames";

export enum ButtonTheme {
  PRIMARY,
  DARK_PRIMARY,
  OUTLINE,
}

type Props = {
  theme: ButtonTheme;
  disabled?: boolean;
  title: string;
  icon?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const Button: FC<Props> = ({
  theme,
  disabled = false,
  title,
  icon,
  className,
  onClick,
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
      className={cn("base-button", { [themeClassName]: true, className })}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </button>
  );
};
