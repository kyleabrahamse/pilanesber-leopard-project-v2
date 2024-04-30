import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

export default function page() {
  return (
    <div className="bg-alabaster">
      <Image
        src="/images/about.jpg"
        alt="leopard rock"
        width={2000}
        height={2000}
        className="h-[700px] w-full"
      />
      <div className="mx-auto flex w-7/12 flex-col gap-5 pb-20">
        <h1 className="pb-8 pt-20">Pilanesberg Leopard Project</h1>
        <p>
          Welcome to Pilanesberg Leopard Project, your ultimate destination for
          immersing yourself in the captivating world of one of nature&apos;s
          most elusive and majestic creatures - the leopard. Nestled within the
          breathtaking landscapes of Pilanesberg National Park, our website is
          dedicated to tracking and monitoring these enigmatic felines as they
          roam freely in their natural habitat.
        </p>
        <p>
          Learn how to easily identify leopards with the help of ID cards
          <span> here</span>, or report your recent sighting
          <span> here</span>.
        </p>
        <p>
          Join us as marvel at these magnificent creatures and discover the
          magic of the Leopards of Pilanesberg
        </p>
        <div className="pt-5">
          <Button buttonType="white" text="Support" />
        </div>
      </div>
    </div>
  );
}
