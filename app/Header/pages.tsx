import Image from "next/image";

import Button from "../components/Button";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-cornsilk ">
      <div className="flex items-center font-medium">
        <Image
          className="mr-5 w-32"
          src="/images/logo.png"
          alt="logo"
          width={500}
          height={500}
        />
        <ul className="flex gap-6 text-2xl ">
          <li>About</li>
          <li>Tours</li>
          <li>Gallery</li>
          <li>Leopard Profiles</li>
          <li>Sightings Board</li>
          <li>Conservation</li>
        </ul>
      </div>
      <div className="flex">
        <Button text="Contact" buttonType="white" />
        <Button text="Support" buttonType="black" />
      </div>
    </div>
  );
}
