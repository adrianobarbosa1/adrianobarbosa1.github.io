"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiSolidSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import dataLinks from "./data.links";

const NavbarPortfolio = () => {
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Função para lidar com a rolagem da página
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Adicionar um ouvinte de evento para a rolagem
    window.addEventListener("scroll", handleScroll);

    // Remover o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed mx-auto top-0 left-0 right-0 z-10  ${
        scrolling
          ? "bg-white dark:bg-slate-900 drop-shadow-md"
          : "bg-transparent"
      } transition-all duration-500`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href="/"
          className="text-2xl font-bold pb-2 text-primary dark:text-darkTexto
          relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left
          "
        >
          Blog
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-primary text-slate-200 hover:text-white hover:border-white"
            >
              <AiOutlineMenu className="h-5 w-5 text-primary" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-primary text-slate-200 hover:text-white hover:border-white"
            >
              <AiOutlineClose className="h-5 w-5 text-primary" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {dataLinks.map((link) => (
              <li key={link.id}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}

            <li className="mt-1 py-2 pl-3 pr-4 md:p-0">
              <button
                type="button"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                {theme === "light" ? (
                  <FaMoon className="text-lightTextoTitulo hover:text-primary" />
                ) : (
                  <BiSolidSun className="dark:text-darkTexto hover:dark:text-primary" />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay dataLinks={dataLinks} /> : null}
    </nav>
  );
};

export default NavbarPortfolio;
