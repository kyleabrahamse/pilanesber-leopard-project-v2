"use client"

import Image from "next/image";
import Link from "next/link";

type IdProps = {
  image: string;
  name: string;
};

export default function ProfileIdCard({ image, name }: IdProps) {

  return (
    <div className="content-center rounded-lg bg-white p-10 text-center">
      <Link href={`/LeopardProfiles/${encodeURIComponent(name)}`}>
        <div>
          <Image
            src={image}
            alt={name}
            width={1000}
            height={1000}
            className="mx-auto h-[330px] w-[280px] pb-5 hover:cursor-pointer"
          />
          <h2 className="hover:cursor-pointer hover:text-tigerseye">{name}</h2>
        </div>
      </Link>
    </div>
  );
}
