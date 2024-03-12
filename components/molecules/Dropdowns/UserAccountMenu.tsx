"use client";
import { Session } from "next-auth";
import Image from "next/image";
import MenuIcon from "../../../assets/svg/menu-icon.svg";
import profilePicPlaceholder from "../../../assets/profile-pic-placeholder.png";
import { signIn, signOut } from "next-auth/react";

type Props = { session: Session | null };

export default function UserAccountMenu({ session }: Props) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} role="button" className="btn btn-circle btn-ghost">
        {/* if user logged in, show user profile image, otherwise show default avatar */}
        {user ? (
          <Image
            src={user?.image || profilePicPlaceholder}
            alt="profile-pic"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        ) : (
          <Image
            src={MenuIcon}
            alt="profile-pic"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        )}
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
      >
        <ul className="card-body">
          <li>
            {user ? (
              <button
                className="btn btn-ghost uppercase"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign Out
              </button>
            ) : (
              <div className="flex w-full flex-col items-center justify-between gap-y-3">
                <p className="text-[12px] text-gray-500">You are logged out!</p>
                <button
                  className="btn btn-neutral btn-block hover:text-white"
                  onClick={() => signIn()}
                >
                  Sign In
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
