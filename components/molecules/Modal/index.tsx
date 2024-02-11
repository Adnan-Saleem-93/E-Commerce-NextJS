"use client";
import { useModalStore } from "@/utils/context";
import { useEffect } from "react";

export default function Modal() {
  const { open, title, content, onPrimaryAction, resetModalProps } =
    useModalStore();

  return (
    <dialog id="modal" className="modal" open={open}>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
            onClick={resetModalProps}
          >
            ✕
          </button>
        </form>
        {title ? <h3 className="text-lg font-bold">{title}</h3> : null}
        <p className="py-4">{content}</p>

        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-primary"
              onClick={() => onPrimaryAction()}
            >
              Confirm
            </button>
            <button className="btn-default btn ml-4" onClick={resetModalProps}>
              Close
            </button>
          </form>
        </div>
      </div>
      <form
        method="dialog"
        className="modal-backdrop"
        onClick={resetModalProps}
      >
        <button>Close</button>
      </form>
    </dialog>
  );
}
