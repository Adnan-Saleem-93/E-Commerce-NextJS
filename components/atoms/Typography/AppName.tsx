import { APP_NAME } from "@/utils/constants";
import Link from "next/link";

type Props = {};

export default function AppName({}: Props) {
  return (
    <Link
      href="/"
      className="group flex cursor-pointer items-baseline justify-center text-3xl font-extrabold"
    >
      <div className={`text-primary group-hover:text-blue-700`}>
        {APP_NAME.substring(0, 1)}
      </div>
      <div className={`text-black`}>
        {APP_NAME.substring(1, APP_NAME.length - 1)}
      </div>
      <div className="h-[8px] w-[8px] rounded-full bg-primary group-hover:bg-blue-700" />
    </Link>
  );
}
