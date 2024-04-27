import Image from "next/image";

export default function SightingsCard({
  name,
  location,
  time,
  description,
}: any) {
  return (
    <div className="my-5 ml-10 rounded-md bg-white pt-8">
      <div className="mx-auto mb-5 w-11/12 border-b border-black">
        <div className="mb-5 flex">
          <Image
            src="/images/kimbia2.jpg"
            alt="kimbiaLeopard"
            width={500}
            height={500}
            className="h-[100px] w-[100px] rounded-full bg-auto"
          />
          <h2 className="ml-5 mt-auto">{name}</h2>
        </div>
      </div>
      <Image
        src="/images/kgodisa.JPG"
        alt="kimbiaLeopard"
        width={2000}
        height={2000}
        className="mx-auto w-11/12"
        priority={true}
      />
      <div className="mx-auto w-11/12">
        <p>Last seen at: {location}</p>
        <p>Time seen: {time}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
