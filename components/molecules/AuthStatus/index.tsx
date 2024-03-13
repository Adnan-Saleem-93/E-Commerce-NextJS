import { DefaultSession } from "next-auth";
import React from "react";

type Props = {
  text: string;
  onClick?: any;
  user?: DefaultSession["user"] | null;
};

export default function AuthStatus({
  text,
  onClick = null,
  user = null,
}: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-y-3">
      <p className="text-[12px] text-gray-500">
        {user ? (
          <span className="flex w-full flex-col justify-between gap-y-1">
            <span className="text-[16px] font-bold text-black">
              {user?.name}
            </span>
            <span className="text-[13px]">{user?.email}</span>
          </span>
        ) : (
          "You are logged out!"
        )}
      </p>
      <button
        className="btn btn-neutral btn-block hover:text-white"
        onClick={() => (onClick ? onClick() : null)}
      >
        {text}
      </button>
    </div>
  );
}
