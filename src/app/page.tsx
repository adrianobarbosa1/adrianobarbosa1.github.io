import About from "@/components/About";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Habilidades from "@/components/Habilidades";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <main id="home" className="mx-auto mt-4 flex  flex-col items-center">
      <Hero />
      <About />
      <Habilidades />
      <Portfolio />
      <Contato />
      <Footer />
    </main>
  );
}
