export interface Project {
  title: string;
  description: string;
  description_fr?: string;
  description_es?: string;
  link: string;
  youtube_link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Monster Mini Game",
    description:
      "A monster survival game built for the Program Development in GUI course. The player controls a skeleton character, aiming to survive as many rounds as possible.",
    description_fr:
      "Un jeu de survie de monstres construit pour le cours de développement de programmes en GUI. Le joueur contrôle un personnage squelette, visant à survivre le plus longtemps possible.",
    description_es:
      "Un juego de supervivencia de monstruos construido para el curso de desarrollo de programas en GUI. El jugador controla un personaje esqueleto, con el objetivo de sobrevivir el mayor número de rondas posible.",
    link: "https://github.com/antholim/Monster-Mini-Game",
    youtube_link : "https://youtu.be/8UTNXmwoD44"
  },
  {
    title: "Crossword Mini Game",
    description:
      "An interactive crossword puzzle application built for the Program Development in GUI course using JavaFX with an MVC structure.",
    description_fr:
      "Une application interactive de mots croisés construite pour le cours de développement de programmes en GUI en utilisant JavaFX avec une structure MVC.",
    description_es:
      "Una aplicación interactiva de crucigramas construida para el curso de desarrollo de programas en GUI utilizando JavaFX con una estructura MVC.",
    link: "https://github.com/antholim/Crossword-Mini-Game",
    youtube_link : "https://youtu.be/4fvpwskEVgA"
  },
  {
    title: "Cipher Steganography Cracker",
    description:
      "A cryptography program developed for the Object-Oriented Programming and Data Structures and Algorithms course. Thoroughly tested with over 70 unit tests.",
    description_fr:
      "Un programme de cryptographie développé pour le cours de programmation orientée objet et de structures de données et algorithmes. Rigoureusement testé avec plus de 70 tests unitaires.",
    description_es:
      "Un programa de criptografía desarrollado para el curso de programación orientada a objetos y estructuras de datos y algoritmos. Rigurosamente probado con más de 70 pruebas unitarias.",
    link: "https://github.com/antholim/Cipher-Stegano-Project",
  },
  {
    title: "MERN Full Stack Trading Platform",
    description:
      "Developed a trading simulation platform with real-time market data.",
    description_fr:
      "Développé une plateforme de simulation de trading avec des données de marché en temps réel.",
    description_es:
      "Desarrollé una plataforma de simulación de trading con datos de mercado en tiempo real.",
    link: "",
  },
];
