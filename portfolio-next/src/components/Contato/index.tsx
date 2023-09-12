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
      className="items-center flex flex-col mt-10 sm:mt-6 py-5 max-w-6xl w-11/12 px-4"
    >
      <h2 className="section_title">Contato</h2>

      <form className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          <div>
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
          <div>
            <textarea
              placeholder="mensagem..."
              className="custom-input mt-3 sm:mt-0 w-full sm:h-full"
            />
          </div>
        </div>
        <div className="flex center justify-center mt-10">
          <button className="group relative border-2 border-primary h-10 w-48 overflow-hidden text-lg ">
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
