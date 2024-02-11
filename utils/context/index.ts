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
  resetModalProps: () => void;
}

const initialModalState = {
  title: "",
  content: "",
  props: null,
  onPrimaryAction: null,
  open: false,
};
export const useModalStore = create<ModalState>()((set) => ({
  ...initialModalState,
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

  resetModalProps: () => set((state) => ({ ...state, ...initialModalState })),
}));
