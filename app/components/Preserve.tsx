import Button from "./Button";

import Image from "next/image";

export default function Preserve() {
  return (
    <div className="flex gap-10 bg-alabaster px-20 py-20 mt-10">
      <div className="w-1/2">
        <h1 className="pb-5 text-6xl font-medium">
          Preserving Leopards in Pilanesberg National Park
        </h1>
        <p className="pb-5 text-2xl font-medium">
          Discover the importance of leopard conservation and learn about the
          vital role of the Pilanesberg Leopard Project in protecting these
          magnificent creatures.
        </p>
        <div className="flex gap-5 pb-10 font-medium">
          <div className="w-1/2">
            <h2 className="pb-5 text-4xl">Protecting Leopards</h2>
            <p className="text-2xl">
              Join us in safeguarding the future of leopards and their natural
              habitat.
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="pb-5 text-4xl">Support Us</h2>
            <p className="text-2xl">
              Make a difference by contributing to our leopard conservation
              efforts today.
            </p>
          </div>
        </div>
        <Button text="Donate" buttonType="white" />
      </div>
      <div className="w-1/2">
        <Image
          src="/images/cta.jpg"
          alt="leopard"
          width={2500}
          height={2500}
          className="w-full"
        />
      </div>
    </div>
  );
}
