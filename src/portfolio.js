import img1 from './assets/img/1.png'
import img2 from './assets/img/2.png'
import aboutpic from './components/Access/adriano.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://adrianobarbosa1.github.io',
  title: 'JS.',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Adriano Barbosa',
  role: 'Full stack developer',
  description:
    `'Sou graduado em Análise e Desenvolvimento de Sistemas e tenho mais de seis anos de experiência como Programador e Desenvolvedor, atuando diretamente no mercado. Minha paixão pela programação começou em 2016 e desde então venho aprimorando minhas habilidades e conhecimentos através de projetos externos, incluindo desenvolvimento de websites, aplicativos e sistemas.

    Iniciei minha carreira na Secretaria da Educação em Anápolis, onde tive a oportunidade de consolidar minhas competências e me desafiar profissionalmente. Atualmente, sou um desenvolvedor Full stack, habilidoso em trabalhar com Nestjs, Express, mongoDB, SQL, PostgreSQL no lado servidor (Back-end) e Nextjs, React, diversos frameworks css no lado cliente (Front-end). Sempre busco me manter atualizado e continuamente aprendendo para aprimorar minha técnica.
    
    Acredito que a chave para o sucesso é ser dedicado e comprometido em fornecer soluções inovadoras e eficientes para os clientes. Estou entusiasmado para novos desafios e oportunidades para contribuir com minhas habilidades.`,
  resume:
    'https://drive.google.com/file/d/1wrRC68PPVmE3_-X2NSnbOvekUdp3vwbH/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/adriano-barbosa-10892750/',
    github: 'https://github.com/adrianobarbosa1',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Meu lote minha historia, Frontend',
    alt: 'Meu lote minha historia, Frontend',
    img: img1,
    description:
      'Projeto realizado para a prefeitura de Anápolis, utilizei o Nextjs e o framwork Chakra UI',
    stack: ['Correios API', 'React.js', 'Redux Tookit', 'Chackra UI', 'Docker'],
    sourceCode: 'https://github.com/adrianobarbosa1/frontend-mlmh',
    livePreview: 'http://meuloteminhahistoria.anapolis.go.gov.br/',
  },
  {
    name: 'Meu lote minha historia, Backend',
    alt: 'Meu lote minha historia, Backend',
    img: img2,
    description:
      'RESTful API Meu lote minha historia, projeto realizado para a prefeitura de Anápolis, backend com mongoDB, Atuhetication de usuario, upload de imagens usando o Multer, validação de dados com Joi, documentado com Swagger e swagger-ui-express, além de outras bibliotecas ',
    stack: ['Express.js', 'MongoDB', 'Nodejs', 'Docker'],
    sourceCode: 'https://github.com/adrianobarbosa1/backend-mlmh',
    livePreview: 'https://github.com/adrianobarbosa1/backend-mlmh',
  },
  // {
  //   name: 'Resource Planner',
  //   description:
  //     'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
  //   stack: ['html-css-javascript', 'sequelize', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'Nestjs',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'Nextjs',
  'SASS',
  'Chakra UI',
  'Bootstrap',
  'Material UI',
  'Git',
  'Docker',
  'Microservices',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'adriano.barbosa100@gmail.com',
}

export { header, about, projects, skills, contact }

