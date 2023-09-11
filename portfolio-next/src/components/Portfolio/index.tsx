"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { dataPortfolio } from "./dataPortfolio";

const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="portfolio" className="items-center flex flex-col mt-10 ">
      <h2 className="mt-20 text-3xl font-bold text-lightTextoTitulo dark:text-darkTextoTitulo">
        Portfolio
      </h2>
      {dataPortfolio.map((item, i) => (
        <div
          key={item.id}
          className={`w-full ${
            i % 2 === 0 ? "" : "bg-gray-100 dark:bg-gray-700" // Aplica flex-row-reverse para indices pares
          }`}
        >
          <div
            className={` flex flex-col mb-10 sm:mt-10 sm:flex-row sm:gap-12 sm:mb-16 w-4/5 mx-auto px-4 ${
              i % 2 === 0 ? "" : "sm:flex-row-reverse " // Aplica flex-row-reverse para indices pares
            }`}
          >
            <div
              className=" mt-10 h-72 w-full sm:h-96 sm:w-96 sm:m-2 relative justify-content align-center"
              data-aos={`${i % 2 === 0 ? "fade-right" : "fade-left"}`} // Aplica fade-left para indices pares
            >
              <Image
                className="object-cover"
                fill={true}
                src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
                alt=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className=" mt-10  flex-1 flex flex-col gap-5 justify-center">
              <h1 className="text-primary dark:text-primary leading-6 font-bold  text-3xl sm:text-5xl text-center">
                {item.title}
              </h1>
              <p className="sm:my-6 m-6 text-xl text-center dark:text-darkTexto">
                {item.desc}
              </p>

              <ul className="about__contact center flex space-x-6 justify-center">
                <li>
                  <Link href={item.href}>
                    <button className="group relative border-2 border-primary h-10 w-48 overflow-hidden text-lg ">
                      <div className="absolute inset-0 w-3 bg-primary transition-all ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white dark:text-darkTexto">
                        Veja mais
                      </span>
                    </button>
                  </Link>
                </li>
                <li className="my-1 pb-2 relative link_animation">
                  <Link
                    href="https://github.com/adrianobarbosa1"
                    aria-label="github"
                    target="_blank"
                    className="text-lightTextoTitulo dark:text-darkTexto"
                    rel="noreferrer"
                  >
                    <FaGithub className="w-8 h-8  hover:text-primary hover:dark:text-darkTexto hover:transition-all hover:duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
