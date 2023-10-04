"use client";
import { useEffect } from "react";
import InputMask from "react-input-mask";

const Contato = () => {
  const scrollToInput = () => {
    const firstInput = document.querySelector("input");
    const offset = 100; // Ajuste a quantidade de rolagem conforme necessário
    if (firstInput) {
      window.scrollTo(0, firstInput.offsetTop - offset);
    }
  };

  useEffect(() => {
    const firstInput = document.querySelector("input"); // Seleciona o primeiro input
    if (firstInput) {
      firstInput.addEventListener("focus", scrollToInput);
    }

    // Remova o ouvinte de foco quando o componente é desmontado
    return () => {
      if (firstInput) {
        firstInput.removeEventListener("focus", scrollToInput);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className="mt-10 flex w-11/12 max-w-6xl flex-col items-center px-4 py-5 sm:mt-6"
    >
      <h2 className="section_title" data-aos="fade-up" data-aos-delay="200">
        Contato
      </h2>

      <form>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div data-aos="fade-right" data-aos-delay="300">
            <input
              type="text"
              placeholder="nome"
              className="custom-input w-full "
            />
            <input
              type="email"
              placeholder="email"
              className="custom-input mt-3 w-full  "
            />

            <InputMask
              mask="(99)9-9999-9999"
              type="tel"
              id="whatsapp"
              placeholder="whatsapp"
              className="custom-input mt-3 w-full"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="300">
            <textarea
              placeholder="mensagem..."
              className="custom-input mt-3 w-full sm:mt-0 sm:h-full"
            />
          </div>
        </div>
        <div
          className="center mt-10 flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <button className="group relative h-10 w-48 overflow-hidden border-2 border-primary text-lg ">
            <div className="absolute inset-0 w-3 bg-primary transition-all ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white dark:text-darkTexto">
              Enviar
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contato;
