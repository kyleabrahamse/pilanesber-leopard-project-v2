import Hero from "./components/Hero";
import Preserve from "./components/Preserve";

export default function Home() {
  return (
    <main className="hero">
      <div className="mx-auto">
        <Hero />
        <Preserve />
      </div>
    </main>
  );
}
