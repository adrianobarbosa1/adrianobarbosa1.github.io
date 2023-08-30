"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { links } from "./data.links";

const NavbarPortfolio = () => {
  const {
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
    currentColor,
  } = useStateContext();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <nav className=" flex justify-between my-8 md:my-12 mx-auto max-w-6xl w-11/12">
      <ul className="flex">
        <li className="ml-6 my-1">
          <Link
            href="/"
            className="text-2xl font-bold pb-2 relative link_animation text-colorPrimary dark:text-darkcolorPrimary"
          >
            Blog
          </Link>
        </li>
        <li className="ml-6 my-1 mt-2">
          <button title="Menu" onClick={handleActiveMenu} color={currentColor}>
            <AiOutlineMenu />
          </button>
        </li>
      </ul>

      <ul className=" flex mr-2">
        {links.map((link) => (
          <li key={link.id} className="ml-6 my-1">
            <Link
              href={link.url}
              key={link.id}
              className="pb-2 relative text-lightTexto lowercase font-medium link_animation hover:text-colorPrimary dark:text-darkTexto"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li className="ml-6 my-1 mt-2 hover:text-colorPrimary">
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <FaMoon className="text-lightTextoTitulo hover:text-colorPrimary" />
            ) : (
              <BiSolidSun className="dark:text-darkTexto hover:dark:text-colorPrimary" />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarPortfolio;
