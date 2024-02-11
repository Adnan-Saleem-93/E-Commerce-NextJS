"use client";
import { useModalStore } from "@/utils/context";

export default function Modal() {
  const { open, title, content, onPrimaryAction } = useModalStore();

  return (
    <dialog id="my_modal_2" className="modal" open={open}>
      <div className="modal-box">
        {title ? <h3 className="text-lg font-bold">{title}</h3> : null}
        <p className="py-4">{content}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={() => onPrimaryAction()}>close</button>
      </form>
    </dialog>
  );
}
