import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="items-center flex flex-col sm:mt-6 py-5 max-w-6xl w-11/12 px-4"
    >
      <h2 className="section_title dark:text-darkTextoTitulo">
        Desenvolvedor Full Cycle.
      </h2>
      <p className=" mb-6 dark:text-darkTexto">
        Como um desenvolvedor Full Cycle formado em Análise e Desenvolvimento de
        Sistemas, trago uma ampla experiência abrangendo todos os estágios do
        ciclo de desenvolvimento de software, desde a concepção até a
        implementação. Minhas habilidades em Node.js, React e MongoDB
        capacitam-me a criar aplicativos de alta qualidade e escaláveis que
        atendem às demandas diversas de várias empresas.
      </p>
      <p className="mb-6 dark:text-darkTexto">
        Minha paixão pela programação nasceu em 2016 e, desde então, tenho me
        dedicado a aprimorar minhas competências e conhecimentos por meio de
        projetos variados, como o desenvolvimento de websites, aplicativos e
        sistemas. Meu crescimento profissional teve início na Secretaria de
        Educação em Anápolis, onde pude fortalecer minhas habilidades e
        enfrentar desafios de maneira profissional. Hoje, como um desenvolvedor
        Full Cycle, possuo habilidades sólidas no trabalho com Nest.js, Express,
        MongoDB, SQL e PostgreSQL no backend, e Next.js, React, além de diversos
        frameworks CSS no frontend.
      </p>
      <p className="mb-6 dark:text-darkTexto">
        Mantenho-me sempre atualizado e continuo a aprender constantemente,
        acreditando que esse é o cerne do sucesso. Tenho convicção de que
        comprometimento e dedicação são essenciais para fornecer soluções
        inovadoras e eficazes aos nossos clientes. Estou ansioso por novas
        oportunidades e desafios para aplicar minhas habilidades. Se você está
        em busca de um desenvolvedor Full Cycle experiente e motivado para
        integrar sua equipe, por favor, entre em contato comigo. Será um prazer
        discutir como posso contribuir para a sua empresa e colaborar para
        alcançar os objetivos empresariais.
      </p>

      <div>
        <ul className="about__contact center flex space-x-6">
          <li className=" my-1 pb-2 relative link_animation">
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
          <li className=" my-1 pb-2 relative link_animation">
            <Link
              href="https://www.linkedin.com/in/adrianobarbosa-dev/"
              aria-label="linkedin"
              target="_blank"
              className="text-lightTextoTitulo dark:text-darkTexto"
              rel="noreferrer"
            >
              <FaLinkedin className="w-8 h-8  hover:text-primary hover:dark:text-darkTexto hover:transition-all hover:duration-300" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
