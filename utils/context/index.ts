import { ReactNode } from "react";
import { create } from "zustand";
import { ModalContentType, ModalContextProps } from "../types";

interface ModalState {
  title?: string;
  content: ModalContentType;
  props?: any;
  onPrimaryAction?: any;
  open?: boolean;

  setModalProps: ({
    title,
    content,
    props,
    onPrimaryAction,
  }: ModalContextProps) => void;
}
export const useModalStore = create<ModalState>()((set) => ({
  title: "",
  content: "",
  props: null,
  onPrimaryAction: null,
  open: false,
  setModalProps: ({
    title = "",
    content,
    props = null,
    onPrimaryAction = null,
    open = false,
  }) =>
    set((state) => ({
      ...state,
      title,
      content,
      props,
      onPrimaryAction,
      open,
    })),
}));
