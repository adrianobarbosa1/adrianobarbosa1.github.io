import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="items-center flex flex-col mt-10">
      <h2 className="mt-10 text-3xl font-bold text-defaultFgAlt">
        Desenvolvedor Full Stack.
      </h2>
      <p className="mt-10 ">
        Como um desenvolvedor Fullstack graduado em Análise e Desenvolvimento de
        Sistema, eu possuo uma vasta experiência em todas as etapas do ciclo de
        desenvolvimento de software, desde a concepção até a implementação.
        Minhas habilidades em Nodejs, React e MongoDB me permitem desenvolver
        aplicativos de alta qualidade e escaláveis para atender às necessidades
        de diversos tipos de negócios. Minha paixão pela programação surgiu em
        2016 e desde então venho me dedicando a aprimorar minhas habilidades e
        conhecimentos através de projetos, tais como desenvolvimento de
        websites, aplicativos e sistemas. Meu crescimento profissional teve
        início na Secretaria da Educação em Anápolis, onde tive a oportunidade
        de consolidar minhas competências e me desafiar profissionalmente. Hoje,
        como um desenvolvedor Full stack, sou habilidoso em trabalhar com
        Nestjs, Express, mongoDB, SQL, PostgreSQL no lado servidor (Back-end) e
        Nextjs, React, além de diversos frameworks CSS no lado cliente
        (Front-end). Sempre busco me manter atualizado e continuamente
        aprendendo para aprimorar minha técnica, acredito que essa é a chave
        para o sucesso. Estou convicto que o comprometimento e a dedicação são
        fundamentais para fornecer soluções inovadoras e eficientes para nossos
        clientes. Estou ansioso por novos desafios e oportunidades para
        contribuir com minhas habilidades. Se você está buscando um
        desenvolvedor Fullstack experiente e motivado para integrar sua equipe,
        por favor, entre em contato comigo. Será um prazer discutir como posso
        contribuir para sua empresa e trabalhar em conjunto para alcançar seus
        objetivos de negócios.
      </p>

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

export default About;
