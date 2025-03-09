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
  description: `Bem-vindos!\n\nEste espaço reflete a minha paixão pelo mundo microscópico e o meu compromisso com o progresso da ciência, tecnologia e inovação.\n\nDessa forma, quero seguir utilizando meus conhecimentos ao ajudar estudantes e acadêmicos a simplificar o que é complexo.`,
  resumeLink:
    'https://drive.google.com/file/d/1qHR7uMPsZcn7iSR0fO8cgDHdV7pk8gmi/view?usp=sharing',
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
  title: 'Assessoria e Consultoria Científica',
  data: [
    {
      title: 'Aos estudantes e acadêmicos:',
      lottieAnimationFile: '/lottie/skills/working.json',
      skills: [
        emoji('🧬 Simplificação de conceitos científicos complexos.'),
        emoji('🧬 Materiais para projetos e metodologias científicas.'),
        emoji('🧬 Da teoria à prática com exemplos aplicados.'),
        emoji('🧬 Auxílio na transição acadêmica para o corporativo.'),
        emoji('🧬 Mentorias individuais e para equipes.'),
        emoji('🧬 Workshops e palestras sobre ciência e projetos de pesquisa.'),
        emoji('🧬 Análise e apresentação de materiais científicos densos.'),
        emoji('🧬 Estudos de caso e desafios interativos.'),
        emoji('🧬 Aulas e monitoria em temas especializados.'),
        emoji('🧬 Experiência em diferentes áreas das ciências biológicas.'),
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
    role: 'Consultora Científica de PD&I',
    company: 'Gröwnt',
    companyLogo: '/img/icons/common/gtgroup_logo.png',
    date: 'Dez 2023 - Atualmente',
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
    role: 'Consultora Científica de PD&I',
    company: 'Gröwnt',
    companyLogo: '/img/icons/common/gtgroup_logo.png',
    date: 'Dez 2023 - Atualmente',
    desc: 'Atuo na coleta de dados em reuniões técnicas, identificação de projetos científicos, elaboração de textos técnicos e organização de projetos inovadores, promovendo soluções com base em pesquisa e desenvolvimento.',
  },
  {
    role: 'Consultora Científica de PD&I',
    company: 'Gröwnt',
    companyLogo: '/img/icons/common/gtgroup_logo.png',
    date: 'Dez 2023 - Atualmente',
    desc: 'Atuo na coleta de dados em reuniões técnicas, identificação de projetos científicos, elaboração de textos técnicos e organização de projetos inovadores, promovendo soluções com base em pesquisa e desenvolvimento.',
  },
  {
    role: 'Consultora Científica de PD&I',
    company: 'Gröwnt',
    companyLogo: '/img/icons/common/ffiocruz_logo.png',
    date: 'Dez 2023 - Atualmente',
    desc: 'Atuo na coleta de dados em reuniões técnicas, identificação de projetos científicos, elaboração de textos técnicos e organização de projetos inovadores, promovendo soluções com base em pesquisa e desenvolvimento.',
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
    name: 'Bruno Silva',
    feedback:
      'Sempre muito habilidosa, focada e organizada. Visualizei as competências na área acadêmica e profissional.',
  },
  {
    name: 'Vanessa Gonçalves',
    feedback: 'Sempre focada nas entregas e comprometida com o resultado.',
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
