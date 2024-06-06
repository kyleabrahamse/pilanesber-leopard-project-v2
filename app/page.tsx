import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Preserve from "./components/Preserve";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
    <main className="hero">
      <div className="mx-auto">
        <Hero />
        <Preserve />
        <Features />
        <JoinUs />
        <Gallery />
        <Subscribe />
      </div>
    </main>
  );
}
