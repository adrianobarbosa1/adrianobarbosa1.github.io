import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 md:p-0 text-lightTexto lowercase sm:font-medium hover:text-primary dark:text-darkTexto
      relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left
      "
    >
      {title}
    </Link>
  );
};

export default NavLink;
