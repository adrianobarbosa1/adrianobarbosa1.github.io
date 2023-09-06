import Link from "next/link";

const Footer = () => (
  <div className="bg-gray-100 dark:bg-gray-700 mt-20 w-full">
    <footer className="items-center flex flex-col mt-10 mb-10 sm:mt-20">
      <div className=" my-1 pb-2 relative link_animation">
        <Link
          href="https://github.com/adrianobarbosa1"
          className=" text-lg font-bold text-lightTextoTitulo dark:text-darkTextoTitulo sm:text-2xl py-1 
          hover:text-primary hover:dark:text-darkTexto hover:transition-all hover:duration-300
          "
        >
          Created By Adriano Barbosa
          <span className="absolute bottom-0 w-0 h-1 bg-lightTextoTitulo dark:bg-darkTextoTitulo transition-all duration-200 link-hover" />
        </Link>
      </div>
      <p className="text-center text-xs mt-2 flex flex-col sm:flex-row sm:text-sm dark:text-darkTexto">
        Copyright © {new Date().getFullYear()} ICS{" "}
        <span className="">- Direitos De Autor Internacionais De Serviço.</span>
      </p>
    </footer>
  </div>
);

export default Footer;
