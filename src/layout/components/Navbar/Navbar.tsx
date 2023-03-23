import Brightness2Icon from "@material-ui/icons/Brightness2";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../contexts";
import { contact, projects, skills } from "../../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  //@ts-ignore
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);
  const navigate = useNavigate();

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        //@ts-ignore
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {projects.length ? (
          <li className="nav__list-item">
            <Link to="/home" onClick={toggleNavList} className="link link--nav">
              Home
            </Link>
          </li>
        ) : null}

        {skills.length ? (
          <li className="nav__list-item">
            <Link
              to="/perfil"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Perfil
            </Link>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Login
            </a>
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
      </button>
    </nav>
  );
};

export default Navbar;
