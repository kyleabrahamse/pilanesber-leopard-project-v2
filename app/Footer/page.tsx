import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const date = new Date();

export default function Footer() {
  return (
    <footer className="flex flex-col bg-cornsilk xl:px-20 px-5 py-10">
      <p className="font-bold">Contact: </p>
      <p className="xl:pb-5">pilanesbergleopards@gmail.com</p>
      <div className="flex gap-5 border-b border-black pb-5">
        <Link
          href="https://www.facebook.com/groups/507280119438996"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="w-[40px] hover:cursor-pointer  hover:text-tigerseye"
          />
        </Link>
        <Link
          href="https://www.instagram.com/pilanesbergleopardproject/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="w-[40px] hover:cursor-pointer hover:text-tigerseye"
          />
        </Link>
        <FontAwesomeIcon
          icon={faYoutube}
          className="w-[40px] hover:cursor-pointer hover:text-tigerseye"
        />
      </div>
      <p className="pt-5">copyright @ {date.getFullYear()}</p>
    </footer>
  );
}
