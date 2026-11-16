import type { ResumeConfig } from './types'

const year = new Date().getFullYear()

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'KADAFI Ben',
    photo: '/images/KADAFI1.jpeg',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Développeur Full-Stack TypeScript',
      en: 'Full-Stack TypeScript Developer',
    },
    subtitle: {
      fr: "Développeur Full-Stack avec plus de 2 ans d'expérience professionnelle sur des applications web et mobiles (Laravel, Vue 3, React, React Native, PostgreSQL), du recueil des besoins à la mise en production. Je travaille au quotidien avec des agents de programmation IA en développement assisté par IA, pas en vibe coding : je cadre, je relis chaque diff et je reste responsable de l'architecture, de la sécurité des accès et de la qualité du code. Expérience concrète en IA et vision par ordinateur acquise en Master d'Informatique. Habitué au travail à distance et asynchrone : tickets, revues de code, reporting écrit.",
      en: "Full-Stack Developer with 2+ years of professional experience building web and mobile applications (Laravel, Vue 3, React, React Native, PostgreSQL), from requirements to production. I work with AI coding agents every day — AI-assisted development, not vibe coding: I frame the work, review every diff and stay accountable for architecture, access security and code quality. Hands-on AI and computer vision experience from a Master's in Computer Science. Used to remote, async collaboration through tickets, code reviews and written reporting.",
    },
    location: 'Toamasina, Madagascar (UTC+3)',
  },

  // ===== SEO =====
  seo: {
    title: 'KADAFI Ben — CV · Développeur Full-Stack TypeScript, React, Laravel',
    description:
      'CV interactif de KADAFI Ben, développeur full-stack (TypeScript, React, Vue 3, Laravel, PostgreSQL / PostGIS, React Native), en développement assisté par IA.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'website', label: 'kadafi-ben.vercel.app', href: 'https://kadafi-ben.vercel.app/' },
    { type: 'linkedin', label: 'kadafi-ben', href: 'https://www.linkedin.com/in/kadafi-ben-0312a3265/' },
    { type: 'github', label: 'k-adafi', href: 'https://github.com/k-adafi' },
    { type: 'email', label: 'kadafiben196@gmail.com' },
    { type: 'phone', label: '+261 34 14 566 79' },
    { type: 'location', label: 'Toamasina, Madagascar · UTC+3' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Malgache', en: 'Malagasy' }, level: { fr: 'Langue maternelle', en: 'Native' } },
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'B2 · professionnel', en: 'B2 · professional' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B2 · professionnel', en: 'B2 · professional' } },
      ],
    },
    {
      title: { fr: 'Langages', en: 'Programming languages' },
      type: 'badges',
      items: [{ name: 'TypeScript' }, { name: 'JavaScript' }, { name: 'PHP' }, { name: 'Python' }, { name: 'Java' }],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'Vue 3' },
        { name: 'Inertia.js' },
        { name: 'Vite' },
        { name: 'TanStack Query' },
        { name: 'Zustand' },
        { name: 'Tailwind CSS' },
        { name: 'Ant Design' },
      ],
    },
    {
      title: { fr: 'Backend & données', en: 'Backend & data' },
      type: 'badges',
      items: [
        { name: 'Laravel' },
        { name: 'NestJS' },
        { name: 'Node.js' },
        { name: 'REST' },
        { name: 'PostgreSQL' },
        { name: 'PostGIS' },
        { name: 'MySQL' },
        { name: 'SQLite' },
        { name: 'Firebase' },
      ],
    },
    {
      title: { fr: 'Mobile & IA', en: 'Mobile & AI' },
      type: 'badges',
      items: [
        { name: 'React Native' },
        { name: 'Android' },
        { name: 'PyTorch' },
        { name: 'TensorFlow Lite' },
        { name: 'YOLOv11' },
        { name: 'OpenCV' },
      ],
    },
    {
      title: { fr: 'Méthode & outils', en: 'Workflow & tools' },
      type: 'badges',
      items: [
        { name: 'AI coding agents' },
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'Spatie Permission' },
        { name: 'n8n' },
        { name: 'Figma' },
        { name: 'Adobe XD' },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'dna-fullstack',
      company: { fr: 'DNA Webhosting · Toamasina', en: 'DNA Webhosting · Toamasina' },
      role: { fr: 'Développeur Full-Stack', en: 'Full-Stack Developer' },
      period: { fr: 'Févr. 2026 — Présent', en: 'Feb 2026 — Present' },
      description: {
        fr: "Développement d'AfroJourney (plateforme TourismTech web & mobile) et pilotage du site institutionnel et du CMS multilingue de l'entreprise.",
        en: "Building AfroJourney (web & mobile TourismTech platform) and leading the company's multilingual corporate website and CMS.",
      },
      techs: ['TypeScript', 'React', 'React Native', 'NestJS', 'Vue 3', 'Inertia.js', 'Laravel', 'PostgreSQL', 'PostGIS'],
      isHighlighted: true,
      details: {
        context: {
          fr: "Équipe de développement d'une agence web et hébergeur malgache ; projets clients et produits internes.",
          en: 'Development team of a Malagasy web agency and hosting provider; client projects and in-house products.',
        },
        tasks: {
          fr: [
            "AfroJourney : application mobile (React Native) et web (React) avec TanStack Query et Zustand, API NestJS ; requêtes géospatiales PostgreSQL / PostGIS pour la carte interactive.",
            "Pilotage du site institutionnel et du CMS multilingue (Laravel, Inertia.js, Vue 3, Tailwind CSS), avec des composants Vue réutilisables : DataTable à colonnes fixes, éditeur TinyMCE, thèmes.",
            "Mise en place du contrôle d'accès par rôles (Spatie Permission) sur toute l'administration.",
            'Revues de code et audits qualité : doublons, requêtes N+1 et conflits de logique métier corrigés avant livraison.',
            'Développement assisté par IA avec un agent de programmation : cadrage, plan, relecture de chaque diff, vérification.',
          ],
          en: [
            'AfroJourney: mobile (React Native) and web (React) apps with TanStack Query and Zustand, NestJS API; PostgreSQL / PostGIS geospatial queries for the interactive map.',
            "Led the multilingual corporate website and CMS (Laravel, Inertia.js, Vue 3, Tailwind CSS), including reusable Vue components: sticky-column DataTable, TinyMCE editor, theming.",
            'Implemented role-based access control with Spatie Permission across the whole admin area.',
            'Ran code reviews and quality audits, fixing duplicate data, N+1 queries and business-logic conflicts before release.',
            'AI-assisted development with a coding agent: framing, planning, reviewing every diff, verifying.',
          ],
        },
        env: {
          fr: 'TypeScript, React, React Native, TanStack Query, Zustand, NestJS, Vue 3, Inertia.js, Laravel, PostgreSQL / PostGIS, MySQL, Tailwind CSS, Git',
          en: 'TypeScript, React, React Native, TanStack Query, Zustand, NestJS, Vue 3, Inertia.js, Laravel, PostgreSQL / PostGIS, MySQL, Tailwind CSS, Git',
        },
      },
    },
    {
      id: 'dna-intern',
      company: { fr: 'DNA Webhosting · Toamasina', en: 'DNA Webhosting · Toamasina' },
      role: { fr: 'Stagiaire R&D Full-Stack', en: 'R&D Full-Stack Developer Intern' },
      period: { fr: 'Août 2025 — Janv. 2026', en: 'Aug 2025 — Jan 2026' },
      description: {
        fr: 'Mémoire de Master en vision par ordinateur embarquée et développement de la plateforme Ranovao 1.0.',
        en: "Master's thesis on on-device computer vision and development of the Ranovao 1.0 platform.",
      },
      techs: ['Laravel', 'Vue 3', 'TypeScript', 'MySQL', 'Python', 'TensorFlow Lite', 'YOLOv11'],
      details: {
        context: {
          fr: 'Stage de fin de Master au sein de la cellule R&D.',
          en: "Final Master's internship in the R&D unit.",
        },
        tasks: {
          fr: [
            'Mémoire de Master : détection et suivi d’objets en temps réel sur mobile (YOLOv11 + MobileNetV3-Small + DeepSORT), inférence TensorFlow Lite dans une app Android.',
            'Fiabilisation d’un pipeline de données associant modèles IA, flux vidéo et API ; débogage d’un import Excel Laravel multi-entités.',
            'Développement de Ranovao 1.0, application de gestion de la production et de la distribution d’eau (Vue.js, TypeScript, Laravel, MySQL).',
          ],
          en: [
            "Master's thesis: real-time mobile object detection and tracking (YOLOv11 + MobileNetV3-Small + DeepSORT) with TensorFlow Lite inference inside an Android app.",
            'Hardened a data pipeline combining AI models, video streams and APIs; debugged a multi-entity Laravel Excel import.',
            'Built Ranovao 1.0, a water production and distribution management app (Vue.js, TypeScript, Laravel, MySQL).',
          ],
        },
        env: {
          fr: 'Laravel, Vue.js, TypeScript, MySQL, Python, PyTorch, TensorFlow Lite, Java (Android)',
          en: 'Laravel, Vue.js, TypeScript, MySQL, Python, PyTorch, TensorFlow Lite, Java (Android)',
        },
      },
    },
    {
      id: 'mission-mada',
      company: { fr: 'Mission Madagascar · à distance', en: 'Mission Madagascar · remote' },
      role: { fr: 'Développeur Full-Stack Freelance', en: 'Freelance Full-Stack Developer' },
      period: { fr: 'Janv. 2025 — Déc. 2025', en: 'Jan 2025 — Dec 2025' },
      description: {
        fr: 'Projets web pour plusieurs clients en parallèle, du recueil des besoins au déploiement, avec contact direct et reporting régulier.',
        en: 'Delivered web projects for several clients in parallel, from requirements to deployment, with direct client communication and regular reporting.',
      },
      techs: ['React', 'Laravel', 'MySQL', 'Bootstrap'],
      subItem: {
        title: { fr: 'IMMO Mada Océa — Lead développeur', en: 'IMMO Mada Océa — Lead developer' },
        description: {
          fr: 'Site de l’agence immobilière, en ligne sur agenceimmomadaocea.com (React, Laravel, MySQL).',
          en: 'Real-estate agency website, live at agenceimmomadaocea.com (React, Laravel, MySQL).',
        },
      },
    },
    {
      id: 'formateur',
      company: { fr: 'Centre Le Cercle · Toamasina', en: 'Le Cercle Training Centre · Toamasina' },
      role: { fr: 'Formateur en informatique bureautique', en: 'Office IT Trainer' },
      period: { fr: 'Mai 2024 — Déc. 2024', en: 'May 2024 — Dec 2024' },
      description: {
        fr: 'Formation d’apprenants aux outils bureautiques.',
        en: 'Taught office software to adult learners.',
      },
      techs: [],
    },
    {
      id: 'jirama',
      company: { fr: 'DSI JIRAMA · Antananarivo', en: 'JIRAMA IT Department · Antananarivo' },
      role: { fr: 'Stagiaire Développeur', en: 'Developer Intern' },
      period: { fr: 'Févr. 2024 — Avr. 2024', en: 'Feb 2024 — Apr 2024' },
      description: {
        fr: 'API REST et application web de gestion du recrutement.',
        en: 'Built a REST API and its web client for recruitment management.',
      },
      techs: ['PHP', 'JavaScript', 'MySQL'],
    },
  ],

  // ===== ASSOCIATION ENGAGEMENT =====
  experiences_association: [
    {
      id: 'yestafita',
      company: { fr: 'YES-TaFiTa · Toamasina', en: 'YES-TaFiTa · Toamasina' },
      role: { fr: 'Coordination de projets associatifs', en: 'Community project coordination' },
      period: { fr: 'Depuis 2020', en: 'Since 2020' },
      description: {
        fr: "Association de jeunes. En 2026 : conception et développement bénévole du site web et de l'espace collaboratif de l'association.",
        en: "Youth association. In 2026: designed and built the association's website and collaborative workspace as a volunteer.",
      },
      techs: [],
    },
  ],

  // ===== EDUCATION & CERTIFICATIONS =====
  education: [
    {
      school: { fr: 'Université de Toamasina', en: 'University of Toamasina' },
      degree: {
        fr: 'Master en Mathématiques, Informatique et Applications',
        en: "Master's in Mathematics, Computer Science & Applications",
      },
      specialty: { fr: 'Imagerie et Interactions', en: 'Imaging & Interactions' },
      period: '2024 – 2026',
    },
    {
      school: { fr: 'Université de Toamasina', en: 'University of Toamasina' },
      degree: {
        fr: 'Licence en Mathématiques, Informatique et Applications',
        en: "Bachelor's in Mathematics, Computer Science & Applications",
      },
      period: '2020 – 2023',
    },
  ],

  certifications: [
    {
      school: { fr: 'Coursera', en: 'Coursera' },
      degree: { fr: 'Business Analysis & Process Management', en: 'Business Analysis & Process Management' },
      period: '2026',
    },
    {
      school: { fr: 'Orange Digital Center', en: 'Orange Digital Center' },
      degree: { fr: 'Vision par ordinateur', en: 'Computer Vision' },
      period: '2025',
    },
    {
      school: { fr: 'Better Tomorrow Global', en: 'Better Tomorrow Global' },
      degree: { fr: 'English Connect Program', en: 'English Connect Program' },
      period: '2025',
    },
    {
      school: { fr: 'Coursera', en: 'Coursera' },
      degree: { fr: 'Programmation orientée objet en Java', en: 'Object-Oriented Programming in Java' },
      period: '2024',
    },
    {
      school: { fr: 'Orange Digital Center', en: 'Orange Digital Center' },
      degree: { fr: 'Design UX/UI', en: 'UX/UI Design' },
      period: '2023',
    },
  ],

  // ===== PROJECTS =====
  projects: [
    {
      id: 'afrojourney',
      title: { fr: 'AfroJourney — plateforme TourismTech (DNA Webhosting)', en: 'AfroJourney — TourismTech platform (DNA Webhosting)' },
      description: {
        fr: 'Application web & mobile pour découvrir Madagascar : carte interactive avec clusters de publications, suivi GPS et de trajets, recherche de lieux, personnes et événements, messagerie. Requêtes géospatiales PostGIS. En développement, code privé.',
        en: 'Web & mobile app to discover Madagascar: interactive map with clustered posts, GPS and trip tracking, search for places, people and events, messaging. PostGIS geospatial queries. In development, private code.',
      },
      techs: ['React Native', 'React', 'TypeScript', 'NestJS', 'TanStack Query', 'Zustand', 'PostgreSQL', 'PostGIS'],
      images: ['/images/afrojourney-web.webp', '/images/afrojourney-mobile.webp'],
    },
    {
      id: 'yestafita-workspace',
      title: { fr: 'YES-TaFiTa — Espace collaboratif', en: 'YES-TaFiTa — Collaborative workspace' },
      description: {
        fr: 'Intranet associatif en 7 modules : rôles et 2FA, GED, projets (Kanban, Gantt, calendrier), circuit budgétaire avec validation, messagerie et visio Jitsi, logistique, formation avec certificats QR.',
        en: 'Seven-module non-profit intranet: roles & 2FA, document management, projects (Kanban, Gantt, calendar), budget approval flow, chat and Jitsi video, logistics, training with QR certificates.',
      },
      techs: ['Vue 3', 'TypeScript', 'Laravel', 'MySQL'],
      url: 'https://yestafita.org/user/login',
      images: ['/images/yestafita-espace.webp'],
    },
    {
      id: 'ranovao',
      title: { fr: 'Ranovao — gestion de l’eau (DNA Webhosting)', en: 'Ranovao — water management (DNA Webhosting)' },
      description: {
        fr: 'Plateforme de production, de gestion et de distribution d’eau : matières premières, production, entrepôt, distribution, statistiques et gestion des accès par rôle. Code privé.',
        en: 'Water production, management and distribution platform: raw materials, production, warehouse, distribution, statistics and role-based access. Private code.',
      },
      techs: ['Vue 3', 'TypeScript', 'Laravel', 'MySQL'],
      images: ['/images/ranovao.webp'],
    },
    {
      id: 'yestafita-site',
      title: { fr: 'YES-TaFiTa — Site web', en: 'YES-TaFiTa — Website' },
      description: {
        fr: "Site institutionnel bilingue FR / EN de l'association (actions, blog, événements), contenu administré depuis l'espace collaboratif.",
        en: "The association's bilingual FR / EN public website (programmes, blog, events), with content managed from the collaborative workspace.",
      },
      techs: ['Vue 3', 'TypeScript', 'Laravel', 'MySQL'],
      url: 'https://yestafita.org/',
      images: ['/images/yestafita-site.webp'],
    },
    {
      id: 'jess-redac',
      title: { fr: 'Jess Rédac — portfolio client', en: 'Jess Rédac — client portfolio' },
      description: {
        fr: 'Site vitrine bilingue de Palmary Jessina, rédactrice web SEO et copywriting : profil, services, réalisations et contact.',
        en: 'Bilingual showcase site for Palmary Jessina, an SEO web writer and copywriter: profile, services, portfolio and contact.',
      },
      techs: ['React', 'TypeScript', 'Laravel', 'MySQL'],
      url: 'https://jess-redac.com/',
      images: ['/images/jess-redac.webp'],
    },
    {
      id: 'immo-mada-web',
      title: { fr: 'IMMO Mada Océa — site d’agence immobilière', en: 'IMMO Mada Océa — real-estate agency website' },
      description: {
        fr: 'Site de l’agence immobilière à Toamasina, avec gestion des biens et services.',
        en: 'Website for the Toamasina real-estate agency, with property and service management.',
      },
      techs: ['React', 'Laravel', 'MySQL', 'Bootstrap'],
      url: 'https://agenceimmomadaocea.com/',
      images: ['/images/immo.png'],
    },
    {
      id: 'mydetector',
      title: { fr: 'My Detector — vision par ordinateur sur Android', en: 'My Detector — computer vision on Android' },
      description: {
        fr: 'Détection et suivi d’objets en temps réel sur smartphones milieu de gamme, inférence embarquée.',
        en: 'Real-time object detection and tracking on mid-range phones, fully on-device.',
      },
      techs: ['Java', 'Android', 'TensorFlow Lite', 'YOLOv11', 'MobileNetV3', 'DeepSORT'],
      images: ['/images/my_detector1.jpg'],
    },
    {
      id: 'ianatra',
      title: { fr: 'Ianatra AI', en: 'Ianatra AI' },
      description: {
        fr: 'Plateforme éducative avec chatbot IA pour le programme scolaire malgache.',
        en: 'Learning platform with an AI chatbot for the Malagasy school curriculum.',
      },
      techs: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      url: 'https://ianatraaifront.vercel.app/',
      images: ['/images/ianatra.png'],
    },
    {
      id: 'educ',
      title: { fr: 'ÉduPro', en: 'ÉduPro' },
      description: {
        fr: 'Plateforme web d’un établissement secondaire avec prise de rendez-vous.',
        en: 'Secondary-school web platform with appointment booking.',
      },
      techs: ['React', 'Laravel', 'MySQL'],
      url: 'https://educsecondaire.vercel.app/',
      images: ['/images/educ.png'],
    },
  ],

  // ===== HOBBIES =====
  hobbies: [
    { title: { fr: 'Veille technologique (IA, outils de dev)', en: 'Tech watch (AI, developer tools)' } },
    { title: { fr: 'Vie associative', en: 'Community work' } },
    { title: { fr: 'Musique', en: 'Music' } },
    { title: { fr: 'Voyages', en: 'Travel' } },
  ],

  // ===== PDF =====
  pdf: {
    path: { fr: '/cv/fr/CV_KADAFI_Ben_FR.pdf', en: '/cv/en/CV_KADAFI_Ben_EN.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'minimal',
    // Teal accent, consistent with the PDF résumé and the portfolio.
    colors: { accent: '#0d9488', accentDark: '#2dd4bf' },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      certifications: { fr: 'CERTIFICATIONS', en: 'CERTIFICATIONS' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: "CENTRES D'INTÉRÊT", en: 'INTERESTS' },
      experiences_association: { fr: 'ENGAGEMENT ASSOCIATIF', en: 'VOLUNTEERING' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: {
        fr: `© ${year} KADAFI Ben · cliquez sur une expérience pour le détail`,
        en: `© ${year} KADAFI Ben · click an experience for details`,
      },
      switchTheme: { fr: 'Changer le thème', en: 'Toggle dark mode' },
      downloadPdf: { fr: 'Télécharger le CV (PDF)', en: 'Download résumé (PDF)' },
    },
  },
}
