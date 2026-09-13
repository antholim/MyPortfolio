export interface Certification {
  title: string;
  issuer?: string;
  year?: string;
  completed?: boolean;
  description: string;
  description_fr?: string;
  description_es?: string;
  link: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Docker for the Absolute Beginner: Hands On",
    issuer: "Udemy",
    year: "2024",
    completed: true,
    description:
      "Fundamentals of Docker: commands, building images with Dockerfiles, and using Docker Compose to orchestrate application stacks.",
    description_fr:
      "Fondamentaux de Docker : commandes, création d'images avec Dockerfile, et utilisation de Docker Compose pour orchestrer des stacks applicatives.",
    description_es:
      "Fundamentos de Docker: comandos, creación de imágenes con Dockerfile y uso de Docker Compose para orquestar stacks de aplicaciones.",
    link: "https://udemy.com/certificate/UC-839af642-4c06-437b-8b1b-535278dc20dd/",
  },
  {
    title: "Spring Boot 3, Spring Framework 6: Beginner to Guru",
    issuer: "Udemy",
    completed: false,
    description:
      "Building RESTful APIs with Spring (MVC, WebFlux, WebFlux.fn), securing them with OAuth 2.0 and JWT, and persisting data with JPA, MongoDB and MySQL.",
    description_fr:
      "Création d'API RESTful avec Spring (MVC, WebFlux, WebFlux.fn), sécurisation OAuth 2.0 / JWT, persistance avec JPA, MongoDB et MySQL.",
    description_es:
      "Creación de API RESTful con Spring (MVC, WebFlux, WebFlux.fn), seguridad con OAuth 2.0 y JWT, persistencia con JPA, MongoDB y MySQL.",
    link: "https://www.udemy.com/course/spring-framework-6-beginner-to-guru/",
  },
];
