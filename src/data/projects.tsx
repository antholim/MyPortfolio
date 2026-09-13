export interface Project {
  title: string;
  description: string;
  description_fr?: string;
  description_es?: string;
  stack?: string[];
  award?: string;
  award_fr?: string;
  award_es?: string;
  link: string;
  youtube_link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Real Estate Management Platform",
    description:
      "Property management platform with a dynamic data dashboard built with Spring Boot and React. Apache Pulsar handles event-driven communication for tenant and lease processing.",
    description_fr:
      "Plateforme de gestion immobilière avec tableau de bord dynamique en Spring Boot et React. Apache Pulsar gère la communication événementielle pour le traitement des locataires et des baux.",
    description_es:
      "Plataforma de gestión inmobiliaria con un panel dinámico construida con Spring Boot y React. Apache Pulsar gestiona la comunicación basada en eventos.",
    stack: ["Java", "Spring Boot", "React", "Docker", "PostgreSQL", "Pulsar"],
    link: "https://github.com/antholim",
  },
  {
    title: "AquaScan: AI Fishing Assistant",
    description:
      "React Native mobile app promoting sustainable fishing by identifying fish species via image recognition and verifying provincial regulations scraped from government sources.",
    description_fr:
      "Application React Native pour la pêche durable : identification d'espèces par reconnaissance d'image et vérification des réglementations provinciales extraites de sites gouvernementaux.",
    description_es:
      "Aplicación móvil React Native para pesca sostenible: identifica especies de peces por reconocimiento de imagen y verifica regulaciones provinciales.",
    stack: ["React Native", "AI / Image Recognition", "Web Scraping"],
    award: "PolyHacks 2025 Winner",
    award_fr: "PolyHacks 2025 Gagnant",
    award_es: "PolyHacks 2025 Ganador",
    link: "https://github.com/antholim",
  },
  {
    title: "AI Tools for Education",
    description:
      "Suite of AI tools (PowerPoint hand-gesture control, secure CAPTCHA, and a gesture drawing tool) built with TensorFlow gesture recognition models for cybersecurity and education.",
    description_fr:
      "Suite d'outils IA (contrôle de PowerPoint par gestes, CAPTCHA sécurisé et outil de dessin gestuel) basés sur des modèles de reconnaissance de gestes TensorFlow.",
    description_es:
      "Conjunto de herramientas con IA (control de PowerPoint por gestos, CAPTCHA seguro y herramienta de dibujo) usando modelos de reconocimiento de gestos en TensorFlow.",
    stack: ["TensorFlow", "Pandas", "Python"],
    award: "JACHacks 2024 Best AI Project for Education",
    award_fr: "JACHacks 2024 Meilleur projet IA pour l'éducation",
    award_es: "JACHacks 2024 Mejor Proyecto de IA para Educación",
    link: "https://github.com/antholim",
  },
  {
    title: "Monster Mini Game",
    description:
      "A monster survival game built for the Program Development in GUI course. The player controls a skeleton character, aiming to survive as many rounds as possible.",
    description_fr:
      "Un jeu de survie de monstres construit pour le cours de développement de programmes en GUI. Le joueur contrôle un personnage squelette, visant à survivre le plus longtemps possible.",
    description_es:
      "Un juego de supervivencia de monstruos construido para el curso de desarrollo de programas en GUI. El jugador controla un personaje esqueleto.",
    stack: ["Java", "JavaFX"],
    link: "https://github.com/antholim/Monster-Mini-Game",
    youtube_link: "https://youtu.be/8UTNXmwoD44",
  },
  {
    title: "Crossword Mini Game",
    description:
      "An interactive crossword puzzle application built for the Program Development in GUI course using JavaFX with an MVC structure.",
    description_fr:
      "Une application interactive de mots croisés construite avec JavaFX et une structure MVC.",
    description_es:
      "Una aplicación interactiva de crucigramas construida con JavaFX usando una estructura MVC.",
    stack: ["Java", "JavaFX", "MVC"],
    link: "https://github.com/antholim/Crossword-Mini-Game",
    youtube_link: "https://youtu.be/4fvpwskEVgA",
  },
  {
    title: "Cipher Steganography Cracker",
    description:
      "A cryptography program developed for the Object-Oriented Programming and Data Structures and Algorithms course. Thoroughly tested with over 70 unit tests.",
    description_fr:
      "Un programme de cryptographie développé pour le cours de POO et de structures de données. Rigoureusement testé avec plus de 70 tests unitaires.",
    description_es:
      "Un programa de criptografía desarrollado para el curso de POO y estructuras de datos. Probado con más de 70 pruebas unitarias.",
    stack: ["Java", "JUnit"],
    link: "https://github.com/antholim/Cipher-Stegano-Project",
  },
  {
    title: "MERN Trading Platform",
    description:
      "Full-stack trading simulation platform with real-time market data, built on the MERN stack.",
    description_fr:
      "Plateforme de simulation de trading full-stack avec données de marché en temps réel, basée sur la stack MERN.",
    description_es:
      "Plataforma full-stack de simulación de trading con datos de mercado en tiempo real, basada en la stack MERN.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/antholim",
  },
];
