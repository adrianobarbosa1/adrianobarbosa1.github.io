import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-6xl w-11/12 mx-auto mt-4">
      <Hero />
      <About />
      <h1>habilidades</h1>
      <h1>Portfolio</h1>
      <h1>Contato</h1>
    </main>
  );
}
