"use client";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

type Props = { onClick?: any };

const CancelButton = ({ onClick = null }: Props) => {
  const router = useRouter();
  const clickAction = useMemo(
    () => (onClick ? onClick : () => router.push("/")),
    [onClick],
  );
  return (
    <button className="btn col-span-1" type="button" onClick={clickAction}>
      Cancel
    </button>
  );
};

export default CancelButton;
