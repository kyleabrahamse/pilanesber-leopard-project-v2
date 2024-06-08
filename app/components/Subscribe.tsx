import Button from "./Button";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-between bg-moss p-20 text-alabaster xl:flex-row xl:px-20 xl:py-5">
      <div>
        <h1>Stay Updated on Sightings</h1>
        <p>
          Subscribe to stay updated on the latest updates on sightings and
          conservation efforts
        </p>
        <div className="flex gap-5 pt-10 sm:flex-row flex-col">
          <input
            type="email"
            placeholder="Your Email"
            className="rounded border-2 border-black bg-alabaster px-5 text-2xl text-black"
          />
          <Button text="Subscribe" buttonType="black" />
        </div>
      </div>
      <div className="xl:m-0 my-10">
        <Image
          className="xl:ml-auto xl:w-5/12"
          src="/images/logo.png"
          alt="logo"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
