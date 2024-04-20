import Image from "next/image";
import Button from "./Button";

export default function Features() {
  return (
    <div className="flex items-center justify-center gap-20 bg-moss px-40 py-20 text-center text-2xl text-alabaster">
      <div className="w-[400px]">
        <Image
          className="mx-auto w-[40px] pb-8"
          src="/images/binoculars-solid.svg"
          alt="Binoculars"
          width={500}
          height={500}
        />
        <h2 className="pb-4 font-semibold">Key Functionalities</h2>
        <p className="pb-5 font-medium">
          Identify and track leopards, and view recent sightings.
        </p>
        <Button text="Learn More" buttonType="black" />
      </div>
      <div className="w-[400px]">
        <Image
          className="mx-auto w-[35px] pb-8"
          src="/images/passport-solid.svg"
          alt="passport"
          width={500}
          height={500}
        />
        <h2 className="pb-4 font-semibold">Leopard Identification</h2>
        <p className="pb-5 font-medium">
          Easily identify individual leopards in the park.
        </p>
        <Button text="Learn More" buttonType="Black" />
      </div>
      <div className="w-[400px]">
        <Image
          className="mx-auto w-[40px] pb-8"
          src="/images/paw-solid.svg"
          alt="paw"
          width={500}
          height={500}
        />
        <h2 className="pb-4 font-semibold">Leopard Tracking</h2>
        <p className="pb-5 font-medium">
          See the last known location of leopards in the park.
        </p>
        <Button text="Learn More" buttonType="black" />
      </div>
    </div>
  );
}
