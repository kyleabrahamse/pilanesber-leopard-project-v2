import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center p-10 md:px-20 xl:h-[90vh] xl:w-1/2">
      <h1 className="pb-10 text-6xl font-medium text-alabaster">
        Discover the Majestic Leopards of the Pilanesberg
      </h1>
      <p className="pb-8 text-2xl font-semibold text-alabaster">
        Join us in tracking and monitoring the elusive leopards of Pilanesberg
        National Park. Experience the thrill of spotting and photographing these
        magnificent creatures in their natural habitat.
      </p>
      <Link href="/About">
        <Button text="Learn More" buttonType="white" />
      </Link>
    </div>
  );
}
