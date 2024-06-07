"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMenu = () => {
    setOpenMobileMenu((prevValue) => !prevValue);
  };

  return (
    <div>
      <div className="flex items-center justify-between bg-cornsilk">
        <div
          className={`flex ${openMobileMenu && "flex-col"} items-center font-medium`}
        >
          <Link href="/">
            <Image
              className="mr-5 w-32"
              src="/images/logo.png"
              alt="logo"
              width={500}
              height={500}
            />
          </Link>
          <ul className="hidden gap-6 text-2xl xl:flex">
            <Link href="/About">
              <li>About</li>
            </Link>
            <Link href="/Tours">
              <li>Tours</li>
            </Link>
            <Link href="/Gallery">
              <li>Gallery</li>
            </Link>
            <Link href="/LeopardProfiles">
              <li>Leopard Profiles</li>
            </Link>
            <Link href="/Sightings">
              <li>Sightings Board</li>
            </Link>
            <Link href="/Conservation">
              <li>Conservation</li>
            </Link>
          </ul>
        </div>
        <div className="hidden xl:flex">
          <Link href="/Contact">
            <Button text="Contact" buttonType="white" />
          </Link>
          <Link href="/Conservation">
            <Button text="Support" buttonType="black" />
          </Link>
        </div>
        <div className="pr-10 xl:hidden" onClick={openMenu}>
          <MenuIcon className={openMobileMenu ? "hidden" : ""} />
          <CloseIcon className={openMobileMenu ? "" : "hidden"} />
        </div>
      </div>
      <div
        className={`mobile-menu bg-cornsilk transition-all duration-500 ease-in-out overflow-hidden ${
          openMobileMenu ? "max-h-[500px] visible" : "max-h-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-6 text-2xl p-6">
          <Link href="/About">
            <li>About</li>
          </Link>
          <Link href="/Tours">
            <li>Tours</li>
          </Link>
          <Link href="/Gallery">
            <li>Gallery</li>
          </Link>
          <Link href="/LeopardProfiles">
            <li>Leopard Profiles</li>
          </Link>
          <Link href="/Sightings">
            <li>Sightings Board</li>
          </Link>
          <Link href="/Conservation">
            <li>Conservation</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
