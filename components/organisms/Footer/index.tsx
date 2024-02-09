import FacebookIcon from "@/components/atoms/Icons/FacebookIcon";
import TwitterIcon from "@/components/atoms/Icons/TwitterIcon";
import YoutubeIcon from "@/components/atoms/Icons/YoutubeIcon";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer items-center bg-neutral p-4 text-neutral-content">
      <aside className="grid-flow-col items-center">
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <TwitterIcon />
        </a>
        <a>
          <YoutubeIcon />
        </a>
        <a>
          <FacebookIcon />
        </a>
      </nav>
    </footer>
  );
}
