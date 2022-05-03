import React, { FC, KeyboardEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

// Resources / Styles
import "./modal.scss";

const ESC_KEY = "Escape";

// create a div for modal container
const body = document.querySelector("body") as HTMLBodyElement;
let modalRoot = document.querySelector("#modal");

if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  body.appendChild(modalRoot);
}

type Props = {
  isOpen?: boolean;
  onClose?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export const Modal: FC<Props> = (props: Props) => {
  const {
    isOpen = true,
    children = "Modal component",
    onClose = () => {},
    className = "",
    containerClassName = "",
  } = props;

  useEffect(() => {
    body.classList.add("hasModal");

    return () => {
      body.classList.remove("hasModal");
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === ESC_KEY) {
      event.stopPropagation();
      onClose();
    }
  };
  const handleOverlayOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((event.target as HTMLDivElement).classList.contains("modalOverlay")) {
      onClose();
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const renderModal = () => {
    return (
      <div
        className={cn("modalOverlay", { open: isOpen }, className)}
        onKeyDown={handleKeyDown}
        onClick={handleOverlayOnClick}
      >
        {isOpen && (
          <div
            className={cn("modalContainer", containerClassName)}
            role="dialog"
          >
            {children}
          </div>
        )}
      </div>
    );
  };
  return isOpen ? createPortal(renderModal(), modalRoot as Element) : null;
};
