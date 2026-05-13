import type { ResumeConfig } from './types'

const year = new Date().getFullYear();

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'KADAFI Ben',
    photo: '/images/photo.jpg',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Ingénieur logiciel et Développeur full stack',
      en: 'Software Engineer and Full stack Developer',
    },
    subtitle: {
      fr: "Je suis Ingénieur logiciel et Développeur full stack spécialisé en Laravel, React et Vue.js, ainsi qu'UX/UI Designer passionné, avec une expertise en Computer Vision. Je conçois des applications modernes, intuitives et centrées sur l'utilisateur.",
      en: "I am a Software Engineer and Full stack Developer specializing in Laravel, React, and Vue.js, as well as a passionate UX/UI Designer with expertise in Computer Vision. I design modern, intuitive, and user-centered applications.",
    },
    location: 'Toamasina, Madagascar',
  },

  seo: {
    title: 'KADAFI Ben — Ingénieur logiciel et Développeur full stack',
    description: 'Portfolio et CV interactif de KADAFI Ben, Ingénieur logiciel et Développeur full stack',
  },

  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  contact: [
    { type: 'linkedin', label: 'KADAFI Ben', href: 'https://www.linkedin.com/in/kadafi-ben-0312a3265/' },
    { type: 'github', label: 'k-adafi', href: 'https://github.com/k-adafi' },
    { type: 'email', label: 'kadafiben196@gmail.com' },
    { type: 'phone', label: '+261 34 14 566 79' },
    { type: 'location', label: 'Toamasina, Madagascar' },
  ],

  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Malagasy : ', en: 'Malagasy : ' }, level: { fr: 'Natif,', en: 'Native,' } },
        { name: { fr: 'Français : ', en: 'French : ' }, level: { fr: 'Courant,', en: 'Fluent,' } },
        { name: { fr: 'Anglais : ', en: 'English : ' }, level: { fr: 'Intermédiaire,', en: 'Intermediate,' } },
      ],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Vue.js' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'Tailwind CSS' },
        { name: 'HTML' },
        { name: 'CSS' },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'Laravel' },
        { name: 'PHP' },
        { name: 'Node.js' },
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      title: { fr: 'Mobile & IA', en: 'Mobile & AI' },
      type: 'badges',
      items: [
        { name: 'Java' },
        { name: 'React Native' },
        { name: 'Python' },
        { name: 'TensorFlow' },
        { name: 'PyTorch' },
        { name: 'OpenCV' },
        { name: 'Keras' },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Figma' },
        { name: 'Adobe XD' },
        { name: 'Android Studio' },
        { name: 'Visual Studio Code' },
        { name: 'PHPStorm' },
      ],
    },
  ],

  experiences: [
    {
      id: 'dna-fullstack',
      company: { fr: 'DNA Webhosting', en: 'DNA Webhosting' },
      role: { fr: 'Développeur full stack', en: 'Full Stack Developer' },
      period: { fr: 'Février 2026 à aujourd\'hui', en: 'February 2026 to Present' },
      description: {
        fr: 'Développement d\'applications web modernes et performantes.',
        en: 'Development of modern and high-performance web applications.',
      },
      techs: ['Laravel', 'React', 'TypeScript', 'MySQL'],
      isHighlighted: true,
    },
    {
      id: 'dna-intern',
      company: { fr: 'DNA Webhosting', en: 'DNA Webhosting' },
      role: { fr: 'Stagiaire développeur full stack', en: 'Full Stack Developer Intern' },
      period: { fr: 'Août 2025 à Janvier 2026', en: 'August 2025 to January 2026' },
      description: {
        fr: 'Apprentissage et contribution aux projets de l\'entreprise.',
        en: 'Learning and contributing to company projects.',
      },
      techs: ['PHP', 'Laravel', 'JavaScript'],
    },
    {
      id: 'mission-mada',
      company: { fr: 'Mission Madagascar', en: 'Mission Madagascar' },
      role: { fr: 'Freelance développeur en temps partiel', en: 'Part-time Freelance Developer' },
      period: { fr: 'Janvier 2025 à aujourd\'hui', en: 'January 2025 to Present' },
      description: {
        fr: 'Développement de solutions web sur mesure.',
        en: 'Development of custom web solutions.',
      },
      techs: ['React', 'Node.js'],
    },
    {
      id: 'immo-mada',
      company: { fr: 'Agence IMMO MADA Océa Toamasina', en: 'IMMO MADA Océa Agency Toamasina' },
      role: { fr: 'Lead Développeur', en: 'Lead Developer' },
      period: { fr: 'Avril à Juin 2025', en: 'April to June 2025' },
      description: {
        fr: 'Développement de site web de gestion des biens et services immobiliers.',
        en: 'Development of a real estate property and service management website.',
      },
      techs: ['React', 'Bootstrap', 'Node.js', 'MySQL'],
    },
    {
      id: 'formateur',
      company: { fr: 'Centre de Formation Le Cercle Toamasina', en: 'Le Cercle Training Center Toamasina' },
      role: { fr: 'Formateur en informatique bureautique', en: 'Office IT Trainer' },
      period: { fr: 'Mars 2024 – Janvier 2025', en: 'March 2024 – January 2025' },
      description: {
        fr: 'Formation des étudiants aux outils bureautiques.',
        en: 'Training students in office automation tools.',
      },
      techs: ['Microsoft Office (Word, Excel, PowerPoint, Publisher)'],
    },
    {
      id: 'jirama',
      company: { fr: 'JIRAMA (DSI)', en: 'JIRAMA (IT Department)' },
      role: { fr: 'Stagiaire développeur', en: 'Intern Developer' },
      period: { fr: 'Janvier - Mai 2024', en: 'January - May 2024' },
      description: {
        fr: 'Développement d\'une API REST et application web pour la gestion de recrutement.',
        en: 'Development of a REST API and web application for recruitment management.',
      },
      techs: ['REST', 'PHP', 'JavaScript'],
    },
  ],

  experiences_association: [
    {
      id: 'yes-tafita',
      company: { fr: 'Association YES-TaFiTa à Toamasina', en: 'YES-TaFiTa Association in Toamasina' },
      role: { fr: 'Membre de l\'association', en: 'Association Member' },
      period: { fr: 'Janvier 2021 – présent', en: 'January 2021 – Present' },
      description: {
        fr: 'Gestion des ressources humaines et accompagnement des membres de l’association.',
        en: 'Human resources management and support for association members.',
      },
      techs: ['Management', 'Communication', 'Organisation'],
    },
  ],

  education: [
    {
      school: { fr: 'Orange Digital Center Madagascar à Antananarivo', en: 'Orange Digital Center Madagascar in Antananarivo' },
      degree: { fr: 'Formation en Computer Vision et modélisation de l’intelligence artificielle', en: 'Training in Computer Vision and Artificial Intelligence Modeling' },
      period: 'Juin 2025',
    },
    {
      school: { fr: 'Université de Toamasina', en: 'University of Toamasina' },
      degree: { fr: 'Master II en informatique imageries et Interactions', en: 'Master II in Computer Science, Imaging and Interactions' },
      period: '2025',
    },
    {
      school: { fr: 'Université de Toamasina', en: 'University of Toamasina' },
      degree: { fr: 'Licence en Mathématiques informatiques et Application', en: 'Bachelor\'s Degree in Computer Mathematics and Application' },
      period: '2023',
    },
    {
      school: { fr: 'Madagascar Initiatives for Digital à Antananarivo', en: 'Madagascar Initiatives for Digital in Antananarivo' },
      degree: { fr: 'Formation en Open Data au cœur d’un plaidoyer efficace', en: 'Training in Open Data at the heart of effective advocacy' },
      period: 'Septembre 2023',
    },
    {
      school: { fr: 'Orange Digital Center Madagascar à Antananarivo', en: 'Orange Digital Center Madagascar in Antananarivo' },
      degree: { fr: 'Formation en UX/UI Design', en: 'Training in UX/UI Design' },
      period: 'Avril 2023',
    },
    {
      school: { fr: 'Lycée Mananara Nord', en: 'Lycée Mananara Nord' },
      degree: { fr: 'Baccalauréat de l’enseignement secondaire', en: 'High School Diploma' },
      period: '2019',
    },
  ],

  projects: [
    {
      id: 'mydetector',
      title: { fr: 'My Detector', en: 'My Detector' },
      description: {
        fr: 'Application de détection et suivi d\'objets en temps réel via smartphone.',
        en: 'Real-time object detection and tracking application via smartphone.',
      },
      techs: ['Java', 'Python', 'TensorFlow', 'PyTorch'],
    },
    {
      id: 'ianatra',
      title: { fr: 'Ianatra AI', en: 'Ianatra AI' },
      description: {
        fr: 'Chatbot AI pour l\'éducation secondaire.',
        en: 'AI chatbot for secondary education.',
      },
      techs: ['Vue.js', 'Tailwind CSS', 'Firebase'],
    },
    {
      id: 'peace-mobile',
      title: { fr: 'PeaceMobile', en: 'PeaceMobile' },
      description: {
        fr: 'Design d’une application mobile pour vulgariser les notions de droits et de dignité humaine.',
        en: 'Design of a mobile application to popularize concepts of human rights and dignity.',
      },
      techs: ['Figma', 'Adobe XD', 'UI/UX'],
    },
    {
      id: 'vente-app',
      title: { fr: 'Application web de vente', en: 'Sales Web Application' },
      description: {
        fr: 'Projet académique sur la création d’une application web de vente.',
        en: 'Academic project on creating a sales web application.',
      },
      techs: ['Laravel', 'React', 'MySQL'],
    },
  ],

  hobbies: [
    { title: { fr: 'Jeux vidéos', en: 'Video Games' } },
    { title: { fr: 'Musique', en: 'Music' } },
    { title: { fr: 'Voyages', en: 'Travels' } },
  ],

  theme: {
    preset: 'slate',
  },

  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
      experiences_association: { fr: 'Engagement associatif', en: 'Association Engagement' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: {
        fr: `© ${year} Kadafi.Ben. Tous droits réservés.`,
        en: `© ${year} Kadafi.Ben. All rights reserved.`,
      },
      switchTheme: { fr: 'Changer le thème', en: 'Toggle dark mode' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}