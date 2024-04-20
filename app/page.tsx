import Features from "./components/Features";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Preserve from "./components/Preserve";

export default function Home() {
  return (
    <main className="hero">
      <div className="mx-auto">
        <Hero />
        <Preserve />
        <Features />
        <JoinUs />
      </div>
    </main>
  );
}
