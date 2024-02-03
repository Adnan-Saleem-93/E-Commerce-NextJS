import Link from 'next/link'
import React from 'react'
import LeftArrow from '../Icons/LeftArrow';

type Props = {text:string;href?:string}

export default function BackButton({text,href='/'}: Props) {
  return (
    <Link href={href} className="group btn btn-outline">
          <LeftArrow
            fill="#000"
            className="w-0 transition-[width] duration-500 ease-in-out group-hover:w-[24px] group-hover:fill-[#fff]"
          />
          {text}
        </Link>
  )
}