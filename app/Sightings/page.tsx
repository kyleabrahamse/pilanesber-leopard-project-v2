import SightingsCard from "../components/SightingsCard";

export default function Sightings() {
  return (
    <div className="bg-alabaster flex gap-20">
      <div className="w-1/2 ">
        <SightingsCard />
      </div>
      <div className="w-1/2">
        <form>
            <p>Which leopard was seen?</p>
            <input type="text" />
            <p>Location</p>
            <input type="text" />
            <p>When was it seen?</p>
            <input type="time" />
            <p>Description</p>
            <textarea></textarea>
        </form>
      </div>
    </div>
  );
}
