import emoji from 'react-easy-emoji';
import {
  AwardsType,
  EducationType,
  ExperienceType,
  FeedbackType,
  GreetingsType,
  SEODataType,
  SkillsSectionType,
  SocialLinksType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ingrid Santana',
  description: `Bem-vindos!\n\nMeu objetivo é transformar o complexo em algo acessível, ajudando estudantes, acadêmicos e profissionais a simplificar conceitos e avançar em suas jornadas.`,
  resumeLink:
    'https://drive.google.com/file/d/11gASlKApcMrUADyMpVcGZeaWRoWEvbj6/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'ingridsza',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  whatsapp:
    'https://wa.me/5571987298417?text=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.',
  linkedin: 'https://www.linkedin.com/in/ingridsantana-cientista/',
  gmail:
    'mailto:ingridsantsza@gmail.com?subject=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.',
};

export const skillsSection: SkillsSectionType = {
  title: 'Assessoria e Consultoria Profissional',
  data: [
    {
      title: 'Serviços ofertados',
      lottieAnimationFile: '/lottie/skills/working.json',
      skills: [
        emoji('🧬 Revisão, análise e edição de textos'),
        emoji('🧬 Elaboração de TCC (Projeto e Desenvolvimento)'),
        emoji('🧬 Mapas mentais e resumos científicos'),
        emoji('🧬 Apresentações de seminários e relatórios técnicos'),
        emoji('🧬 Pesquisas científicas'),
        emoji('🧬 Treinamento neurocomportamental e oratória'),
        emoji('🧬 Avaliação e ajustes de currículo'),
        emoji('🧬 Revisão e otimização de LinkedIn'),
        emoji('🧬 Identificação de aspectos neurocomportamentais'),
        emoji('🧬 Palestras e workshops para aprimoramento técnico e profissional'),
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
    role: 'Analista de Inovação Sênior',
    company: 'Grupo Aço Cearense',
    companyLogo: '/img/icons/common/grupo_aco_logo.jpg',
    date: 'Jan 2026 - Atualmente',
    desc: 'Oportunização de recursos e estratégias para o progresso científico e tecnológico, através dos projetos de inovação.',
  },
  {
    role: 'Consultora Sênior de Inovação',
    company: 'G.A.C Group Brasil',
    companyLogo: '/img/icons/common/gac_logo.webp',
    date: 'Ago 2025 - Dez 2025',
    desc: 'Oportunização de recursos e estratégias para o progresso científico e tecnológico das empresas, através dos projetos de inovação.',
  },
  {
    role: 'Consultora Junior de Inovação',
    company: 'Gröwnt',
    companyLogo: '/img/icons/common/gtgroup_logo.png',
    date: 'Jan 2023 - Jul 2025',
    desc: 'Atuo na coleta de dados em reuniões técnicas, identificação de projetos científicos, elaboração de textos técnicos e organização de projetos inovadores, promovendo soluções com base em pesquisa e desenvolvimento.',
  },
  {
    role: 'Mentora Local Galáctica',
    company: 'NASA Space Apps',
    companyLogo: '/img/icons/common/nasaspacebsb_logo.png',
    date: 'Out 2023 – Atualmente',
    desc: 'Oriento desenvolvedores de ideias na criação de pitches claros e objetivos, ajudando-os a apresentar ideias com assertividade e impacto.',
  },
  {
    role: 'Monitora de Biologia',
    company: 'Pré-vestibular Social da Juventude (PJU)',
    companyLogo: '/img/icons/common/pju.png',
    date: 'Fev 2025 - Atualmente',
    desc: 'Remotamente, auxilio nas aulas de biologia e implemento estratégias neurocomportamentais para aumentar o engajamento e o aprendizado dos alunos, contribuindo para um ambiente educacional mais eficaz.',
  },
  {
    role: 'Palestrante Convidada',
    company: 'Universidade Federal de São Paulo - UNIFESP',
    companyLogo: '/img/icons/common/unifesp_logo.png',
    date: 'Out 2023',
    desc: 'Compartilhei minha jornada como cientista, desde a escolha profissional, até as experiências na Patologia Humana Experimental, destacando vivências acadêmicas e estratégias para transição ao ambiente corporativo.',
  },
  {
    role: 'Mestre em Patologia Humana Experimental',
    company: 'Universidade Federal da Bahia - UFBA',
    companyLogo: '/img/icons/common/ufba.png',
    date: 'Jul 2020 – Out 2022',
    desc: 'Realizei cultivo e diferenciação celular, extração de DNA/RNA, produção de partículas virais e transfecção de plasmídeos. Também elaborei protocolos científicos e capacitei pessoas em técnicas experimentais específicas.',
  },
  {
    role: 'Tirocínio Docente Orientado ao Curso de Graduação de Odontologia',
    company: 'Universidade Federal da Bahia - UFBA',
    companyLogo: '/img/icons/common/ufba.png',
    date: 'Jul 2021 – Dez 2021',
    desc: 'Ministrei aulas de tutoria remota sobre mecanismos celulares e teciduais, além de desenvolver materiais didáticos e quizzes para aprimorar a compreensão em patologia.',
  },
];

export const awards: AwardsType[] = [
  {
    role: 'Hackathon GT - Go Create Lab',
    company: 'Gröwnt',
    companyLogo: '/img/icons/common/gtgroup_logo.png',
    date: 'Nov 2024',
    desc: 'Reconhecimento e parabenização por valiosa participação no Hackathon GT, onde demonstrou proatividade, criatividade e habilidade ao desenvolver uma proposta de solução para o desafio Aplicação de Conceitos de Gamificação para aprimorar produtos e processos.',
  },
  {
    role: 'Profissional Inovador',
    company: 'Gröwnt',
    companyLogo: '/img/icons/common/gtgroup_logo.png',
    date: 'Out 2024',
    desc: 'Reconhecimento e parabenização por todas as contribuições realizadas para promover e concretizar a inovação na Gröwnt (antigo GT Group), em especial por atuar ativamente na construção do negócio ao propor uma ideia ao Programa de Sugestão de Ideias do GI.',
  },
  {
    role: 'Menção Honrosa - Prêmio Gonçalo Moniz',
    company: 'Fundação Oswaldo Cruz - Fiocruz',
    companyLogo: '/img/icons/common/ffiocruz_logo.png',
    date: 'Abr 2022',
    desc: 'Menção honrosa pelo trabalho de caracterização do tráfego intracelular de vesículas em neurônios com mutação no gene VPS13B derivados de células tronco pluripotentes humanas induzidas (hiPSCs) de paciente autista não verbal e com deficiência intelectual.',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Bruno Paredes',
    feedback:
      'Ingrid é uma profissional muito dedicada ao seu trabalho, realizando suas tarefas seguindo os protocolos rigidamente. Demonstra grande interesse em aprender temas novos e busca se aprofundar no assunto. Possui grande capacidade crítica e analítica, o que lhe permite elaborar propostas para atingir seus objetivos e resolver qualquer dificuldade à sua frente, reagindo ativamente aos desafios. Possui habilidades sociais ótimas, destacando sua disponibilidade em ajudar seus colegas de trabalho sempre que possível, tornando fácil o pleno convívio em ambiente de trabalho.',
  },
  {
    name: 'Kleide Santana',
    feedback:
      'A Ingrid é extremamente profissional, super focada, com inúmeras habilidades, comprometida com os seus resultados e da sua equipe, senso de pertencimento, organização impecável e sabe realizar um ótimo trabalho em equipe. Ela busca conhecimento e esta em constante atualização. Voa Ingrid!',
  },
  {
    name: 'Maisa Nascimento',
    feedback:
      'Gostaria de expressar minha profunda gratidão à Ingrid, que foi fundamental como coorientadora na elaboração do meu TCC, no qual obtive a excelente nota de 9.8. Sua ajuda foi essencial, especialmente na organização das ideias, na definição de prioridades para a leitura dos artigos e no processo de escrita do trabalho. A banca elogiou muito a qualidade do meu artigo, e isso se deve em grande parte ao apoio e dedicação de Ingrid. Sua orientação cuidadosa e atenção aos detalhes fizeram toda a diferença, e não poderia estar mais satisfeita com o resultado final do meu trabalho. Recomendo a Ingrid de olhos fechados!',
  },
  {
    name: 'Dyovana Fadel',
    feedback: 'Tive o privilégio de trabalhar em alguns projetos com a Ingrid e posso afirmar com tranquilidade que ela é daquelas pessoas que elevam o padrão de tudo que tocam. Seu comprometimento com a qualidade, atenção aos detalhes e senso de responsabilidade fazem com que cada entrega vá além do esperado. Além disso, ela tem uma rara habilidade em colaborar com empatia, escuta ativa e clareza. Trabalhar ao lado dela sempre foi sinônimo de fluidez, confiança e resultado. Ela tem um olhar atento para o que pode ser melhorado e não hesita em propor soluções criativas e eficientes, sempre focada em agregar valor nas entregas.',
  },
  {
    name: 'Jean Jesus',
    feedback: 'Nos últimos meses, passei por um dos momentos mais importantes da minha trajetória profissional: a conquista de uma nova oportunidade no mercado. E, para que esse processo fosse bem-sucedido, contei com o apoio de pessoas incríveis. Uma delas foi a Ingrid Santana.\n\nA Ingrid desempenhou um papel fundamental ao me orientar com dicas valiosas e me ajudar a estruturar minha entrevista de forma clara e objetiva. Seu olhar atento, experiência e conhecimento fizeram toda a diferença para que eu pudesse transmitir meu potencial da melhor maneira possível... ',
  },
  {
    name: 'Leo Ribeiro',
    feedback: 'Além de seu conhecimento técnico, Ingrid possui uma comunicação extremamente fluida e assertiva, transmitindo segurança para a equipe e para os clientes. Seu senso de organização e responsabilidade é admirável, garantindo que todas as análises e processos sejam conduzidos com precisão e confiabilidade.\n\nO que mais me impressiona é sua proatividade e resiliência. Ingrid encara desafios com uma mentalidade resolutiva e não se intimida diante de cenários incertos. Quando se depara com um problema novo, ela não apenas busca entendê-lo, mas retorna com uma solução bem fundamentada, demonstrando um excelente jogo de cintura para lidar com situações que fogem ao seu controle. Essa habilidade de adaptação e aprendizado contínuo faz dela uma profissional diferenciada.... ',
  },
];

export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Ingrid Santana',
  description: 'Consultora Científica.',
  author: 'Ingrid Santana',
  url: 'https://ingridsantana.vercel.app/',
  keywords: [
    'Ingrid Santana',
    'ingridsantana',
    'Portfolio',
    'Ingrid Santana Portfolio',
  ],
};
