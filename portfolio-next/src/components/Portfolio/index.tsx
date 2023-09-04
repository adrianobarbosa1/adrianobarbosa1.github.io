"use client";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="portfolio" className="items-center flex flex-col mt-10">
      <h2 className="mt-10 text-3xl font-bold text-lightTextoTitulo">
        Portfolio
      </h2>

      <div className=" w-full gap-12 flex mt-12 mb-24">
        <div className=" flex-1 flex flex-col ">
          <h1 className="text-4xl sm:text-5xl text-defaultPrimary font-bold text-center">
            Creative portfolio
          </h1>
          <p className="my-6 text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
          <div className="flex justify-center gap-x-3"></div>

          <ul className="about__contact center flex space-x-6 justify-center">
            <li className=" my-1 pb-2 relative link_animation">
              <button className="hover:bg-primary">veja mais</button>
            </li>
            <li className=" my-1 pb-2 relative link_animation">
              <Link
                href="https://github.com/adrianobarbosa1"
                aria-label="github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="w-8 h-8  hover:text-defaultPrimary hover:transition-all hover:duration-300" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 h-96 w-96 relative">
          <Image
            className="object-cover"
            fill={true}
            src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
