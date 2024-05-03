import Image from "next/image";
import Button from "./Button";

type ToursProps = {
  image: string;
  heading: string;
  text: string;
};

export default function ToursCard({ image, heading, text }: ToursProps) {
  return (
    <div className="w-[500px] text-center">
      <Image
        src={image}
        alt={heading}
        height={1000}
        width={1000}
        className="w-[500px] h-[500px]"
      ></Image>
      <h1>{heading}</h1>
      <p className="pb-5">{text}</p>
      <Button buttonType="white" text="More Info" />
    </div>
  );
}
