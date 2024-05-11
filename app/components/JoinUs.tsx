import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function JoinUs() {
  return (
    <div className="flex gap-12 bg-cornsilk p-20">
      <Image
        className="w-1/2"
        src="/images/grassy-leopard.jpg"
        alt="leopard in the grass"
        width={2000}
        height={2000}
      />
      <div className="">
        <h1>Join our community</h1>
        <p>
          Share your leopard sightings and contribute to our tracking efforts
        </p>
        <div className="flex pt-10">
          <Link href="/Conservation">
            <Button text="Contribute" buttonType="white" />
          </Link>
          <Link href="/Sightings">
            <Button text="Report" buttonType="black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
