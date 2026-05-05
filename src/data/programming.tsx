import { ReactNode } from "react";

export interface Tool {
  name: string;
  icon: ReactNode;
}

export const LANGUAGES: Tool[] = [
  { name: "Java", icon: <i className="devicon-java-plain colored"></i> },
  { name: "Kotlin", icon: <i className="devicon-kotlin-plain colored"></i> },
  { name: "C#", icon: <i className="devicon-csharp-plain colored"></i> },
  { name: "TypeScript", icon: <i className="devicon-typescript-plain colored"></i> },
  { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
  { name: "Python", icon: <i className="devicon-python-plain colored"></i> },
  { name: "HTML", icon: <i className="devicon-html5-plain colored"></i> },
  { name: "CSS", icon: <i className="devicon-css3-plain colored"></i> },
];

export const FRAMEWORKS: Tool[] = [
  { name: "React", icon: <i className="devicon-react-plain colored"></i> },
  { name: "React Native", icon: <i className="devicon-react-plain colored"></i> },
  { name: "Spring Boot", icon: <i className="devicon-spring-plain colored"></i> },
  { name: "Node.js", icon: <i className="devicon-nodejs-plain colored"></i> },
  { name: "Express", icon: <i className="devicon-express-original colored"></i> },
  { name: "Android", icon: <i className="devicon-android-plain colored"></i> },
];

export const DATA_INFRA: Tool[] = [
  { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored"></i> },
  { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
  { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored"></i> },
  { name: "CosmosDB", icon: <i className="devicon-azure-plain colored"></i> },
  { name: "Azure", icon: <i className="devicon-azure-plain colored"></i> },
  { name: "Docker", icon: <i className="devicon-docker-plain colored"></i> },
  { name: "Terraform", icon: <i className="devicon-terraform-plain colored"></i> },
  { name: "Pulsar", icon: <i className="devicon-apache-plain colored"></i> },
];

export const TOOLS: Tool[] = [
  { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
  { name: "GitHub", icon: <i className="devicon-github-original"></i> },
  { name: "GitLab", icon: <i className="devicon-gitlab-plain colored"></i> },
  { name: "Jira", icon: <i className="devicon-jira-plain colored"></i> },
  { name: "Confluence", icon: <i className="devicon-confluence-plain colored"></i> },
  { name: "Playwright", icon: <i className="devicon-playwright-plain colored"></i> },
  { name: "Jest", icon: <i className="devicon-jest-plain colored"></i> },
  { name: "Linux", icon: <i className="devicon-linux-plain colored"></i> },
];

export const KEY_WORDS = {
  english: {
    language: "Languages",
    framework: "Frameworks & Platforms",
    database: "Data & Infra",
    tools: "Tools & Methods",
  },
  french: {
    language: "Langages",
    framework: "Frameworks & Plateformes",
    database: "Données & Infra",
    tools: "Outils & Méthodes",
  },
  spanish: {
    language: "Lenguajes",
    framework: "Frameworks y Plataformas",
    database: "Datos e Infra",
    tools: "Herramientas y Métodos",
  },
};
