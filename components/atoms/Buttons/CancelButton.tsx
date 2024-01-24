"use client";
import { redirect } from "next/navigation";
import React, { useMemo } from "react";

type Props = { onClick?: any; customClasses?: string };

const CancelButton = ({
  onClick = () => redirect("/"),
  customClasses = "",
}: Props) => {
  return (
    <button
      className={`btn btn-outline ${customClasses}`}
      type="button"
      onClick={onClick}
    >
      Cancel
    </button>
  );
};

export default CancelButton;
