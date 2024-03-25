import Link from "next/link";
import { Yellowtail } from "next/font/google";

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

type Props = {};

export default function AppName({}: Props) {
  return (
    <Link
      href="/"
      className="group flex cursor-pointer items-baseline justify-center text-3xl font-extrabold"
    >
      <div className={`text-primary group-hover:text-red-500`}>G</div>
      <div className={`text-black`}>lamr</div>
      {/* <span className={`text-[2rem] text-primary group-hover:text-black`}>
        .
      </span> */}
      <div className="h-[8px] w-[8px] rounded-full bg-primary group-hover:bg-red-500" />
    </Link>
  );
}
