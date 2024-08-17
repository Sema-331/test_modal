import React from "react";
import { createPortal } from "react-dom";

const modalElem = document.getElementById("modal");

const Modal = ({ children }: { children: React.ReactNode }) => {
  return createPortal(<>{children}</>, modalElem as HTMLElement);
};

export default Modal;
