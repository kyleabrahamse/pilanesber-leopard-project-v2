import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-5 bg-alabaster p-40">
      <Image src="/images/cta.jpg" alt="" width={1000} height={1000} />
      <Image src="/images/tree.jpg" alt="" width={1000} height={1000} />
      <Image src="/images/treehouse.jpg" alt="" width={1000} height={1000} />
      <Image src="/images/zawadi.jpg" alt="" width={1000} height={1000} />
      <Image src="/images/light.jpg" alt="" width={1000} height={1000} />
      <Image src="/images/hero.jpg" alt="" width={1000} height={1000} />
      <Image src="/images/kimbia.jpg" alt="" width={1000} height={1000} />
      <Image src="/images/zawadi-test.jpg" alt="" width={1000} height={1000} />
      <Image src="/images/makatane.jpg" alt="" width={1000} height={1000} />
    </div>
  );
}
