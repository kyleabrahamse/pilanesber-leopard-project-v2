import ToursCard from "../components/ToursCard";

export default function Tours() {
  return (
    <div>
      <div className="tours-container content-center px-20">
        <div className="w-1/2 pr-20"> 
          <h1 className="text-alabaster">Photo Safaris and Tours</h1>
          <p className="text-alabaster">
            Experience Pilanesberg&apos;s wildlife with our trusted operators.
            From big cats to majestic elephants, our diverse safaris cater to
            all nature enthusiasts. Join us for a thrilling exploration into the
            heart of Pilanesberg National Park.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-20 bg-alabaster py-32">
        <ToursCard
          heading="Heinrich"
          text="Join me to find some kgabos"
          image="/images/heini.jpg"
        />
        <ToursCard
          heading="Spongebob"
          text="He lives in a pineapple under the sea"
          image="https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_800x.jpg?v=1603744568"
        />
        <ToursCard
          heading="He man"
          text="The master of the universe"
          image="https://m.media-amazon.com/images/M/MV5BNmFiMmUwNGMtZjYyNy00NjA2LTgwZjktNTkyZWEzNTg2YmUyXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
        />
      </div>
    </div>
  );
}
