import type { ResumeConfig } from './types'

const year = new Date().getFullYear();

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'KADAFI Ben',
    photo: '/images/KADAFI1.jpeg',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Ingénieur logiciel et Développeur full stack',
      en: 'Software Engineer and Full stack Developer',
      es: 'Ingeniero de software y Desarrollador Full stack',
    },
    subtitle: {
      fr: "Je suis Ingénieur logiciel et Développeur full stack spécialisé en Laravel, React et Vue.js, ainsi qu'UX/UI Designer passionné, avec une expertise en Computer Vision. Je conçois des applications modernes, intuitives et centrées sur l'utilisateur. Fort d'une connaissance dans la création d'expériences digitales fluides et performantes, je mets mes compétences techniques et créatives au service des projets de mes clients. Curieux, inventif et toujours à l'affût des dernières tendances technologiques, j'aime relever des défis et proposer des solutions sur mesure. Disponible à distance ou sur site, je m'engage à dynamiser vos projets avec énergie, réactivité et implication.",
      en: "I am a Software Engineer and Full stack Developer specialized in Laravel, React, and Vue.js, as well as a passionate UX/UI Designer with expertise in Computer Vision. I design modern, intuitive, and user-centric applications. With strong knowledge in creating fluid and high-performance digital experiences, I put my technical and creative skills at the service of my clients' projects. Curious, inventive, and always on the lookout for the latest technological trends, I love taking on challenges and proposing tailor-made solutions. Available remotely or on-site, I am committed to boosting your projects with energy, responsiveness, and dedication.",
      es: "Soy ingeniero de software y desarrollador full stack especializado en Laravel, React y Vue.js, así como un apasionado Diseñador UX/UI con experiencia en Visión por Computadora. Diseño aplicaciones modernas, intuitivas y centradas en el usuario. Con un sólido conocimiento en la creación de experiencias digitales fluidas y de alto rendimiento, pongo mis habilidades técnicas y creativas al servicio de los proyectos de mis clientes. Curioso, inventivo y siempre atento a las últimas tendencias tecnológicas, me encanta asumir retos y proponer soluciones a medida. Disponible de forma remota o presencial, me comprometo a impulsar sus proyectos con energía, capacidad de respuesta y dedicación.",
    },
    location: 'Toamasina, Madagascar',
  },

  // ===== SEO =====
  seo: {
    title: 'KADAFI Ben — Ingénieur logiciel et Développeur full stack',
    description: 'Portfolio et CV interactif de KADAFI Ben, Ingénieur logiciel et Développeur full stack spécialisé en Laravel, React, Vue.js et Computer Vision.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['fr', 'en', 'es'],
    labels: { fr: 'FR', en: 'EN', es: 'ES' },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'linkedin', label: 'KADAFI Ben', href: 'https://www.linkedin.com/in/kadafi-ben-0312a3265/' },
    { type: 'github', label: 'k-adafi', href: 'https://github.com/k-adafi' },
    { type: 'email', label: 'kadafiben196@gmail.com' },
    { type: 'phone', label: '+261 34 14 566 79' },
    { type: 'location', label: 'Toamasina, Madagascar' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages', es: 'Idiomas' },
      type: 'languages',
      items: [
        { name: { fr: 'Malagasy', en: 'Malagasy', es: 'Malgache' }, level: { fr: 'Natif', en: 'Native', es: 'Nativo' } },
        { name: { fr: 'Français', en: 'French', es: 'Francés' }, level: { fr: 'Courant', en: 'Fluent', es: 'Fluido' } },
        { name: { fr: 'Anglais', en: 'English', es: 'Inglés' }, level: { fr: 'Intermédiaire', en: 'Intermediate', es: 'Intermedio' } },
      ],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend', es: 'Front-End' },
      type: 'badges',
      items: [
        { name: 'Tailwind CSS', percentage: 90 },
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 90 },
        { name: 'Vue.js', percentage: 80 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'Bootstrap', percentage: 80 },
        { name: 'React', percentage: 70 },
        { name: 'TypeScript', percentage: 65 },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend', es: 'Back-End' },
      type: 'badges',
      items: [
        { name: 'Laravel', percentage: 80 },
        { name: 'PHP', percentage: 80 },
        { name: 'Node.js', percentage: 70 },
        { name: 'MySQL', percentage: 55 },
        { name: 'PostgreSQL', percentage: 55 },
      ],
    },
    {
      title: { fr: 'Mobile & IA', en: 'Mobile & AI', es: 'Móvil e IA' },
      type: 'badges',
      items: [
        { name: 'Java', percentage: 55 },
        { name: 'React Native', percentage: 55 },
        { name: 'Python', percentage: 65 },
        { name: 'TensorFlow', percentage: 60 },
        { name: 'PyTorch', percentage: 60 },
        { name: 'OpenCV', percentage: 70 },
        { name: 'Keras', percentage: 60 },
        { name: 'NumPy', percentage: 65 },
        { name: 'Pandas', percentage: 65 },
        { name: 'Matplotlib', percentage: 65 },
        { name: 'scikit-learn', percentage: 60 },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools', es: 'Herramientas' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Figma' },
        { name: 'Adobe XD' },
        { name: 'Android Studio' },
        { name: 'VS Code' },
        { name: 'PHPStorm' },
        { name: 'Google Colab' },
        { name: 'Kaggle' },
        { name: 'Bitrix24' },
        { name: 'Trello' },
        { name: 'LucidChart' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'dna-fullstack',
      company: { fr: 'DNA Webhosting (temps partiel)', en: 'DNA Webhosting (part-time)', es: 'DNA Webhosting (tiempo parcial)' },
      role: { fr: 'Développeur full stack', en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
      period: { fr: 'Février 2026 — Présent', en: 'February 2026 — Present', es: 'Febrero 2026 al Presente' },
      description: {
        fr: 'Développement d\'applications web modernes et performantes au sein d\'une équipe dynamique.',
        en: 'Development of modern and high-performance web applications within a dynamic team.',
        es: 'Desarrollo de aplicaciones web modernas y de alto rendimiento en un equipo dinámico.',
      },
      techs: ['Laravel', 'React', 'TypeScript', 'MySQL'],
      isHighlighted: true,
    },
    {
      id: 'dna-intern',
      company: { fr: 'DNA Webhosting', en: 'DNA Webhosting', es: 'DNA Webhosting' },
      role: { fr: 'Stagiaire développeur full stack', en: 'Full Stack Developer Intern', es: 'Stagiaire Desarrollador Full Stack' },
      period: { fr: 'Août 2025 — Janvier 2026', en: 'August 2025 — January 2026', es: 'Agosto 2025 a Enero 2026' },
      description: {
        fr: 'Contribution active aux projets de l\'entreprise et montée en compétences sur Laravel et React.',
        en: 'Active contribution to company projects and skill development in Laravel and React.',
        es: 'Contribución activa a los proyectos de la empresa y desarrollo de habilidades en Laravel y React.',
      },
      techs: ['PHP', 'Laravel', 'JavaScript'],
    },
    {
      id: 'mission-mada',
      company: { fr: 'Mission Madagascar', en: 'Mission Madagascar', es: 'Misión Madagascar' },
      role: { fr: 'Freelance développeur en temps partiel', en: 'Part-time Freelance Developer', es: 'Desarrollador Freelance a tiempo parcial' },
      period: { fr: 'Janvier 2025 — Décembre 2025', en: 'January 2025 — December 2025', es: 'Enero 2025 al Diciembre 2025' },
      description: {
        fr: 'Conception et réalisation de solutions web sur mesure pour divers besoins clients.',
        en: 'Design and implementation of custom web solutions for various client needs.',
        es: 'Diseño e implementación de soluciones web personalizadas para diversas necesidades de clientes.',
      },
      techs: ['React js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    },
    {
      id: 'immo-mada',
      company: { fr: 'Agence IMMO MADA Océa Toamasina', en: 'IMMO MADA Océa Agency Toamasina', es: 'Agencia IMMO MADA Océa Toamasina' },
      role: { fr: 'Lead Développeur', en: 'Lead Developer', es: 'Desarrollador Principal' },
      period: { fr: 'Avril — Juin 2025', en: 'April — June 2025', es: 'Abril a Junio 2025' },
      description: {
        fr: 'Développement d\'un site web complet pour la gestion des biens et services immobiliers.',
        en: 'Development of a complete website for managing real estate properties and services.',
        es: 'Desarrollo de un sitio web completo para la gestión de propiedades y servicios inmobiliarios.',
      },
      techs: ['React', 'Bootstrap', 'Node.js', 'MySQL'],
    },
    {
      id: 'formateur',
      company: { fr: 'Centre de Formation Le Cercle Toamasina', en: 'Le Cercle Training Center Toamasina', es: 'Centro de Formación Le Cercle Toamasina' },
      role: { fr: 'Formateur en informatique bureautique', en: 'Office IT Trainer', es: 'Formador en Informática de Oficina' },
      period: { fr: 'Mars 2024 — Janvier 2025', en: 'March 2024 — January 2025', es: 'Marzo 2024 – Enero 2025' },
      description: {
        fr: 'Formation pédagogique des étudiants aux outils de bureautique Microsoft Office.',
        en: 'Educational training for students on Microsoft Office automation tools.',
        es: 'Capacitación pedagógica de los estudiantes en herramientas de ofimática de Microsoft Office.',
      },
      techs: ['Word', 'Excel', 'PowerPoint'],
    },
    {
      id: 'jirama',
      company: { fr: 'JIRAMA (DSI)', en: 'JIRAMA (IT Department)', es: 'JIRAMA (Departamento TI)' },
      role: { fr: 'Stagiaire développeur', en: 'Intern Developer', es: 'Pasante Desarrollador' },
      period: { fr: 'Janvier — Mai 2024', en: 'January — May 2024', es: 'Enero - Mayo 2024' },
      description: {
        fr: 'Développement d\'une API REST et d\'une application web dédiée à la gestion du recrutement.',
        en: 'Development of a REST API and a web application dedicated to recruitment management.',
        es: 'Desarrollo de una API REST y una aplicación web dedicada a la gestión de reclutamiento.',
      },
      techs: ['REST', 'PHP', 'JavaScript'],
    },
  ],

  // ===== ASSOCIATION ENGAGEMENT =====
  experiences_association: [],

  // ===== EDUCATION & CERTIFICATIONS =====
  education: [
    {
      school: { fr: 'Université de Toamasina', en: 'University of Toamasina', es: 'Universidad de Toamasina' },
      degree: { fr: 'Master II en informatique imageries et Interactions', en: 'Master II in Computer Science, Imaging and Interactions', es: 'Máster II en Informática de Imágenes e Interacciones' },
      period: '2026',
    },
    {
      school: { fr: 'Université de Toamasina', en: 'University of Toamasina', es: 'Universidad de Toamasina' },
      degree: { fr: 'Licence en Mathématiques informatiques et Application', en: 'Bachelor\'s Degree in Computer Mathematics and Application', es: 'Licenciatura en Matemáticas Informáticas y Aplicadas' },
      period: '2023',
    },
    {
      school: { fr: 'Lycée Mananara Nord', en: 'Lycée Mananara Nord', es: 'Lycée Mananara Nord' },
      degree: { fr: 'Baccalauréat de l’enseignement secondaire', en: 'High School Diploma', es: 'Bachillerato de escuela secundaria' },
      period: '2019',
    },
  ],

  certifications: [
    {
      school: { fr: 'Orange Digital Center Madagascar', en: 'Orange Digital Center Madagascar', es: 'Orange Digital Center Madagascar' },
      degree: { fr: 'Formation en Vision par Ordinateur et modélisation IA', en: 'Computer Vision and AI Modeling Training', es: 'Capacitación en Visión Artificial y modelado de IA' },
      period: 'Juin 2025',
    },
    {
      school: { fr: 'Coursera (via Better Tomorrow Global)', en: 'Coursera (via Better Tomorrow Global)', es: 'Coursera (vía Better Tomorrow Global)' },
      degree: { fr: 'Business Analysis & Process Management', en: 'Business Analysis & Process Management', es: 'Business Analysis & Process Management' },
      period: '2025',
    },
    {
      school: { fr: 'ONG JADE Madagascar', en: 'JADE NGO Madagascar', es: 'ONG JADE Madagascar' },
      degree: { fr: 'Attestation de Reconnaissance en Vision par Ordinateur', en: 'Recognition Certificate in Computer Vision', es: 'Certificado de Reconocimiento en Visión Artificial' },
      period: '2025',
    },
    {
      school: { fr: 'Maison de l\'entrepreneuriat', en: 'Entrepreneurship House', es: 'Casa del Emprendimiento' },
      degree: { fr: 'Hackathon — Initiation à l\'Entrepreneuriat', en: 'Hackathon — Introduction to Entrepreneurship', es: 'Hackathon — Iniciación al Emprendimiento' },
      period: '2025',
    },
    {
      school: { fr: 'Madagascar Initiatives for Digital Innovation', en: 'Madagascar Initiatives for Digital Innovation', es: 'Madagascar Initiatives for Digital Innovation' },
      degree: { fr: 'Open Data au cœur d\'un plaidoyer efficace', en: 'Open Data at the heart of effective advocacy', es: 'Open Data en el corazón de una defensa eficaz' },
      period: 'Septembre 2023',
    },
    {
      school: { fr: 'Orange Digital Center Madagascar', en: 'Orange Digital Center Madagascar', es: 'Orange Digital Center Madagascar' },
      degree: { fr: 'Formation en UX/UI Design', en: 'UX/UI Design Training', es: 'Capacitación en Diseño UX/UI' },
      period: 'Avril 2023',
    },
    {
      school: { fr: 'Coursera', en: 'Coursera', es: 'Coursera' },
      degree: { fr: 'Object-Oriented Programming with Java', en: 'Object-Oriented Programming with Java', es: 'Object-Oriented Programming with Java' },
      period: '2023',
    },
    {
      school: { fr: 'RARY ARO MADA', en: 'RARY ARO MADA', es: 'RARY ARO MADA' },
      degree: { fr: 'Certificat Master Class', en: 'Master Class Certificate', es: 'Certificado Master Class' },
      period: '2022',
    },
    {
      school: { fr: 'Club Droits de l\'Homme', en: 'Human Rights Club', es: 'Club de Derechos Humanos' },
      degree: { fr: 'Certificat de Reconnaissance', en: 'Recognition Certificate', es: 'Certificado de Reconocimiento' },
      period: '2021',
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'immo-mada-web',
      title: { fr: "Site web de l'agence IMMO Mada Océa (terminé)", en: 'IMMO Mada Océa Agency Website (finished)', es: 'Sitio web de la agencia IMMO Mada Océa (terminado)' },
      description: {
        fr: "Un site web moderne et interactif pour l'agence IMMO Mada Océa à Toamasina, avec gestion des biens et services.",
        en: 'A modern and interactive website for the IMMO Mada Océa agency in Toamasina, with property and service management.',
        es: 'Un sitio web moderno e interactivo para la agencia IMMO Mada Océa en Toamasina, con gestión de propiedades y servicios.',
      },
      techs: ['React js', 'Laravel', 'MySQL', 'Bootstrap'],
      url: 'https://agenceimmomadaocea.com/',
      images: ['/images/immo.png'],
    },
    {
      id: 'mydetector',
      title: { fr: 'My Detector (terminé)', en: 'My Detector (finished)', es: 'My Detector (terminado)' },
      description: {
        fr: 'My DETECTOR est une application de détection et suivi d’objets en temps réel transforme la caméra de votre smartphone en un véritable outil intelligent.',
        en: 'My DETECTOR is a real-time object detection and tracking application that transforms your smartphone camera into a true intelligent tool.',
        es: 'My DETECTOR es una aplicación de detección y seguimiento de objetos en tiempo real que transforma la cámara de su teléfono inteligente en una verdadera herramienta inteligente.',
      },
      techs: ['Java', 'Python', 'TensorFlow', 'PyTorch', 'YOLOv11'],
      github: 'https://github.com/k-adafi',
      images: ['/images/my_detector1.jpg'],
    },
    {
      id: 'ianatra',
      title: { fr: 'Ianatra AI (en cours)', en: 'Ianatra AI (in progress)', es: 'Ianatra AI (en progreso)' },
      description: {
        fr: "Projet personnel: Application de chatbot AI pour l'éduction secondaire (Lycée et collège).",
        en: 'Personal project: AI chatbot application for secondary education (High school and middle school).',
        es: 'Proyecto personal: Aplicación de chatbot de IA para educación secundaria (Secundaria y preparatoria).',
      },
      techs: ['Vue.js', 'Tailwind CSS', 'Firebase'],
      url: 'https://ianatraaifront.vercel.app/',
      images: ['/images/ianatra.png'],
    },
    {
      id: 'vente',
      title: { fr: 'Application web de vente (en cours)', en: 'Sales Web Application (in progress)', es: 'Aplicación web de ventas (en progreso)' },
      description: {
        fr: "Projet personnel et sur la création de l'application web.",
        en: 'Personal project on the creation of a web application.',
        es: 'Proyecto personal sobre la creación de una aplicación web.',
      },
      techs: ['Vue.js', 'Tailwind CSS', 'Laravel', 'MySQL'],
      url: 'https://gestionmagasin.vercel.app/',
    },
    {
      id: 'educ',
      title: { fr: "Interface web pour une site d'éducation (en cours)", en: 'Web Interface for an Education Site (in progress)', es: 'Interfaz web para un sitio de educación (en progreso)' },
      description: {
        fr: "Projet personnel et académique sur la création de plateforme web pour l'éducation secondaire.",
        en: 'Personal and academic project on the creation of a web platform for secondary education.',
        es: 'Proyecto personal y académico sobre la creación de una plataforma web para la educación secundaria.',
      },
      techs: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
      url: 'https://educsecondaire.vercel.app/',
      images: ['/images/educ.png'],
    },
    {
      id: 'peace-mobile',
      title: { fr: 'Design application PeaceMobile (terminé)', en: 'PeaceMobile App Design (finished)', es: 'Diseño de la aplicación PeaceMobile (terminado)' },
      description: {
        fr: 'Design de l\'application mobile pour vulgariser les notions de droits et de dignité humaine.',
        en: 'Mobile app design to popularize the concepts of human rights and dignity.',
        es: 'Diseño de aplicación móvil para popularizar los conceptos de derechos humanos y dignidad.',
      },
      techs: ['Figma', 'Adobe XD'],
      url: 'https://xd.adobe.com/view/61aa449f-a18c-4245-b3d4-3d58cb40bf5b-34f9/?fullscreen',
      images: ['/images/peace.png'],
    },
    {
      id: 'jireh',
      title: { fr: 'JirehApk - Application de gestion de clientèle (en terminé)', en: 'JirehApk - Customer Management App (finished)', es: 'JirehApk - App de Gestión de Clientes (terminado)' },
      description: {
        fr: "Application de bureau conçue pour gérer la clientèle de l'entreprise Jireh Students.",
        en: 'Desktop application designed to manage the customer base of the Jireh Students company.',
        es: 'Aplicación de escritorio diseñada para gestionar la base de clientes de la empresa Jireh Students.',
      },
      techs: ['Java', 'MySQL'],
      github: 'https://github.com/k-adafi/GestionApp',
    },
  ],

  // ===== HOBBIES =====
  hobbies: [
    { title: { fr: 'Jeux vidéos', en: 'Video Games', es: 'Juegos de video' } },
    { title: { fr: 'Musique', en: 'Music', es: 'Música' } },
    { title: { fr: 'Voyages', en: 'Travels', es: 'Viajes' } },
    { title: { fr: 'Veille technologique', en: 'Tech Watching', es: 'Vigilancia tecnológica' } },
  ],

  // ===== THEME =====
  theme: {
    preset: 'minimal',
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT', es: 'CONTACTO' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS', es: 'HABILIDADES' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE', es: 'EXPERIENCIA PROFESIONAL' },
      education: { fr: 'FORMATION ACADÉMIQUE', en: 'ACADEMIC EDUCATION', es: 'FORMACIÓN ACADÉMICA' },
      certifications: { fr: 'CERTIFICATIONS PROFESSIONNELLES', en: 'PROFESSIONAL CERTIFICATIONS', es: 'CERTIFICACIONES PROFESIONALES' },
      projects: { fr: 'PROJETS', en: 'PROJECTS', es: 'PROYECTOS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES', es: 'AFICIONES' },
      experiences_association: { fr: 'ENGAGEMENT ASSOCIATIF', en: 'ASSOCIATION ENGAGEMENT', es: 'COMPROMISO ASOCIATIVO' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:', es: 'Misiones principales:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...', es: 'otras misiones...' },
      training: { fr: 'Formations :', en: 'Training:', es: 'Capacitación:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:', es: 'Entorno técnico:' },
      technologies: { fr: 'Technologies', en: 'Technologies', es: 'Tecnologías' },
    },
    actions: {
      clickHint: {
        fr: `© ${year} Kadafi.Ben. Tous droits réservés.`,
        en: `© ${year} Kadafi.Ben. All rights reserved.`,
        es: `© ${year} Kadafi.Ben. Todos los derechos reservados.`,
      },
      switchTheme: { fr: 'Changer le thème', en: 'Toggle dark mode', es: 'Cambiar tema' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF', es: 'Descargar PDF' },
    },
  },
}
