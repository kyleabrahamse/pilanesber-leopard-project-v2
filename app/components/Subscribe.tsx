import Button from "./Button";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="flex items-center px-20 py-5">
      <div>
        <h1>Stay Updated on Sightings</h1>
        <p>
          Subscribe to stay updated on the latest updates on sightings and
          conservation efforts
        </p>
        <div className="flex">
          <input type="email" placeholder="Your Email" />
          <Button text="Subscribe" buttonType="black" />
        </div>
      </div>
      <div>
        <Image
          className="w-5/12"
          src="/images/logo.png"
          alt="logo"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
