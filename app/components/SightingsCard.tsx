import Image from "next/image";

export default function SightingsCard() {
  return (
    <div className="bg-white pt-8">
      <div className="mx-auto mb-5 w-11/12 border-b border-black">
        <Image
          src="/images/kimbia2.jpg"
          alt="kimbiaLeopard"
          width={500}
          height={500}
          className="mb-10 ml-10 h-[100px] w-[100px] rounded-full bg-auto"
        />
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
        <p>Last seen at: Tilodi Dam</p>
        <p>Time seen: 09:00</p>
        <p>Seen near the big termite mound</p>
      </div>
    </div>
  );
}
