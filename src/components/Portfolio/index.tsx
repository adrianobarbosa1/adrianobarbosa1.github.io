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
      className=" mt-10 flex flex-col items-center py-5 sm:mt-6"
    >
      <h2 className="section_title " data-aos="fade-up" data-aos-delay="400">
        Portfolio
      </h2>

      {dataPortfolio.map((item, i) => (
        <div
          key={item.id}
          className={` mb-10  ${
            i % 2 === 0 ? "" : "bg-gray-100 dark:bg-[#242424]" // Aplica bg para indices pares
          }`}
        >
          <div
            className={` mx-auto grid w-4/5 grid-cols-1 items-center gap-4 px-4 md:grid-cols-1  lg:grid-cols-2 
         `}
          >
            <div
              className={` ${
                i % 2 === 0 ? "lg:order-1" : "lg:order-2"
              } flex items-center justify-center`}
              data-aos={`${i % 2 === 0 ? "fade-right" : "fade-left"}`} // Aplica fade-left para indices pares
              data-aos-delay="500"
            >
              <a
                href={item.href}
                target="_blank"
                className="transform-gpu cursor-pointer transition duration-300 hover:scale-110"
              >
                <Image
                  src={item.href}
                  alt={item.altImage}
                  className="h-auto w-auto max-w-full object-contain"
                  width={600}
                  height={600}
                />
              </a>
            </div>

            <div
              className={`${
                i % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }   flex flex-1 flex-col justify-center gap-5`}
              data-aos="fade-up"
              data-aos-offset="450"
            >
              <h1 className="text-center text-3xl font-bold leading-6  text-primary dark:text-primary sm:text-5xl">
                {item.title}
              </h1>
              <p className="m-6 text-center text-xl dark:text-darkTexto sm:my-6">
                {item.desc}
              </p>

              <ul className="about__contact center flex justify-center space-x-6">
                <li>
                  <Link href={item.href}>
                    <button className="group relative h-10 w-48 overflow-hidden border-2 border-primary text-lg ">
                      <div className="absolute inset-0 w-3 bg-primary transition-all ease-out group-hover:w-full"></div>
                      <span className="relative text-black group-hover:text-white dark:text-darkTexto">
                        Veja mais
                      </span>
                    </button>
                  </Link>
                </li>
                <li className="link_animation relative my-1 pb-2">
                  <Link
                    href="https://github.com/adrianobarbosa1"
                    aria-label="github"
                    target="_blank"
                    className="text-lightTextoTitulo dark:text-darkTexto"
                    rel="noreferrer"
                  >
                    <FaGithub className="h-8 w-8  hover:text-primary hover:transition-all hover:duration-300 hover:dark:text-darkTexto" />
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
