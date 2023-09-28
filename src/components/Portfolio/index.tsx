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
    <div
      id="portfolio"
      className=" items-center flex flex-col mt-10 sm:mt-6 py-5"
    >
      <h2 className="section_title ">Portfolio</h2>

      {dataPortfolio.map((item, i) => (
        <div
          key={item.id}
          className={` mb-10  ${
            i % 2 === 0 ? "" : "bg-gray-100 dark:bg-[#242424]" // Aplica bg para indices pares
          }`}
        >
          <div
            className={` grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-4/5 mx-auto px-4  items-center 
         `}
          >
            <div
              className={` ${
                i % 2 === 0 ? "lg:order-1" : "lg:order-2"
              } flex justify-center items-center`}
              data-aos={`${i % 2 === 0 ? "fade-right" : "fade-left"}`} // Aplica fade-left para indices pares
            >
              <a
                href={item.href}
                target="_blank"
                className="cursor-pointer transition duration-300 hover:scale-110 transform-gpu"
              >
                <Image
                  src={item.href}
                  alt={item.altImage}
                  className="object-contain max-w-full h-auto w-auto"
                  width={600}
                  height={600}
                />
              </a>
            </div>

            <div
              className={`${
                i % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }   flex-1 flex flex-col gap-5 justify-center`}
            >
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
