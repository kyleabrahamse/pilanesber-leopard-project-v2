import Image from "next/image";

export default function Gallery() {
  return (
    <div className="gallery-container flex flex-col items-center justify-center bg-alabaster">
      <h1 className="py-[80px] font-semibold">Gallery</h1>
      <div className="img-container">
        <Image
          src="/images/tree.jpg"
          alt="leopard tree"
          width={2000}
          height={2000}
          className="img-1"
        />
        <Image
          src="/images/light.jpg"
          alt=""
          width={2000}
          height={2000}
          className="img-2"
        />
        <Image
          src="/images/baby-leopard.jpg"
          alt=""
          width={2000}
          height={2000}
          className="img-3"
        />
        <Image
          src="/images/treehouse.jpg"
          alt=""
          width={2000}
          height={2000}
          className="img-4"
        />
      </div>
      <h2 className="cursor-pointer py-10 font-medium underline underline-offset-4 hover:text-tigerseye">
        View More
      </h2>
    </div>
  );
}
