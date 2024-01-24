"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({ children, className = "" }: Props) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`btn btn-primary ${className}`}
      type="submit"
      disabled={pending ? true : false}
    >
      {pending ? (
        <span className="loading loading-spinner loading-md" />
      ) : (
        children
      )}
    </button>
  );
};

export default FormSubmitButton;
