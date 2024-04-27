import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";

export default function Conservation() {
  return (
    <div className="conservation-container">
      <Image
        src="/images/googlyeyes.jpg"
        alt="leopard"
        width={2000}
        height={2000}
        className="h-[800px]"
      />
      <div className="mx-auto w-7/12 p-[50px]">
        <h1 className="pb-10">
          Preserving the Pilanesberg: Unleashing the Power of Conservation
          Through Your Support
        </h1>
        <p className="pb-5">
          In our collective pursuit to preserve the wonders of our planet, your
          generous donations will find a meaningful purpose with the Pilanesberg
          Wildlife Trust. Their unwavering commitment to the well-being of
          wildlife and ecosystems is crucial for the delicate balance of our
          natural world.
        </p>
        <p className="pb-5">
          By supporting this remarkable organization, you directly contribute to
          the thriving ecosystem of the Pilanesberg region, ensuring the
          protection of diverse species and their habitats. The Pilanesberg
          Wildlife Trust&apos;s impactful initiatives range from wildlife
          conservation and habitat restoration to community education, fostering
          a harmonious relationship between humanity and nature.
        </p>
        <p className="pb-5">
          Your contribution becomes a catalyst for positive change, enabling the
          trust to continue its vital work in safeguarding the interconnected
          web of life. Every donation, regardless of size, acts as a lifeline
          for the Pilanesberg ecosystem, allowing it to flourish and sustain the
          rich biodiversity that makes our planet truly extraordinary.
        </p>
        <p className="pb-5">
          Join hands with the Pilanesberg Wildlife Trust today and become an
          integral part of the force working tirelessly to ensure a future where
          nature thrives. Your support is a beacon of hope for a healthier, more
          vibrant planet. Donate now and make a lasting impact on the world we
          share.
        </p>
        <Link
          href="https://pilanesbergwildlifetrust.co.za/projects/"
          target="blank"
        >
          <Button buttonType="white" text="Donate" />
        </Link>
      </div>
    </div>
  );
}
