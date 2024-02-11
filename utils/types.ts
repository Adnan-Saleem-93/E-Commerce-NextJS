import { ReactNode } from "react";

export type ModalContentType = string | ReactNode;
export type ModalContextProps = {
  title?: string;
  content: ModalContentType;
  props?: any;
  onPrimaryAction?: any;
  open?: boolean;
};
