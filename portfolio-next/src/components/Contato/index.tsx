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
    <div id="contact" className="items-center flex flex-col mt-10  w-full">
      <h2 className="mt-10 text-3xl font-bold text-lightTextoTitulo dark:text-darkTextoTitulo">
        Contato
      </h2>

      <form className=" ">
        <div className="flex flex-col mt-10 sm:flex-row w-full">
          <div className="sm:w-1/2 sm:mx-5">
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
          <div className=" sm:w-1/2 sm:mx-5 ">
            <textarea
              placeholder="mensagem..."
              className="custom-input mt-3 sm:mt-0 w-full sm:h-full"
            />
          </div>
        </div>
        <div className="flex center justify-center mt-10">
          <button className="group relative border-2 border-primary h-10 w-48 overflow-hidden text-lg ">
            <div className="absolute inset-0 w-3 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white dark:text-darkTexto">
              Enviar
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contato;
