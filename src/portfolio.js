import aboutpic from './components/Access/adriano.jpg'
import img1 from './assets/img/1.png'
import img2 from './assets/img/2.png'

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
    'Sou formado em Análise e Desenvolvimento de Sistemas, Programador e Desenvolvedor há mais de 6 anos, atuando diretamente no mercado. Tive início na carreira em 2016 quando descobri meu maior vício: códigos. Meu primeiro trabalho foi na Secretaria da Educação em Anápolis, que me proporcionou um alavancamento em minhas habilidades, a partir daí começei a fazer projetos externos das mais diversas formas, websites, aplicativos, sistemas, adquiri um vasto conhecimento. Nos dias de hoje me tornei um desenvolvedor Full stack, trabalhando com Nestjs, Express, mongoDB, SQL, PostgreSQL no lado servidor (Back-end) e Nextjs, React, diversos frameworks css, no lado cliente (Front-end), estou sempre me atualizando e aprendendo.',
  resume: 'https://example.com',
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
      'Projeto realizado para a prefeitura de Anápolis, utilizei o Nestjs e o framwork Chakra UI',
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
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
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
