import { APP_NAME } from "@/utils/constants";
import Link from "next/link";

type Props = {};

export default function AppName({}: Props) {
  return (
    <Link
      href="/"
      className="flex cursor-pointer items-baseline justify-center text-3xl font-extrabold"
    >
      <div className={`text-accent hover:text-black`}>{APP_NAME}</div>
    </Link>
  );
}
