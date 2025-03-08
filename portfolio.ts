import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  GreetingsType,
  ProjectType,
  SEODataType,
  SkillsSectionType,
  SocialLinksType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ingrid Santana',
  title: 'Ingrid Santana',
  description: `Bem-vindos!\n\nEste espaço reflete a minha paixão pelo mundo microscópico e o meu compromisso com projetos que conectam ciência, tecnologia e inovação.\n\nMinha paixão pela ciência modulou positivamente cada etapa da minha jornada.\n\nDessa forma, quero continuar aplicando as minhas experiências para transformar o complexo em simples. Assim, promovemos conhecimentos acessíveis e resultados duradouros.\n\nDescubra como as minhas experiências e ideias podem te ajudar!`,
  resumeLink:
    'https://drive.google.com/drive/folders/1qCLHGn-ulIjHwWqavlThaUTDLNTNjO4U',
};

export const openSource = {
  githubUserName: 'ingridsza',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  instagram: 'https://www.instagram.com/mauromaioficial/',
  github: 'https://github.com/mauromaiodev',
  linkedin: 'https://www.linkedin.com/in/ingridsantana-cientista/',
};

export const skillsSection: SkillsSectionType = {
  title: 'O que faço?',
  subTitle: 'Combino ciência e estratégia para gerar resultados!',
  data: [
    {
      title: 'Arquitetura Cloud',
      lottieAnimationFile: '/lottie/skills/lab.json',
      skills: [
        emoji('⚡ Experiência de trabalho em plataformas de nuvem'),
        emoji(
          '⚡ Hospedagem e manutenção de sites em instâncias de máquinas virtuais'
        ),
        emoji(
          '⚡ Construindo pipelines de CI/CD para testes e implantação automatizados usando o Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'VERCEL',
          iconifyTag: 'logos:vercel',
        },
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
      ],
    },
  ],
};

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Universidade Salvador - UNIFACS',
    subHeader: 'Bacharelado em Biomedicina',
    duration: 'Jan 2016 - Dez 2019',
  },
  {
    schoolName: 'Universidade Federal da Bahia - UFBA',
    subHeader: 'Mestrado em Patologia Humana Experimental',
    duration: 'Jul 2020 - Out 2022',
  },
  {
    schoolName: 'Centro Universitário UNIFECAF',
    subHeader: 'MBA em Gestão de Projetos',
    duration: 'Ago 2023 - Dez 2023',
  },
  {
    schoolName: 'Veduca',
    subHeader: 'Curso Intermediário em Gestão da Inovação',
    duration: 'Jan 2024 - Mar 2024',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Engenheiro de Software',
    company: 'Peregrina Investimentos',
    companyLogo: '/img/icons/common/peregrina-logo.jpg',
    date: 'Dez 2023 - Atualmente',
    desc: 'Desenvolvimento dos projetos da Peregrina Investimentos com Next 13+, trabalho com foco na acessibilidade através das fontes, cores, contrastes e interatividade das aplicações. Utilizo tecnologias como React, Next 13+, TypeScript, Styled Components, Zod, React Hook Form, Axios, Azure DevOps.',
  },
  {
    role: 'Engenheiro de Software',
    company: 'Saúde TV',
    companyLogo: '/img/icons/common/saudetv-logo.jpg',
    date: 'Abr 2023 - Mar 2024',
    desc: 'Atuando na construção de soluções WEB/API utilizando React, Next, Vue, Nuxt, TypeScript, NodeJS, MongoDB, Mongoose, Express, Styled Components, Sass e Tailwind com foco em performance com SSR e otimizações de SEO.',
  },
  {
    role: 'Engenheiro de Software',
    company: 'ACP Group - Avansys',
    companyLogo: '/img/icons/common/acp-logo.jpg',
    date: 'Mar 2022 – Abr 2023',
    desc: 'Desenvolvimento de sistemas Web de alta escala, como os projetos na Secretaria de Educação da Bahia, que registrou milhões de acessos. Utilizei tecnologias como React, Redux, TypeScript, Axios e React Query para desenvolver soluções eficientes e escaláveis.',
  },
  {
    role: 'Engenheiro de Software',
    company: 'Kokua IT',
    companyLogo: '/img/icons/common/kokua-logo.jpg',
    date: 'Nov 2020 – Mar 2022',
    desc: 'Fiz parte da equipe de desenvolvimento, criando softwares para a área de gerenciamento de projetos atuando como Fullstack com ênfase em Frontend. Utilizei tecnologias como Vue, Vite, Axios e Vuetify.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Dev Divers',
    desc: 'Template para projetos Next 13+, TypeScript, Tailwind e modelo para meus projetos SaaS',
    github: 'https://github.com/mauromaiodev/dev-divers',
    link: 'https://dev-divers.vercel.app/',
  },
  {
    name: 'Dev Blog',
    desc: 'Blog feito com Next 14, Upstash (Redis), TypeScript, Tailwind',
    github: 'https://github.com/mauromaiodev/dev-blog',
    link: 'https://devdivers-blog.vercel.app/posts',
  },
  {
    name: 'Prod Guardian',
    desc: 'Sistema para gerenciamento de produtos e fornecedores com autenticação e autorização. Usando Next 13+ e API next, Zustand, MongoDB, JOI.',
    github: 'https://github.com/mauromaiodev/prod-guardian-next13',
  },
  {
    name: 'next-portfolio-mauro',
    desc: 'Meu portfolio criado com Next 13+, Typescript, Bootstrap, GraphQL, Moment e React-Tools',
    github: 'https://github.com/mauromaiodev/next-portfolio-mauro',
    link: 'https://mauromaio.vercel.app/',
  },
  {
    name: 'Coffee Delivery',
    desc: 'Desafio criado pela trilha Ignite da RocketSeat no curso de React',
    github: 'https://github.com/mauromaiodev/coffee-delivery-challenge',
    link: 'https://coffeedelivery-ignite.vercel.app/',
  },
  {
    name: 'E-commerce Capputeeno',
    desc: 'E-commerce Capputeeno, desenvolvido como solução do Rocketseat frontend challenge.',
    github: 'https://github.com/mauromaiodev/challenge-frontend-rocketseat',
  },
  {
    name: 'API com Node.js, MongoDB',
    desc: 'API com Node, MongoDB, Express, TypeScript, JWT, Criptografia e arquitetura MSC + Routes',
    github: 'https://github.com/mauromaiodev/node-api-mongo-concepts',
  },
  {
    name: 'Template Next 13',
    desc: 'Template com configurações para iniciar qualquer projeto em Next.js',
    github: 'https://github.com/mauromaiodev/next-react-template',
  },
  {
    name: 'React Admin Dashboard',
    desc: 'React Admin Dashboard',
    github: 'https://github.com/mauromaiodev/react-admin-dashboard',
    link: 'https://react-adm-dashboard.vercel.app/',
  },
  {
    name: 'Controle de despesas',
    desc: 'Controle financeiro: Inserção e remoção de débitos e saldos',
    github: 'https://github.com/mauromaiodev/finance-control',
    link: 'https://finance-control-v1.vercel.app/',
  },
  {
    name: 'Beta Fotografia',
    desc: 'Portfólio de fotografia feito em React',
    github: 'https://github.com/mauromaiodev/beta-fotografia',
    link: 'https://betabahiafotografia.vercel.app/',
  },
  {
    name: 'To-do List - Ignite Rocketseat',
    desc: 'Praticando Conceitos - Ignite da Rocketseat',
    github: 'https://github.com/mauromaiodev/todo-list-ignite',
    link: 'https://todo-list-ignite-v1.vercel.app/',
  },
  {
    name: 'Timer - Ignite Rocketseat',
    desc: 'Praticando Conceitos em React - Ignite da Rocketseat',
    github: 'https://github.com/mauromaiodev/timer-ignite',
    link: 'https://timer-ignite-v1.vercel.app/',
  },
  {
    name: 'portfolio-mauro-maio',
    desc: 'Software Developer Portfolio',
    github: 'https://github.com/mauromaiodev/portfolio-mauro-maio',
    link: 'https://mauromaioportfolio.vercel.app',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Maurício Dias',
    feedback:
      'Mauro é um profissional capaz e cresceu muito neste primeiro trimestre do ano de 2023. Com entregas dentro do prazo, bastante comunicativo, proativo e tem tudo para ser um profissional de alta performance, e quando tem tempo em suas tarefas, vai além e não se contenta em fazer apenas o básico. Aceita desafios e as cumpre, não tem medo de aprender e de se desenvolver.',
  },
  {
    name: 'Rodrigo Godinho',
    feedback:
      'Trabalhei diretamente com Mauro e pude notar o seu amadurecimento durante a sua jornada. Sendo sempre proativo e muito estudioso, nunca teve um desafio que o abalasse. Me chamou atenção sua humildade, resiliência, empatia e excelente capacidade de comunicação.',
  },
];

export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Ingrid Santana',
  description: 'Consultora Científica.',
  author: 'Ingrid Santana',
  url: 'https://ingridsantana.vercel.app/',
  keywords: ['Ingrid Santana', 'ingridsantana', 'Portfolio', 'Ingrid Santana Portfolio'],
};
