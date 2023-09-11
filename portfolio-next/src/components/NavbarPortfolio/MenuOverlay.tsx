import { useTheme } from "next-themes";
import { BiSolidSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import NavLink from "./NavLink";

interface Link {
  id: number;
  title: string;
  href: string;
}

interface MenuOverlayProps {
  dataLinks: Link[];
}

const MenuOverlay = ({ dataLinks }: MenuOverlayProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <ul className="flex flex-col py-4 items-center bg-white dark:bg-slate-900 z-10">
      {dataLinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
      <li className="mt-5">
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
  );
};

export default MenuOverlay;
