import Image from "next/image";
import Link from "next/link";

import Button from "../components/Button";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-cornsilk ">
      <div className="flex items-center font-medium">
        <Link href="/">
          <Image
            className="mr-5 w-32"
            src="/images/logo.png"
            alt="logo"
            width={500}
            height={500}
          />
        </Link>
        <ul className="flex gap-6 text-2xl ">
          <Link href="/About">
            <li className="">About</li>
          </Link>
          <Link href="/Tours">
            <li>Tours</li>
          </Link>
          <li>Gallery</li>
          <li>Leopard Profiles</li>
          <Link href="/Sightings">
            <li>Sightings Board</li>
          </Link>
          <Link href="/Conservation">
            <li>Conservation</li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <Button text="Contact" buttonType="white" />
        <Button text="Support" buttonType="black" />
      </div>
    </div>
  );
}
