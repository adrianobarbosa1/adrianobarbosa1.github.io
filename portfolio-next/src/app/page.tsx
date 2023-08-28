import About from "@/components/About";
import Contato from "@/components/Contato";
import Habilidades from "@/components/Habilidades";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main
      id="home"
      className="flex flex-col items-center max-w-6xl w-11/12 mx-auto mt-4 px-4"
    >
      <Hero />
      <About />
      <Habilidades />
      <Portfolio />
      <Contato />
    </main>
  );
}
