import Link from "next/link";
import { Yellowtail } from "next/font/google";
import { APP_NAME } from "@/utils/constants";

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};

export default function AppName({}: Props) {
  return (
    <Link
      href="/"
      className="group flex cursor-pointer items-center justify-center gap-x-2 text-xl"
    >
      <span
        className={`${yellowtail.className} text-red-500 group-hover:text-red-700`}
        style={{
          transform: "rotate(342deg) translate(5px,-5px)",
          fontSize: "30px",
        }}
      >
        {APP_NAME.split("&")[0]}
      </span>
      &
      <span
        className={`${yellowtail.className} text-blue-500 group-hover:text-blue-700`}
        style={{
          transform: "rotate(342deg) translateX(-10px)",
          fontSize: "30px",
        }}
      >
        {APP_NAME.split("&")[1]}
      </span>
    </Link>
  );
}
