export interface Certification {
    title: string;
    completed?: boolean;
    description: string;
    description_fr?: string;
    description_es?: string;
    link: string;
  }
  
  export const CERTIFICATIONS: Certification[] = [
    {
      title: "Docker for the Absolute Beginner - Hands On - DevOps (Completed)",
      completed: true,
      description:
        "Learned the fundamentals of Docker, including its commands, how to build images with Dockerfiles, and use Docker Compose to create application stacks.",
      description_fr:
        "Un jeu de survie de monstres construit pour le cours de développement de programmes en GUI. Le joueur contrôle un personnage squelette, visant à survivre le plus longtemps possible.",
      description_es:
        "Un juego de supervivencia de monstruos construido para el curso de desarrollo de programas en GUI. El jugador controla un personaje esqueleto, con el objetivo de sobrevivir el mayor número de rondas posible.",
      link: "https://concordia.udemy.com/certificate/UC-839af642-4c06-437b-8b1b-535278dc20dd/",
    },
    {
      title: "Spring Boot 3, Spring Framework 6: Beginner to Guru (In progess)",
      description:
        "Learned to develop RESTful APIs using Spring Framework (MVC, WebFlux, and WebFlux.fn), secure them with OAuth 2.0 and JWT, and persist data with JPA, MongoDB and MySQL.",
      description_fr:
        "Appris à développer des API RESTful avec Spring Framework (MVC, WebFlux et WebFlux.fn), à les sécuriser avec OAuth 2.0 et JWT, et à persister les données avec JPA, MongoDB et MySQL.",
      description_es:
        "Aprendí a desarrollar API RESTful utilizando Spring Framework (MVC, WebFlux y WebFlux.fn), a asegurarlas con OAuth 2.0 y JWT, y a persistir datos con JPA, MongoDB y MySQL.",
      link: "https://www.udemy.com/course/spring-framework-6-beginner-to-guru/?srsltid=AfmBOorcpSRhsVGyWrQu_Zy-GvI4lyrCpKDL2wMdV4lAwphhob1ACoP9&couponCode=LEARNNOWPLANS",
    },
    {
      title: "React - The Complete Guide 2025 (incl. Next.js, Redux) (In progess)",
      description:
        "Acquired knowledge of React.js, from fundamentals like components, state management, and hooks to advanced topics like Next.js, React Server Components, and Redux Toolkit.",
      description_fr:
        "Acquis des connaissances sur React.js, des fondamentaux comme les composants, la gestion de l'état et les hooks, jusqu'aux sujets avancés comme Next.js, les composants serveur React et Redux Toolkit.",
      description_es:
        "Adquirí conocimientos sobre React.js, desde fundamentos como componentes, gestión de estado y hooks, hasta temas avanzados como Next.js, Componentes de Servidor React y Redux Toolkit.",
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?srsltid=AfmBOopfe6WojcA9glSD2Szj_SWLxeU81enWrmBfofls9GDbGCED_Usa",
    }
  ];
  