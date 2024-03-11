import { Session } from "next-auth";

type Props = { session: Session | null };

export default function UserAccountMenu({ session }: Props) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
        {/* if user logged in, show user profile image, otherwise show default avatar */}
      </div>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
}
