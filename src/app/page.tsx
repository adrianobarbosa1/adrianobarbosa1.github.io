import About from "@/components/About";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Habilidades from "@/components/Habilidades";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main id="home" className="flex flex-col items-center  mx-auto mt-4">
      <Hero />
      <About />
      <Habilidades />
      <Portfolio />
      <Contato />
      <Footer />
    </main>
  );
}
