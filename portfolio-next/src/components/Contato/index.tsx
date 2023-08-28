import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contato = () => {
  return (
    <div id="contact" className="items-center flex flex-col mt-10">
      <h2 className="mt-10 text-3xl font-bold text-defaultFgAlt">Contato</h2>

      <div className="about__contact center">
        <>
          <Link
            href="https://github.com/adrianobarbosa1"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/adrianobarbosa-dev/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </Link>
        </>
      </div>
    </div>
  );
};

export default Contato;
