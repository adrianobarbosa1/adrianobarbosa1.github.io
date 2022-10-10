import aboutpic from './components/Access/adriano.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
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
    name: 'Movie Tracker',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: [
      'localstorage',
      'Openweather API',
      'Google Map API',
      'Movie Database API',
    ],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://mike-c-sanders.github.io/Movie-Tracker/',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb', 'handlebars', 'express', 'nodejs'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
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
