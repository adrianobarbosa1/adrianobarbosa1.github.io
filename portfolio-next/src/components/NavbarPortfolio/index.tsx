"use client";
import { useStateContext } from "@/contexts/ContextProvider";
import Link from "next/link";
import { BiSolidSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { links } from "./data.links";

const NavbarPortfolio = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <nav className=" flex justify-between my-8 md:my-12 mx-auto max-w-6xl w-11/12">
      <ul className="flex">
        <li className="ml-6 my-1">
          <Link
            href="/"
            className="text-2xl font-bold pb-2 relative link_animation text-defaultPrimary"
          >
            Blog
          </Link>
        </li>
      </ul>

      <ul className=" flex mr-2">
        {links.map((link) => (
          <li key={link.id} className="ml-6 my-1">
            <Link
              href={link.url}
              key={link.id}
              className="pb-2 relative text-defaultFg lowercase font-medium link_animation hover:text-defaultPrimary"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li className="ml-6 my-1 hover:text-defaultPrimary">
          <button type="button" onClick={() => setMode}>
            {currentMode === "Dark" ? <BiSolidSun /> : <FaMoon />}
          </button>
        </li>
      </ul>

      {/* <ul
        //@ts-ignore
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {projects.length ? (
          <li className="nav__list-item">
            <Link to="/" onClick={toggleNavList} className="link link--nav">
              Home
            </Link>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <Link
              to="/portfolio"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Portfólio
            </Link>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button> */}
    </nav>
  );
};

export default NavbarPortfolio;
